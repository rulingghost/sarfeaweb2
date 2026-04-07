import{u as T,r as s,j as e,b as A,n as f,p as b,A as O,y as P,f as K,m as h,X as $}from"./index-sbCyfkT4.js";import{P as E}from"./printer-Dkceyiya.js";const q=()=>{const{reservations:g,checkOut:m,makePayment:u,folioLines:j,addNotification:y}=T(),[o,c]=s.useState(null),[k,i]=s.useState(!1),[p,w]=s.useState("Kredi Kartı"),[t,n]=s.useState(0),[N,x]=s.useState(null),l=g.filter(a=>a.status==="check-in"),v=a=>{c(a),n(a.balance),x(null)},z=()=>{t>0&&u(o.id,Number(t),p),i(!1)},C=a=>{m(a),x(a),c(null),y({type:"success",msg:`Hızlı check-out: ${o.guest}`})},r=o?j[o.id]||[]:[],S=r.reduce((a,d)=>a+d.amount,0);return e.jsxs("div",{className:"co-layout",children:[e.jsxs("aside",{className:"co-sidebar",children:[e.jsxs("div",{className:"cs-head",children:[e.jsx("h3",{children:"Check-Out Bekleyenler"}),e.jsx("span",{className:"badge",children:l.length})]}),e.jsxs("div",{className:"co-list",children:[l.map(a=>e.jsxs("button",{className:`co-item ${(o==null?void 0:o.id)===a.id?"active":""} ${N===a.id?"done":""}`,onClick:()=>v(a),children:[e.jsx("div",{className:"coi-room",children:a.room}),e.jsxs("div",{className:"coi-info",children:[e.jsx("strong",{children:a.guest}),e.jsxs("span",{children:["Çıkış: ",a.checkOut]})]}),a.balance>0?e.jsxs("div",{className:"coi-bal",children:["₺",a.balance.toLocaleString()]}):e.jsx(A,{size:16,color:"#10b981"})]},a.id)),l.length===0&&e.jsx("p",{className:"empty-msg",children:"Check-out bekleyen misafir yok."})]})]}),e.jsx("main",{className:"co-detail",children:o?e.jsxs("div",{className:"cod-inner",children:[e.jsxs("div",{className:"cod-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:o.guest}),e.jsxs("span",{children:["Oda ",o.room," · ",o.board," · ",o.checkIn," — ",o.checkOut]})]}),e.jsxs("div",{className:"cod-actions",children:[e.jsxs("button",{className:"btn-sec",onClick:()=>window.print(),children:[e.jsx(E,{size:15})," Fatura"]}),o.balance>0&&e.jsxs("button",{className:"btn-pay",onClick:()=>i(!0),children:[e.jsx(f,{size:15})," Tahsilat Al (₺",o.balance.toLocaleString(),")"]}),e.jsxs("button",{className:`btn-checkout ${o.balance>0?"warn":""}`,onClick:()=>C(o.id),children:[e.jsx(b,{size:15})," Check-Out'u Tamamla"]})]})]}),o.balance>0&&e.jsxs("div",{className:"balance-warn",children:[e.jsx(O,{size:18}),e.jsxs("span",{children:["Bu misafirin ",e.jsxs("strong",{children:["₺",o.balance.toLocaleString()]})," tutarında ödenmemiş borcu bulunuyor."]})]}),e.jsxs("div",{className:"cod-folio",children:[e.jsxs("h3",{children:[e.jsx(P,{size:16})," Hesap Özeti"]}),e.jsxs("table",{className:"mini-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Açıklama"}),e.jsx("th",{children:"Tür"}),e.jsx("th",{className:"right",children:"Tutar"})]})}),e.jsxs("tbody",{children:[r.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.desc}),e.jsx("td",{children:e.jsx("span",{className:`type-tag ${a.type}`,children:a.type==="accommodation"?"Konaklama":"Ekstra"})}),e.jsxs("td",{className:"right",children:["₺",a.amount.toLocaleString()]})]},a.id)),r.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"empty-msg",children:"Tahakkuk yok."})})]})]}),e.jsxs("div",{className:"folio-totals",children:[e.jsxs("div",{className:"ft-row",children:[e.jsx("span",{children:"Toplam"}),e.jsxs("strong",{children:["₺",S.toLocaleString()]})]}),e.jsxs("div",{className:"ft-row",children:[e.jsx("span",{children:"Ödenen"}),e.jsxs("strong",{className:"green",children:["₺",o.paid.toLocaleString()]})]}),e.jsxs("div",{className:`ft-row big ${o.balance>0?"due":""}`,children:[e.jsx("span",{children:o.balance>0?"Kalan Borç":"Hesap Durumu"}),e.jsx("strong",{children:o.balance>0?`₺${o.balance.toLocaleString()}`:"✓ Kapandı"})]})]})]})]}):e.jsxs("div",{className:"co-empty",children:[e.jsx(b,{size:64,color:"#e2e8f0"}),e.jsx("p",{children:"Check-out işlemi için soldaki listeden bir misafir seçin"})]})}),e.jsx(K,{children:k&&o&&e.jsx(h.div,{className:"modal-overlay",onClick:()=>i(!1),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(h.div,{className:"pay-modal",onClick:a=>a.stopPropagation(),initial:{scale:.9},animate:{scale:1},children:[e.jsxs("div",{className:"modal-head",children:[e.jsxs("h3",{children:["Tahsilat Al — ",o.guest]}),e.jsx("button",{onClick:()=>i(!1),children:e.jsx($,{size:20})})]}),e.jsxs("div",{className:"pay-body",children:[e.jsx("label",{children:"Tutar (₺)"}),e.jsx("input",{type:"number",value:t,onChange:a=>n(a.target.value),min:1}),e.jsx("div",{className:"quick-btns",children:[o.balance,Math.ceil(o.balance/2),500,1e3].filter((a,d,L)=>a>0&&L.indexOf(a)===d).map(a=>e.jsxs("button",{onClick:()=>n(a),children:["₺",a.toLocaleString()]},a))}),e.jsx("label",{children:"Yöntem"}),e.jsx("div",{className:"method-pills",children:["Nakit","Kredi Kartı","EFT/Havale"].map(a=>e.jsx("button",{className:p===a?"active":"",onClick:()=>w(a),children:a},a))})]}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{className:"btn-cancel",onClick:()=>i(!1),children:"İptal"}),e.jsxs("button",{className:"btn-save",onClick:z,disabled:!t||t<=0,children:[e.jsx(f,{size:15})," Tahsil Et"]})]})]})})}),e.jsx("style",{children:`
        .co-layout { display:flex; height:calc(100vh - 70px); }

        .co-sidebar { width:280px; background:white; border-right:1px solid #e2e8f0; display:flex; flex-direction:column; }
        .cs-head { padding:18px 20px; border-bottom:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between; }
        .cs-head h3 { font-size:15px; font-weight:800; color:#1e293b; }
        .badge { background:#ef4444; color:white; font-size:11px; font-weight:800; padding:2px 8px; border-radius:20px; }

        .co-list { flex:1; overflow-y:auto; padding:8px; }
        .co-item { width:100%; display:flex; align-items:center; gap:10px; padding:12px; border-radius:12px; border:none; background:transparent; cursor:pointer; text-align:left; margin-bottom:4px; transition:0.2s; }
        .co-item:hover { background:#f8fafc; }
        .co-item.active { background:#eff6ff; border:1.5px solid #3b82f6; }
        .co-item.done { opacity:.5; }
        .coi-room { width:38px; height:38px; background:#f1f5f9; color:#1e293b; font-weight:900; font-size:13px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .coi-info { flex:1; }
        .coi-info strong { display:block; font-size:13px; color:#1e293b; font-weight:700; }
        .coi-info span { font-size:11px; color:#94a3b8; }
        .coi-bal { font-size:12px; font-weight:800; color:#ef4444; }
        .empty-msg { text-align:center; padding:30px; color:#94a3b8; font-size:13px; }

        .co-detail { flex:1; padding:30px; overflow-y:auto; }
        .co-empty { height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; color:#94a3b8; font-size:14px; font-weight:600; }
        .cod-inner { display:flex; flex-direction:column; gap:20px; }

        .cod-head { display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; }
        .cod-head h2 { font-size:22px; font-weight:800; color:#1e293b; }
        .cod-head span { font-size:13px; color:#94a3b8; }
        .cod-actions { display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
        .btn-sec { padding:10px 16px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; color:#475569; }
        .btn-pay { padding:10px 16px; border-radius:10px; border:none; background:#3b82f6; color:white; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; }
        .btn-checkout { padding:10px 18px; border-radius:10px; border:none; background:#10b981; color:white; font-size:12px; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:6px; }
        .btn-checkout.warn { background:#f59e0b; }

        .balance-warn { display:flex; align-items:center; gap:10px; background:#fffbeb; color:#b45309; padding:14px 18px; border-radius:12px; border:1px solid #fde68a; font-size:13px; }

        .cod-folio { background:white; border-radius:20px; border:1px solid #e2e8f0; padding:24px; }
        .cod-folio h3 { font-size:15px; font-weight:800; color:#1e293b; margin-bottom:16px; display:flex; align-items:center; gap:8px; }
        .mini-table { width:100%; border-collapse:collapse; margin-bottom:16px; }
        .mini-table th { text-align:left; padding:10px 14px; font-size:11px; color:#94a3b8; text-transform:uppercase; border-bottom:2px solid #f1f5f9; font-weight:800; }
        .mini-table th.right { text-align:right; }
        .mini-table td { padding:12px 14px; font-size:13px; color:#475569; border-bottom:1px solid #f8fafc; }
        .mini-table td.right { text-align:right; font-weight:700; color:#1e293b; }
        .type-tag { padding:3px 10px; border-radius:20px; font-size:10px; font-weight:800; }
        .type-tag.accommodation { background:#eff6ff; color:#3b82f6; }
        .type-tag.extra { background:#fff7ed; color:#f59e0b; }

        .folio-totals { background:#f8fafc; border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:0; max-width:320px; margin-left:auto; }
        .ft-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #e2e8f0; font-size:14px; }
        .ft-row:last-child { border-bottom:none; }
        .ft-row span { color:#64748b; }
        .ft-row.big { font-size:16px; font-weight:800; padding-top:14px; }
        .ft-row.big.due strong { color:#ef4444; }
        .green { color:#10b981 !important; }

        /* Modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; z-index:1000; }
        .pay-modal { background:white; border-radius:24px; overflow:hidden; box-shadow:0 25px 50px rgba(0,0,0,0.4); width:400px; }
        .modal-head { padding:20px 26px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; }
        .modal-head h3 { font-size:17px; font-weight:800; color:#1e293b; }
        .modal-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }
        .pay-body { padding:22px 26px; display:flex; flex-direction:column; gap:12px; }
        .pay-body label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:-6px; }
        .pay-body input { padding:12px 16px; border:1.5px solid #e2e8f0; border-radius:12px; font-size:16px; font-weight:700; outline:none; }
        .quick-btns { display:flex; gap:8px; flex-wrap:wrap; }
        .quick-btns button { padding:6px 14px; border-radius:8px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .quick-btns button:hover { background:#eff6ff; border-color:#3b82f6; color:#3b82f6; }
        .method-pills { display:flex; gap:8px; flex-wrap:wrap; }
        .method-pills button { padding:8px 14px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .method-pills button.active { background:#1e293b; color:white; border-color:#1e293b; }
        .modal-foot { padding:16px 26px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end; gap:10px; }
        .btn-cancel { padding:11px 20px; border-radius:10px; border:1px solid #e2e8f0; background:white; font-weight:700; cursor:pointer; }
        .btn-save { padding:11px 22px; border-radius:10px; border:none; background:#3b82f6; color:white; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .btn-save:disabled { opacity:.5; cursor:not-allowed; }
      `})]})};export{q as default};
