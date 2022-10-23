import{e as b,j as t,r as u,u as y,w as N,c as B,a as D,d as s}from"./index.db63a436.js";import{b as m,a as h}from"./Form.7ce7ab69.js";const d=b("input-group-text",{Component:"span"}),I=a=>t(d,{children:t(m,{type:"checkbox",...a})}),U=a=>t(d,{children:t(m,{type:"radio",...a})}),x=u.exports.forwardRef(({bsPrefix:a,size:o,hasValidation:i,className:r,as:n="div",...p},c)=>{a=y(a,"input-group");const l=u.exports.useMemo(()=>({}),[]);return t(N.Provider,{value:l,children:t(n,{ref:c,...p,className:B(r,a,o&&`${a}-${o}`,i&&"has-validation")})})});x.displayName="InputGroup";const g=Object.assign(x,{Text:d,Radio:U,Checkbox:I});const f=()=>{const[a,o]=u.exports.useState(0),[i,r]=u.exports.useState(0),[n,p]=u.exports.useState("USD"),{price:c,btcPrice:l,name:C}=D(e=>e.coin.coin),v={USD:{coin:e=>{o(e.target.value),r(e.target.value*Number(c))},exchange:e=>{r(e.target.value),o(e.target.value/Number(c))}},BTC:{coin:e=>{o(e.target.value),r(e.target.value*Number(l))},exchange:e=>{r(e.target.value),o(e.target.value/Number(l))}}},S=e=>(p(e.target.value),e.target.value==="USD"?r(a*c):r(a*l));return s("div",{children:[t("h2",{children:"Calculator"}),t("p",{style:{color:"#002358"},children:"Use the calculator to convert real-time prices between all available cryptocurrencies to Dollar and Bitcoin."}),s("div",{className:"container-calculator",children:[s(g,{children:[t(h.Control,{type:"number",value:a,onChange:v[n].coin}),t("span",{style:{width:"40%"},children:C})]}),s(g,{children:[t(h.Control,{type:"number",value:i,onChange:v[n].exchange}),t("div",{style:{width:"40%"},children:s(h.Select,{value:n,onChange:S,children:[t("option",{value:"USD",children:"USD - US Dollar"}),t("option",{value:"BTC",children:"BTC - Bitcoin"})]})})]})]})]})},T=f;export{T as default};
