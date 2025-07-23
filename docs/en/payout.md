# Money Fusion – Withdrawal Integration and Webhook

This documentation explains how to integrate **Money Fusion's withdrawal API** and how to manage **webhooks** related to withdrawal events.

---

## Authentication

![Authentication Illustration](https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1753185228523-api_key_docs.png)

Before making a withdrawal request, you must (go to the **Settings** section):

1. **Generate an API key** from your Money Fusion dashboard.
2. **Add your server's IP address** (the one sending the request) in the dashboard.
3. Include this API key in the HTTP request headers:

```md
moneyfusion-private-key: YOUR_API_KEY
Content-Type: application/json
```

---

## Withdrawal Endpoint

**POST** `https://pay.moneyfusion.net/api/v1/withdraw`

### Request Body (JSON)

```json
{
  "countryCode": "ci",
  "phone": "05xxxxxxxxx",
  "amount": 200,
  "withdraw_mode": "mtn-ci",
  "webhook_url": "https://your-server.com/api/withdraw/callback"
}
```

### Response if successful

```json
{
  "tokenPay": "D0h6fjyjkCfi",
  "statut": true,
  "message": "Retrait soumis avec succès"
}
```

### Response in case of error

```json
{
  "statut": false,
  "message": "Tous les champs (countryCode, phone, amount, withdraw_mode) sont requis."
}
```

### About `tokenPay`

The `tokenPay` field is a unique identifier generated when initiating a withdrawal.  
It is used to track and verify the transaction. This token should be stored on your client or server as it will be used for:

- Validating and identifying the transaction in webhook notifications.
- Linking the initial request to its final status.

This token ensures traceability and security of the withdrawal process.

---

### Required or Not Parameters (JSON body)

| Field           | Type     | Required | Description                                          |
| --------------- | -------- | -------- | ---------------------------------------------------- |
| `countryCode`   | `string` | ✅       | Country code (e.g., `ci` for Côte d’Ivoire)          |
| `phone`         | `string` | ✅       | Phone number to withdraw to                          |
| `amount`        | `number` | ✅       | Amount to withdraw                                   |
| `withdraw_mode` | `string` | ✅       | Withdrawal method                                    |
| `webhook_url`   | `string` | NO       | URL to which Money Fusion will send the notification |

---

## Supported Withdrawal Methods (`withdraw_mode`)

Here are the supported values for `withdraw_mode` and `countryCode`:

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

Your server must **listen for the following events** on the `webhook_url` you provided:

```text
- payout.session.completed
- payout.session.cancelled
```

### Sample Webhook Payload

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

### Possible Events

| Event                      | Description                               |
| -------------------------- | ----------------------------------------- |
| `payout.session.completed` | The withdrawal was successfully processed |
| `payout.session.cancelled` | The withdrawal failed or was canceled     |

---

## Code Example (Node.js / Express)

```js
// Webhook Endpoint
app.post("/api/withdraw/callback", (req, res) => {
  const { event, tokenPay, montant, numeroRetrait, moyen, createdAt } =
    req.body;

  if (event === "payout.session.completed") {
    // Mark the withdrawal as successful in your DB
  } else if (event === "payout.session.cancelled") {
    // Mark the withdrawal as failed in your DB
  }
});
```
