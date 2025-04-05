import{jsx as n,jsxs as l,Fragment as c}from"react/jsx-runtime";const o=void 0,i=[{id:"installation",text:"Installation",depth:2},{id:"usage",text:"Usage",depth:2},{id:"initialisation-de-fusionpay",text:"Initialisation de FusionPay",depth:3},{id:"param\xE9trage-des-donn\xE9es-de-paiement",text:"Param\xE9trage des donn\xE9es de paiement",depth:3},{id:"effectuer-un-paiement",text:"Effectuer un paiement",depth:3},{id:"structure-de-r\xE9ponse-au-paiement",text:"Structure de r\xE9ponse au paiement",depth:4},{id:"gestion-du-rappel-de-paiement",text:"Gestion du rappel de paiement",depth:3},{id:"v\xE9rification-de-l\xE9tat-des-paiements",text:"V\xE9rification de l'\xE9tat des paiements",depth:3},{id:"structure-de-r\xE9ponse-pour-la-v\xE9rification-des-paiements",text:"Structure de r\xE9ponse pour la v\xE9rification des paiements",depth:4},{id:"exemples-de-donn\xE9es-personnalis\xE9es",text:"Exemples de donn\xE9es personnalis\xE9es",depth:2},{id:"r\xE9f\xE9rence-api",text:"R\xE9f\xE9rence API",depth:2},{id:"constructeur",text:"Constructeur",depth:3},{id:"m\xE9thodes",text:"M\xE9thodes",depth:3},{id:"gestion-des-erreurs",text:"Gestion des erreurs",depth:2}],t="Node.js package : La mani\xE8re flexible d'utiliser";function r(s){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li"},s.components);return l(c,{children:[l(e.h1,{id:"nodejs-package--la-mani\xE8re-flexible-dutiliser",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-package--la-mani\xE8re-flexible-dutiliser",children:"#"}),"Node.js package : La mani\xE8re flexible d'utiliser"]}),`
`,l(e.h2,{id:"installation",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,n(e.p,{children:"Installez FusionPay en utilisant npm ou yarn :"}),`
`,l(e.div,{className:"language-bash",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"bash"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9FF"},children:"npm install fusionpay"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"usage",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),`
`,l(e.h3,{id:"initialisation-de-fusionpay",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#initialisation-de-fusionpay",children:"#"}),"Initialisation de FusionPay"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"import"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"FusionPay"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"from"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"fusionpay"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Initialisation de base"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"FusionPay"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-api-url.com"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Avec un type de donn\xE9es personnalis\xE9"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"interface"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"OrderData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  orderId"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  customerEmail"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"typedFusionPay"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"FusionPay"}),n(e.span,{style:{color:"#ECEFF4"},children:"<"}),n(e.span,{style:{color:"#8FBCBB"},children:"OrderData"}),n(e.span,{style:{color:"#ECEFF4"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-api-url.com"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"param\xE9trage-des-donn\xE9es-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#param\xE9trage-des-donn\xE9es-de-paiement",children:"#"}),"Param\xE9trage des donn\xE9es de paiement"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#D8DEE9"},children:"fusionPay"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"totalPrice"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#B48EAD"},children:"200"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addArticle"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Sac"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addArticle"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Veste"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addInfo"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"12345"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"customerEmail"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"customer@example.com"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"clientName"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"John Doe"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"clientNumber"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"returnUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://my_callback_url.com"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"effectuer-un-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#effectuer-un-paiement",children:"#"}),"Effectuer un paiement"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"makePayment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"log"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Payment initiated:"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Rediriger l'utilisateur vers l'URL de paiement ou envoyer l'URL au client"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Payment initiation failed:"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h4,{id:"structure-de-r\xE9ponse-au-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-de-r\xE9ponse-au-paiement",children:"#"}),"Structure de r\xE9ponse au paiement"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  statut"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"boolean"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Statut de l'initiation du paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  token"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Token pour la v\xE9rification du paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  message"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Message d'\xE9tat"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// URL de la passerelle de paiement pour la redirection des utilisateurs"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"gestion-du-rappel-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gestion-du-rappel-de-paiement",children:"#"}),"Gestion du rappel de paiement"]}),`
`,n(e.p,{children:"Lorsque le paiement est termin\xE9, l'utilisateur est redirig\xE9 vers votre URL de retour avec un param\xE8tre de jeton :"}),`
`,l(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"https://my_callback_url.com?token=payment_token_here"})})]}),`
`,l(e.h3,{id:"v\xE9rification-de-l\xE9tat-des-paiements",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#v\xE9rification-de-l\xE9tat-des-paiements",children:"#"}),"V\xE9rification de l'\xE9tat des paiements"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"//extraire le jeton dans votre url"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"//eg: Nodejs -> const {token} = req.query"})}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// V\xE9rifier le statut du paiement"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"status"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"checkPaymentStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"token"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"status"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"statut"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"&&"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"status"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"statut"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"==="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paid"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Paiement r\xE9ussi"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"customData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"status"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"personal_Info"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"["}),n(e.span,{style:{color:"#B48EAD"},children:"0"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// G\xE9rer le succ\xE8s..."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"console"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Status check failed:"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h4,{id:"structure-de-r\xE9ponse-pour-la-v\xE9rification-des-paiements",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-de-r\xE9ponse-pour-la-v\xE9rification-des-paiements",children:"#"}),"Structure de r\xE9ponse pour la v\xE9rification des paiements"]}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  statut"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"boolean"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Statut de la demande de v\xE9rification"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  message"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Message d'\xE9tat"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  data"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    _id"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#616E88"},children:"// ID de l'enregistrement de paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    tokenPay"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"   "}),n(e.span,{style:{color:"#616E88"},children:"// Jeton de paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Num\xE9ro de t\xE9l\xE9phone du client"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Nom du client"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"T"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"[]"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Votre tableau de donn\xE9es personnalis\xE9"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    numeroTransaction"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// R\xE9f\xE9rence de la transaction"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    Montant"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"number"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#616E88"},children:"// Montant du paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    frais"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"number"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Frais de transaction"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    statut"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"pending"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"|"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paid"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"|"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"failed"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Statut du paiement"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    moyen"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#616E88"},children:"// Mode de paiement utilis\xE9"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// URL de rappel"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    createdAt"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Horodatage de la transaction"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"exemples-de-donn\xE9es-personnalis\xE9es",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemples-de-donn\xE9es-personnalis\xE9es",children:"#"}),"Exemples de donn\xE9es personnalis\xE9es"]}),`
`,n(e.p,{children:"Voici quelques exemples de donn\xE9es personnalis\xE9es que vous pourriez vouloir stocker :"}),`
`,l(e.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"typescript"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Commande de commerce \xE9lectronique"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"interface"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"OrderData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  orderId"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  customerEmail"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Abonnement"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"interface"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"SubscriptionData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  planId"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  subscriberId"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  period"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"monthly"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"|"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"yearly"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Billet d'\xE9v\xE9nement"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"interface"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"TicketData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  eventId"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ticketType"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"string"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  quantity"}),n(e.span,{style:{color:"#81A1C1"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#8FBCBB"},children:"number"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#616E88"},children:"// Utilisation"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"payment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"new"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"FusionPay"}),n(e.span,{style:{color:"#ECEFF4"},children:"<"}),n(e.span,{style:{color:"#8FBCBB"},children:"OrderData"}),n(e.span,{style:{color:"#ECEFF4"},children:">"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9"},children:"payment"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"addInfo"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"ORD-123"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#D8DEE9"},children:"customerEmail"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"customer@example.com"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h2,{id:"r\xE9f\xE9rence-api",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#r\xE9f\xE9rence-api",children:"#"}),"R\xE9f\xE9rence API"]}),`
`,l(e.h3,{id:"constructeur",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#constructeur",children:"#"}),"Constructeur"]}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"new FusionPay<T = CustomPaymentData>(apiUrl: string)"})}),`
`]}),`
`,l(e.h3,{id:"m\xE9thodes",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#m\xE9thodes",children:"#"}),"M\xE9thodes"]}),`
`,l(e.p,{children:["Toutes les m\xE9thodes (sauf ",n(e.code,{children:"makePayment"})," et ",n(e.code,{children:"checkPaymentStatus"}),") supportent le cha\xEEnage de m\xE9thodes."]}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"totalPrice(amount: number): this"})}),`
`,n(e.li,{children:n(e.code,{children:"addArticle(name: string, value: number): this"})}),`
`,n(e.li,{children:n(e.code,{children:"addInfo(data: T): this"})}),`
`,n(e.li,{children:n(e.code,{children:"clientName(name: string): this"})}),`
`,n(e.li,{children:n(e.code,{children:"clientNumber(number: string): this"})}),`
`,n(e.li,{children:n(e.code,{children:"returnUrl(url: string): this"})}),`
`,n(e.li,{children:n(e.code,{children:"makePayment(): Promise<PaymentResponse>"})}),`
`,n(e.li,{children:n(e.code,{children:"checkPaymentStatus(token: string): Promise<PaymentVerificationResponse<T>>"})}),`
`]}),`
`,l(e.h2,{id:"gestion-des-erreurs",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gestion-des-erreurs",children:"#"}),"Gestion des erreurs"]}),`
`,n(e.p,{children:"La biblioth\xE8que g\xE9n\xE8re des erreurs en cas d'\xE9chec des appels \xE0 l'API et de param\xE8tres non valides. Pour une bonne gestion des erreurs, il convient de toujours int\xE9grer les appels \xE0 l'API dans des blocs try-catch."})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(r,s)})):r(s)}const p="2024/11/12 17:56:25",h=`# Node.js package : La mani\xE8re flexible d'utiliser

## Installation

Installez FusionPay en utilisant npm ou yarn :

\`\`\`bash
npm install fusionpay
\`\`\`

## Usage

### Initialisation de FusionPay

\`\`\`typescript
import { FusionPay } from "fusionpay";

// Initialisation de base
const fusionPay = new FusionPay("https://your-api-url.com");

// Avec un type de donn\xE9es personnalis\xE9
interface OrderData {
  orderId: string;
  customerEmail: string;
}
const typedFusionPay = new FusionPay<OrderData>("https://your-api-url.com");
\`\`\`

### Param\xE9trage des donn\xE9es de paiement

\`\`\`typescript
fusionPay
  .totalPrice(200)
  .addArticle("Sac", 100)
  .addArticle("Veste", 100)
  .addInfo({
    orderId: "12345",
    customerEmail: "customer@example.com",
  })
  .clientName("John Doe")
  .clientNumber("01010101")
  .returnUrl("https://my_callback_url.com");
\`\`\`

### Effectuer un paiement

\`\`\`typescript
try {
  const response = await fusionPay.makePayment();
  console.log("Payment initiated:", response);
  // Rediriger l'utilisateur vers l'URL de paiement ou envoyer l'URL au client
} catch (error) {
  console.error("Payment initiation failed:", error);
}
\`\`\`

#### Structure de r\xE9ponse au paiement

\`\`\`typescript
{
  statut: boolean; // Statut de l'initiation du paiement
  token: string; // Token pour la v\xE9rification du paiement
  message: string; // Message d'\xE9tat
  url: string; // URL de la passerelle de paiement pour la redirection des utilisateurs
}
\`\`\`

### Gestion du rappel de paiement

Lorsque le paiement est termin\xE9, l'utilisateur est redirig\xE9 vers votre URL de retour avec un param\xE8tre de jeton :

:::tip{title=''}
https://my_callback_url.com?token=payment_token_here
:::

### V\xE9rification de l'\xE9tat des paiements

\`\`\`typescript
//extraire le jeton dans votre url
//eg: Nodejs -> const {token} = req.query

try {
  // V\xE9rifier le statut du paiement

  const status = await fusionPay.checkPaymentStatus(token);
  if (status.statut && status.data.statut === "paid") {
    // Paiement r\xE9ussi
    const customData = status.data.personal_Info[0];
    // G\xE9rer le succ\xE8s...
  }
} catch (error) {
  console.error("Status check failed:", error);
}
\`\`\`

#### Structure de r\xE9ponse pour la v\xE9rification des paiements

\`\`\`typescript
{
  statut: boolean;      // Statut de la demande de v\xE9rification
  message: string;      // Message d'\xE9tat
  data: {
    _id: string;        // ID de l'enregistrement de paiement
    tokenPay: string;   // Jeton de paiement
    numeroSend: string; // Num\xE9ro de t\xE9l\xE9phone du client
    nomclient: string;  // Nom du client
    personal_Info: T[]; // Votre tableau de donn\xE9es personnalis\xE9
    numeroTransaction: string;  // R\xE9f\xE9rence de la transaction
    Montant: number;    // Montant du paiement
    frais: number;      // Frais de transaction
    statut: "pending" | "paid" | "failed";  // Statut du paiement
    moyen: string;      // Mode de paiement utilis\xE9
    return_url: string; // URL de rappel
    createdAt: string;  // Horodatage de la transaction
  }
}
\`\`\`

## Exemples de donn\xE9es personnalis\xE9es

Voici quelques exemples de donn\xE9es personnalis\xE9es que vous pourriez vouloir stocker :

\`\`\`typescript
// Commande de commerce \xE9lectronique
interface OrderData {
  orderId: string;
  customerEmail: string;
}

// Abonnement
interface SubscriptionData {
  planId: string;
  subscriberId: string;
  period: "monthly" | "yearly";
}

// Billet d'\xE9v\xE9nement
interface TicketData {
  eventId: string;
  ticketType: string;
  quantity: number;
}

// Utilisation
const payment = new FusionPay<OrderData>(apiUrl);
payment.addInfo({
  orderId: "ORD-123",
  customerEmail: "customer@example.com",
});
\`\`\`

## R\xE9f\xE9rence API

### Constructeur

- \`new FusionPay<T = CustomPaymentData>(apiUrl: string)\`

### M\xE9thodes

Toutes les m\xE9thodes (sauf \`makePayment\` et \`checkPaymentStatus\`) supportent le cha\xEEnage de m\xE9thodes.

- \`totalPrice(amount: number): this\`
- \`addArticle(name: string, value: number): this\`
- \`addInfo(data: T): this\`
- \`clientName(name: string): this\`
- \`clientNumber(number: string): this\`
- \`returnUrl(url: string): this\`
- \`makePayment(): Promise<PaymentResponse>\`
- \`checkPaymentStatus(token: string): Promise<PaymentVerificationResponse<T>>\`

## Gestion des erreurs

La biblioth\xE8que g\xE9n\xE8re des erreurs en cas d'\xE9chec des appels \xE0 l'API et de param\xE8tres non valides. Pour une bonne gestion des erreurs, il convient de toujours int\xE9grer les appels \xE0 l'API dans des blocs try-catch.
`;export{h as content,d as default,o as frontmatter,p as lastUpdatedTime,t as title,i as toc};
