import{d as r,r as l,k as m,j as n,p as d}from"./index.1a190139.js";const u=({time:e})=>{const c=r(s=>{var t;return(t=s.coin.params)==null?void 0:t.timePeriod}),o=l.exports.useRef(),i=m(),a=()=>{o.current.scrollIntoView({inline:"center",block:"end",behavior:"smooth"}),i(d({timePeriod:e}))};return n("button",{ref:o,className:`btn-time-recap ${e===c?"select":""}`,"data-time":e,onClick:()=>a(),children:e})};const h=()=>n("div",{className:"container-btns-recap",children:["1h","3h","12h","24h","7d","30d","3m","1y","3y","5y","all"].map(e=>n(u,{time:e},e))}),C=h;export{C as default};
