import{u as T,r as c,j as e,s as G,m as x,f as v,H as P,X as N,C as M,T as L,S as R,G as E,k as w}from"./index-CeGZvpZr.js";import{P as A}from"./plus-CXzXoTcw.js";import{P as F,M as O}from"./phone-DItWuZ7P.js";import{S as U}from"./square-pen-DpvJ8plY.js";const k={Platinum:{bg:"#1e293b",text:"white"},Gold:{bg:"#f59e0b",text:"white"},Silver:{bg:"#64748b",text:"white"},None:{bg:"#f1f5f9",text:"#64748b"}},D=({guest:i,onClose:t,onSave:p})=>{const[n,d]=c.useState(i||{name:"",nationality:"TR",phone:"",email:"",loyalty:"None",dob:"",tcNo:"",passport:""}),o=(a,l)=>d(f=>({...f,[a]:l}));return e.jsx(x.div,{className:"modal-overlay",onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(x.div,{className:"gf-modal",onClick:a=>a.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("h3",{children:i?"Misafir Düzenle":"Yeni Misafir Kaydı"}),e.jsx("button",{onClick:t,children:e.jsx(N,{size:20})})]}),e.jsx("div",{className:"gf-body",children:e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"fg-group full",children:[e.jsx("label",{children:"Ad Soyad *"}),e.jsx("input",{value:n.name,onChange:a=>o("name",a.target.value),placeholder:"Ad Soyad"})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"Uyruk"}),e.jsx("select",{value:n.nationality,onChange:a=>o("nationality",a.target.value),children:["TR","DE","US","UK","FR","ES","IT","RU","AE"].map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"Sadakat Seviyesi"}),e.jsx("select",{value:n.loyalty,onChange:a=>o("loyalty",a.target.value),children:["None","Silver","Gold","Platinum"].map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"Telefon"}),e.jsx("input",{value:n.phone,onChange:a=>o("phone",a.target.value),placeholder:"+90..."})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"E-posta"}),e.jsx("input",{value:n.email,onChange:a=>o("email",a.target.value),placeholder:"email@example.com"})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"Doğum Tarihi"}),e.jsx("input",{type:"date",value:n.dob,onChange:a=>o("dob",a.target.value)})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"TC Kimlik No"}),e.jsx("input",{value:n.tcNo,onChange:a=>o("tcNo",a.target.value),placeholder:"12345678900"})]}),e.jsxs("div",{className:"fg-group",children:[e.jsx("label",{children:"Pasaport No"}),e.jsx("input",{value:n.passport,onChange:a=>o("passport",a.target.value),placeholder:"A1234567"})]})]})}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{className:"btn-cancel",onClick:t,children:"İptal"}),e.jsx("button",{className:"btn-save",onClick:()=>{p(n),t()},disabled:!n.name,children:i?"Güncelle":"Misafir Oluştur"})]})]})})},H=({guest:i,reservations:t,onClose:p,onEdit:n})=>{const d=t.filter(a=>a.guestId===i.id||a.guest===i.name),o=k[i.loyalty];return e.jsxs(x.div,{className:"detail-panel",initial:{x:40,opacity:0},animate:{x:0,opacity:1},exit:{x:40,opacity:0},children:[e.jsxs("div",{className:"dp-head",children:[e.jsx("div",{className:"dp-avatar",children:i.name[0]}),e.jsxs("div",{children:[e.jsx("h3",{children:i.name}),e.jsx("span",{className:"loyalty-tag",style:{background:o.bg,color:o.text},children:i.loyalty})]}),e.jsx("button",{onClick:p,style:{marginLeft:"auto"},children:e.jsx(N,{size:20})})]}),e.jsxs("div",{className:"dp-stats",children:[e.jsxs("div",{className:"dps",children:[e.jsx(M,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:i.visits}),e.jsx("span",{children:"Konaklama"})]})]}),e.jsxs("div",{className:"dps",children:[e.jsx(L,{size:16}),e.jsxs("div",{children:[e.jsxs("strong",{children:["₺",i.totalSpent.toLocaleString()]}),e.jsx("span",{children:"Toplam Harcama"})]})]}),e.jsxs("div",{className:"dps",children:[e.jsx(R,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:i.lastVisit}),e.jsx("span",{children:"Son Ziyaret"})]})]})]}),e.jsxs("div",{className:"dp-contact",children:[e.jsxs("div",{className:"dc-row",children:[e.jsx(F,{size:14}),e.jsx("span",{children:i.phone||"—"})]}),e.jsxs("div",{className:"dc-row",children:[e.jsx(O,{size:14}),e.jsx("span",{children:i.email||"—"})]}),e.jsxs("div",{className:"dc-row",children:[e.jsx(E,{size:14}),e.jsx("span",{children:i.nationality})]}),i.tcNo&&e.jsxs("div",{className:"dc-row",children:[e.jsx(w,{size:14}),e.jsxs("span",{children:["TC: ",i.tcNo]})]}),i.passport&&e.jsxs("div",{className:"dc-row",children:[e.jsx(w,{size:14}),e.jsxs("span",{children:["Pasaport: ",i.passport]})]})]}),e.jsxs("div",{className:"dp-section",children:[e.jsx("h4",{children:"Rezervasyon Geçmişi"}),d.length===0?e.jsx("p",{className:"no-res",children:"Rezervasyon bulunamadı."}):d.map(a=>e.jsxs("div",{className:"res-mini",children:[e.jsxs("div",{className:"rm-left",children:[e.jsx("strong",{children:a.id}),e.jsxs("span",{children:["Oda ",a.room||"—"," · ",a.checkIn," / ",a.checkOut]})]}),e.jsx("span",{className:`rmtag ${a.status}`,children:a.status==="check-in"?"İçeride":a.status==="check-out"?"Çıktı":"Bekliyor"})]},a.id))]}),e.jsxs("button",{className:"dp-edit-btn",onClick:()=>n(i),children:[e.jsx(U,{size:14})," Misafiri Düzenle"]})]})},q=()=>{const{guests:i,addGuest:t,reservations:p}=T(),[n,d]=c.useState(""),[o,a]=c.useState("Tümü"),[l,f]=c.useState(null),[z,g]=c.useState(!1),[b,m]=c.useState(null),u=i.filter(s=>{var j,y;const r=n.toLowerCase(),h=!r||s.name.toLowerCase().includes(r)||((j=s.email)==null?void 0:j.toLowerCase().includes(r))||((y=s.phone)==null?void 0:y.includes(r)),C=o==="Tümü"||s.loyalty===o;return h&&C}),S=s=>{b||t(s)};return e.jsxs("div",{className:"crm-layout",children:[e.jsxs("div",{className:"crm-list-panel",children:[e.jsxs("div",{className:"cls-head",children:[e.jsx("h2",{children:"Misafir CRM"}),e.jsxs("button",{className:"btn-primary",onClick:()=>{m(null),g(!0)},children:[e.jsx(A,{size:16})," Yeni Misafir"]})]}),e.jsxs("div",{className:"crm-mini-stats",children:[["Platinum","Gold","Silver"].map(s=>e.jsxs("div",{className:"cms",children:[e.jsx("strong",{children:i.filter(r=>r.loyalty===s).length}),e.jsx("span",{children:s})]},s)),e.jsxs("div",{className:"cms",children:[e.jsx("strong",{children:i.length}),e.jsx("span",{children:"Toplam"})]})]}),e.jsxs("div",{className:"crm-filters",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(G,{size:15,color:"#94a3b8"}),e.jsx("input",{placeholder:"İsim, e-posta, telefon...",value:n,onChange:s=>d(s.target.value)})]}),e.jsx("div",{className:"loyalty-filter",children:["Tümü","Platinum","Gold","Silver","None"].map(s=>e.jsx("button",{className:`lf-btn ${o===s?"active":""}`,onClick:()=>a(s),children:s},s))})]}),e.jsxs("div",{className:"guest-cards",children:[u.map((s,r)=>{const h=k[s.loyalty];return e.jsxs(x.div,{className:`gc-card ${(l==null?void 0:l.id)===s.id?"active":""}`,onClick:()=>f(s),whileHover:{scale:1.01},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:r*.04},children:[e.jsx("div",{className:"gc-avatar",children:s.name[0]}),e.jsxs("div",{className:"gc-info",children:[e.jsx("strong",{children:s.name}),e.jsx("span",{children:s.email||s.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"loyalty-tag sm",style:{background:h.bg,color:h.text},children:s.loyalty}),e.jsxs("div",{className:"gc-stat",children:["₺",s.totalSpent.toLocaleString()," · ",s.visits,"×"]})]})]},s.id)}),u.length===0&&e.jsx("p",{className:"no-res",style:{padding:"30px",textAlign:"center",color:"#94a3b8"},children:"Misafir bulunamadı."})]})]}),e.jsx("div",{className:"crm-detail-panel",children:e.jsx(v,{mode:"wait",children:l?e.jsx(H,{guest:l,reservations:p,onClose:()=>f(null),onEdit:s=>{m(s),g(!0)}},l.id):e.jsxs(x.div,{className:"no-selection",initial:{opacity:0},animate:{opacity:1},children:[e.jsx(P,{size:64,color:"#e2e8f0"}),e.jsx("p",{children:"Misafir detayları için listeden birini seçin"})]})})}),e.jsx(v,{children:z&&e.jsx(D,{guest:b,onClose:()=>{g(!1),m(null)},onSave:S})}),e.jsx("style",{children:`
        .crm-layout { display:flex; height:calc(100vh - 70px); }
        .crm-list-panel { width:440px; border-right:1px solid #e2e8f0; background:white; display:flex; flex-direction:column; overflow:hidden; }
        .cls-head { padding:20px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f1f5f9; }
        .cls-head h2 { font-size:20px; font-weight:800; color:#1e293b; }
        .btn-primary { padding:9px 16px; border-radius:10px; border:none; background:#3b82f6; color:white; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; }

        .crm-mini-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:0; border-bottom:1px solid #f1f5f9; }
        .cms { text-align:center; padding:14px 8px; border-right:1px solid #f1f5f9; }
        .cms strong { display:block; font-size:20px; font-weight:900; color:#1e293b; }
        .cms span { font-size:11px; color:#94a3b8; font-weight:700; }

        .crm-filters { padding:14px; display:flex; flex-direction:column; gap:10px; border-bottom:1px solid #f1f5f9; }
        .search-box { display:flex; align-items:center; gap:8px; background:#f8fafc; border:1.5px solid #e2e8f0; padding:9px 14px; border-radius:10px; }
        .search-box input { border:none; background:transparent; outline:none; font-size:13px; width:100%; }
        .loyalty-filter { display:flex; gap:6px; flex-wrap:wrap; }
        .lf-btn { padding:5px 12px; border-radius:20px; border:1.5px solid #e2e8f0; background:white; font-size:11px; font-weight:700; color:#64748b; cursor:pointer; }
        .lf-btn.active { background:#1e293b; color:white; border-color:#1e293b; }

        .guest-cards { flex:1; overflow-y:auto; padding:10px; display:flex; flex-direction:column; gap:6px; }
        .gc-card { display:flex; align-items:center; gap:12px; padding:13px; border-radius:12px; border:1.5px solid transparent; cursor:pointer; transition:0.2s; }
        .gc-card:hover { background:#f8fafc; }
        .gc-card.active { background:#eff6ff; border-color:#3b82f6; }
        .gc-avatar { width:40px; height:40px; background:linear-gradient(135deg,#3b82f6,#8b5cf6); border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-weight:900; font-size:16px; flex-shrink:0; }
        .gc-info { flex:1; min-width:0; }
        .gc-info strong { display:block; font-size:14px; color:#1e293b; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .gc-info span { font-size:11px; color:#94a3b8; }
        .loyalty-tag { padding:3px 10px; border-radius:20px; font-size:10px; font-weight:800; white-space:nowrap; }
        .loyalty-tag.sm { font-size:9px; padding:2px 8px; display:block; margin-bottom:4px; text-align:center; }
        .gc-stat { font-size:10px; color:#94a3b8; font-weight:700; text-align:right; }

        .crm-detail-panel { flex:1; overflow-y:auto; background:#f8fafc; }
        .no-selection { height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; color:#94a3b8; font-size:14px; font-weight:600; }

        .detail-panel { padding:30px; background:white; min-height:100%; display:flex; flex-direction:column; gap:20px; }
        .dp-head { display:flex; align-items:center; gap:16px; }
        .dp-avatar { width:56px; height:56px; background:linear-gradient(135deg,#3b82f6,#8b5cf6); border-radius:16px; display:flex; align-items:center; justify-content:center; color:white; font-weight:900; font-size:24px; flex-shrink:0; }
        .dp-head h3 { font-size:22px; font-weight:800; color:#1e293b; }
        .dp-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }

        .dp-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .dps { background:#f8fafc; border-radius:14px; padding:16px; display:flex; align-items:center; gap:12px; }
        .dps svg { color:#3b82f6; flex-shrink:0; }
        .dps strong { display:block; font-size:18px; font-weight:900; color:#1e293b; }
        .dps span { font-size:11px; color:#94a3b8; font-weight:700; }

        .dp-contact { display:flex; flex-direction:column; gap:8px; padding:16px; background:#f8fafc; border-radius:14px; }
        .dc-row { display:flex; align-items:center; gap:10px; font-size:13px; color:#475569; }
        .dc-row svg { color:#94a3b8; flex-shrink:0; }

        .dp-section h4 { font-size:14px; font-weight:800; color:#1e293b; margin-bottom:12px; }
        .res-mini { display:flex; justify-content:space-between; align-items:center; padding:12px; background:#f8fafc; border-radius:10px; margin-bottom:8px; }
        .rm-left strong { display:block; font-size:13px; color:#1e293b; font-weight:700; }
        .rm-left span { font-size:11px; color:#94a3b8; }
        .rmtag { padding:4px 12px; border-radius:20px; font-size:11px; font-weight:800; }
        .rmtag.check-in { background:#f0fdf4; color:#10b981; }
        .rmtag.check-out { background:#f8fafc; color:#64748b; }
        .rmtag.gelecek { background:#eff6ff; color:#3b82f6; }
        .no-res { font-size:13px; color:#94a3b8; }

        .dp-edit-btn { padding:12px 20px; border-radius:12px; border:1.5px solid #e2e8f0; background:white; font-size:13px; font-weight:700; color:#475569; cursor:pointer; display:flex; align-items:center; gap:8px; align-self:flex-start; }
        .dp-edit-btn:hover { background:#f1f5f9; border-color:#3b82f6; color:#3b82f6; }

        /* form modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; z-index:1000; }
        .gf-modal { background:white; border-radius:24px; overflow:hidden; box-shadow:0 25px 50px rgba(0,0,0,0.4); width:520px; max-height:90vh; overflow-y:auto; }
        .modal-head { padding:22px 28px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; background:white; z-index:10; }
        .modal-head h3 { font-size:18px; font-weight:800; color:#1e293b; }
        .modal-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }
        .gf-body { padding:24px 28px; }
        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .fg-group { display:flex; flex-direction:column; gap:6px; }
        .fg-group.full { grid-column:1/-1; }
        .fg-group label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; }
        .fg-group input, .fg-group select { padding:11px 14px; border:1.5px solid #e2e8f0; border-radius:12px; font-size:13px; outline:none; }
        .fg-group input:focus, .fg-group select:focus { border-color:#3b82f6; }
        .modal-foot { padding:16px 28px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end; gap:10px; position:sticky; bottom:0; background:white; }
        .btn-cancel { padding:12px 20px; border-radius:12px; border:1px solid #e2e8f0; background:white; font-weight:700; cursor:pointer; }
        .btn-save { padding:12px 24px; border-radius:12px; border:none; background:#3b82f6; color:white; font-weight:800; cursor:pointer; }
        .btn-save:disabled { opacity:.5; cursor:not-allowed; }
      `})]})};export{q as default};
