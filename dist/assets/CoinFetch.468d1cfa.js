import{q as r,r as n,k as u,d as p,t as h,v as g,u as C,j as m,e as x}from"./index.1a190139.js";const d="/api/coin",y=async(a,s)=>{const{data:t}=await r.get(`${d}/${a}`,{params:{...s}});return t.data},S=async(a,s)=>{const{data:t}=await r.get(`${d}/${a}/history`,{params:{...s}});return t.data},f={getCoin:y,getCoinHistory:S},L=a=>{const[s,t]=n.exports.useState(!0),o=u(),e=async()=>{const c=await f.getCoin(a);o(h(c.coin)),t(!1)};return n.exports.useEffect(()=>{t(!0),e()},[a]),{coinInfoLoading:s}},l=a=>{const[s,t]=n.exports.useState(!0),o=p(i=>i.coin.params),e=u(),c=async()=>{const i=await f.getCoinHistory(a,o);e(g(i)),t(!1)};return n.exports.useEffect(()=>{t(!0),c()},[a,o]),{coinStatsLoading:s}},w=({children:a})=>{const t=C("/coin/:id").params.id,{coinInfoLoading:o}=L(t);return l(t),o?m(x,{height:"80vh"}):a};export{w as default};