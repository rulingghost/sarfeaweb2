import{d as w,u as z,r as d,j as e,q as S,i as C,C as T,n as L,F as m,O as b,o as I,p as M}from"./index-DZMFd3xx.js";import{P}from"./pen-line-39eYajjb.js";import{P as B}from"./printer-DSXQ_0_8.js";import{I as F}from"./info-daCZjRVq.js";import{P as K,M as O}from"./phone-D3wgkQYv.js";import{M as R}from"./map-pin-B9syaC88.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=w("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),U=()=>{const{reservations:o,guests:j,folioLines:u,checkIn:y,checkOut:v,makePayment:A,addNotification:p}=z(),[x,h]=d.useState(null),[t,f]=d.useState("genel"),[c,N]=d.useState(""),g=o.filter(i=>{if(!c)return!0;const a=c.toLowerCase();return i.guest.toLowerCase().includes(a)||i.id.toLowerCase().includes(a)||(i.room||"").includes(a)}),s=o.find(i=>i.id===x),r=s?j.find(i=>i.name===s.guest):null,l=s?u[s.id]||[]:[],k=l.reduce((i,a)=>i+a.amount,0),n={"check-in":{label:"İç Misafir",color:"#10b981",bg:"#f0fdf4"},"check-out":{label:"Çıkış Yaptı",color:"#64748b",bg:"#f8fafc"},gelecek:{label:"Gelecek",color:"#3b82f6",bg:"#eff6ff"}};return e.jsxs("div",{className:"rc-page",children:[e.jsxs("aside",{className:"rc-sidebar",children:[e.jsxs("div",{className:"rcs-head",children:[e.jsx("h3",{children:"Rezervasyon Kartları"}),e.jsxs("span",{children:[o.length," kayıt"]})]}),e.jsxs("div",{className:"rcs-search",children:[e.jsx(S,{size:15,color:"#94a3b8"}),e.jsx("input",{placeholder:"Misafir, oda, no...",value:c,onChange:i=>N(i.target.value)})]}),e.jsxs("div",{className:"rcs-list",children:[g.map(i=>{const a=n[i.status]||n.gelecek;return e.jsxs("button",{className:`rcs-item ${x===i.id?"active":""}`,onClick:()=>{h(i.id),f("genel")},children:[e.jsx("div",{className:"rcs-av",children:i.guest[0]}),e.jsxs("div",{className:"rcs-info",children:[e.jsx("strong",{children:i.guest}),e.jsxs("span",{children:[i.id," · Oda ",i.room||"—"]})]}),e.jsx("span",{className:"rcs-status",style:{background:a.bg,color:a.color},children:a.label})]},i.id)}),g.length===0&&e.jsx("p",{className:"empty-msg",children:"Sonuç bulunamadı."})]})]}),e.jsx("main",{className:"rc-detail",children:s?e.jsxs("div",{className:"rcd-inner",children:[e.jsxs("div",{className:"rc-header",children:[e.jsxs("div",{className:"rch-left",children:[e.jsxs("div",{className:"res-id-tag",children:["#",s.id]}),e.jsx("div",{className:"res-status-pill",style:{background:(n[s.status]||n.gelecek).color},children:(n[s.status]||n.gelecek).label})]}),e.jsxs("div",{className:"rch-actions",children:[e.jsx("button",{className:"btn-icon",children:e.jsx(P,{size:16})}),e.jsx("button",{className:"btn-icon",children:e.jsx(B,{size:16})})]})]}),e.jsxs("div",{className:"rc-strip",children:[e.jsxs("div",{className:"rcs-item-strip",children:[e.jsx("div",{className:"rcsi-icon",children:e.jsx(C,{size:20})}),e.jsxs("div",{className:"rcsi-content",children:[e.jsx("strong",{children:s.guest}),e.jsxs("span",{children:[(r==null?void 0:r.loyalty)||"Misafir"," · ",(r==null?void 0:r.visits)||1," konaklama"]})]})]}),e.jsxs("div",{className:"rcs-item-strip",children:[e.jsx("div",{className:"rcsi-icon",children:e.jsx(T,{size:20})}),e.jsxs("div",{className:"rcsi-content",children:[e.jsxs("strong",{children:[s.checkIn," → ",s.checkOut]}),e.jsxs("span",{children:[s.nights," Gece · ",s.pax," Kişi"]})]})]}),e.jsxs("div",{className:"rcs-item-strip",children:[e.jsx("div",{className:"rcsi-icon",children:e.jsx($,{size:20})}),e.jsxs("div",{className:"rcsi-content",children:[e.jsxs("strong",{children:["Oda ",s.room||"Atanmadı"," — ",s.type]}),e.jsxs("span",{children:[s.board," · ",s.channel]})]})]})]}),e.jsx("div",{className:"rc-tabs",children:[{id:"genel",label:"Genel Bilgiler",icon:e.jsx(F,{size:15})},{id:"folio",label:"Folio & Ödemeler",icon:e.jsx(L,{size:15})},{id:"notlar",label:"Notlar",icon:e.jsx(m,{size:15})}].map(i=>e.jsxs("button",{className:`rc-tab ${t===i.id?"active":""}`,onClick:()=>f(i.id),children:[i.icon," ",i.label]},i.id))}),e.jsxs("div",{className:"rc-content",children:[t==="genel"&&e.jsxs("div",{className:"rc-grid",children:[e.jsxs("div",{className:"rc-box",children:[e.jsx("h4",{children:"İletişim Bilgileri"}),e.jsxs("div",{className:"rc-info-list",children:[e.jsxs("div",{className:"ril-i",children:[e.jsx(K,{size:14})," ",(r==null?void 0:r.phone)||"Belirtilmedi"]}),e.jsxs("div",{className:"ril-i",children:[e.jsx(O,{size:14})," ",(r==null?void 0:r.email)||"Belirtilmedi"]}),e.jsxs("div",{className:"ril-i",children:[e.jsx(R,{size:14})," ",(r==null?void 0:r.nationality)||"TR"]}),(r==null?void 0:r.tcNo)&&e.jsxs("div",{className:"ril-i",children:[e.jsx(b,{size:14})," TC: ",r.tcNo]}),(r==null?void 0:r.passport)&&e.jsxs("div",{className:"ril-i",children:[e.jsx(b,{size:14})," Pasaport: ",r.passport]})]})]}),e.jsxs("div",{className:"rc-box",children:[e.jsx("h4",{children:"Fiyatlandırma Özeti"}),e.jsxs("div",{className:"rc-price-grid",children:[e.jsxs("div",{className:"rpg-i",children:[e.jsx("span",{children:"Toplam Tutar"}),e.jsxs("strong",{children:["₺",s.total.toLocaleString()]})]}),e.jsxs("div",{className:"rpg-i",children:[e.jsx("span",{children:"Ödenen"}),e.jsxs("strong",{className:"green",children:["₺",s.paid.toLocaleString()]})]}),e.jsxs("div",{className:"rpg-i divider",children:[e.jsx("span",{children:"Kalan Borç"}),e.jsx("strong",{className:s.balance>0?"red":"green",children:s.balance>0?`₺${s.balance.toLocaleString()}`:"✓ Kapandı"})]})]})]})]}),t==="folio"&&e.jsxs("div",{className:"folio-tab",children:[e.jsxs("table",{className:"mini-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Açıklama"}),e.jsx("th",{children:"Tür"}),e.jsx("th",{children:"Tarih"}),e.jsx("th",{className:"right",children:"Tutar"})]})}),e.jsxs("tbody",{children:[l.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.desc}),e.jsx("td",{children:e.jsx("span",{className:`type-tag ${i.type}`,children:i.type==="accommodation"?"Konaklama":"Ekstra"})}),e.jsx("td",{children:i.date}),e.jsxs("td",{className:"right",children:["₺",i.amount.toLocaleString()]})]},i.id)),l.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"empty-msg",children:"Henüz folio kaydı yok."})})]})]}),e.jsxs("div",{className:"folio-summary",children:[e.jsxs("div",{className:"fs-row",children:[e.jsx("span",{children:"Folio Toplam"}),e.jsxs("strong",{children:["₺",k.toLocaleString()]})]}),e.jsxs("div",{className:"fs-row",children:[e.jsx("span",{children:"Ödenen"}),e.jsxs("strong",{className:"green",children:["₺",s.paid.toLocaleString()]})]}),e.jsxs("div",{className:"fs-row big",children:[e.jsx("span",{children:"Bakiye"}),e.jsx("strong",{className:s.balance>0?"red":"green",children:s.balance>0?`₺${s.balance.toLocaleString()}`:"✓ Kapandı"})]})]})]}),t==="notlar"&&e.jsxs("div",{className:"notes-tab",children:[e.jsxs("div",{className:"note-box",children:[e.jsx("h4",{children:"Rezervasyon Notu"}),e.jsx("p",{children:s.notes||"Bu rezervasyona ait not bulunmuyor."})]}),r&&e.jsxs("div",{className:"note-box",children:[e.jsx("h4",{children:"Misafir Geçmişi"}),e.jsxs("div",{className:"guest-history",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Toplam Konaklama"}),e.jsx("strong",{children:r.visits})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Toplam Harcama"}),e.jsxs("strong",{children:["₺",r.totalSpent.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Son Ziyaret"}),e.jsx("strong",{children:r.lastVisit})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Sadakat"}),e.jsx("strong",{children:r.loyalty})]})]})]})]})]}),e.jsxs("div",{className:"rc-footer",children:[s.status==="gelecek"&&e.jsxs("button",{className:"btn-action green",onClick:()=>{y(s.id),p({type:"success",msg:`Check-in: ${s.guest}`})},children:[e.jsx(I,{size:15})," Check-In Yap"]}),s.status==="check-in"&&e.jsxs("button",{className:"btn-action red",onClick:()=>{v(s.id),p({type:"info",msg:`Check-out: ${s.guest}`}),h(null)},children:[e.jsx(M,{size:15})," Check-Out Yap"]})]})]}):e.jsxs("div",{className:"rc-empty",children:[e.jsx(m,{size:64,color:"#e2e8f0"}),e.jsx("p",{children:"Detayları görmek için soldaki listeden bir rezervasyon seçin"})]})}),e.jsx("style",{children:`
        .rc-page { display:flex; height:calc(100vh - 70px); }

        /* Sidebar */
        .rc-sidebar { width:320px; background:white; border-right:1px solid #e2e8f0; display:flex; flex-direction:column; }
        .rcs-head { padding:18px 20px; border-bottom:1px solid #f1f5f9; }
        .rcs-head h3 { font-size:16px; font-weight:800; color:#1e293b; }
        .rcs-head span { font-size:12px; color:#94a3b8; }
        .rcs-search { display:flex; align-items:center; gap:8px; padding:12px 16px; border-bottom:1px solid #f1f5f9; }
        .rcs-search input { border:none; outline:none; font-size:13px; width:100%; background:transparent; }
        .rcs-list { flex:1; overflow-y:auto; padding:8px; }
        .rcs-item { width:100%; display:flex; align-items:center; gap:10px; padding:12px; border-radius:12px; border:none; background:transparent; cursor:pointer; text-align:left; margin-bottom:4px; transition:0.15s; }
        .rcs-item:hover { background:#f8fafc; }
        .rcs-item.active { background:#eff6ff; border:1.5px solid #3b82f6; }
        .rcs-av { width:34px; height:34px; background:#eff6ff; color:#3b82f6; font-weight:900; font-size:14px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .rcs-info { flex:1; min-width:0; }
        .rcs-info strong { display:block; font-size:13px; color:#1e293b; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .rcs-info span { font-size:11px; color:#94a3b8; }
        .rcs-status { font-size:10px; font-weight:800; padding:3px 8px; border-radius:20px; flex-shrink:0; white-space:nowrap; }
        .empty-msg { text-align:center; padding:30px; color:#94a3b8; font-size:13px; }

        /* Detail */
        .rc-detail { flex:1; padding:28px; overflow-y:auto; background:#f8fafc; }
        .rc-empty { height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; color:#94a3b8; font-size:14px; }
        .rcd-inner { display:flex; flex-direction:column; gap:20px; }

        /* Header */
        .rc-header { display:flex; justify-content:space-between; align-items:center; background:white; border-radius:16px; padding:18px 24px; border:1px solid #e2e8f0; }
        .rch-left { display:flex; align-items:center; gap:12px; }
        .res-id-tag { font-family:monospace; font-size:14px; font-weight:800; color:#64748b; }
        .res-status-pill { font-size:11px; font-weight:800; color:white; padding:4px 14px; border-radius:20px; }
        .rch-actions { display:flex; gap:8px; }
        .btn-icon { width:38px; height:38px; border-radius:10px; background:#f8fafc; border:1px solid #e2e8f0; color:#64748b; cursor:pointer; display:flex; align-items:center; justify-content:center; }
        .btn-icon:hover { background:#eff6ff; color:#3b82f6; }

        /* Info Strip */
        .rc-strip { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:20px 24px; display:flex; gap:32px; }
        .rcs-item-strip { display:flex; align-items:center; gap:14px; }
        .rcsi-icon { width:42px; height:42px; background:#eff6ff; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#3b82f6; flex-shrink:0; }
        .rcsi-content strong { display:block; font-size:14px; color:#1e293b; font-weight:700; }
        .rcsi-content span { font-size:12px; color:#94a3b8; font-weight:600; }

        /* Tabs */
        .rc-tabs { display:flex; gap:8px; }
        .rc-tab { padding:10px 18px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; color:#64748b; cursor:pointer; display:flex; align-items:center; gap:7px; transition:0.15s; }
        .rc-tab.active { background:#1e293b; color:white; border-color:#1e293b; }

        /* Content */
        .rc-content { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:24px; }
        .rc-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
        .rc-box h4 { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:14px; border-bottom:2px solid #f8fafc; padding-bottom:8px; }
        .rc-info-list { display:flex; flex-direction:column; gap:12px; }
        .ril-i { font-size:13px; color:#475569; display:flex; align-items:center; gap:10px; font-weight:600; }
        .rc-price-grid { display:flex; flex-direction:column; gap:10px; }
        .rpg-i { display:flex; justify-content:space-between; font-size:13px; }
        .rpg-i span { color:#94a3b8; }
        .rpg-i strong { color:#1e293b; font-weight:800; }
        .rpg-i strong.green { color:#10b981; }
        .rpg-i strong.red { color:#ef4444; }
        .rpg-i.divider { border-top:1px dashed #e2e8f0; padding-top:10px; margin-top:5px; }

        /* Folio */
        .folio-tab {}
        .mini-table { width:100%; border-collapse:collapse; margin-bottom:16px; }
        .mini-table th { text-align:left; padding:10px 14px; font-size:11px; color:#94a3b8; text-transform:uppercase; border-bottom:2px solid #f1f5f9; font-weight:800; }
        .mini-table th.right { text-align:right; }
        .mini-table td { padding:12px 14px; font-size:13px; color:#475569; border-bottom:1px solid #f8fafc; }
        .mini-table td.right { text-align:right; font-weight:700; color:#1e293b; }
        .type-tag { padding:3px 10px; border-radius:20px; font-size:10px; font-weight:800; }
        .type-tag.accommodation { background:#eff6ff; color:#3b82f6; }
        .type-tag.extra { background:#fff7ed; color:#f59e0b; }
        .folio-summary { background:#f8fafc; border-radius:12px; padding:16px; max-width:300px; margin-left:auto; }
        .fs-row { display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:13px; }
        .fs-row:last-child { border-bottom:none; }
        .fs-row span { color:#64748b; }
        .fs-row.big { font-size:16px; font-weight:800; padding-top:12px; }
        .green { color:#10b981 !important; }
        .red { color:#ef4444 !important; }

        /* Notes */
        .note-box { margin-bottom:20px; }
        .note-box h4 { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; margin-bottom:10px; }
        .note-box p { font-size:13px; color:#475569; line-height:1.6; background:#f8fafc; padding:14px; border-radius:10px; }
        .guest-history { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .guest-history > div { background:#f8fafc; padding:14px; border-radius:10px; }
        .guest-history span { display:block; font-size:11px; color:#94a3b8; font-weight:700; margin-bottom:4px; }
        .guest-history strong { font-size:16px; color:#1e293b; font-weight:800; }

        /* Footer */
        .rc-footer { display:flex; justify-content:flex-end; gap:12px; }
        .btn-action { padding:12px 22px; border-radius:12px; border:none; font-size:13px; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:8px; color:white; }
        .btn-action.green { background:#10b981; }
        .btn-action.red { background:#ef4444; }
      `})]})};export{U as default};
