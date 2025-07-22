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

Votre serveur doit **écouter les événements suivants** via l’URL `webhook_url` fournie :

```js
-payout.session.completed;
-payout.session.cancelled;
```

### Exemple de payload webhook :

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
  const { event, montant, numeroRetrait, moyen, createdAt } = req.body;

  if (event === "payout.session.completed") {
    // Marquez le retrait comme réussi dans votre DB
  } else if (event === "payout.session.cancelled") {
    // Mettez à jour le retrait comme échoué
  }
});
```
