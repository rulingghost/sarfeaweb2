import{u as z,r as j,j as e,b as u,A as x,i as v,m as p,f as S,X as B}from"./index-Cmjygl0X.js";import{S as l}from"./shield-B9wfQGk5.js";import{E as K}from"./eye-CUFzIlOA.js";const I=()=>{const{reservations:k,guests:y,kbsSent:t,sendKBS:b,addNotification:C}=z(),[i,d]=j.useState(null),[w,f]=j.useState(null),r=k.filter(s=>s.status==="check-in"),n=r.filter(s=>!t.find(a=>a.resId===s.id)),h=async s=>{f(s),await new Promise(a=>setTimeout(a,1500)),b(s),f(null)},N=async()=>{for(const s of n)await h(s.id)};return e.jsxs("div",{className:"kbs-page",children:[e.jsxs("div",{className:"kbs-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(l,{size:20})," KBS — Kimlik Bildirim Sistemi"]}),e.jsx("span",{children:"Polis/Jandarma Kimlik Bildirim Sistemi entegrasyonu"})]}),e.jsxs("div",{className:"kbs-actions",children:[e.jsxs("div",{className:"kbs-status",children:[e.jsx("div",{className:"status-dot"}),e.jsx("span",{children:"Bağlantı: Aktif"})]}),n.length>0&&e.jsxs("button",{className:"btn-primary",onClick:N,children:[e.jsx(l,{size:15})," Tümünü Gönder (",n.length,")"]})]})]}),e.jsxs("div",{className:"kbs-stats",children:[e.jsxs("div",{className:"ks",children:[e.jsx(u,{size:20,color:"#10b981"}),e.jsxs("div",{children:[e.jsx("strong",{children:t.length}),e.jsx("span",{children:"Gönderildi"})]})]}),e.jsxs("div",{className:"ks",children:[e.jsx(x,{size:20,color:"#f59e0b"}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:n.length>0?"#ef4444":"#10b981"},children:n.length}),e.jsx("span",{children:"Bekliyor"})]})]}),e.jsxs("div",{className:"ks",children:[e.jsx(v,{size:20,color:"#3b82f6"}),e.jsxs("div",{children:[e.jsx("strong",{children:r.length}),e.jsx("span",{children:"İç Misafir"})]})]})]}),n.length>0&&e.jsxs("div",{className:"warn-band",children:[e.jsx(x,{size:16}),e.jsxs("span",{children:[n.length," misafir için KBS bildirimi gönderilmemiş!"]})]}),e.jsx("div",{className:"kbs-table-wrap",children:e.jsxs("table",{className:"kbs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Rezervasyon"}),e.jsx("th",{children:"Misafir"}),e.jsx("th",{children:"Oda"}),e.jsx("th",{children:"Giriş"}),e.jsx("th",{children:"Uyruk"}),e.jsx("th",{children:"Belge No"}),e.jsx("th",{children:"KBS Durumu"}),e.jsx("th",{children:"İşlem"})]})}),e.jsx("tbody",{children:r.map((s,a)=>{const o=y.find(c=>c.name===s.guest)||{},g=!!t.find(c=>c.resId===s.id),m=w===s.id;return e.jsxs(p.tr,{initial:{opacity:0},animate:{opacity:1},transition:{delay:a*.05},children:[e.jsx("td",{children:e.jsx("span",{className:"rid",children:s.id})}),e.jsx("td",{children:e.jsxs("div",{className:"g-cell",children:[e.jsx("div",{className:"g-av",children:s.guest[0]}),e.jsx("strong",{children:s.guest})]})}),e.jsx("td",{children:e.jsx("span",{className:"room-tag",children:s.room})}),e.jsx("td",{children:s.checkIn}),e.jsx("td",{children:e.jsx("span",{className:"nat-tag",children:o.nationality||"TR"})}),e.jsx("td",{children:e.jsx("span",{className:"doc",children:o.tcNo||o.passport||"—"})}),e.jsx("td",{children:m?e.jsx("span",{className:"kbs-pending",children:"⏳ Gönderiliyor..."}):g?e.jsxs("span",{className:"kbs-sent",children:[e.jsx(u,{size:14})," Gönderildi"]}):e.jsxs("span",{className:"kbs-wait",children:[e.jsx(x,{size:14})," Bekliyor"]})}),e.jsx("td",{children:e.jsxs("div",{className:"act-row",children:[!g&&!m&&e.jsxs("button",{className:"act-btn blue",onClick:()=>h(s.id),children:[e.jsx(l,{size:13})," KBS Gönder"]}),e.jsxs("button",{className:"act-btn grey",onClick:()=>d(s),children:[e.jsx(K,{size:13})," Görüntüle"]})]})})]},s.id)})})]})}),e.jsx(S,{children:i&&e.jsx(p.div,{className:"modal-overlay",onClick:()=>d(null),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(p.div,{className:"kbs-modal",onClick:s=>s.stopPropagation(),initial:{scale:.9},animate:{scale:1},children:[e.jsxs("div",{className:"modal-head",children:[e.jsxs("h3",{children:["KBS Kayıt Detayı — ",i.guest]}),e.jsx("button",{onClick:()=>d(null),children:e.jsx(B,{size:18})})]}),e.jsx("div",{className:"kbs-detail",children:[["Rezervasyon No",i.id],["Ad Soyad",i.guest],["Oda",i.room],["Giriş Tarihi",i.checkIn],["Çıkış Tarihi",i.checkOut],["Kişi Sayısı",i.pax],["KBS Durumu",t.find(s=>s.resId===i.id)?"✓ Gönderildi":"⏳ Bekliyor"]].map(([s,a])=>e.jsxs("div",{className:"kd-row",children:[e.jsx("span",{children:s}),e.jsx("strong",{children:a})]},s))}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{className:"btn-cancel",onClick:()=>d(null),children:"Kapat"}),!t.find(s=>s.resId===i.id)&&e.jsxs("button",{className:"btn-primary",onClick:()=>{b(i.id),d(null)},children:[e.jsx(l,{size:15})," KBS'ye Gönder"]})]})]})})}),e.jsx("style",{children:`
        .kbs-page{padding:28px;display:flex;flex-direction:column;gap:18px;}
        .kbs-head{display:flex;justify-content:space-between;align-items:flex-start;}
        .kbs-head h2{font-size:22px;font-weight:800;color:#1e293b;display:flex;align-items:center;gap:10px;}
        .kbs-head span{font-size:13px;color:#94a3b8;}
        .kbs-actions{display:flex;align-items:center;gap:14px;}
        .kbs-status{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#64748b;background:white;padding:9px 16px;border-radius:10px;border:1px solid #e2e8f0;}
        .status-dot{width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 0 3px #dcfce7;}
        .btn-primary{padding:10px 18px;border-radius:12px;border:none;background:#3b82f6;color:white;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:8px;}
        .kbs-stats{display:flex;gap:16px;}
        .ks{background:white;border-radius:14px;border:1px solid #e2e8f0;padding:18px 24px;display:flex;align-items:center;gap:14px;}
        .ks strong{display:block;font-size:24px;font-weight:900;color:#1e293b;}
        .ks span{font-size:12px;color:#94a3b8;font-weight:700;}
        .warn-band{display:flex;align-items:center;gap:10px;background:#fffbeb;color:#b45309;padding:12px 18px;border-radius:10px;border:1px solid #fde68a;font-size:13px;font-weight:600;}
        .kbs-table-wrap{background:white;border-radius:18px;border:1px solid #e2e8f0;overflow:hidden;}
        .kbs-table{width:100%;border-collapse:collapse;}
        .kbs-table thead{background:#f8fafc;}
        .kbs-table th{text-align:left;padding:12px 14px;font-size:11px;color:#94a3b8;text-transform:uppercase;font-weight:800;}
        .kbs-table td{padding:14px;font-size:13px;color:#475569;border-bottom:1px solid #f8fafc;}
        .kbs-table tr:last-child td{border-bottom:none;}
        .rid{font-family:monospace;font-size:11px;background:#f1f5f9;padding:3px 8px;border-radius:6px;color:#64748b;font-weight:700;}
        .g-cell{display:flex;align-items:center;gap:8px;}
        .g-av{width:30px;height:30px;background:#eff6ff;color:#3b82f6;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;flex-shrink:0;}
        .g-cell strong{font-size:13px;color:#1e293b;}
        .room-tag{background:#f1f5f9;color:#1e293b;font-weight:800;padding:3px 10px;border-radius:8px;font-size:12px;}
        .nat-tag{background:#f1f5f9;color:#64748b;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;}
        .doc{font-family:monospace;font-size:12px;color:#64748b;}
        .kbs-sent{display:flex;align-items:center;gap:5px;color:#10b981;font-weight:700;font-size:12px;}
        .kbs-wait{display:flex;align-items:center;gap:5px;color:#f59e0b;font-weight:700;font-size:12px;}
        .kbs-pending{color:#3b82f6;font-weight:700;font-size:12px;}
        .act-row{display:flex;gap:8px;}
        .act-btn{padding:6px 12px;border-radius:8px;border:none;font-size:11px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:4px;}
        .act-btn.blue{background:#eff6ff;color:#3b82f6;}
        .act-btn.grey{background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;}
        .modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,0.75);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:1000;}
        .kbs-modal{background:white;border-radius:22px;overflow:hidden;box-shadow:0 25px 50px rgba(0,0,0,0.4);width:440px;}
        .modal-head{padding:20px 24px;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center;}
        .modal-head h3{font-size:16px;font-weight:800;color:#1e293b;}
        .modal-head button{background:transparent;border:none;color:#94a3b8;cursor:pointer;}
        .kbs-detail{padding:20px 24px;display:flex;flex-direction:column;gap:0;}
        .kd-row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #f8fafc;font-size:13px;}
        .kd-row span{color:#64748b;}
        .kd-row strong{color:#1e293b;}
        .kd-row:last-child{border-bottom:none;}
        .modal-foot{padding:16px 24px;border-top:1px solid #f1f5f9;display:flex;justify-content:flex-end;gap:10px;}
        .btn-cancel{padding:10px 18px;border-radius:10px;border:1px solid #e2e8f0;background:white;font-weight:700;cursor:pointer;}
      `})]})};export{I as default};
