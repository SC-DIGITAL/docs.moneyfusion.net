import{jsx as n,jsxs as l,Fragment as s}from"react/jsx-runtime";const a=void 0,d=[{id:"demande-de-paiement",text:"Demande de paiement",depth:3},{id:"exemple-de-donn\xE9es-de-paiement",text:"Exemple de donn\xE9es de paiement",depth:3},{id:"champs",text:"Champs",depth:3},{id:"exemple-de-r\xE9ponse",text:"Exemple de r\xE9ponse",depth:3},{id:"objet-de-la-r\xE9ponse",text:"Objet de la r\xE9ponse",depth:3},{id:"v\xE9rification-de-l\xE9tat-des-paiements",text:"V\xE9rification de l'\xE9tat des paiements",depth:2},{id:"v\xE9rifier-l\xE9tat-du-paiement",text:"V\xE9rifier l'\xE9tat du paiement",depth:3},{id:"exemple-de-r\xE9ponse-1",text:"Exemple de r\xE9ponse",depth:3},{id:"types-de-statut-de-paiement",text:"Types de statut de paiement",depth:3},{id:"champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",text:"Champs de donn\xE9es de la r\xE9ponse d'\xE9tat",depth:3}],i="L'API Web : un moyen flexible de d\xE9velopper";function c(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2"},r.components);return l(s,{children:[l(e.h1,{id:"lapi-web--un-moyen-flexible-de-d\xE9velopper",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lapi-web--un-moyen-flexible-de-d\xE9velopper",children:"#"}),"L'API Web : un moyen flexible de d\xE9velopper"]}),`
`,n(e.p,{children:"Vous pouvez utiliser l'api web pour d\xE9velopper votre application."}),`
`,l(e.p,{children:["Pour commencer, j'utiliserai ",n(e.code,{children:"axios"}),". N'h\xE9sitez pas \xE0 utiliser n'importe quel client http, par exemple ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"nofollow",children:"fetch"})]}),`
`,l(e.h3,{id:"demande-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#demande-de-paiement",children:"#"}),"Demande de paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"require"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"YOUR_API_URL"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Obtenez ceci depuis votre tableau de bord"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"makePayment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"post"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"headers "}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Content-Type"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#88C0D0"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"application/json"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"lancer"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"l"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"erreur "}),n(e.span,{style:{color:"#D8DEE9"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"exemple-de-donn\xE9es-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-donn\xE9es-de-paiement",children:"#"}),"Exemple de donn\xE9es de paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"totalPrice"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"200"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"article"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"sac"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"chaussure"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"userId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"123"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" 01010101 "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" John Doe "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" https://your-domain.com/callback "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"champs",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#champs",children:"#"}),"Champs"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Champ"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"}),n(e.th,{children:"Exemple"}),n(e.th,{children:"Exig\xE9"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"totalPrice"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Montant total \xE0 payer"}),n(e.td,{children:"200"}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"article"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Liste des articles avec leur prix"}),n(e.td,{children:n(e.code,{children:'[{"sac": 100, "chaussure": 100}]'})}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Num\xE9ro de t\xE9l\xE9phone du client"}),n(e.td,{children:'"01010101"'}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Nom du client"}),n(e.td,{children:'"John Doe"'}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Autres informations personnelles"}),n(e.td,{children:n(e.code,{children:'[{"userId": 1, "orderId": 123}]'})}),n(e.td,{children:"Non"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"return_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url \xE0 rediriger apr\xE8s le paiement"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/callback"})}),n(e.td,{children:"Non"})]})]})]}),`
`,l(e.h3,{id:"exemple-de-r\xE9ponse",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-r\xE9ponse",children:"#"}),"Exemple de r\xE9ponse"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"5d58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"objet-de-la-r\xE9ponse",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#objet-de-la-r\xE9ponse",children:"#"}),"Objet de la r\xE9ponse"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"Boolean"}),n(e.td,{children:"Statut de la demande de paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"token"})}),n(e.td,{children:"String"}),n(e.td,{children:"Jeton de paiement unique pour le suiv"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"message"})}),n(e.td,{children:"String"}),n(e.td,{children:"Message d'\xE9tat"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"url"})}),n(e.td,{children:"String"}),n(e.td,{children:"URL de la page de paiement"})]})]})]}),`
`,l(e.h2,{id:"v\xE9rification-de-l\xE9tat-des-paiements",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#v\xE9rification-de-l\xE9tat-des-paiements",children:"#"}),"V\xE9rification de l'\xE9tat des paiements"]}),`
`,l(e.h3,{id:"v\xE9rifier-l\xE9tat-du-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#v\xE9rifier-l\xE9tat-du-paiement",children:"#"}),"V\xE9rifier l'\xE9tat du paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"checkPaymentStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"get"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/paiementNotif/"}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#D8DEE9"},children:"token"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    )"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"throw"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"exemple-de-r\xE9ponse-1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-r\xE9ponse-1",children:"#"}),"Exemple de r\xE9ponse"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"data"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"_id"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"65df163b11ab882694573060"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"tokenPay"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"0d1d8bc9b6d2819c"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"John Doe"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"userId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"123"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"],"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroTransaction"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"0708889205"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"Montant"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"200"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"frais"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"5"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paid"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"moyen"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"orange"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/callback"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"createdAt"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"2024-02-28T11:17:15.285Z"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"details paiement"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"types-de-statut-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#types-de-statut-de-paiement",children:"#"}),"Types de statut de paiement"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Status"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"pending"})}),n(e.td,{children:"Le paiement est en cours de traitement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"failure"})}),n(e.td,{children:"\xC9chec du paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"no paid"})}),n(e.td,{children:"Paiement non effectu\xE9"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"paid"})}),n(e.td,{children:"Paiement r\xE9ussi"})]})]})]}),`
`,l(e.h3,{id:"champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",children:"#"}),"Champs de donn\xE9es de la r\xE9ponse d'\xE9tat"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_id"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction ID"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"tokenPay"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment token"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Num\xE9ro de t\xE9l\xE9phone du client"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Nom du client"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Autres informations personnelles"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"Montant"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Montant de la transaction"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"frais"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Frais de transaction"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"String"}),n(e.td,{children:"\xC9tat des paiements"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"moyen"})}),n(e.td,{children:"String"}),n(e.td,{children:"Mode de paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"createdAt"})}),n(e.td,{children:"String"}),n(e.td,{children:"Horaire de la transaction"})]})]})]})]})}function t(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(c,r)})):c(r)}const h="2024/11/12 17:56:25",p=`# L'API Web : un moyen flexible de d\xE9velopper

Vous pouvez utiliser l'api web pour d\xE9velopper votre application.

Pour commencer, j'utiliserai \`axios\`. N'h\xE9sitez pas \xE0 utiliser n'importe quel client http, par exemple [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Demande de paiement

\`\`\`javascript
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
\`\`\`

### Exemple de donn\xE9es de paiement

\`\`\`javascript
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
};
\`\`\`

### Champs

| Champ           | Type            | Description                       | Exemple                            | Exig\xE9 |
| --------------- | --------------- | --------------------------------- | ---------------------------------- | ----- |
| \`totalPrice\`    | Number          | Montant total \xE0 payer             | 200                                | Oui   |
| \`article\`       | \`Array<Object>\` | Liste des articles avec leur prix | \`[{"sac": 100, "chaussure": 100}]\` | Oui   |
| \`numeroSend\`    | String          | Num\xE9ro de t\xE9l\xE9phone du client     | "01010101"                         | Oui   |
| \`nomclient\`     | String          | Nom du client                     | "John Doe"                         | Oui   |
| \`personal_Info\` | \`Array<Object>\` | Autres informations personnelles  | \`[{"userId": 1, "orderId": 123}]\`  | Non   |
| \`return_url\`    | String          | url \xE0 rediriger apr\xE8s le paiement | \`https://your-domain.com/callback\` | Non   |

### Exemple de r\xE9ponse

\`\`\`json
{
  "statut": true,
  "token": "5d58823b084564",
  "message": "paiement en cours",
  "url": "https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"
}
\`\`\`

### Objet de la r\xE9ponse

| Field     | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| \`statut\`  | Boolean | Statut de la demande de paiement      |
| \`token\`   | String  | Jeton de paiement unique pour le suiv |
| \`message\` | String  | Message d'\xE9tat                        |
| \`url\`     | String  | URL de la page de paiement            |

## V\xE9rification de l'\xE9tat des paiements

### V\xE9rifier l'\xE9tat du paiement

\`\`\`javascript
const checkPaymentStatus = async (token) => {
  try {
    const response = await axios.get(
      \`https://www.pay.moneyfusion.net/paiementNotif/\${token}\`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
\`\`\`

### Exemple de r\xE9ponse

\`\`\`json
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
\`\`\`

### Types de statut de paiement

| Status    | Description                            |
| --------- | -------------------------------------- |
| \`pending\` | Le paiement est en cours de traitement |
| \`failure\` | \xC9chec du paiement                      |
| \`no paid\` | Paiement non effectu\xE9                  |
| \`paid\`    | Paiement r\xE9ussi                        |

### Champs de donn\xE9es de la r\xE9ponse d'\xE9tat

| Field           | Type            | Description                      |
| --------------- | --------------- | -------------------------------- |
| \`_id\`           | String          | Transaction ID                   |
| \`tokenPay\`      | String          | Payment token                    |
| \`numeroSend\`    | String          | Num\xE9ro de t\xE9l\xE9phone du client    |
| \`nomclient\`     | String          | Nom du client                    |
| \`personal_Info\` | \`Array<Object>\` | Autres informations personnelles |
| \`Montant\`       | Number          | Montant de la transaction        |
| \`frais\`         | Number          | Frais de transaction             |
| \`statut\`        | String          | \xC9tat des paiements               |
| \`moyen\`         | String          | Mode de paiement                 |
| \`createdAt\`     | String          | Horaire de la transaction        |
`;export{p as content,t as default,a as frontmatter,h as lastUpdatedTime,i as title,d as toc};
