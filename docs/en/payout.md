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
Authorization: Bearer YOUR_API_KEY
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

| Country       | `countryCode` | `withdraw_mode`                                                                     |
| ------------- | ------------- | ----------------------------------------------------------------------------------- |
| Côte d'Ivoire | `ci`          | `orange-money-ci` / `mtn-ci` / `moov-ci` / `wave-ci`                                |
| Senegal       | `sn`          | `orange-money-senegal` / `free-money-senegal` / `wave-senegal` / `expresso-senegal` |
| Burkina Faso  | `bf`          | `orange-money-burkina` / `moov-burkina-faso`                                        |
| Benin         | `bj`          | `mtn-benin` / `moov-benin`                                                          |
| Togo          | `tg`          | `t-money-togo` / `moov-togo`                                                        |
| Mali          | `ml`          | `orange-money-mali`                                                                 |

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
  const { event, montant, numeroRetrait, moyen, createdAt } = req.body;

  if (event === "payout.session.completed") {
    // Mark the withdrawal as successful in your DB
  } else if (event === "payout.session.cancelled") {
    // Mark the withdrawal as failed in your DB
  }
});
```
