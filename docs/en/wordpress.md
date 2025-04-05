# Wordpress plugin: The flexible way to use

You can use the wordpress plugin to receive payments from your wordpress and woocommerce store.

## Features

- Easy installation and setup
- Customizable API settings
- Ability to define articles and total price
- Multilingual support (English and French)
- Shortcode for embedding payment form
- Dynamic handling of articles in the payment form
- WooCommerce integration for seamless e-commerce payments

## Installation

1. Download the plugin from the [this link](https://docs.moneyfusion.net/fusionpay.zip).
2. Upload the `fusionpay` folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the 'Plugins' menu in WordPress.
4. Navigate to the "Fusion Pay" settings page in the admin dashboard to configure your API and payment settings.

## Configuration

After activating the plugin, follow these steps to configure it:

1. Go to the **Fusion Pay** menu in the WordPress admin panel.
2. Fill in the **API URL** and **Return URL**.
3. Add articles with their names and prices.
4. Set the **Total Price** and choose whether to display articles and total price on the payment form.
5. Select the form language (English or French).
6. If using WooCommerce, enable the WooCommerce integration in the settings.
7. Save your settings.

#### preview

![panel](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-1.png)

## Shortcode Usage

To display the payment form on a page or post, use the following shortcode:

```plaintext
[fusion_pay_form]
```

This will render the payment form with fields for the customer's name and phone number, along with the articles and total price if configured to display.

#### preview

![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-2.png)

## WooCommerce Integration

To use Fusion Pay with WooCommerce:

1. Ensure WooCommerce is installed and activated.
2. Go to WooCommerce > Settings > Payments.
3. Enable "Fusion Pay" as a payment method.
   ![woocommerce-fusionpay-activation](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png)

4. Click "Manage" next to Fusion Pay to configure additional settings.
   ![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png)

Customers can now select Fusion Pay as a payment option during checkout.

![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png)

### The Fusion Pay payment option is not visible?

If the payment option is not visible, go to the payment page and enter `[woocommerce_checkout]` in the shortcut section for more information:

[![Watch the video](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)

:::danger{title="Good to know"}
Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem.
:::

## Support

For any issues or feature requests, please visit the [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)
