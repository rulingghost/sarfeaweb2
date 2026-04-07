import{c as G,u as S,r as p,j as e,M as g,T as A,B as R,A as b,m as y,b as j}from"./index-oD4_PD50.js";import{D as C}from"./dollar-sign-B0bH2S9Y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=G("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]),i=[{id:1,name:"Açık Folio Kontrolü",desc:"Tüm açık hesaplar kontrol ediliyor..."},{id:2,name:"Gece Sayacı",desc:"Geceler bir ileri alınıyor..."},{id:3,name:"Oda Durumu Raporu",desc:"Tüm oda durumları raporlanıyor..."},{id:4,name:"Gelir Kaydı",desc:"Günlük gelir muhasebe sistemine işleniyor..."},{id:5,name:"KBS Bildirim Kontrolü",desc:"Polis listesi son kez kontrol ediliyor..."},{id:6,name:"Yedekleme",desc:"Veriler yedekleniyor..."}],L=()=>{const{reservations:k,rooms:B,stats:x,cashTransactions:z,addNotification:v,TODAY:N}=S(),[m,f]=p.useState(!1),[h,r]=p.useState([]),[o,l]=p.useState(!1),t=N,u=z.filter(s=>s.date===t),w=u.filter(s=>s.type==="gelir").reduce((s,n)=>s+n.amount,0);u.filter(s=>s.type==="gider").reduce((s,n)=>s+n.amount,0);const a=k.filter(s=>s.status==="check-in"&&s.balance>0),T=async()=>{f(!0),r([]),l(!1);for(let s=0;s<i.length;s++)await new Promise(n=>setTimeout(n,900)),r(n=>[...n,i[s].id]);f(!1),l(!0),v({type:"success",msg:"Gece Raporu başarıyla tamamlandı!"})},d=m?i.find(s=>!h.includes(s.id)):null;return e.jsxs("div",{className:"na-container",children:[e.jsxs("div",{className:"na-header",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(g,{size:22})," Gece Raporu (Night Audit)"]}),e.jsxs("span",{children:[t," tarihli gece sonu kapanış işlemi"]})]}),!m&&!o&&e.jsxs("button",{className:"btn-start",onClick:T,children:[e.jsx(g,{size:16})," Gece Raporunu Başlat"]}),o&&e.jsx("button",{className:"btn-start green",onClick:()=>{l(!1),r([])},children:"✓ Tamamlandı — Yeni Rapor"})]}),e.jsxs("div",{className:"na-summary",children:[e.jsxs("div",{className:"ns-card",children:[e.jsx(C,{size:20,color:"#10b981"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["₺",w.toLocaleString()]}),e.jsx("span",{children:"Günlük Gelir"})]})]}),e.jsxs("div",{className:"ns-card",children:[e.jsx(A,{size:20,color:"#3b82f6"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["%",x.occupancyRate]}),e.jsx("span",{children:"Doluluk Oranı"})]})]}),e.jsxs("div",{className:"ns-card",children:[e.jsx(R,{size:20,color:"#8b5cf6"}),e.jsxs("div",{children:[e.jsx("strong",{children:x.inHouse}),e.jsx("span",{children:"İç Misafir"})]})]}),e.jsxs("div",{className:"ns-card",children:[e.jsx(b,{size:20,color:a.length>0?"#ef4444":"#10b981"}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:a.length>0?"#ef4444":"#10b981"},children:a.length}),e.jsx("span",{children:"Açık Folio"})]})]})]}),a.length>0&&e.jsxs("div",{className:"open-folio-warn",children:[e.jsx(b,{size:18}),e.jsxs("span",{children:["Gece raporunu başlatmadan önce ",a.length," açık folio kapatılmalıdır (Folio modülünde tahsilat alın)."]})]}),e.jsxs("div",{className:"na-steps",children:[e.jsx("h3",{children:"İşlem Adımları"}),e.jsx("div",{className:"steps-list",children:i.map(s=>{const n=h.includes(s.id),c=(d==null?void 0:d.id)===s.id;return e.jsxs(y.div,{className:`audit-step ${n?"done":""} ${c?"running":""}`,children:[e.jsx("div",{className:"as-icon",children:n?e.jsx(j,{size:20,color:"#10b981"}):c?e.jsx(D,{size:20,color:"#3b82f6",className:"spin"}):e.jsx("div",{className:"as-num",children:s.id})}),e.jsxs("div",{className:"as-info",children:[e.jsx("strong",{children:s.name}),c&&e.jsx("span",{children:s.desc}),n&&e.jsx("span",{className:"done-label",children:"Tamamlandı ✓"})]})]},s.id)})})]}),o&&e.jsxs(y.div,{className:"na-done",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[e.jsx(j,{size:48,color:"#10b981"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Gece Raporu Başarıyla Tamamlandı!"}),e.jsxs("p",{children:[t," tarihli kapanış kaydedildi. Sistem yeni güne hazır."]})]})]}),e.jsx("style",{children:`
        .na-container { padding:28px; display:flex; flex-direction:column; gap:22px; max-width:900px; }
        .na-header { display:flex; justify-content:space-between; align-items:flex-start; }
        .na-header h2 { font-size:22px; font-weight:800; color:#1e293b; display:flex; align-items:center; gap:10px; }
        .na-header span { font-size:13px; color:#94a3b8; }
        .btn-start { padding:12px 22px; border-radius:12px; border:none; background:#1e293b; color:white; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .btn-start.green { background:#10b981; }

        .na-summary { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .ns-card { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:18px; display:flex; align-items:center; gap:14px; }
        .ns-card strong { display:block; font-size:22px; font-weight:900; color:#1e293b; }
        .ns-card span { font-size:12px; color:#94a3b8; font-weight:700; }

        .open-folio-warn { display:flex; align-items:center; gap:10px; background:#fffbeb; color:#b45309; padding:14px 18px; border-radius:12px; border:1px solid #fde68a; font-size:13px; font-weight:600; }

        .na-steps { background:white; border-radius:20px; border:1px solid #e2e8f0; padding:24px; }
        .na-steps h3 { font-size:16px; font-weight:800; color:#1e293b; margin-bottom:16px; }
        .steps-list { display:flex; flex-direction:column; gap:10px; }

        .audit-step { display:flex; align-items:center; gap:16px; padding:14px 18px; border-radius:14px; background:#f8fafc; border:1.5px solid transparent; transition:0.3s; }
        .audit-step.done { background:#f0fdf4; border-color:#bbf7d0; }
        .audit-step.running { background:#eff6ff; border-color:#93c5fd; }

        .as-icon { flex-shrink:0; }
        .as-num { width:28px; height:28px; background:#e2e8f0; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; color:#94a3b8; }
        .as-info strong { display:block; font-size:14px; font-weight:700; color:#1e293b; }
        .as-info span { font-size:12px; color:#64748b; }
        .done-label { color:#10b981 !important; font-weight:700; }

        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .na-done { display:flex; align-items:center; gap:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:16px; padding:24px 28px; }
        .na-done h3 { font-size:18px; font-weight:800; color:#10b981; margin-bottom:4px; }
        .na-done p { font-size:13px; color:#64748b; }
      `})]})};export{L as default};
