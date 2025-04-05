import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";const a=void 0,i=[{id:"installation",text:"Installation",depth:2},{id:"usage",text:"Usage",depth:2},{id:"importing",text:"Importing",depth:3},{id:"initializing-the-client",text:"Initializing the client",depth:3},{id:"create-a-payment",text:"Create a payment",depth:3},{id:"retrieve-a-payment",text:"Retrieve a payment",depth:3}],t="API MONEY FUSION PYTHON";function c(s){const l=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3"},s.components);return e(r,{children:[e(l.h1,{id:"api-money-fusion-python",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#api-money-fusion-python",children:"#"}),"API MONEY FUSION PYTHON"]}),`
`,n(l.p,{children:"It allows interaction with the MoneyFusion payment API. It simplifies the creation and retrieval of payments via HTTP requests."}),`
`,e(l.h2,{id:"installation",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,n(l.p,{children:"You can install it using:"}),`
`,e(l.div,{className:"language-sh",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"sh"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"pip install apiMoneyFusion"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"usage",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),`
`,e(l.h3,{id:"importing",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#importing",children:"#"}),"Importing"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" apiMoneyFusion "}),n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" PaymentClient"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"initializing-the-client",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-the-client",children:"#"}),"Initializing the client"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"client "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"PaymentClient"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"api_key_url"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://api.moneyfusion.net"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"create-a-payment",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#create-a-payment",children:"#"}),"Create a payment"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"payment "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" client"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"create_payment"}),n(l.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"total_price"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"10000"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"articles"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:"[{"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"Article 1"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"price"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"5000"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"quantity"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:"}],"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"numero_send"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"0101010101"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"nom_client"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"assemienDev"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"user_id"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"order_id"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#B48EAD"},children:"123"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"return_url"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://votre-domaine.com/callback"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:")"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#88C0D0"},children:"print"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9FF"},children:"payment"}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"Expected response :"}),`
`,e(l.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"json"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"token"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"f5EJ33JYmxqosi8BvaEt"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"url"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://payin.moneyfusion.net/payment/f5EJ33JYmxqosi8BvaEt/10000/John Doe"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"retrieve-a-payment",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#retrieve-a-payment",children:"#"}),"Retrieve a payment"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"payment_info "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" client"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"get_payment"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"8L5teSc5TaIkP3ds9Dlx"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#88C0D0"},children:"print"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9FF"},children:"payment_info"}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"Expected response :"}),`
`,e(l.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"json"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"data"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"_id"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"6748d365967cb4766fdd1616"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"tokenPay"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"8L5teSc5TaIkP3ds9Dlx"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"numeroSend"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"None"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"nomclient"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"assemienDev"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"personal_Info"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"[{"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"userId"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"orderId"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"123"}),n(l.span,{style:{color:"#ECEFF4"},children:"}],"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"numeroTransaction"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'""'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"Montant"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"475"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"frais"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"25"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"paid"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"moyen"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"card"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"return_url"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://votre-domaine.com/callback"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"createdAt"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"2024-11-28T20:32:37.037Z"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"details paiement"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]})]})}function d(s={}){const{wrapper:l}=s.components||{};return l?n(l,Object.assign({},s,{children:n(c,s)})):c(s)}const E="2025/2/6 13:44:59",p=`# API MONEY FUSION PYTHON

It allows interaction with the MoneyFusion payment API. It simplifies the creation and retrieval of payments via HTTP requests.

## Installation

You can install it using:

\`\`\`sh
pip install apiMoneyFusion
\`\`\`

## Usage

### Importing

\`\`\`python
from apiMoneyFusion import PaymentClient
\`\`\`

### Initializing the client

\`\`\`python
client = PaymentClient(api_key_url="https://api.moneyfusion.net")
\`\`\`

### Create a payment

\`\`\`python
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
\`\`\`

Expected response :

\`\`\`json
{
    "statut": true,
    "token": "f5EJ33JYmxqosi8BvaEt",
    "message": "paiement en cours",
    "url": "https://payin.moneyfusion.net/payment/f5EJ33JYmxqosi8BvaEt/10000/John Doe"
}
\`\`\`

### Retrieve a payment

\`\`\`python
payment_info = client.get_payment("8L5teSc5TaIkP3ds9Dlx")
print(payment_info)
\`\`\`

Expected response :

\`\`\`json
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
\`\`\`


`;export{p as content,d as default,a as frontmatter,E as lastUpdatedTime,t as title,i as toc};
