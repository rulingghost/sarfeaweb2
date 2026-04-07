import{u as v,r,j as e,T as N,e as w,F as z,m as b,o as S,b as T,f as C,X as A}from"./index-CeGZvpZr.js";import{P as B}from"./printer-CpZh-bwd.js";import{P as D}from"./plus-CXzXoTcw.js";import{D as G}from"./dollar-sign-BfO-eTe1.js";import{A as j}from"./arrow-up-right-CfReZH3s.js";import{A as k}from"./arrow-down-right-CrE2nIla.js";const K=["Nakit","Kredi Kartı","EFT/Havale","Çek/Senet"],M=({onClose:s,onAdd:h})=>{const[l,c]=r.useState("gelir"),[d,p]=r.useState(""),[t,x]=r.useState(""),[g,m]=r.useState("Nakit"),o=a=>{a.preventDefault(),!(!d||!t)&&(h({type:l,desc:d,amount:Number(t),method:g}),s())};return e.jsx(b.div,{className:"modal-overlay",onClick:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(b.div,{className:"tx-modal",onClick:a=>a.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("h3",{children:"Yeni İşlem Ekle"}),e.jsx("button",{onClick:s,children:e.jsx(A,{size:20})})]}),e.jsxs("form",{className:"tx-form",onSubmit:o,children:[e.jsxs("div",{className:"type-toggle",children:[e.jsxs("button",{type:"button",className:l==="gelir"?"active gelir":"",onClick:()=>c("gelir"),children:[e.jsx(j,{size:16})," Gelir / Tahsilat"]}),e.jsxs("button",{type:"button",className:l==="gider"?"active gider":"",onClick:()=>c("gider"),children:[e.jsx(k,{size:16})," Gider / Ödeme"]})]}),e.jsx("label",{children:"Açıklama"}),e.jsx("input",{placeholder:"Açıklama giriniz...",value:d,onChange:a=>p(a.target.value),required:!0}),e.jsx("label",{children:"Tutar (₺)"}),e.jsx("input",{type:"number",placeholder:"0",value:t,onChange:a=>x(a.target.value),min:1,required:!0}),e.jsx("label",{children:"Ödeme Yöntemi"}),e.jsx("div",{className:"method-pills",children:K.map(a=>e.jsx("button",{type:"button",className:`mpill ${g===a?"active":""}`,onClick:()=>m(a),children:a},a))}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{type:"button",className:"btn-cancel",onClick:s,children:"İptal"}),e.jsx("button",{type:"submit",className:"btn-save",children:"İşlemi Kaydet"})]})]})]})})},H=()=>{const{cashTransactions:s,addCashTransaction:h,reservations:l,makePayment:c}=v(),[d,p]=r.useState(!1),[t,x]=r.useState("bugün"),g="2026-03-14",m=s.filter(i=>i.date===g),o=t==="bugün"?m:s,a=o.filter(i=>i.type==="gelir").reduce((i,n)=>i+n.amount,0),u=o.filter(i=>i.type==="gider").reduce((i,n)=>i+n.amount,0),y=a-u,f=l.filter(i=>i.status==="check-in"&&i.balance>0);return e.jsxs("div",{className:"cash-container",children:[e.jsxs("div",{className:"cash-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Kasa & Ödeme İşlemleri"}),e.jsx("span",{children:"Günlük tahsilat, gider ve kasa bakiyesi takibi"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("button",{className:"btn-outline",children:[e.jsx(B,{size:16})," Günlük Rapor"]}),e.jsxs("button",{className:"btn-primary",onClick:()=>p(!0),children:[e.jsx(D,{size:16})," Yeni İşlem"]})]})]}),e.jsxs("div",{className:"cash-kpi",children:[e.jsxs("div",{className:"kpi-card green",children:[e.jsx("div",{className:"kpi-icon",children:e.jsx(N,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"kpi-label",children:"Bugün Gelir"}),e.jsxs("div",{className:"kpi-value",children:["₺",a.toLocaleString()]})]})]}),e.jsxs("div",{className:"kpi-card red",children:[e.jsx("div",{className:"kpi-icon",children:e.jsx(w,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"kpi-label",children:"Bugün Gider"}),e.jsxs("div",{className:"kpi-value",children:["₺",u.toLocaleString()]})]})]}),e.jsxs("div",{className:"kpi-card blue",children:[e.jsx("div",{className:"kpi-icon",children:e.jsx(G,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"kpi-label",children:"Kasa Bakiyesi"}),e.jsxs("div",{className:"kpi-value",children:["₺",y.toLocaleString()]})]})]}),e.jsxs("div",{className:"kpi-card orange",children:[e.jsx("div",{className:"kpi-icon",children:e.jsx(z,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"kpi-label",children:"Tahsil Bekleyen"}),e.jsxs("div",{className:"kpi-value",children:["₺",f.reduce((i,n)=>i+n.balance,0).toLocaleString()]})]})]})]}),e.jsxs("div",{className:"cash-body",children:[e.jsxs("div",{className:"tx-section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"İşlem Geçmişi"}),e.jsxs("div",{className:"date-toggle",children:[e.jsx("button",{className:t==="bugün"?"active":"",onClick:()=>x("bugün"),children:"Bugün"}),e.jsx("button",{className:t==="tümü"?"active":"",onClick:()=>x("tümü"),children:"Tümü"})]})]}),e.jsxs("div",{className:"tx-list",children:[o.map((i,n)=>e.jsxs(b.div,{className:`tx-item ${i.type}`,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:n*.04},children:[e.jsx("div",{className:"tx-icon",children:i.type==="gelir"?e.jsx(j,{size:20}):e.jsx(k,{size:20})}),e.jsxs("div",{className:"tx-info",children:[e.jsx("strong",{children:i.desc}),e.jsxs("span",{children:[i.method," · ",i.time]})]}),e.jsxs("div",{className:`tx-amount ${i.type}`,children:[i.type==="gelir"?"+":"-","₺",i.amount.toLocaleString()]})]},i.id)),o.length===0&&e.jsx("div",{className:"empty-tx",children:"Bugün henüz işlem bulunmuyor."})]})]}),e.jsxs("div",{className:"pending-section",children:[e.jsx("h3",{children:"Tahsil Bekleyen Misafirler"}),e.jsxs("div",{className:"pending-list",children:[f.map(i=>e.jsxs("div",{className:"pending-card",children:[e.jsxs("div",{className:"pc-top",children:[e.jsx("div",{className:"pc-room",children:i.room}),e.jsxs("div",{className:"pc-info",children:[e.jsx("strong",{children:i.guest}),e.jsxs("span",{children:["Çıkış: ",i.checkOut]})]})]}),e.jsxs("div",{className:"pc-bottom",children:[e.jsxs("div",{className:"pc-bal",children:[e.jsx("span",{children:"Kalan Borç"}),e.jsxs("strong",{children:["₺",i.balance.toLocaleString()]})]}),e.jsxs("button",{className:"quick-pay-btn",onClick:()=>c(i.id,i.balance,"Kredi Kartı"),children:[e.jsx(S,{size:14})," Tahsil Et"]})]})]},i.id)),f.length===0&&e.jsxs("div",{className:"all-clear",children:[e.jsx(T,{size:32,color:"#10b981"}),e.jsx("p",{children:"Tüm hesaplar kapalı!"})]})]})]})]}),e.jsx(C,{children:d&&e.jsx(M,{onClose:()=>p(!1),onAdd:h})}),e.jsx("style",{children:`
        .cash-container { padding:30px; display:flex; flex-direction:column; gap:24px; }
        .cash-header { display:flex; justify-content:space-between; align-items:flex-start; }
        .cash-header h2 { font-size:24px; font-weight:800; color:#1e293b; }
        .cash-header span { font-size:14px; color:#94a3b8; }
        .header-actions { display:flex; gap:12px; }
        .btn-outline { padding:10px 18px; border-radius:12px; border:1.5px solid #e2e8f0; background:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; color:#475569; }
        .btn-primary { padding:10px 18px; border-radius:12px; border:none; background:#3b82f6; color:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }

        .cash-kpi { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .kpi-card { background:white; border-radius:18px; border:1px solid #e2e8f0; padding:22px; display:flex; align-items:center; gap:16px; }
        .kpi-icon { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; }
        .kpi-card.green .kpi-icon { background:#f0fdf4; color:#10b981; }
        .kpi-card.red   .kpi-icon { background:#fef2f2; color:#ef4444; }
        .kpi-card.blue  .kpi-icon { background:#eff6ff; color:#3b82f6; }
        .kpi-card.orange .kpi-icon { background:#fff7ed; color:#f59e0b; }
        .kpi-label { font-size:12px; color:#94a3b8; font-weight:700; }
        .kpi-value { font-size:22px; font-weight:900; color:#1e293b; }

        .cash-body { display:grid; grid-template-columns:1fr 340px; gap:20px; }
        .tx-section, .pending-section { background:white; border-radius:20px; border:1px solid #e2e8f0; padding:24px; }

        .section-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
        .section-head h3, .pending-section h3 { font-size:16px; font-weight:800; color:#1e293b; margin-bottom:16px; }
        .date-toggle { display:flex; border:1.5px solid #e2e8f0; border-radius:10px; overflow:hidden; }
        .date-toggle button { padding:7px 14px; border:none; background:white; font-size:12px; font-weight:700; color:#64748b; cursor:pointer; }
        .date-toggle button.active { background:#1e293b; color:white; }

        .tx-list { display:flex; flex-direction:column; gap:10px; max-height:420px; overflow-y:auto; }
        .tx-item { display:flex; align-items:center; gap:14px; padding:14px; border-radius:12px; }
        .tx-item.gelir { background:#f0fdf4; }
        .tx-item.gider { background:#fef2f2; }
        .tx-icon { width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; }
        .tx-item.gelir .tx-icon { background:#dcfce7; color:#10b981; }
        .tx-item.gider .tx-icon { background:#fee2e2; color:#ef4444; }
        .tx-info { flex:1; }
        .tx-info strong { display:block; font-size:14px; color:#1e293b; }
        .tx-info span { font-size:12px; color:#94a3b8; }
        .tx-amount { font-size:16px; font-weight:900; }
        .tx-amount.gelir { color:#10b981; }
        .tx-amount.gider { color:#ef4444; }
        .empty-tx { padding:30px; text-align:center; color:#94a3b8; font-size:13px; }

        .pending-list { display:flex; flex-direction:column; gap:12px; max-height:420px; overflow-y:auto; }
        .pending-card { background:#f8fafc; border-radius:14px; padding:16px; }
        .pc-top { display:flex; gap:10px; margin-bottom:12px; }
        .pc-room { width:38px; height:38px; background:#1e293b; color:white; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px; flex-shrink:0; }
        .pc-info strong { display:block; font-size:13px; color:#1e293b; }
        .pc-info span { font-size:11px; color:#94a3b8; }
        .pc-bottom { display:flex; justify-content:space-between; align-items:center; padding-top:10px; border-top:1px solid #e2e8f0; }
        .pc-bal span { font-size:11px; color:#94a3b8; }
        .pc-bal strong { display:block; font-size:16px; color:#ef4444; font-weight:900; }
        .quick-pay-btn { padding:8px 14px; border-radius:10px; border:none; background:#3b82f6; color:white; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; }
        .all-clear { padding:40px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px; }
        .all-clear p { color:#10b981; font-weight:700; }

        /* Modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; z-index:1000; }
        .tx-modal { background:white; border-radius:24px; overflow:hidden; box-shadow:0 25px 50px rgba(0,0,0,0.4); width:440px; }
        .modal-head { padding:22px 28px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; }
        .modal-head h3 { font-size:18px; font-weight:800; color:#1e293b; }
        .modal-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }
        .tx-form { padding:24px 28px; display:flex; flex-direction:column; gap:14px; }
        .type-toggle { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .type-toggle button { padding:12px; border-radius:12px; border:1.5px solid #e2e8f0; background:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; color:#64748b; }
        .type-toggle .active.gelir { background:#ecfdf5; color:#10b981; border-color:#10b981; }
        .type-toggle .active.gider { background:#fef2f2; color:#ef4444; border-color:#ef4444; }
        .tx-form label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:-8px; }
        .tx-form input { padding:12px 16px; border:1.5px solid #e2e8f0; border-radius:12px; font-size:14px; outline:none; width:100%; }
        .method-pills { display:flex; flex-wrap:wrap; gap:8px; }
        .mpill { padding:8px 14px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .mpill.active { background:#1e293b; color:white; border-color:#1e293b; }
        .modal-foot { display:flex; justify-content:flex-end; gap:10px; padding-top:4px; }
        .btn-cancel { padding:12px 20px; border-radius:12px; border:1px solid #e2e8f0; background:white; font-weight:700; cursor:pointer; }
        .btn-save { padding:12px 24px; border-radius:12px; border:none; background:#3b82f6; color:white; font-weight:800; cursor:pointer; }
      `})]})};export{H as default};
