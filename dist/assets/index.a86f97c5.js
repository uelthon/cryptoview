import{r as g,u as N,j as e,c as y,a as d,b as p,d as r,B as h,s as l,L as x,f as $,e as k,T as P,g as S}from"./index.379ac24e.js";import{F as C,T}from"./TableChart.e8fadd5d.js";const B={vertical:!1,role:"group"},f=g.exports.forwardRef(({bsPrefix:n,size:i,vertical:t,className:s,as:o="div",...a},c)=>{const u=N(n,"btn-group");let b=u;return t&&(b=`${u}-vertical`),e(o,{...a,ref:c,className:y(s,b,i&&`${u}-${i}`)})});f.displayName="ButtonGroup";f.defaultProps=B;const v=()=>{const n=d(c=>c.coins.pagination),i=d(c=>c.coins.statsCoins),t=d(c=>c.coins.pagination.limit),s=p(),o=(i==null?void 0:i.total)||10;if(!i)return null;const a={init:()=>s(l({...n,offset:0})),prev:()=>s(l({...n,offset:Number(n.offset)-Number(t)})),next:()=>s(l({...n,offset:Number(n.offset)+Number(t)})),last:()=>s(l({...n,offset:Number(o)-Number(t)}))};return r(f,{children:[e(h,{variant:"outline-secondary",onClick:a.init,disabled:n.offset===0,children:"Init"}),e(h,{variant:"outline-secondary",onClick:a.prev,disabled:n.offset<Number(t),children:"Prev"}),e(h,{variant:"outline-secondary",onClick:a.next,disabled:n.offset>=Number(o)-Number(t),children:"Next"}),e(h,{variant:"outline-secondary",onClick:a.last,disabled:n.offset>=Number(o)-Number(t),children:"Last"})]})},w=()=>{const n=d(o=>o.coins.pagination),i=p();let t=null;g.exports.useEffect(()=>{i(l({...n,search:""}))},[]);const s=o=>{t&&clearTimeout(t),t=setTimeout(()=>i(l({...n,search:o.target.value,offset:0})),500)};return e(C.Control,{placeholder:"Search name or symbol",onChange:s})},m=({name:n,options:i})=>{const t=d(a=>a.coins.pagination),s=p(),o=a=>{s(l({...t,[n]:a.target.value}))};return e(C.Select,{value:t[n],onChange:o,size:"sm",children:i.map(a=>e("option",{value:a,children:a},a))})};const L=()=>r("div",{className:"container-sort-coins",children:[e(m,{name:"timePeriod",options:["3h","24h","7d","30d","3m","1y","3y","5y"]}),e(m,{name:"orderBy",options:["price","marketCap","change"]}),e(m,{name:"orderDirection",options:["desc","asc"]}),e(m,{name:"limit",options:[10,20,30,40,50]})]});const A=({coin:n})=>r("tr",{children:[e("td",{children:r("div",{className:"row-coin",children:[e("img",{src:n.iconUrl,width:"26px",height:"26px"}),r("div",{children:[e("div",{children:e(x,{to:`/coin/${n.uuid}`,children:n.name})}),e("div",{className:"symbol",children:n.symbol})]})]})}),r("td",{children:["$",parseFloat(n.price).toFixed(2)]}),r("td",{children:["$",$(n.marketCap)]}),r("td",{style:{color:n.change<0?"red":"green"},children:[n.change<0?`${n.change}%`:`+${n.change}%`,e("div",{className:"row-coin-chart",children:e(T,{coin:n})})]})]});const F=()=>{const{coins:n,coinsLoading:i}=k(),t=d(s=>s.coins.pagination);return r(P,{className:"table-coins",responsive:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:"Coin"}),e("th",{children:"Price"}),e("th",{children:"Market cap"}),e("th",{children:t.timePeriod})]})}),e("tbody",{children:i?e("tr",{children:e("td",{colSpan:4,children:e(S,{height:"30vh"})})}):n.map(s=>e(A,{coin:s},s.uuid))})]})};const j=()=>e("div",{className:"container-allcoins",children:r("div",{className:"components",children:[r("div",{className:"sort-coins",children:[r("div",{className:"title",children:[e("h2",{children:"Cryptocurrency price list"}),e("p",{children:"All cryptocurrencies ranked by market cap."})]}),e(L,{})]}),e("div",{className:"btn-coins",children:e(v,{})}),e("div",{className:"search-coins",children:e(w,{})}),e("div",{className:"table-coins",children:e(F,{})}),e("div",{className:"btn-coins",children:e(v,{})})]})}),D=j;export{D as default};
