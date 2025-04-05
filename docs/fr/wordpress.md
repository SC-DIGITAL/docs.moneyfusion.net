# Wordpress plugin : La souplesse d'utilisation

Vous pouvez utiliser le plugin wordpress pour recevoir des paiements depuis votre boutique wordpress et woocommerce.

## Caractéristiques

- Installation et configuration faciles
- Paramètres API personnalisables
- Possibilité de définir les articles et le prix total
- Support multilingue (anglais et français)
- Shortcode pour intégrer le formulaire de paiement
- Gestion dynamique des articles dans le formulaire de paiement
- Intégration de WooCommerce pour des paiements en ligne transparents.

## Installation

1. Téléchargez le plugin depuis [ce lien](https://docs.moneyfusion.net/fusionpay.zip).
2. Téléchargez le dossier `fusionpay` dans le répertoire `/wp-content/plugins/`.
3. Activez le plugin via le menu 'Plugins' de WordPress.
4. Naviguez vers la page de réglages "Fusion Pay" dans le tableau de bord de l'administrateur pour configurer votre API et vos réglages de paiement.

## Configuration

Après avoir activé le plugin, suivez les étapes suivantes pour le configurer :

1. Allez dans le menu **Fusion Pay** dans le panneau d'administration de WordPress.
2. Remplissez l'**API URL** et l'**Return URL**.
3. Ajoutez des articles avec leur nom et leur prix.
4. Définissez le **Prix total** et choisissez d'afficher ou non les articles et le prix total sur le formulaire de paiement.
5. Sélectionnez la langue du formulaire (anglais ou français).
6. Si vous utilisez WooCommerce, activez l'intégration de WooCommerce dans les paramètres.
7. Sauvegardez vos paramètres.

#### aperçu

![panel](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-1.png)

## Utilisation du shortcode

Pour afficher le formulaire de paiement sur une page ou un article, utilisez le shortcode suivant :

```plaintext
[fusion_pay_form]
```

Cela rendra le formulaire de paiement avec des champs pour le nom et le numéro de téléphone du client, ainsi que les articles et le prix total s'ils sont configurés pour être affichés.

#### aperçu

![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-2.png)

## Intégration WooCommerce

Pour utiliser Fusion Pay avec WooCommerce :

1. Assurez-vous que WooCommerce est installé et activé.
2. Allez dans WooCommerce > Paramètres > Paiements.
3. Activez "Fusion Pay" comme méthode de paiement.
   ![woocommerce-fusionpay-activation](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png)

4. Cliquez sur "Gérer" à côté de Fusion Pay pour configurer des paramètres supplémentaires.
   ![formulaire](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png)

Les clients peuvent désormais sélectionner Fusion Pay comme option de paiement lors de la validation de leur commande.

![formulaire](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png)

### L'option de paiement Fusion Pay n'est pas visible ?

Si le moyen de paiement ne s'affiche pas, allez modifier la page de paiement en entrant. `[woocommerce_checkout]` dans la section shortcut: Pour plus d'info:

[![Regarder la vidéo](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)

:::danger{title="Bon à savoir"}
Assurez-vous que la devise est en Franc CFA et que le montant est de 200 minimum pour que tout fonctionne sans problème.
:::

## Support

Pour tout problème ou demande de fonctionnalité, veuillez visiter la [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)

```

```
