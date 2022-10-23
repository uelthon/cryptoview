import{d as e,j as t,G as r,a as s,T as d,I as h,o as l,v as c}from"./index.db63a436.js";import{A as u}from"./index.esm.bc841225.js";const i=({icon:a,title:n,quantity:o})=>e("tr",{children:[t("td",{style:{textAlign:"start"},children:a}),t("th",{style:{textAlign:"start"},children:n}),t("td",{style:{textAlign:"end"},children:t("strong",{children:o})})]});function v(a){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Bitcoin"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z"}},{tag:"path",attr:{d:"M14.28,11.78A1.994,1.994,0,0,0,12.75,8.5H12.5V7.47A.489.489,0,0,0,12,7a.483.483,0,0,0-.5.47V8.5H10.25a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H11.5v1.03A.483.483,0,0,0,12,17a.489.489,0,0,0,.5-.47V15.5h.75a2.006,2.006,0,0,0,2-2A2.033,2.033,0,0,0,14.28,11.78ZM10.25,9.5h2.5a1,1,0,0,1,0,2h-2.5Zm3,5h-3v-2h3a1,1,0,0,1,0,2Z"}}]}]}]})(a)}function g(a){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm187.61-168.34l-14.5-46 38.8-28.73-48.27-.43L256 87.94l-15.33 45.78-48.27.43 38.8 28.73-14.5 46 39.31-28zM254.13 311.5l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z"}}]})(a)}function m(a){return r({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M8.5 0c-2.757 0-5 2.243-5 5 0 1.375 0.555 2.659 1.562 3.616 0.085 0.082 0.18 0.154 0.276 0.226l0.103 0.078c0.179 0.141 0.369 0.257 0.559 0.371v7.209l2.479-1.901 2.521 1.901v-7.209c0.19-0.114 0.381-0.231 0.56-0.372l0.103-0.077c0.096-0.072 0.19-0.144 0.276-0.226 1.006-0.957 1.561-2.241 1.561-3.616 0-2.757-2.243-5-5-5zM10 14.493l-1.526-1.151-1.474 1.131v-4.225c0.482 0.167 0.986 0.252 1.5 0.252s1.018-0.085 1.5-0.252v4.245zM11.249 7.892c-0.057 0.055-0.121 0.101-0.185 0.147l-0.123 0.094c-1.445 1.135-3.438 1.134-4.881 0.001l-0.124-0.095c-0.064-0.047-0.128-0.093-0.185-0.147-0.807-0.767-1.251-1.793-1.251-2.892 0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.099-0.444 2.125-1.251 2.892zM10.25 5c0 0.966-0.784 1.75-1.75 1.75s-1.75-0.784-1.75-1.75 0.784-1.75 1.75-1.75 1.75 0.784 1.75 1.75z"}}]})(a)}const p=()=>{const a=s(n=>n.coin.coin);return e("div",{className:"container-coin-stats",children:[t("h2",{children:"Value statistics"}),e("p",{children:["An overview showing the statistics of ",a.name,", such as the base and quote currency, the rank, and trading volume"]}),t(d,{responsive:!0,children:e("tbody",{children:[t(i,{icon:t(u,{}),title:"Price to USD",quantity:`$ ${parseFloat(a.price).toFixed(2)}`}),t(i,{icon:t(v,{}),title:"Price to BTC",quantity:`${parseFloat(a.btcPrice).toFixed(4)} BTC`}),t(i,{icon:t(g,{}),title:"Rank",quantity:a.rank}),t(i,{icon:t(h,{}),title:"24h volume",quantity:l(a["24hVolume"])}),t(i,{icon:t(c,{}),title:"Market cap",quantity:l(a.marketCap)}),t(i,{icon:t(c,{}),title:"Fully diluted market cap",quantity:l(a.fullyDilutedMarketCap)}),t(i,{icon:t(m,{}),title:"All-time high (daily avg.)",quantity:`$${parseFloat(a.allTimeHigh.price).toFixed(2)}`})]})})]})},M=p;export{M as default};
