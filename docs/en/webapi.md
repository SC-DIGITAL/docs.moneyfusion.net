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
};
```

### Fields

| Field           | Type            | Description                        | Example                            | Required |
| --------------- | --------------- | ---------------------------------- | ---------------------------------- | -------- |
| `totalPrice`    | Number          | Total amount to be paid            | 200                                | Yes      |
| `article`       | `Array<Object>` | List of items with their prices    | `[{"sac": 100, "chaussure": 100}]` | Yes      |
| `numeroSend`    | String          | Customer phone number              | "01010101"                         | Yes      |
| `nomclient`     | String          | Customer name                      | "John Doe"                         | Yes      |
| `personal_Info` | `Array<Object>` | Personal information               | `[{"userId": 1, "orderId": 123}]`  | No       |
| `return_url`    | String          | url to be redirected after payment | `https://your-domain.com/callback` | No       |

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
