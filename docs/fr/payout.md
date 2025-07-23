# Money Fusion – Intégration du Retrait et Webhook

Cette documentation décrit comment intégrer l'API de retrait de **Money Fusion** ainsi que la gestion des **webhooks** liés aux événements de retrait.

---

## Authentification

![Illustration Authentification](https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1753185228523-api_key_docs.png)

Avant de faire une requête de retrait, vous devez (Allez dans la section **Paramètre**) :

1. **Générer une clé API** depuis votre tableau de bord Money Fusion.
2. **Ajouter l'adresse IP de votre serveur** (qui initie la requête) dans votre dashboard.
3. Inclure cette clé API dans l’en-tête des requêtes HTTP :

```md
Authorization: Bearer VOTRE_CLE_API
Content-Type: application/json
```

---

## Endpoint de retrait

**POST** `https://pay.moneyfusion.net/api/v1/withdraw`

### Corps de la requête (JSON)

```json
{
  "countryCode": "ci",
  "phone": "05xxxxxxxxx", // MTN
  "amount": 200,
  "withdraw_mode": "mtn-ci",
  "webhook_url": "https://votre-serveur.com/api/withdraw/callback"
}
```

### Réponse en cas de succès

```json
{
  "tokenPay": "D0h6fjyjkCfi",
  "statut": true,
  "message": "Retrait soumis avec succès"
}
```

### Réponse en cas d’erreur

```json
{
  "statut": false,
  "message": "Tous les champs (countryCode, phone, amount, withdraw_mode) sont requis."
}
```

### 🔐 À propos du `tokenPay`

Le champ `tokenPay` est un identifiant unique généré lors de l’initiation d’un retrait.  
Il permet de suivre et vérifier la transaction. Ce token doit être conservé côté client ou serveur car il sera réutilisé pour :

- Valider et identifier la transaction dans les notifications envoyées par webhook.
- Faire le lien entre la demande initiale et son statut final.

Ce token garantit ainsi la traçabilité et la sécurité du processus de retrait.

---

### Paramètres requis ou Non (JSON body)

| Champ           | Type     | Obligatoire | Description                                            |
| --------------- | -------- | ----------- | ------------------------------------------------------ |
| `countryCode`   | `string` | ✅          | Code du pays (ex: `ci` pour Côte d’Ivoire)             |
| `phone`         | `string` | ✅          | Numéro à retirer                                       |
| `amount`        | `number` | ✅          | Montant à retirer                                      |
| `withdraw_mode` | `string` | ✅          | Méthode de retrait                                     |
| `webhook_url`   | `string` | NON         | URL vers laquelle Money Fusion enverra la notification |

---

## Méthodes de retrait prises en charge (`withdraw_mode`)

Voici les valeurs supportées pour les champs `withdraw_mode` et `countryCode` :

| Country           | `countryCode` | `withdraw_mode`                                                                     |
| ----------------- | ------------- | ----------------------------------------------------------------------------------- |
| Côte d'Ivoire     | `ci`          | `orange-money-ci` / `mtn-ci` / `moov-ci` / `wave-ci`                                |
| Senegal           | `sn`          | `orange-money-senegal` / `free-money-senegal` / `wave-senegal` / `expresso-senegal` |
| Burkina Faso      | `bf`          | `orange-money-burkina` / `moov-burkina-faso`                                        |
| Benin             | `bj`          | `mtn-benin` / `moov-benin`                                                          |
| Togo              | `tg`          | `t-money-togo` / `moov-togo`                                                        |
| Mali              | `ml`          | `orange-money-mali`                                                                 |
| Congo Brazzaville | `cg`          | `orange-money-mali` / `mtn-cg`                                                      |
| Cameroun          | `cm`          | `orange-money-cm` / `mtn-cm`                                                        |
| Congo RDC         | `cd`          | `airtel-money-cd`                                                                   |
| Gabon             | `ga`          | `airtel-money-ga` / `libertis-ga`                                                   |
| Ghana             | `gh`          | `airtel-money-gh` / `mtn-gh` / `vodafone-gh`                                        |
| Guinée Conakry    | `gn`          | `orange-gn` / `mtn-gn`                                                              |
| Guinée-Bissau     | `gw`          | `mtn-gw`                                                                            |
| Kenya             | `ke`          | `m-pesa-ke`                                                                         |
| Mauritanie        | `mr`          | `bankily-mr`                                                                        |
| Niger             | `ne`          | `airtel-money-ne` / `mtn-ne` / `mauritel-ne`                                        |
| Ouganda           | `ug`          | `mtn-ug`                                                                            |
| Centrafrique      | `cf`          | `orange-cf`                                                                         |
| Rwanda            | `rw`          | `mtn-rw`                                                                            |
| Sierra Leone      | `sl`          | `africell-sl` / `orange-sl`                                                         |
| Tanzanie          | `tz`          | `airtel-money-tz` / `m-pesa-tz` / `tigo-tz`                                         |
| Tchad             | `td`          | `airtel-money-td` / `moov-td`                                                       |
| Gambie            | `gm`          | `orange-gm`                                                                         |
| Éthiopie          | `et`          | `safaricom-et`                                                                      |

---

## Webhooks

Votre serveur doit **écouter les événements suivants** via l’URL `webhook_url` fournie :

```js
-payout.session.completed;
-payout.session.cancelled;
```

### Exemple de payload webhook :

```json
{
  "event": "payout.session.cancelled",
  "tokenPay": "D0h6fjyjkCfi",
  "montant": 205,
  "numeroRetrait": "07xxxxxxxxx",
  "moyen": "orange-money-ci",
  "webhook_url": "https://votre-serveur.com/api/withdraw/callback",
  "createdAt": "2025-07-17T17:35:23.468Z"
}
```

### Événements possibles

| Événement                  | Description                           |
| -------------------------- | ------------------------------------- |
| `payout.session.completed` | Le retrait a été effectué avec succès |
| `payout.session.cancelled` | Le retrait a échoué ou a été annulé   |

---

## Exemple de code (Node.js / Express)

```js
// Endpoint Webhook
app.post("/api/withdraw/callback", (req, res) => {
  const { event, tokenPay, montant, numeroRetrait, moyen, createdAt } =
    req.body;

  if (event === "payout.session.completed") {
    // Marquez le retrait comme réussi dans votre DB
  } else if (event === "payout.session.cancelled") {
    // Mettez à jour le retrait comme échoué
  }
});
```
