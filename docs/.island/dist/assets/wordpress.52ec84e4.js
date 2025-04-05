import{jsx as n,jsxs as t,Fragment as a}from"react/jsx-runtime";const s=void 0,h=[{id:"features",text:"Features",depth:2},{id:"installation",text:"Installation",depth:2},{id:"configuration",text:"Configuration",depth:2},{id:"preview",text:"preview",depth:4},{id:"shortcode-usage",text:"Shortcode Usage",depth:2},{id:"preview-1",text:"preview",depth:4},{id:"woocommerce-integration",text:"WooCommerce Integration",depth:2},{id:"the-fusion-pay-payment-option-is-not-visible",text:"The Fusion Pay payment option is not visible?",depth:3},{id:"support",text:"Support",depth:2}],l="Wordpress plugin: The flexible way to use";function o(i){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",strong:"strong",h4:"h4",img:"img",div:"div",button:"button",span:"span",pre:"pre",h3:"h3"},i.components);return t(a,{children:[t(e.h1,{id:"wordpress-plugin-the-flexible-way-to-use",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#wordpress-plugin-the-flexible-way-to-use",children:"#"}),"Wordpress plugin: The flexible way to use"]}),`
`,n(e.p,{children:"You can use the wordpress plugin to receive payments from your wordpress and woocommerce store."}),`
`,t(e.h2,{id:"features",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"Easy installation and setup"}),`
`,n(e.li,{children:"Customizable API settings"}),`
`,n(e.li,{children:"Ability to define articles and total price"}),`
`,n(e.li,{children:"Multilingual support (English and French)"}),`
`,n(e.li,{children:"Shortcode for embedding payment form"}),`
`,n(e.li,{children:"Dynamic handling of articles in the payment form"}),`
`,n(e.li,{children:"WooCommerce integration for seamless e-commerce payments"}),`
`]}),`
`,t(e.h2,{id:"installation",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:["Download the plugin from the ",n(e.a,{href:"https://docs.moneyfusion.net/fusionpay.zip",target:"_blank",rel:"nofollow",children:"this link"}),"."]}),`
`,t(e.li,{children:["Upload the ",n(e.code,{children:"fusionpay"})," folder to the ",n(e.code,{children:"/wp-content/plugins/"})," directory."]}),`
`,n(e.li,{children:"Activate the plugin through the 'Plugins' menu in WordPress."}),`
`,n(e.li,{children:'Navigate to the "Fusion Pay" settings page in the admin dashboard to configure your API and payment settings.'}),`
`]}),`
`,t(e.h2,{id:"configuration",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"}),"Configuration"]}),`
`,n(e.p,{children:"After activating the plugin, follow these steps to configure it:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:["Go to the ",n(e.strong,{children:"Fusion Pay"})," menu in the WordPress admin panel."]}),`
`,t(e.li,{children:["Fill in the ",n(e.strong,{children:"API URL"})," and ",n(e.strong,{children:"Return URL"}),"."]}),`
`,n(e.li,{children:"Add articles with their names and prices."}),`
`,t(e.li,{children:["Set the ",n(e.strong,{children:"Total Price"})," and choose whether to display articles and total price on the payment form."]}),`
`,n(e.li,{children:"Select the form language (English or French)."}),`
`,n(e.li,{children:"If using WooCommerce, enable the WooCommerce integration in the settings."}),`
`,n(e.li,{children:"Save your settings."}),`
`]}),`
`,t(e.h4,{id:"preview",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#preview",children:"#"}),"preview"]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-1.png",alt:"panel"})}),`
`,t(e.h2,{id:"shortcode-usage",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#shortcode-usage",children:"#"}),"Shortcode Usage"]}),`
`,n(e.p,{children:"To display the payment form on a page or post, use the following shortcode:"}),`
`,t(e.div,{className:"language-plaintext",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"plaintext"}),n(e.pre,{children:t(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#d8dee9ff"},children:"[fusion_pay_form]"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#d8dee9ff"}})})]})})]}),`
`,n(e.p,{children:"This will render the payment form with fields for the customer's name and phone number, along with the articles and total price if configured to display."}),`
`,t(e.h4,{id:"preview-1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#preview-1",children:"#"}),"preview"]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-2.png",alt:"form"})}),`
`,t(e.h2,{id:"woocommerce-integration",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#woocommerce-integration",children:"#"}),"WooCommerce Integration"]}),`
`,n(e.p,{children:"To use Fusion Pay with WooCommerce:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[`
`,n(e.p,{children:"Ensure WooCommerce is installed and activated."}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:"Go to WooCommerce > Settings > Payments."}),`
`]}),`
`,t(e.li,{children:[`
`,t(e.p,{children:[`Enable "Fusion Pay" as a payment method.
`,n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png",alt:"woocommerce-fusionpay-activation"})]}),`
`]}),`
`,t(e.li,{children:[`
`,t(e.p,{children:[`Click "Manage" next to Fusion Pay to configure additional settings.
`,n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png",alt:"form"})]}),`
`]}),`
`]}),`
`,n(e.p,{children:"Customers can now select Fusion Pay as a payment option during checkout."}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png",alt:"form"})}),`
`,t(e.h3,{id:"the-fusion-pay-payment-option-is-not-visible",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#the-fusion-pay-payment-option-is-not-visible",children:"#"}),"The Fusion Pay payment option is not visible?"]}),`
`,t(e.p,{children:["If the payment option is not visible, go to the payment page and enter ",n(e.code,{children:"[woocommerce_checkout]"})," in the shortcut section for more information:"]}),`
`,n(e.p,{children:n(e.a,{href:"https://www.youtube.com/watch?v=sfYauEEO7S0",target:"_blank",rel:"nofollow",children:n(e.img,{src:"https://img.youtube.com/vi/sfYauEEO7S0/0.jpg",alt:"Watch the video"})})}),`
`,t(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Good to know"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem."})})]}),`
`,t(e.h2,{id:"support",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#support",children:"#"}),"Support"]}),`
`,t(e.p,{children:["For any issues or feature requests, please visit the ",n(e.a,{href:"https://github.com/Yaya12085/wp-fusionpay/issues",target:"_blank",rel:"nofollow",children:"GitHub Issues Page"})]})]})}function c(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(o,i)})):o(i)}const d="2025/4/5 19:16:10",p=`# Wordpress plugin: The flexible way to use

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
2. Upload the \`fusionpay\` folder to the \`/wp-content/plugins/\` directory.
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

\`\`\`plaintext
[fusion_pay_form]
\`\`\`

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

If the payment option is not visible, go to the payment page and enter \`[woocommerce_checkout]\` in the shortcut section for more information:

[![Watch the video](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)

:::danger{title="Good to know"}
Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem.
:::

## Support

For any issues or feature requests, please visit the [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)
`;export{p as content,c as default,s as frontmatter,d as lastUpdatedTime,l as title,h as toc};
