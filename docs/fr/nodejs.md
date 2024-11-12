# Node.js package : La manière flexible d'utiliser

## Installation

Installez FusionPay en utilisant npm ou yarn :

```bash
npm install fusionpay
```

## Usage

### Initialisation de FusionPay

```typescript
import { FusionPay } from "fusionpay";

// Initialisation de base
const fusionPay = new FusionPay("https://your-api-url.com");

// Avec un type de données personnalisé
interface OrderData {
  orderId: string;
  customerEmail: string;
}
const typedFusionPay = new FusionPay<OrderData>("https://your-api-url.com");
```

### Paramétrage des données de paiement

```typescript
fusionPay
  .totalPrice(200)
  .addArticle("Sac", 100)
  .addArticle("Veste", 100)
  .addInfo({
    orderId: "12345",
    customerEmail: "customer@example.com",
  })
  .clientName("John Doe")
  .clientNumber("01010101")
  .returnUrl("https://my_callback_url.com");
```

### Effectuer un paiement

```typescript
try {
  const response = await fusionPay.makePayment();
  console.log("Payment initiated:", response);
  // Rediriger l'utilisateur vers l'URL de paiement ou envoyer l'URL au client
} catch (error) {
  console.error("Payment initiation failed:", error);
}
```

#### Structure de réponse au paiement

```typescript
{
  statut: boolean; // Statut de l'initiation du paiement
  token: string; // Token pour la vérification du paiement
  message: string; // Message d'état
  url: string; // URL de la passerelle de paiement pour la redirection des utilisateurs
}
```

### Gestion du rappel de paiement

Lorsque le paiement est terminé, l'utilisateur est redirigé vers votre URL de retour avec un paramètre de jeton :

:::tip{title=''}
https://my_callback_url.com?token=payment_token_here
:::

### Vérification de l'état des paiements

```typescript
//extraire le jeton dans votre url
//eg: Nodejs -> const {token} = req.query

try {
  // Vérifier le statut du paiement

  const status = await fusionPay.checkPaymentStatus(token);
  if (status.statut && status.data.statut === "paid") {
    // Paiement réussi
    const customData = status.data.personal_Info[0];
    // Gérer le succès...
  }
} catch (error) {
  console.error("Status check failed:", error);
}
```

#### Structure de réponse pour la vérification des paiements

```typescript
{
  statut: boolean;      // Statut de la demande de vérification
  message: string;      // Message d'état
  data: {
    _id: string;        // ID de l'enregistrement de paiement
    tokenPay: string;   // Jeton de paiement
    numeroSend: string; // Numéro de téléphone du client
    nomclient: string;  // Nom du client
    personal_Info: T[]; // Votre tableau de données personnalisé
    numeroTransaction: string;  // Référence de la transaction
    Montant: number;    // Montant du paiement
    frais: number;      // Frais de transaction
    statut: "pending" | "paid" | "failed";  // Statut du paiement
    moyen: string;      // Mode de paiement utilisé
    return_url: string; // URL de rappel
    createdAt: string;  // Horodatage de la transaction
  }
}
```

## Exemples de données personnalisées

Voici quelques exemples de données personnalisées que vous pourriez vouloir stocker :

```typescript
// Commande de commerce électronique
interface OrderData {
  orderId: string;
  customerEmail: string;
}

// Abonnement
interface SubscriptionData {
  planId: string;
  subscriberId: string;
  period: "monthly" | "yearly";
}

// Billet d'événement
interface TicketData {
  eventId: string;
  ticketType: string;
  quantity: number;
}

// Utilisation
const payment = new FusionPay<OrderData>(apiUrl);
payment.addInfo({
  orderId: "ORD-123",
  customerEmail: "customer@example.com",
});
```

## Référence API

### Constructeur

- `new FusionPay<T = CustomPaymentData>(apiUrl: string)`

### Méthodes

Toutes les méthodes (sauf `makePayment` et `checkPaymentStatus`) supportent le chaînage de méthodes.

- `totalPrice(amount: number): this`
- `addArticle(name: string, value: number): this`
- `addInfo(data: T): this`
- `clientName(name: string): this`
- `clientNumber(number: string): this`
- `returnUrl(url: string): this`
- `makePayment(): Promise<PaymentResponse>`
- `checkPaymentStatus(token: string): Promise<PaymentVerificationResponse<T>>`

## Gestion des erreurs

La bibliothèque génère des erreurs en cas d'échec des appels à l'API et de paramètres non valides. Pour une bonne gestion des erreurs, il convient de toujours intégrer les appels à l'API dans des blocs try-catch.
