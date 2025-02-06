# API MONEY FUSION PYTHON

It allows interaction with the MoneyFusion payment API. It simplifies the creation and retrieval of payments via HTTP requests.

## Installation

You can install it using:

```sh
pip install apiMoneyFusion
```

## Usage

### Importing

```python
from apiMoneyFusion import PaymentClient
```

### Initializing the client

```python
client = PaymentClient(api_key_url="https://api.moneyfusion.net")
```

### Create a payment

```python
payment = client.create_payment(
    total_price="10000",
    articles=[{"name": "Article 1", "price": "5000", "quantity": 1}],
    numero_send="0101010101",
    nom_client="assemienDev",
    user_id=1,
    order_id=123,
    return_url="https://votre-domaine.com/callback"
)

print(payment)
```

Expected response :

```json
{
    "statut": true,
    "token": "f5EJ33JYmxqosi8BvaEt",
    "message": "paiement en cours",
    "url": "https://payin.moneyfusion.net/payment/f5EJ33JYmxqosi8BvaEt/10000/John Doe"
}
```

### Retrieve a payment

```python
payment_info = client.get_payment("8L5teSc5TaIkP3ds9Dlx")
print(payment_info)
```

Expected response :

```json
{
    "statut": true,
    "data": {
        "_id": "6748d365967cb4766fdd1616",
        "tokenPay": "8L5teSc5TaIkP3ds9Dlx",
        "numeroSend": "None",
        "nomclient": "assemienDev",
        "personal_Info": [{"userId": 1, "orderId": 123}],
        "numeroTransaction": "",
        "Montant": 475,
        "frais": 25,
        "statut": "paid",
        "moyen": "card",
        "return_url": "https://votre-domaine.com/callback",
        "createdAt": "2024-11-28T20:32:37.037Z"
    },
    "message": "details paiement"
}
```

## Contributions

Contributions are welcome! Feel free to suggest improvements or report bugs by opening an issue on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

