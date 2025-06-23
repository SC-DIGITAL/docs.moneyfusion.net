# 💳 Intégration de l’API FusionPay avec C# (.NET)

Ce guide explique étape par étape comment intégrer la passerelle de paiement *Fusion Pay* dans une application ASP.NET Core (backend) et .NET MAUI (mobile frontend).

---

## 🧩 Prérequis

- Un compte Money Fusion vérifié
- Un URL_API_Key fournis par l’équipe MoneyFusion
- .NET 8 installé
- Un projet ASP.NET Core Web API (backend)
- Un projet .NET MAUI (frontend)

---

Prenons l'exemple d'un projet d'une application mobile qui vende des produits digitaux comme des livres numériques.

## 📦 Étape 1: Configuration Backend (.NET API)

1. Créer un fichier de model pour les requêtes(FusionPayModels.cs)
Exemple de code :

namespace MonProjet.Models
{
    //Model pour la requête de paiement FusionPay
    public class FusionPayRequest
    {
        public decimal totalPrice { get; set; }
        public Article[] article { get; set; }
        public PersonalInfo[] personal_Info { get; set; }
        public string numeroSend { get; set; }
        public string nomclient { get; set; }
        public string return_url { get; set; }
        public string webhook_url { get; set; }
    }
    // Model pour les articles dans la requête de paiement FusionPay
    public class Article
    {
        public string nom { get; set; }
        public decimal montant { get; set; }
    }
    // Model pour les informations personnelles dans la requête de paiement FusionPay
    public class PersonalInfo
    {
        public string userId { get; set; }
        public string orderId { get; set; }
    }
    // Model pour la réponse de paiement FusionPay
    public class FusionPayResponse
    {
        public bool statut { get; set; }
        public string token { get; set; }
        public string message { get; set; }
        public string url { get; set; }
    }
    // Model pour le webhook de FusionPay
    public class FusionPayWebhook
    {
        public string @event { get; set; }
        public PersonalInfo[] personal_Info { get; set; }
        public string tokenPay { get; set; }
        public string statut { get; set; }
        public string numeroTransaction { get; set; }
        public decimal Montant { get; set; }
        public decimal frais { get; set; }
        public string moyen { get; set; }
        public DateTime createdAt { get; set; }
    }
}


2. Créer un fichier de model pour les paiements en attente(PendingPayment.cs)
Exemple de code :

using System;
namespace SenbibBackend.Models
{
    public class PendingPayment
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string BookId { get; set; }
        public string UserId { get; set; }
        public string TransactionId { get; set; }
        public string PaymentUrl { get; set; }
        public string PaymentMethod { get; set; } // "FusionPay"
        public decimal Amount { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public bool IsCompleted { get; set; } = false;
    }
}



3. Créer un fichier de Controller pour les Endpoints(PurchaseController.cs)
Exemple de code :

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MonProjet.Data;
using MonProjet.Models;
using System.Data;
using System.Diagnostics;
using System.Security.Claims;
using System.Globalization;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace SenbibBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHttpClientFactory _httpClientFactory;

        public PurchaseController(AppDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }


        // Endpoint d'initiation de paiement avec Fusion Pay
        [HttpPost("initiate/{bookId}")]
        public async Task<IActionResult> InitiateFusionPay(string bookId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userName = User.Identity?.Name ?? "Client";

            if (userId == null)
                return Unauthorized("Client non identifié");

            var book = await _context.Books.FindAsync(bookId);
            if (book == null)
                return NotFound("Livre non trouvé");

            // Vérifie si déjà acheté
            var alreadyPurchased = await _context.PurchasedBooks
                .AnyAsync(pb => pb.UserId == userId && pb.BookId == bookId);

            if (alreadyPurchased)
                return BadRequest("Vous avez déjà acheté ce livre");

            // Construire la requête du paiement
            var payload = new FusionPayRequest
            {
                totalPrice = book.Price,
                article = new[] { new Article { nom = book.Title, montant = book.Price } },
                personal_Info = new[] { new PersonalInfo { userId = userId, orderId = bookId } },
                numeroSend = "01010101", // Numéro de test
                nomclient = userName,


                return_url = "Votre_Url_de_Retour",
                webhook_url = $"Url_De_Votre_WebHook"
            };

            try
            {
                var client = _httpClientFactory.CreateClient("FusionPay");
                var response = await client.PostAsJsonAsync("URL_API_Key", payload);

                if (!response.IsSuccessStatusCode)
                {
                    var errorContent = await response.Content.ReadAsStringAsync();
                    return StatusCode((int)response.StatusCode, $"Erreur Fusion Pay: {errorContent}");
                }

                var result = await response.Content.ReadFromJsonAsync<FusionPayResponse>();

                if (result == null || !result.statut)
                    return BadRequest("Échec de la création du paiement");

                // Enregistre la transaction en attente
                _context.PendingPayments.Add(new PendingPayment
                {
                    UserId = userId,
                    BookId = bookId,
                    TransactionId = result.token,
                    PaymentUrl = result.url,
                    Amount = book.Price,
                    PaymentMethod = "FusionPay"
                });

                await _context.SaveChangesAsync();

                return Ok(new { checkoutUrl = result.url });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erreur interne: {ex.Message}");
            }
        }



        // Endpoint de webhook Fusion Pay
        [AllowAnonymous]
        [HttpPost("fusionpay-webhook")]
        public async Task<IActionResult> HandleFusionPayWebhook([FromBody] FusionPayWebhook payload)
        {
            // Log de débogage (utile pour le suivi)
            Debug.WriteLine($"Webhook reçu - Transaction: {payload.tokenPay}, Statut: {payload.statut}");

            // Vérification basique des données requises
            if (payload.personal_Info == null || payload.personal_Info.Length == 0)
            {
                return BadRequest(new { Message = "Données de transaction invalides" });
            }

            var transactionId = payload.tokenPay;
            var status = payload.statut;
            var orderId = payload.personal_Info[0].orderId;
            var userId = payload.personal_Info[0].userId;

            // Vérifie si la transaction existe déjà
            var existingPurchase = await _context.PurchasedBooks
                .FirstOrDefaultAsync(p => p.TransactionId == transactionId);

            if (existingPurchase != null)
            {
                return Ok(new
                {
                    Message = "Transaction déjà traitée",
                    BookId = orderId,
                    TransactionId = transactionId
                });
            }

            // Traitement pour paiement réussi
            if (status == "paid")
            {
                var book = await _context.Books.FindAsync(orderId);
                if (book == null)
                {
                    return NotFound(new { Message = "Livre non trouvé" });
                }

                // Enregistrement de l'achat
                var purchase = new PurchasedBook
                {
                    UserId = userId,
                    BookId = orderId,
                    TransactionId = transactionId,
                    PurchaseDate = DateTime.UtcNow,
                    Title = book.Title,
                    Price = book.Price,
                    Description = book.Description,
                    AuthorName = book.AuthorName,
                    AuthorId = book.AuthorId,
                    FilePath = book.FilePath,
                    CoverPath = book.CoverPath,
                };

                _context.PurchasedBooks.Add(purchase);

                // Marquer le paiement en attente comme complété
                var pendingPayment = await _context.PendingPayments
                    .FirstOrDefaultAsync(p => p.TransactionId == transactionId);

                if (pendingPayment != null)
                {
                    pendingPayment.IsCompleted = true;
                }

                await _context.SaveChangesAsync();

                return Ok(new
                {
                    Message = "Paiement confirmé et livre enregistré",
                    BookId = orderId,
                    TransactionId = transactionId,
                    PurchaseDate = DateTime.UtcNow
                });
            }

            // Cas d'échec de paiement
            return BadRequest(new
            {
                Message = "Paiement non accepté",
                Status = status,
                TransactionId = transactionId
            });
        }


    }
}



## 📦 Étape 2: Configuration Frontend (.NET Maui)

1. Créer un fichier de service pour les méthodes qui vont communiquer avec votre backend(PurchaseService.cs)
Exemple de code :

        // methode pour initier un paiement
        public async Task<string?> InitiateFusionPayAsync(string bookId)
        {
            var token = Preferences.Get("UserToken", string.Empty);
            if (string.IsNullOrEmpty(token))
                return null;

            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

            var response = await _httpClient.PostAsync($"{BaseUrl}/initiate/{bookId}", null);
            Debug.WriteLine($"[FusionPay] Response : {response}");

            if (!response.IsSuccessStatusCode)
                return null;

            var content = await response.Content.ReadAsStringAsync();
            Debug.WriteLine($"[FusionPay] Content : {content}");

            var json = JsonSerializer.Deserialize<Dictionary<string, string>>(content);
            return json != null && json.TryGetValue("checkoutUrl", out var url) ? url : null;
        }


2. Créer un bouton pour initier un paiement
Exemple de code :
2.1 Le bouton dans le fichier .XAML : 

                <Button Text="Acheter"
                        Command="{Binding PurchaseBookCommand}"
                        BackgroundColor="DodgerBlue"
                        TextColor="White"
                        CornerRadius="12"
                        FontAttributes="Bold"
                        HeightRequest="45"
                        WidthRequest="200"/>


2.2 La logique du bouton dans le code-behind ou dans le viewModel :
        private async Task PurchaseBookAsync()
        {
            await ConnectivityService.ExecuteWithNetworkCheckAsync(async () =>
            {
                try
                {
                    var service = new PurchaseService();
                    var paymentUrl = await service.InitiateFusionPayAsync(Book.Id); // ⬅ appel FusionPay

                    if (string.IsNullOrEmpty(paymentUrl))
                    {
                        await Shell.Current.DisplayAlert("Erreur", "Impossible de générer le lien de paiement.", "OK");
                        return;
                    }

                    Debug.WriteLine($"[FusionPay] Lien de paiement : {paymentUrl}");

                    // Ouvrir dans la WebView
                    await Shell.Current.Navigation.PushAsync(new PaymentPage(paymentUrl));
                }
                catch (Exception ex)
                {
                    Debug.WriteLine($"[FusionPay] Erreur : {ex.Message}");
                    await Shell.Current.DisplayAlert("Erreur", "Impossible de procéder à l'achat. Réessayez plus tard.", "OK");
                }
            });
        }






