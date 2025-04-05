import{jsx as n,jsxs as l,Fragment as c}from"react/jsx-runtime";const a=void 0,t=[{id:"make-payment-request",text:"Make Payment Request",depth:3},{id:"example-paymentdata",text:"Example paymentData",depth:3},{id:"fields",text:"Fields",depth:3},{id:"example-response",text:"Example Response",depth:3},{id:"response-object",text:"Response Object",depth:3},{id:"payment-status-verification",text:"Payment Status Verification",depth:2},{id:"check-payment-status",text:"Check Payment Status",depth:3},{id:"example-response-1",text:"Example Response",depth:3},{id:"payment-status-types",text:"Payment Status Types",depth:3},{id:"status-response-data-fields",text:"Status Response data fields",depth:3}],i="Web API: he flexible way to develop";function s(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2"},r.components);return l(c,{children:[l(e.h1,{id:"web-api-he-flexible-way-to-develop",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#web-api-he-flexible-way-to-develop",children:"#"}),"Web API: he flexible way to develop"]}),`
`,n(e.p,{children:"You can use the web api to develop your app."}),`
`,l(e.p,{children:["To get started I will use ",n(e.code,{children:"axios"}),". Feel free to use any http client you want. e.g. ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"nofollow",children:"fetch"})]}),`
`,l(e.h3,{id:"make-payment-request",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#make-payment-request",children:"#"}),"Make Payment Request"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"require"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"YOUR_API_URL"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Get this from your dashboard"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"makePayment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"post"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"headers"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Content-Type"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"application/json"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"throw"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"example-paymentdata",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-paymentdata",children:"#"}),"Example paymentData"]}),`
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
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"John Doe"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/callback"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"fields",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fields",children:"#"}),"Fields"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example"}),n(e.th,{children:"Required"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"totalPrice"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Total amount to be paid"}),n(e.td,{children:"200"}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"article"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"List of items with their prices"}),n(e.td,{children:n(e.code,{children:'[{"sac": 100, "chaussure": 100}]'})}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer phone number"}),n(e.td,{children:'"01010101"'}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer name"}),n(e.td,{children:'"John Doe"'}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Personal information"}),n(e.td,{children:n(e.code,{children:'[{"userId": 1, "orderId": 123}]'})}),n(e.td,{children:"No"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"return_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url to be redirected after payment"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/callback"})}),n(e.td,{children:"No"})]})]})]}),`
`,l(e.h3,{id:"example-response",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-response",children:"#"}),"Example Response"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"5d58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"response-object",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#response-object",children:"#"}),"Response Object"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"Boolean"}),n(e.td,{children:"Payment request status"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"token"})}),n(e.td,{children:"String"}),n(e.td,{children:"Unique payment token for tracking"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"message"})}),n(e.td,{children:"String"}),n(e.td,{children:"Status message"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"url"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment page URL"})]})]})]}),`
`,l(e.h2,{id:"payment-status-verification",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-verification",children:"#"}),"Payment Status Verification"]}),`
`,l(e.h3,{id:"check-payment-status",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#check-payment-status",children:"#"}),"Check Payment Status"]}),`
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
`,l(e.h3,{id:"example-response-1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-response-1",children:"#"}),"Example Response"]}),`
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
`,l(e.h3,{id:"payment-status-types",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-types",children:"#"}),"Payment Status Types"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Status"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"pending"})}),n(e.td,{children:"Payment is being processed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"failure"})}),n(e.td,{children:"Payment failed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"no paid"})}),n(e.td,{children:"Payment not completed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"paid"})}),n(e.td,{children:"Payment successful"})]})]})]}),`
`,l(e.h3,{id:"status-response-data-fields",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#status-response-data-fields",children:"#"}),"Status Response data fields"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_id"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction ID"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"tokenPay"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment token"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer phone number"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer name"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"List of items with their prices"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"Montant"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Transaction amount"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"frais"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Transaction fees"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment status"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"moyen"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment method"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"createdAt"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction timestamp"})]})]})]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}const h="2024/11/12 17:56:25",p=`# Web API: he flexible way to develop

You can use the web api to develop your app.

To get started I will use \`axios\`. Feel free to use any http client you want. e.g. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Make Payment Request

\`\`\`javascript
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
\`\`\`

### Example paymentData

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
  numeroSend: "01010101",
  nomclient: "John Doe",
  return_url: "https://your-domain.com/callback",
};
\`\`\`

### Fields

| Field           | Type            | Description                        | Example                            | Required |
| --------------- | --------------- | ---------------------------------- | ---------------------------------- | -------- |
| \`totalPrice\`    | Number          | Total amount to be paid            | 200                                | Yes      |
| \`article\`       | \`Array<Object>\` | List of items with their prices    | \`[{"sac": 100, "chaussure": 100}]\` | Yes      |
| \`numeroSend\`    | String          | Customer phone number              | "01010101"                         | Yes      |
| \`nomclient\`     | String          | Customer name                      | "John Doe"                         | Yes      |
| \`personal_Info\` | \`Array<Object>\` | Personal information               | \`[{"userId": 1, "orderId": 123}]\`  | No       |
| \`return_url\`    | String          | url to be redirected after payment | \`https://your-domain.com/callback\` | No       |

### Example Response

\`\`\`json
{
  "statut": true,
  "token": "5d58823b084564",
  "message": "paiement en cours",
  "url": "https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"
}
\`\`\`

### Response Object

| Field     | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| \`statut\`  | Boolean | Payment request status            |
| \`token\`   | String  | Unique payment token for tracking |
| \`message\` | String  | Status message                    |
| \`url\`     | String  | Payment page URL                  |

## Payment Status Verification

### Check Payment Status

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

### Example Response

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

### Payment Status Types

| Status    | Description                |
| --------- | -------------------------- |
| \`pending\` | Payment is being processed |
| \`failure\` | Payment failed             |
| \`no paid\` | Payment not completed      |
| \`paid\`    | Payment successful         |

### Status Response data fields

| Field           | Type            | Description                     |
| --------------- | --------------- | ------------------------------- |
| \`_id\`           | String          | Transaction ID                  |
| \`tokenPay\`      | String          | Payment token                   |
| \`numeroSend\`    | String          | Customer phone number           |
| \`nomclient\`     | String          | Customer name                   |
| \`personal_Info\` | \`Array<Object>\` | List of items with their prices |
| \`Montant\`       | Number          | Transaction amount              |
| \`frais\`         | Number          | Transaction fees                |
| \`statut\`        | String          | Payment status                  |
| \`moyen\`         | String          | Payment method                  |
| \`createdAt\`     | String          | Transaction timestamp           |
`;export{p as content,d as default,a as frontmatter,h as lastUpdatedTime,i as title,t as toc};
