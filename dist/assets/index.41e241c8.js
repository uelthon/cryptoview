import{d as n,j as i,g as c}from"./index.1a190139.js";const l=e=>{const s=new Date(e*1e3).toISOString();return s.slice(0,10)+" "+s.slice(11,16)},d=()=>{const e=n(t=>{var a;return(a=t.coin.coinStats)==null?void 0:a.history}),s=n(t=>{var a;return(a=t.coin.coinStats)==null?void 0:a.change}),o={maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1}},scales:{xAxes:{type:"time"}}},r={labels:e==null?void 0:e.map(t=>l(t.timestamp)),datasets:[{data:e==null?void 0:e.map(t=>t.price),borderColor:s>=0?"green":"red",backgroundColor:s>=0?"green":"red"}]};return i("div",{style:{position:"relative",width:"100%",height:"80vh"},children:i(c,{data:r,options:o})})},p=d;export{p as default};