import{u as N,r as d,j as e,q as z,n as y,F as S,f as C,m as g,b as T,X as k,A}from"./index-Cmjygl0X.js";import{P as E}from"./printer-5ER4zFMW.js";import{P as M}from"./plus-BrOwU03T.js";import{T as P}from"./trash-2-s66qkK0a.js";const m=[{desc:"Minibar",amount:0,type:"extra"},{desc:"Restoran — Öğle Yemeği",amount:450,type:"extra"},{desc:"Restoran — Akşam Yemeği",amount:850,type:"extra"},{desc:"SPA — Masaj (60 dk)",amount:600,type:"extra"},{desc:"Oda Servisi",amount:0,type:"extra"},{desc:"Çamaşır Hizmeti",amount:150,type:"extra"},{desc:"Havaalanı Transfer",amount:500,type:"extra"},{desc:"Telefon Görüşmesi",amount:0,type:"extra"},{desc:"Para Cezası (Sigara)",amount:500,type:"other"},{desc:"Diğer / Manuel",amount:0,type:"extra"}],L=["Nakit","Kredi Kartı","EFT/Havale","Acente Faturası","Açık Hesap"],F=({res:i,onClose:l,onPay:h})=>{const[n,c]=d.useState(i.balance),[r,p]=d.useState("Kredi Kartı"),[a,x]=d.useState(!1),u=()=>{n<=0||(h(i.id,Number(n),r),x(!0),setTimeout(l,1400))};return e.jsx(g.div,{className:"modal-overlay",onClick:l,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(g.div,{className:"pay-modal",onClick:o=>o.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:a?e.jsxs("div",{className:"pay-success",children:[e.jsx(T,{size:56,color:"#10b981"}),e.jsx("h3",{children:"Ödeme Alındı!"}),e.jsxs("p",{children:["₺",Number(n).toLocaleString()," — ",r]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"modal-head",children:[e.jsxs("h3",{children:["Tahsilat Al — ",i.guest]}),e.jsx("button",{onClick:l,children:e.jsx(k,{size:20})})]}),e.jsxs("div",{className:"pay-body",children:[e.jsxs("div",{className:"balance-badge",children:[e.jsx(A,{size:20})," Kalan Bakiye: ",e.jsxs("strong",{children:["₺",i.balance.toLocaleString()]})]}),e.jsx("label",{children:"Tutar (₺)"}),e.jsx("input",{type:"number",value:n,onChange:o=>c(o.target.value),min:1,max:i.total}),e.jsx("div",{className:"quick-amounts",children:[i.balance,Math.round(i.balance/2),500,1e3].filter((o,s,f)=>o>0&&f.indexOf(o)===s).map(o=>e.jsxs("button",{onClick:()=>c(o),children:["₺",o.toLocaleString()]},o))}),e.jsx("label",{children:"Ödeme Yöntemi"}),e.jsx("div",{className:"method-grid",children:L.map(o=>e.jsx("button",{className:`method-btn ${r===o?"active":""}`,onClick:()=>p(o),children:o},o))})]}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{className:"btn-cancel",onClick:l,children:"İptal"}),e.jsxs("button",{className:"btn-pay",onClick:u,disabled:!n||n<=0,children:[e.jsx(y,{size:16})," ₺",Number(n||0).toLocaleString()," Tahsil Et"]})]})]})})})},H=({resId:i,onClose:l,onAdd:h})=>{const[n,c]=d.useState(m[0]),[r,p]=d.useState(m[0].desc),[a,x]=d.useState(m[0].amount),u=s=>{c(s),p(s.desc),x(s.amount)},o=()=>{!r||!a||(h(i,{desc:r,amount:Number(a),type:n.type}),l())};return e.jsx(g.div,{className:"modal-overlay",onClick:l,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(g.div,{className:"add-extra-modal",onClick:s=>s.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("h3",{children:"Ekstra Tahakkuk Ekle"}),e.jsx("button",{onClick:l,children:e.jsx(k,{size:20})})]}),e.jsxs("div",{className:"extra-body",children:[e.jsx("div",{className:"preset-list",children:m.map((s,f)=>e.jsx("button",{className:`preset-item ${n===s?"active":""}`,onClick:()=>u(s),children:s.desc},f))}),e.jsxs("div",{className:"extra-form",children:[e.jsx("label",{children:"Açıklama"}),e.jsx("input",{value:r,onChange:s=>p(s.target.value),placeholder:"Açıklama..."}),e.jsx("label",{children:"Tutar (₺)"}),e.jsx("input",{type:"number",value:a,onChange:s=>x(s.target.value),min:1,placeholder:"0"}),e.jsx("button",{className:"btn-add-confirm",onClick:o,disabled:!r||!a,children:"Tahakkuk Ekle"})]})]})]})})},D=()=>{const{reservations:i,folioLines:l,addFolioLine:h,deleteFolioLine:n,makePayment:c}=N(),[r,p]=d.useState(""),[a,x]=d.useState(i.find(t=>t.status==="check-in")||null),[u,o]=d.useState(!1),[s,f]=d.useState(!1),w=i.filter(t=>t.status==="check-in").filter(t=>{var b;return t.guest.toLowerCase().includes(r.toLowerCase())||((b=t.room)==null?void 0:b.includes(r))}),j=a?l[a.id]||[]:[],v=j.reduce((t,b)=>t+b.amount,0);return e.jsxs("div",{className:"folio-layout",children:[e.jsxs("aside",{className:"folio-sidebar",children:[e.jsxs("div",{className:"fs-head",children:[e.jsx("h3",{children:"İç Misafirler"}),e.jsxs("div",{className:"search-mini",children:[e.jsx(z,{size:14}),e.jsx("input",{placeholder:"Ara...",value:r,onChange:t=>p(t.target.value)})]})]}),e.jsx("div",{className:"guest-list",children:w.map(t=>e.jsxs("button",{className:`guest-item ${(a==null?void 0:a.id)===t.id?"active":""}`,onClick:()=>x(t),children:[e.jsx("div",{className:"gi-room",children:t.room}),e.jsxs("div",{className:"gi-info",children:[e.jsx("strong",{children:t.guest}),e.jsxs("span",{children:[t.checkIn," — ",t.checkOut]})]}),t.balance>0&&e.jsxs("div",{className:"gi-bal",children:["₺",t.balance.toLocaleString()]})]},t.id))})]}),e.jsx("main",{className:"folio-main",children:a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"folio-header",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["Folio — ",a.guest]}),e.jsxs("span",{children:["Oda ",a.room," · ",a.checkIn," / ",a.checkOut," · ",a.board]})]}),e.jsxs("div",{className:"fh-actions",children:[e.jsxs("button",{className:"btn-outline",onClick:()=>window.print(),children:[e.jsx(E,{size:16})," Yazdır"]}),e.jsxs("button",{className:"btn-extra",onClick:()=>f(!0),children:[e.jsx(M,{size:16})," Ekstra Tahakkuk"]}),a.balance>0&&e.jsxs("button",{className:"btn-pay",onClick:()=>o(!0),children:[e.jsx(y,{size:16})," Tahsilat Al (₺",a.balance.toLocaleString(),")"]})]})]}),e.jsx("div",{className:"folio-table-wrap",children:e.jsxs("table",{className:"folio-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tarih"}),e.jsx("th",{children:"Açıklama"}),e.jsx("th",{children:"Tür"}),e.jsx("th",{className:"right",children:"Tutar"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:j.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.date}),e.jsx("td",{children:t.desc}),e.jsx("td",{children:e.jsx("span",{className:`type-tag ${t.type}`,children:t.type==="accommodation"?"Konaklama":"Ekstra"})}),e.jsx("td",{className:"right",children:e.jsxs("strong",{children:["₺",t.amount.toLocaleString()]})}),e.jsx("td",{children:t.type!=="accommodation"&&e.jsx("button",{className:"del-btn",onClick:()=>n(a.id,t.id),children:e.jsx(P,{size:14})})})]},t.id))})]})}),e.jsxs("div",{className:"folio-summary",children:[e.jsxs("div",{className:"fs-row",children:[e.jsx("span",{children:"Toplam Tutar"}),e.jsxs("strong",{children:["₺",v.toLocaleString()]})]}),e.jsxs("div",{className:"fs-row",children:[e.jsx("span",{children:"Ödenen"}),e.jsxs("strong",{className:"green",children:["₺",a.paid.toLocaleString()]})]}),e.jsxs("div",{className:`fs-row total ${a.balance>0?"due":""}`,children:[e.jsx("span",{children:a.balance>0?"Kalan Borç":"Hesap Durumu"}),e.jsx("strong",{children:a.balance>0?`₺${a.balance.toLocaleString()}`:"✓ Kapandı"})]})]})]}):e.jsxs("div",{className:"empty-state",children:[e.jsx(S,{size:64,color:"#e2e8f0"}),e.jsx("p",{children:"Soldaki listeden misafir seçin"})]})}),e.jsxs(C,{children:[u&&a&&e.jsx(F,{res:a,onClose:()=>o(!1),onPay:c}),s&&a&&e.jsx(H,{resId:a.id,onClose:()=>f(!1),onAdd:h})]}),e.jsx("style",{children:`
        .folio-layout { display:flex; height:calc(100vh - 70px); }

        .folio-sidebar { width:280px; background:white; border-right:1px solid #e2e8f0; display:flex; flex-direction:column; }
        .fs-head { padding:20px; border-bottom:1px solid #f1f5f9; }
        .fs-head h3 { font-size:15px; font-weight:800; color:#1e293b; margin-bottom:10px; }
        .search-mini { display:flex; align-items:center; gap:8px; background:#f8fafc; border:1px solid #e2e8f0; padding:8px 12px; border-radius:10px; }
        .search-mini input { border:none; background:transparent; outline:none; font-size:12px; width:100%; }
        .guest-list { flex:1; overflow-y:auto; padding:8px; }
        .guest-item { width:100%; display:flex; align-items:center; gap:10px; padding:12px; border-radius:12px; border:none; background:transparent; cursor:pointer; text-align:left; margin-bottom:4px; transition:0.2s; }
        .guest-item:hover { background:#f8fafc; }
        .guest-item.active { background:#eff6ff; border:1.5px solid #3b82f6; }
        .gi-room { width:40px; height:40px; background:#f1f5f9; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:900; color:#1e293b; font-size:13px; flex-shrink:0; }
        .gi-info { flex:1; }
        .gi-info strong { display:block; font-size:13px; color:#1e293b; font-weight:700; }
        .gi-info span { font-size:11px; color:#94a3b8; }
        .gi-bal { font-size:11px; font-weight:800; color:#ef4444; }

        .folio-main { flex:1; padding:30px; overflow-y:auto; display:flex; flex-direction:column; gap:20px; }
        .folio-header { display:flex; justify-content:space-between; align-items:flex-start; }
        .folio-header h2 { font-size:22px; font-weight:800; color:#1e293b; }
        .folio-header span { font-size:13px; color:#94a3b8; }
        .fh-actions { display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
        .btn-outline { padding:10px 16px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; color:#475569; }
        .btn-extra  { padding:10px 16px; border-radius:10px; border:none; background:#10b981; color:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .btn-pay    { padding:10px 20px; border-radius:10px; border:none; background:#3b82f6; color:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }

        .folio-table-wrap { background:white; border-radius:16px; border:1px solid #e2e8f0; overflow:hidden; }
        .folio-table { width:100%; border-collapse:collapse; }
        .folio-table thead { background:#f8fafc; }
        .folio-table th { text-align:left; padding:14px 18px; font-size:11px; color:#94a3b8; text-transform:uppercase; font-weight:800; }
        .folio-table th.right { text-align:right; }
        .folio-table td { padding:16px 18px; font-size:14px; color:#475569; border-bottom:1px solid #f8fafc; vertical-align:middle; }
        .folio-table td.right { text-align:right; }
        .type-tag { padding:3px 10px; border-radius:20px; font-size:10px; font-weight:800; }
        .type-tag.accommodation { background:#eff6ff; color:#3b82f6; }
        .type-tag.extra, .type-tag.other { background:#fff7ed; color:#f59e0b; }
        .del-btn { background:transparent; border:none; color:#cbd5e1; cursor:pointer; }
        .del-btn:hover { color:#ef4444; }

        .folio-summary { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:20px 24px; max-width:380px; margin-left:auto; }
        .fs-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f8fafc; font-size:14px; color:#64748b; }
        .fs-row strong { color:#1e293b; }
        .fs-row.total { border-bottom:none; padding-top:14px; font-size:16px; font-weight:800; }
        .fs-row.total.due strong { color:#ef4444; }
        .green { color:#10b981 !important; }

        .empty-state { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; color:#94a3b8; font-size:15px; font-weight:600; }

        /* Modals */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; z-index:1000; }
        .pay-modal, .add-extra-modal { background:white; border-radius:24px; overflow:hidden; box-shadow:0 25px 50px rgba(0,0,0,0.4); min-width:380px; }
        .modal-head { padding:22px 28px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; }
        .modal-head h3 { font-size:18px; font-weight:800; color:#1e293b; }
        .modal-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }
        .pay-body { padding:24px 28px; display:flex; flex-direction:column; gap:14px; }
        .balance-badge { display:flex; align-items:center; gap:8px; background:#fef2f2; color:#ef4444; padding:12px 16px; border-radius:12px; font-size:13px; font-weight:700; }
        .pay-body label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:-8px; }
        .pay-body input { padding:12px 16px; border:1.5px solid #e2e8f0; border-radius:12px; font-size:16px; font-weight:700; outline:none; width:100%; }
        .quick-amounts { display:flex; gap:8px; flex-wrap:wrap; }
        .quick-amounts button { padding:6px 14px; border-radius:8px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .quick-amounts button:hover { background:#eff6ff; border-color:#3b82f6; color:#3b82f6; }
        .method-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .method-btn { padding:10px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .method-btn.active { background:#1e293b; color:white; border-color:#1e293b; }
        .modal-foot { padding:16px 28px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end; gap:10px; }
        .btn-cancel { padding:12px 20px; border-radius:12px; border:1px solid #e2e8f0; background:white; font-weight:700; cursor:pointer; }
        .btn-pay { padding:12px 24px; border-radius:12px; border:none; background:#3b82f6; color:white; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .btn-pay:disabled { opacity:.5; cursor:not-allowed; }
        .pay-success { padding:60px; text-align:center; }
        .pay-success h3 { font-size:22px; font-weight:900; color:#10b981; margin:14px 0 6px; }
        .pay-success p { color:#64748b; }

        .extra-body { display:flex; gap:0; }
        .preset-list { width:200px; border-right:1px solid #f1f5f9; padding:12px; display:flex; flex-direction:column; gap:4px; max-height:400px; overflow-y:auto; }
        .preset-item { width:100%; text-align:left; padding:10px 12px; border-radius:8px; border:none; background:transparent; font-size:12px; font-weight:600; color:#64748b; cursor:pointer; }
        .preset-item:hover, .preset-item.active { background:#eff6ff; color:#3b82f6; }
        .extra-form { flex:1; padding:20px; display:flex; flex-direction:column; gap:12px; }
        .extra-form label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; }
        .extra-form input { padding:12px 16px; border:1.5px solid #e2e8f0; border-radius:12px; font-size:14px; outline:none; }
        .btn-add-confirm { padding:14px; border-radius:12px; border:none; background:#10b981; color:white; font-weight:800; font-size:14px; cursor:pointer; margin-top:8px; }
        .btn-add-confirm:disabled { opacity:.5; }
      `})]})};export{D as default};
