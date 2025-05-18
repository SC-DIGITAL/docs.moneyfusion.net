# Fusion Pay Payment Gateway

![banner](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/banner.png)

## Description

Fusion Pay WooCommerce Payment Gateway est un plugin WordPress personnalisé qui vous permet d'intégrer le système de paiement MoneyFusion dans votre site WordPress WooCommerce.

## Caractéristiques

- Installation et configuration faciles
- Traitement sécurisé des paiements grâce à MoneyFusion
- Paramètres de passerelle de paiement personnalisables
- Mises à jour en temps réel de l'état des paiements via des webhooks
- Enregistrement détaillé des transactions et options de débogage
- Statuts de commande personnalisés pour un meilleur suivi des paiements
- Intégration complète de WooCommerce pour des paiements en ligne transparents

## Installation

1. Téléchargez le plugin à partir de [ce lien](https://docs.moneyfusion.net/fusionpay.zip).
2. Installez-le ou téléchargez le dossier `fusionpay` dans le répertoire `/wp-content/plugins/`.
3. Activez le plugin dans le menu « Plugins » de WordPress.

## Intégration de WooCommerce

Pour utiliser Fusion Pay avec WooCommerce :

1. Assurez-vous que WooCommerce est installé et activé.
2. Allez dans WooCommerce > Paramètres > Paiements.
3. Activez « Fusion Pay » comme méthode de paiement.
   ![woocommerce-fusionpay-activation](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png)

4. Cliquez sur « Gérer » à côté de Fusion Pay pour configurer les paramètres de la passerelle:

   - **Enable/Disable**: Activer ou désactiver le mode de paiement
   - **Title**: Personnaliser la façon dont la méthode de paiement apparaît aux clients (par défaut : « Fusion Pay »)
   - **Description**: Fournir des informations sur ce mode de paiement à vos clients
   - **API URL**: Entrez votre URL API Fusion Pay unique (créez une application sur [moneyfusion](https://moneyfusion.net/dashboard/fusionpay) pour obtenir l'url).
   - **Return URL**: URL où les clients seront redirigés après le paiement
   - **Webhook URL**: URL que vous devez configurer pour recevoir les notifications de paiement.
   - **Debug Log**: Permet de résoudre les problèmes de paiement. Trouvé sur `https://your-site.com/wp-admin/admin.php?page=wc-status&tab=logs` et source `fusion-pay`

   ![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png)

5. Save your settings and the payment gateway will be available at checkout.

Les clients peuvent désormais sélectionner Fusion Pay comme option de paiement lors de la validation de leur commande.

![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png)

## Payment Status Handling

Le plugin gère automatiquement les statuts de paiement suivants de MoneyFusion :

- **paid** - Paiement réussi (commande marquée comme terminée)
- **pending** - Le paiement est en cours de traitement (commande marquée comme étant en cours de traitement)
- **failure** - Le paiement a échoué (la commande est marquée comme ayant échoué)
- **no paid** - Paiement non effectué (commande marquée comme en attente)

## Webhook Integration

Pour les mises à jour automatiques de l'état de la commande, laissez le point de terminaison du webhook dans le tableau de bord de woocommerce :

- Webhook URL: `https://your-site.com/wc-api/wc_fusion_pay_gateway`

Cela permet à votre boutique WooCommerce de recevoir automatiquement les mises à jour de l'état des paiements.

## Troubleshooting

Si vous rencontrez des problèmes avec la passerelle :

1. Activez le journal de débogage dans les paramètres de la passerelle.
2. Vérifiez les journaux d'état du système WooCommerce pour toute erreur.
3. Vérifiez que l'URL de votre API est correctement saisie
4. Si l'option de paiement n'est pas visible, allez sur la page de paiement et entrez `[woocommerce_checkout]` dans la section raccourci pour plus d'informations :
   [![Watch the video](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)

:::danger{title="Good to know"}
Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem.
:::

## Support

For any issues or feature requests, please visit the [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)
