import{d as c,u as A,r as l,j as s,Z as j,q as M,m as O,L as S}from"./index-DZMFd3xx.js";import{P as y}from"./power-BI6-Iqq2.js";import{R as B,X as $,Y as K,T as E,B as L}from"./generateCategoricalChart-Oe5Pfjzz.js";import{B as P}from"./BarChart-CUlAjkga.js";import{L as R,U as T}from"./unlock-D57hf__S.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=c("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=c("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=c("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=c("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]),F=()=>{const{rooms:d,addNotification:x}=A(),[f,k]=l.useState(""),[r,v]=l.useState("tümü"),[h,p]=l.useState(()=>{const e={};return d.forEach(t=>{e[t.id]={temp:22+parseInt(t.id)%5,power:t.status==="dolu"||Math.random()>.4,light:t.status==="dolu",lock:!0,ac:t.status==="dolu"}}),e}),n=(e,t)=>{p(a=>({...a,[e]:{...a[e],[t]:!a[e][t]}})),x({type:"info",msg:`Oda ${e}: ${t} durumu değiştirildi`})},m=(e,t)=>{p(a=>({...a,[e]:{...a[e],temp:Math.min(30,Math.max(16,t))}}))},o=l.useMemo(()=>d.map(e=>({...e,controls:h[e.id]||{temp:22,power:!1,light:!1,lock:!0,ac:!1}})),[d,h]),u=o.filter(e=>{const t=e.id.toString().includes(f);return r==="dolu"?t&&e.status==="dolu":r==="boş"?t&&e.status==="boş":r==="açık"?t&&e.controls.power:r==="kapalı"?t&&!e.controls.power:t}),g=o.filter(e=>e.controls.power).length,i=o.filter(e=>e.status!=="dolu"&&e.controls.power).length,b=i>0?Math.round(i/g*100):0,z=Math.round(o.reduce((e,t)=>e+t.controls.temp,0)/o.length),N=[{name:"Dolu+Açık",value:o.filter(e=>e.status==="dolu"&&e.controls.power).length},{name:"Boş+Açık",value:i},{name:"Kapalı",value:o.filter(e=>!e.controls.power).length}],C=()=>{const e={};o.forEach(t=>{t.status!=="dolu"&&t.controls.power&&(e[t.id]={...t.controls,power:!1,light:!1,ac:!1})}),Object.keys(e).length>0&&(p(t=>({...t,...e})),x({type:"success",msg:`${Object.keys(e).length} boş odanın enerjisi kapatıldı`}))};return s.jsxs("div",{className:"smart-page",children:[s.jsxs("div",{className:"smart-head",children:[s.jsxs("div",{children:[s.jsxs("h2",{children:[s.jsx(j,{size:20})," Akıllı Oda & Enerji Yönetimi"]}),s.jsx("span",{children:"IoT entegrasyonu, enerji tasarrufu ve merkezi kontrol"})]}),s.jsxs("div",{className:"head-stats",children:[s.jsxs("div",{className:"hs-i",children:[s.jsx(y,{size:14})," ",s.jsx("strong",{children:g})," Oda Açık"]}),s.jsxs("div",{className:"hs-i",children:[s.jsx(H,{size:14})," ",s.jsxs("strong",{children:[z,"°C"]})," Ort. Sıcaklık"]}),s.jsxs("button",{className:"hs-btn",onClick:C,children:[s.jsx(w,{size:14})," Boş Odaları Kapat (",i,")"]})]})]}),s.jsxs("div",{className:"energy-overview",children:[s.jsxs("div",{className:"eo-chart",children:[s.jsx("h4",{children:"Enerji Dağılımı"}),s.jsx(B,{width:"100%",height:100,children:s.jsxs(P,{data:N,layout:"vertical",barSize:14,children:[s.jsx($,{type:"number",hide:!0}),s.jsx(K,{type:"category",dataKey:"name",axisLine:!1,tickLine:!1,tick:{fill:"#64748b",fontSize:11},width:70}),s.jsx(E,{}),s.jsx(L,{dataKey:"value",fill:"#3b82f6",radius:[0,6,6,0]})]})})]}),b>0&&s.jsxs("div",{className:"eo-warn",children:[s.jsx(j,{size:16,color:"#f59e0b"}),s.jsxs("span",{children:[s.jsxs("strong",{children:[i," boş oda"]}),'da enerji harcıyorsunuz. "Boş Odaları Kapat" ile %',b," tasarruf sağlayabilirsiniz."]})]})]}),s.jsxs("div",{className:"smart-controls",children:[s.jsxs("div",{className:"search-bar",children:[s.jsx(M,{size:16,color:"#94a3b8"}),s.jsx("input",{placeholder:"Oda no ara...",value:f,onChange:e=>k(e.target.value)})]}),s.jsx("div",{className:"filters",children:["tümü","dolu","boş","açık","kapalı"].map(e=>s.jsxs("button",{className:`f-pill ${r===e?"active":""}`,onClick:()=>v(e),children:[e.charAt(0).toUpperCase()+e.slice(1)," (",e==="tümü"?o.length:u.length,")"]},e))})]}),s.jsx("div",{className:"room-grid",children:u.map((e,t)=>s.jsxs(O.div,{className:`s-room-card ${e.controls.power?"on":"off"}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:t*.02},children:[s.jsxs("div",{className:"src-top",children:[s.jsxs("div",{className:"src-id",children:["Oda ",e.id]}),s.jsx("div",{className:`src-occ ${e.status==="dolu"?"occupied":"empty"}`,children:e.status==="dolu"?"🟢 İçeride":e.status==="arızalı"?"🔴 Arızalı":"⬜ Boş"})]}),s.jsxs("div",{className:"src-main",children:[s.jsxs("div",{className:"src-temp",children:[s.jsx(Y,{size:16,color:"#ef4444"}),s.jsx("button",{onClick:()=>m(e.id,e.controls.temp-1),children:"−"}),s.jsxs("strong",{children:[e.controls.temp,"°C"]}),s.jsx("button",{onClick:()=>m(e.id,e.controls.temp+1),children:"+"})]}),s.jsxs("div",{className:"src-actions",children:[s.jsx("button",{className:`src-a-btn ${e.controls.light?"active":""}`,title:"Aydınlatma",onClick:()=>n(e.id,"light"),children:s.jsx(R,{size:16})}),s.jsx("button",{className:`src-a-btn ${e.controls.lock?"active":""}`,title:"Kilit",onClick:()=>n(e.id,"lock"),children:e.controls.lock?s.jsx(S,{size:16}):s.jsx(T,{size:16})}),s.jsx("button",{className:`src-a-btn ${e.controls.ac?"active":""}`,title:"Klima",onClick:()=>n(e.id,"ac"),children:s.jsx(D,{size:16})})]})]}),s.jsxs("div",{className:"src-foot",children:[s.jsxs("button",{className:`power-toggle ${e.controls.power?"on":""}`,onClick:()=>n(e.id,"power"),children:[e.controls.power?s.jsx(y,{size:14}):s.jsx(w,{size:14}),s.jsx("span",{children:e.controls.power?"Aktif":"Kapalı"})]}),s.jsx("span",{className:"room-type-tag",children:e.type})]})]},e.id))}),s.jsx("style",{children:`
        .smart-page { padding: 28px; display: flex; flex-direction: column; gap: 20px; }
        .smart-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .smart-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .smart-head span { font-size: 13px; color: #94a3b8; }
        .head-stats { display: flex; gap: 10px; align-items:center; }
        .hs-i { background: #1e293b; color: white; padding: 8px 16px; border-radius: 12px; font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        .hs-i strong { color: #f1c40f; }
        .hs-btn { padding:8px 16px; border-radius:12px; border:1.5px solid #ef4444; background:#fef2f2; color:#ef4444; font-size:11px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; }
        .hs-btn:hover { background:#ef4444; color:white; }

        .energy-overview { display:flex; gap:16px; align-items:center; }
        .eo-chart { background:white; border:1px solid #e2e8f0; border-radius:16px; padding:16px; flex:1; }
        .eo-chart h4 { font-size:12px; font-weight:800; color:#64748b; margin-bottom:8px; }
        .eo-warn { background:#fffbeb; border:1px solid #fde68a; border-radius:14px; padding:14px 18px; display:flex; align-items:center; gap:10px; font-size:12px; color:#92400e; flex:1; }

        .smart-controls { display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .search-bar { flex: 1; max-width: 400px; display: flex; align-items: center; gap: 10px; background: white; border: 1.5px solid #e2e8f0; padding: 10px 16px; border-radius: 12px; }
        .search-bar input { border: none; background: transparent; outline: none; font-size: 13px; color: #475569; width: 100%; }
        .filters { display: flex; gap: 6px; align-items: center; }
        .f-pill { padding: 7px 14px; border-radius: 20px; border: 1.5px solid #e2e8f0; background: white; font-size: 11px; font-weight: 700; color: #64748b; cursor: pointer; transition: 0.2s; }
        .f-pill.active { background: #1e293b; color: white; border-color: #1e293b; }

        .room-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 14px; }
        .s-room-card { background: white; border-radius: 18px; border: 1.5px solid #e2e8f0; padding: 16px; display: flex; flex-direction: column; gap: 14px; transition: 0.3s; }
        .s-room-card.off { opacity: 0.5; border-style:dashed; }
        .s-room-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.05); }

        .src-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .src-id { font-size: 15px; font-weight: 900; color: #1e293b; }
        .src-occ { font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 6px; }
        .src-occ.occupied { background: #fef2f2; color: #ef4444; }
        .src-occ.empty { background: #f0fdf4; color: #10b981; }

        .src-main { display: flex; align-items: center; justify-content: space-between; }
        .src-temp { display: flex; align-items: center; gap: 6px; }
        .src-temp strong { font-size: 18px; font-weight: 900; color: #1e293b; }
        .src-temp button { width:24px; height:24px; border-radius:6px; border:1px solid #e2e8f0; background:white; cursor:pointer; font-weight:800; color:#64748b; }
        .src-actions { display: flex; gap: 5px; }
        .src-a-btn { width: 32px; height: 32px; border-radius: 8px; border: 1.5px solid #f1f5f9; background: white; color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .src-a-btn.active { color: #3b82f6; border-color: #3b82f6; background: #eff6ff; }
        
        .src-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid #f1f5f9; }
        .power-toggle { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #94a3b8; background:none; border:none; cursor:pointer; }
        .power-toggle.on { color: #10b981; }
        .room-type-tag { font-size:9px; font-weight:800; color:#94a3b8; background:#f1f5f9; padding:2px 8px; border-radius:6px; }
      `})]})};export{F as default};
