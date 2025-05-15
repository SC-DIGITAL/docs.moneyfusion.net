# L'API Web : un moyen flexible de développer

Vous pouvez utiliser l'api web pour développer votre application.

Pour commencer, j'utiliserai `axios`. N'hésitez pas à utiliser n'importe quel client http, par exemple [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Demande de paiement

```javascript
const axios = require("axios") ;

const apiUrl = "YOUR_API_URL" ; // Obtenez ceci depuis votre tableau de bord
const makePayment = async (paymentData) => {
  try {
    const response = await axios.post(apiUrl, paymentData, {
      headers : {
        "Content-Type" : "application/json",
      },
    }) ;
    return response.data ;
  } catch (error) {
    lancer l'erreur ;
  }
};
```

### Exemple de données de paiement

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
  numeroSend: " 01010101 ",
  nomclient: " John Doe ",
  return_url: " https://your-domain.com/callback ",
  webhook_url: "https://your-domain.com/my-webhook-url",
};
```

### Champs

| Champ           | Type            | Description                                          | Exemple                                  | Exigé |
| --------------- | --------------- | ---------------------------------------------------- | ---------------------------------------- | ----- |
| `totalPrice`    | Number          | Montant total à payer                                | 200                                      | Oui   |
| `article`       | `Array<Object>` | Liste des articles avec leur prix                    | `[{"sac": 100, "chaussure": 100}]`       | Oui   |
| `numeroSend`    | String          | Numéro de téléphone du client                        | "01010101"                               | Oui   |
| `nomclient`     | String          | Nom du client                                        | "John Doe"                               | Oui   |
| `personal_Info` | `Array<Object>` | Autres informations personnelles                     | `[{"userId": 1, "orderId": 123}]`        | Non   |
| `return_url`    | String          | url à rediriger après le paiement                    | `https://your-domain.com/callback`       | Non   |
| `webhook_url`   | String          | url où seront renvoyés les détails de la transaction | `https://your-domain.com/my-webhook-url` | Non   |

### Exemple de réponse

```json
{
  "statut": true,
  "token": "5d58823b084564",
  "message": "paiement en cours",
  "url": "https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"
}
```

### Objet de la réponse

| Field     | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| `statut`  | Boolean | Statut de la demande de paiement      |
| `token`   | String  | Jeton de paiement unique pour le suiv |
| `message` | String  | Message d'état                        |
| `url`     | String  | URL de la page de paiement            |

## Vérification de l'état des paiements

### Vérifier l'état du paiement

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

### Exemple de réponse

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

### Types de statut de paiement

| Status    | Description                            |
| --------- | -------------------------------------- |
| `pending` | Le paiement est en cours de traitement |
| `failure` | Échec du paiement                      |
| `no paid` | Paiement non effectué                  |
| `paid`    | Paiement réussi                        |

### Champs de données de la réponse d'état

| Field           | Type            | Description                      |
| --------------- | --------------- | -------------------------------- |
| `_id`           | String          | Transaction ID                   |
| `tokenPay`      | String          | Payment token                    |
| `numeroSend`    | String          | Numéro de téléphone du client    |
| `nomclient`     | String          | Nom du client                    |
| `personal_Info` | `Array<Object>` | Autres informations personnelles |
| `Montant`       | Number          | Montant de la transaction        |
| `frais`         | Number          | Frais de transaction             |
| `statut`        | String          | État des paiements               |
| `moyen`         | String          | Mode de paiement                 |
| `createdAt`     | String          | Horaire de la transaction        |

## Suivi des Transactions en Temps Réel via Webhook

### Structure des données reçues

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
  "montant": 194,
  "frais": 6,
  "return_url": " https://your-domain.com/callback ",
  "webhook_url": "https://your-domain.com/my-webhook-url",
  "createdAt": "2025-05-09T12:50:45.412Z"
}
```

### Liste des Événements Webhook Disponibles

| Événement                 | Description                                 |
| ------------------------- | ------------------------------------------- |
| `payin.session.pending`   | Paiement initié et en attente de traitement |
| `payin.session.completed` | Paiement effectué avec succès               |
| `payin.session.cancelled` | Paiement annulé ou échoué                   |

## Gestion des Notifications Multiples pour le Webhook

### Important à savoir

Il est possible que moneyfusion envoie **plusieurs notifications** pour une même transaction, notamment dans les cas suivants :

- 🔄 Répétition de l’événement `payin.session.pending` pendant la phase de traitement.
- ✅ Envoi de l’événement `payin.session.completed` après confirmation du paiement.
- ❌ Éventuel `payin.session.cancelled` en cas d’échec ou d’annulation.

### Recommandations de traitement

Pour garantir un traitement fiable et éviter les doublons :

1. **Identifie chaque transaction** de manière unique grâce au champ `tokenPay`.
2. **Vérifie l’état actuel de la transaction** dans ta base de données avant d’effectuer une mise à jour.
3. **Ignore les événements déjà traités** ou ceux qui ne représentent pas une évolution de statut.

### Exemple de logique de filtrage

```javascript
if (transactionExists && incomingStatus === currentStatus) {
  // Ne rien faire : notification redondante
} else {
  // Mettre à jour le statut de la transaction
}
```
