import{d as D,u as O,r as d,j as e,m as P}from"./index-Cmjygl0X.js";import{A as S}from"./arrow-up-right-D1exjIrl.js";import{R as k,X as $,Y as K,T as N,C as G}from"./generateCategoricalChart-CZ4xd-5y.js";import{A as I,a as M}from"./AreaChart-G0BGFBWM.js";import{C as T}from"./CartesianGrid-6wqtghJy.js";import{P as Y,a as V}from"./PieChart-39BSP6hQ.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=D("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]),J=()=>{const{rooms:o,reservations:B,cashTransactions:n,stats:w,TODAY:m}=O(),t=d.useMemo(()=>n.filter(s=>s.type==="gelir").reduce((s,i)=>s+i.amount,0),[n]),p=d.useMemo(()=>n.filter(s=>s.type==="gider").reduce((s,i)=>s+i.amount,0),[n]),f=t-p,z=w.occupancyRate,x=o.filter(s=>s.status==="dolu").length,A=x>0?Math.round(t/x):0,E=o.length>0?Math.round(t/o.length):0,R=d.useMemo(()=>{const s=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],i=new Date(m).getMonth();return s.map((a,l)=>({month:a,current:l<=i?Math.round(t*(.06+l*.02)+Math.random()*1e4):0,last:Math.round(t*(.05+l*.015))}))},[t,m]),c=d.useMemo(()=>{const s={Personel:0,Gıda:0,Enerji:0,Pazarlama:0,Diğer:0};n.filter(a=>a.type==="gider").forEach(a=>{var l,r,h,g,u,b,j,y,v;(l=a.desc)!=null&&l.includes("Maaş")||(r=a.desc)!=null&&r.includes("personel")?s.Personel+=a.amount:(h=a.desc)!=null&&h.includes("yiyecek")||(g=a.desc)!=null&&g.includes("gıda")||(u=a.desc)!=null&&u.includes("mutfak")?s.Gıda+=a.amount:(b=a.desc)!=null&&b.includes("enerji")||(j=a.desc)!=null&&j.includes("elektrik")?s.Enerji+=a.amount:(y=a.desc)!=null&&y.includes("pazarlama")||(v=a.desc)!=null&&v.includes("reklam")?s.Pazarlama+=a.amount:s.Diğer+=a.amount}),Object.values(s).reduce((a,l)=>a+l,0);const i=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444"];return Object.entries(s).map(([a,l],r)=>({name:a,value:Math.round(l/1e3)||Math.round(p*[.45,.2,.15,.1,.1][r]/1e3),color:i[r]}))},[n,p]),C=c.reduce((s,i)=>s+i.value,0),L=[{name:"Grand Hotel Istanbul",rev:Math.round(t*.4),pct:40,color:"#3b82f6"},{name:"Antalya Resort",rev:Math.round(t*.25),pct:25,color:"#10b981"},{name:"Boutique Izmir",rev:Math.round(t*.2),pct:20,color:"#8b5cf6"},{name:"Alpine Lodge",rev:Math.round(t*.15),pct:15,color:"#f59e0b"}];return e.jsxs("div",{className:"vision-container",children:[e.jsx("header",{className:"header",children:e.jsxs("div",{className:"title-section",children:[e.jsx(H,{size:32,className:"icon-blue"}),e.jsxs("div",{children:[e.jsx("h2",{children:"Global Executive Vision Dashboard"}),e.jsx("span",{children:"Zincir bazlı finansal veriler ve operasyonel görünüm — Canlı Veri"})]})]})}),e.jsxs("div",{className:"vision-grid",children:[e.jsx("section",{className:"kpi-row",children:[{label:"REVENUE",val:`₺${t.toLocaleString()}`,badge:"Canlı"},{label:"EBITDA",val:`₺${f.toLocaleString()}`,badge:`%${t>0?Math.round(f/t*100):0}`},{label:"OCCUPANCY",val:`%${z}`,badge:`${x}/${o.length}`},{label:"ADR",val:`₺${A.toLocaleString()}`,badge:"Canlı"},{label:"REVPAR",val:`₺${E.toLocaleString()}`,badge:"Canlı"}].map((s,i)=>e.jsxs(P.div,{className:"card kpi-card",whileHover:{y:-3},children:[e.jsx("span",{className:"label",children:s.label}),e.jsxs("div",{className:"k-val",children:[e.jsx("strong",{children:s.val}),e.jsxs("span",{className:"pos",children:[e.jsx(S,{size:14})," ",s.badge]})]})]},i))}),e.jsxs("div",{className:"center-grid mt-20",children:[e.jsxs("section",{className:"card chart-card",children:[e.jsxs("div",{className:"c-head",children:[e.jsx("h3",{children:"AYLIK GELİR TRENDİ"}),e.jsxs("div",{className:"legend",children:[e.jsxs("div",{className:"l-item",children:[e.jsx("div",{className:"dot blue"})," Bu Yıl"]}),e.jsxs("div",{className:"l-item",children:[e.jsx("div",{className:"dot gray"})," Geçen Yıl"]})]})]}),e.jsx("div",{style:{height:320},children:e.jsx(k,{width:"100%",height:"100%",children:e.jsxs(I,{data:R,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorCurrent",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.15}),e.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:0})]})}),e.jsx(T,{strokeDasharray:"3 3",vertical:!1,stroke:"#f1f5f9"}),e.jsx($,{dataKey:"month",axisLine:!1,tickLine:!1,tick:{fill:"#94a3b8",fontSize:11}}),e.jsx(K,{axisLine:!1,tickLine:!1,tick:{fill:"#94a3b8",fontSize:11},tickFormatter:s=>`₺${(s/1e3).toFixed(0)}K`}),e.jsx(N,{formatter:s=>[`₺${s.toLocaleString()}`]}),e.jsx(M,{type:"monotone",dataKey:"current",stroke:"#3b82f6",strokeWidth:3,fillOpacity:1,fill:"url(#colorCurrent)"}),e.jsx(M,{type:"monotone",dataKey:"last",stroke:"#cbd5e1",strokeWidth:2,fillOpacity:0})]})})})]}),e.jsx("aside",{className:"side-panel",children:e.jsxs("section",{className:"card expense-card",children:[e.jsx("h3",{children:"GİDER DAĞILIMI"}),e.jsxs("div",{className:"donut-box",children:[e.jsx(k,{width:"100%",height:200,children:e.jsxs(Y,{children:[e.jsx(V,{data:c,innerRadius:55,outerRadius:75,paddingAngle:4,dataKey:"value",children:c.map((s,i)=>e.jsx(G,{fill:s.color},i))}),e.jsx(N,{formatter:s=>[`₺${s}K`]})]})}),e.jsxs("div",{className:"d-text",children:[e.jsxs("strong",{children:["₺",C,"K"]}),e.jsx("span",{children:"TOPLAM"})]})]}),e.jsx("div",{className:"exp-list",children:c.map((s,i)=>e.jsxs("div",{className:"exp-item",children:[e.jsxs("div",{className:"e-label",children:[e.jsx("div",{className:"dot",style:{background:s.color}}),e.jsx("span",{children:s.name})]}),e.jsxs("strong",{children:["₺",s.value,"K"]})]},i))})]})})]}),e.jsx("div",{className:"bottom-grid mt-20",children:e.jsxs("section",{className:"card details-card",children:[e.jsx("h3",{children:"TESİS PERFORMANSI"}),e.jsx("div",{className:"p-perf-list",children:L.map((s,i)=>e.jsxs("div",{className:"p-perf-item",children:[e.jsxs("div",{className:"p-info",children:[e.jsx("div",{className:"dot",style:{background:s.color}}),e.jsx("span",{children:s.name})]}),e.jsxs("div",{className:"p-val",children:[e.jsxs("strong",{children:["₺",s.rev.toLocaleString()]}),e.jsxs("span",{className:"pos",children:["%",s.pct]})]})]},i))})]})})]}),e.jsx("style",{children:`
        .vision-container {
          padding: 30px;
          background: #f1f5f9;
          min-height: calc(100vh - 70px);
          overflow-y: auto;
          display: flex; flex-direction: column; gap: 30px;
        }
        .header { display: flex; justify-content: space-between; align-items: center; }
        .title-section { display: flex; align-items: center; gap: 20px; }
        .icon-blue { color: #3b82f6; }
        .title-section h2 { font-size: 24px; font-weight: 800; color: #1e293b; }
        .title-section span { font-size: 14px; color: #64748b; }
        .kpi-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .kpi-card { padding: 22px; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.04); cursor:default; }
        .kpi-card .label { font-size: 10px; font-weight: 900; color: #94a3b8; letter-spacing: 1px; display: block; margin-bottom: 8px; }
        .k-val { display: flex; align-items: center; gap: 10px; }
        .k-val strong { font-size: 22px; color: #1e293b; }
        .pos { color: #10b981; font-weight: 800; font-size: 11px; display: flex; align-items: center; gap: 4px; background:#f0fdf4; padding:2px 8px; border-radius:20px; }
        .center-grid { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
        .card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; }
        .card h3 { font-size: 11px; font-weight: 900; color: #64748b; margin-bottom: 20px; letter-spacing: 1px; }
        .c-head { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .legend { display: flex; gap: 16px; }
        .l-item { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #64748b; font-weight: 700; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot.blue { background: #3b82f6; }
        .dot.gray { background: #cbd5e1; }
        .donut-box { position: relative; display: flex; align-items: center; justify-content: center; }
        .d-text { position: absolute; text-align: center; }
        .d-text strong { display: block; font-size: 18px; color: #1e293b; }
        .d-text span { font-size: 9px; color: #94a3b8; font-weight: 800; letter-spacing:1px; }
        .exp-list { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .exp-item { display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
        .e-label { display: flex; align-items: center; gap: 10px; color: #64748b; font-weight:600; }
        .exp-item strong { color:#1e293b; font-size:13px; }
        .bottom-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .p-perf-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
        .p-perf-item { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #f8fafc; border-radius: 14px; }
        .p-info { display: flex; align-items: center; gap: 10px; color: #475569; font-weight: 700; font-size: 13px; }
        .p-val { text-align: right; }
        .p-val strong { display: block; font-size: 15px; color: #1e293b; }
        .mt-20 { margin-top: 20px; }
      `})]})};export{J as default};
