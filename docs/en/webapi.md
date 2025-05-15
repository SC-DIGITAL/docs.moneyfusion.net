# Web API: he flexible way to develop

You can use the web api to develop your app.

To get started I will use `axios`. Feel free to use any http client you want. e.g. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Make Payment Request

```javascript
const axios = require("axios");

const apiUrl = "YOUR_API_URL"; // Get this from your dashboard
const makePayment = async (paymentData) => {
  try {
    const response = await axios.post(apiUrl, paymentData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### Example paymentData

```javascript
const paymentData = {
  totalPrice: 200,
  article: [
    {
      sac: 100,
      chaussure: 100,
    },
  ],
  personal_Info: [
    {
      userId: 1,
      orderId: 123,
    },
  ],
  numeroSend: "01010101",
  nomclient: "John Doe",
  return_url: "https://your-domain.com/callback",
  webhook_url: "https://your-domain.com/my-webhook-url", // The webhook must accept POST requests to receive data.
};
```

### Fields

| Field           | Type            | Description                                                | Example                                  | Required |
| --------------- | --------------- | ---------------------------------------------------------- | ---------------------------------------- | -------- |
| `totalPrice`    | Number          | Total amount to be paid                                    | 200                                      | Yes      |
| `article`       | `Array<Object>` | List of items with their prices                            | `[{"sac": 100, "chaussure": 100}]`       | Yes      |
| `numeroSend`    | String          | Customer phone number                                      | "01010101"                               | Yes      |
| `nomclient`     | String          | Customer name                                              | "John Doe"                               | Yes      |
| `personal_Info` | `Array<Object>` | Personal information                                       | `[{"userId": 1, "orderId": 123}]`        | No       |
| `return_url`    | String          | url to be redirected after payment                         | `https://your-domain.com/callback`       | No       |
| `webhook_url`   | String          | url (POST) from which transaction details will be returned | `https://your-domain.com/my-webhook-url` | Non      |

### Example Response

```json
{
  "statut": true,
  "token": "5d58823b084564",
  "message": "paiement en cours",
  "url": "https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"
}
```

### Response Object

| Field     | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| `statut`  | Boolean | Payment request status            |
| `token`   | String  | Unique payment token for tracking |
| `message` | String  | Status message                    |
| `url`     | String  | Payment page URL                  |

## Payment Status Verification

### Check Payment Status

```javascript
const checkPaymentStatus = async (token) => {
  try {
    const response = await axios.get(
      `https://www.pay.moneyfusion.net/paiementNotif/${token}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### Example Response

```json
{
  "statut": true,
  "data": {
    "_id": "65df163b11ab882694573060",
    "tokenPay": "0d1d8bc9b6d2819c",
    "numeroSend": "01010101",
    "nomclient": "John Doe",
    "personal_Info": [
      {
        "userId": 1,
        "orderId": 123
      }
    ],
    "numeroTransaction": "0708889205",
    "Montant": 200,
    "frais": 5,
    "statut": "paid",
    "moyen": "orange",
    "return_url": "https://your-domain.com/callback",
    "createdAt": "2024-02-28T11:17:15.285Z"
  },
  "message": "details paiement"
}
```

### Payment Status Types

| Status    | Description                |
| --------- | -------------------------- |
| `pending` | Payment is being processed |
| `failure` | Payment failed             |
| `no paid` | Payment not completed      |
| `paid`    | Payment successful         |

### Status Response data fields

| Field           | Type            | Description                     |
| --------------- | --------------- | ------------------------------- |
| `_id`           | String          | Transaction ID                  |
| `tokenPay`      | String          | Payment token                   |
| `numeroSend`    | String          | Customer phone number           |
| `nomclient`     | String          | Customer name                   |
| `personal_Info` | `Array<Object>` | List of items with their prices |
| `Montant`       | Number          | Transaction amount              |
| `frais`         | Number          | Transaction fees                |
| `statut`        | String          | Payment status                  |
| `moyen`         | String          | Payment method                  |
| `createdAt`     | String          | Transaction timestamp           |

## Real-Time Transaction Monitoring via Webhook

### Structure of Received Data

```json
{
  "event": "payin.session.pending",
  "personal_Info": [
    {
      "userId": 1,
      "orderId": 123
    }
  ],
  "tokenPay": "Le4Cnmm1Ac9yTgZMKQbz",
  "numeroSend": "01010101",
  "nomclient": "Kwameson",
  "numeroTransaction": "01010101",
  "Montant": 194,
  "frais": 6,
  "return_url": " https://your-domain.com/callback ",
  "webhook_url": "https://your-domain.com/my-webhook-url",
  "createdAt": "2025-05-09T12:50:45.412Z"
}
```

### List of Available Webhook Events

| Event                     | Description                              |
| ------------------------- | ---------------------------------------- |
| `payin.session.pending`   | Payment initiated and pending processing |
| `payin.session.completed` | Payment successfully completed           |
| `payin.session.cancelled` | Payment failed or was cancelled          |

## Handling Multiple Webhook Notifications

### Important to Know

Moneyfusion may send multiple notifications for the same transaction, especially in the following cases:

- Repeated `payin.session.pending` events during the processing phase.
- A `payin.session.completed` event after the payment is confirmed.
- A `possible payin.session.cancelled` event in case of failure or cancellation.

### Processing Recommendations

To ensure reliable processing and avoid duplicates :

1. **Identify each transaction uniquely** using the `tokenPay` field.
2. **Check the current transaction status** in your database before updating.
3. **Ignore already processed events** or those that do not represent a status change.

### Example Filtering Logic

```javascript
if (transactionExists && incomingStatus === currentStatus) {
  // Do nothing: redundant notification
} else {
  // Update the transaction status
}
```
