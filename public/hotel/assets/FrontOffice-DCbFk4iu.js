import{d as w,u as L,r as x,j as e,o as O,i as $,p as C,A as H,m as h,q as W,b as u,f as F,X as S}from"./index-Cmjygl0X.js";import{S as G}from"./shield-B9wfQGk5.js";import{M as P}from"./message-square-CtwzrZP-.js";import{A as q}from"./arrow-right-BrcSSQ3T.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=w("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=w("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=w("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),E=({reservation:t,rooms:r,onConfirm:f,onClose:p})=>{const[s,b]=x.useState(0),[o,l]=x.useState(t.room||""),c=r.filter(n=>n.status==="boş"&&n.clean==="temiz"),d=()=>{f(t.id,o),p()};return e.jsx(h.div,{className:"modal-overlay",onClick:p,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(h.div,{className:"ci-modal",onClick:n=>n.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:[e.jsxs("div",{className:"modal-head",children:[e.jsxs("div",{className:"mh-title",children:[e.jsx(M,{size:20,color:"#3b82f6"}),e.jsxs("h3",{children:["Check-In: ",t.guest]})]}),e.jsx("button",{onClick:p,children:e.jsx(S,{size:20})})]}),e.jsx("div",{className:"ci-steps",children:["Oda Ata","Kimlik Tara","Tamamla"].map((n,i)=>e.jsxs("div",{className:`step ${s>=i?"done":""} ${s===i?"active":""}`,children:[e.jsx("div",{className:"step-dot",children:s>i?e.jsx(u,{size:14}):i+1}),e.jsx("span",{children:n})]},i))}),e.jsxs("div",{className:"ci-body",children:[s===0&&e.jsxs("div",{className:"ci-room-select",children:[e.jsxs("div",{className:"res-info-box",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Rezervasyon"}),e.jsx("strong",{children:t.id})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Giriş / Çıkış"}),e.jsxs("strong",{children:[t.checkIn," / ",t.checkOut]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Oda Tipi"}),e.jsx("strong",{children:t.type})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Kişi"}),e.jsxs("strong",{children:[t.pax," Kişi"]})]})]}),e.jsx("label",{className:"input-label",children:"Oda Seçin *"}),t.room?e.jsx("div",{className:"assigned-room",children:e.jsxs("span",{children:["Oda ",t.room," — Önceden Atanmış"]})}):e.jsx("div",{className:"room-picker",children:c.map(n=>e.jsxs("button",{className:`rpick ${o===n.id?"active":""}`,onClick:()=>l(n.id),children:[e.jsx("strong",{children:n.id}),e.jsx("span",{children:n.type}),e.jsxs("span",{className:"rate",children:["₺",n.rate,"/gece"]})]},n.id))}),e.jsxs("button",{className:"btn-next",onClick:()=>b(1),disabled:!o&&!t.room,children:["Kimlik Taramaya Geç ",e.jsx(q,{size:16})]})]}),s===1&&e.jsxs("div",{className:"ci-scan",children:[e.jsxs("div",{className:"scan-card",children:[e.jsx("div",{className:"scan-line"}),e.jsx("div",{className:"scan-icon",children:e.jsx(R,{size:40,color:"#3b82f6"})})]}),e.jsx("p",{children:e.jsx("strong",{children:"Kimlik / Pasaport taranıyor..."})}),e.jsx("small",{children:"OCR sistemi veri okuyor — lütfen bekleyin"})]}),s===2&&e.jsxs("div",{className:"ci-done",children:[e.jsx(h.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring"},children:e.jsx(u,{size:64,color:"#10b981"})}),e.jsx("h3",{children:"Kimlik Doğrulandı!"}),e.jsxs("div",{className:"data-grid",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Ad Soyad"}),e.jsx("strong",{children:t.guest})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Oda"}),e.jsx("strong",{children:o||t.room})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Giriş"}),e.jsx("strong",{children:t.checkIn})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Çıkış"}),e.jsx("strong",{children:t.checkOut})]})]}),e.jsxs("button",{className:"btn-finish",onClick:d,children:[e.jsx(u,{size:16})," Check-In'i Tamamla & KBS'ye Gönder"]})]})]})]})})},U=({rooms:t,onClose:r,onAdd:f})=>{const p=t.filter(i=>i.status==="boş"&&i.clean==="temiz"),[s,b]=x.useState({guest:"",room:"",pax:1,checkOut:"",board:"HB",channel:"Walk-in",paid:0,method:"Nakit"}),o=(i,j)=>b(m=>({...m,[i]:j})),l=t.find(i=>i.id===s.room),c=s.checkOut?Math.max(1,Math.round((new Date(s.checkOut)-new Date("2026-03-14"))/864e5)):1,d=l?l.rate*c:0,n=()=>{!s.guest||!s.room||!s.checkOut||(f({...s,checkIn:"2026-03-14",nights:c,total:d,balance:d-Number(s.paid),status:"check-in",type:l==null?void 0:l.type,pax:Number(s.pax)}),r())};return e.jsx(h.div,{className:"modal-overlay",onClick:r,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(h.div,{className:"wi-modal",onClick:i=>i.stopPropagation(),initial:{scale:.9},animate:{scale:1},children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("h3",{children:"Walk-In Kayıt"}),e.jsx("button",{onClick:r,children:e.jsx(S,{size:20})})]}),e.jsxs("div",{className:"wi-body",children:[e.jsxs("div",{className:"wi-grid",children:[e.jsxs("div",{className:"wg",children:[e.jsx("label",{children:"Misafir Adı *"}),e.jsx("input",{value:s.guest,onChange:i=>o("guest",i.target.value),placeholder:"Ad Soyad"})]}),e.jsxs("div",{className:"wg",children:[e.jsx("label",{children:"Kişi Sayısı"}),e.jsx("input",{type:"number",value:s.pax,onChange:i=>o("pax",i.target.value),min:1,max:6})]}),e.jsxs("div",{className:"wg",children:[e.jsx("label",{children:"Çıkış Tarihi *"}),e.jsx("input",{type:"date",value:s.checkOut,onChange:i=>o("checkOut",i.target.value),min:"2026-03-15"})]}),e.jsxs("div",{className:"wg",children:[e.jsx("label",{children:"Pansiyon"}),e.jsx("select",{value:s.board,onChange:i=>o("board",i.target.value),children:["BB","HB","FB","AI"].map(i=>e.jsx("option",{children:i},i))})]})]}),e.jsx("label",{children:"Oda Seçin *"}),e.jsx("div",{className:"room-picker",children:p.map(i=>e.jsxs("button",{className:`rpick ${s.room===i.id?"active":""}`,onClick:()=>o("room",i.id),children:[e.jsx("strong",{children:i.id}),e.jsx("span",{children:i.type}),e.jsxs("span",{className:"rate",children:["₺",i.rate,"/gece"]})]},i.id))}),s.room&&s.checkOut&&e.jsxs("div",{className:"calc-box",children:[e.jsxs("div",{children:[e.jsxs("span",{children:[c," gece × ₺",l==null?void 0:l.rate]}),e.jsxs("strong",{children:["₺",d.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Alınan Ön Ödeme (₺)"}),e.jsx("input",{type:"number",value:s.paid,onChange:i=>o("paid",i.target.value),min:0,max:d})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Ödeme Yöntemi"}),e.jsx("select",{value:s.method,onChange:i=>o("method",i.target.value),children:["Nakit","Kredi Kartı","EFT/Havale"].map(i=>e.jsx("option",{children:i},i))})]}),e.jsxs("div",{className:"calc-total",children:["Kalan: ",e.jsxs("strong",{style:{color:"#ef4444"},children:["₺",Math.max(0,d-Number(s.paid)).toLocaleString()]})]})]})]}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{className:"btn-cancel",onClick:r,children:"İptal"}),e.jsxs("button",{className:"btn-primary",onClick:n,disabled:!s.guest||!s.room||!s.checkOut,children:[e.jsx(O,{size:14})," Walk-In Kaydı Oluştur"]})]})]})})},Q=()=>{const{reservations:t,rooms:r,checkIn:f,checkOut:p,addReservation:s,addNotification:b}=L(),[o,l]=x.useState("arrivals"),[c,d]=x.useState(""),[n,i]=x.useState(null),[j,m]=x.useState(!1),k=t.filter(a=>a.status==="gelecek"),y=t.filter(a=>a.status==="check-in"),v=t.filter(a=>a.status==="check-in"&&a.checkOut==="2026-03-14"),I=t.filter(a=>a.status==="check-out"),K={arrivals:k,inhouse:y,departures:v,checkouts:I},A={arrivals:`Gelişler (${k.length})`,inhouse:`İçeridekiler (${y.length})`,departures:`Çıkışlar (${v.length})`,checkouts:"Tamamlananlar"},N=(K[o]||[]).filter(a=>!c||a.guest.toLowerCase().includes(c.toLowerCase())||(a.room||"").includes(c)||a.id.includes(c)),B=[{label:"Giriş Beklenen",value:k.length,color:"#3b82f6",icon:e.jsx(O,{size:18})},{label:"İçerideki",value:y.length,color:"#10b981",icon:e.jsx($,{size:18})},{label:"Bugün Çıkış",value:v.length,color:"#f59e0b",icon:e.jsx(C,{size:18})},{label:"Arızalı Oda",value:r.filter(a=>a.status==="arızalı").length,color:"#ef4444",icon:e.jsx(H,{size:18})}],T=a=>{p(a),b({type:"info",msg:"Check-out tamamlandı"})};return e.jsxs("div",{className:"fo-page",children:[e.jsxs("div",{className:"fo-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Ön Büro (Front Office)"}),e.jsx("span",{children:"Resepsiyon, check-in/check-out ve KBS yönetimi"})]}),e.jsxs("div",{className:"fo-actions",children:[e.jsxs("div",{className:"kbs-tag",children:[e.jsx(G,{size:14,color:"#10b981"})," KBS: ",e.jsx("strong",{children:"Aktif"})]}),e.jsxs("button",{className:"btn-primary",onClick:()=>m(!0),children:[e.jsx(D,{size:15})," Walk-In Kayıt"]})]})]}),e.jsx("div",{className:"fo-stats",children:B.map((a,g)=>e.jsxs(h.div,{className:"fos-card",whileHover:{y:-3},children:[e.jsx("div",{className:"fos-icon",style:{background:`${a.color}18`,color:a.color},children:a.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"fos-val",children:a.value}),e.jsx("div",{className:"fos-lbl",children:a.label})]})]},g))}),e.jsxs("div",{className:"fo-table-card",children:[e.jsxs("div",{className:"ft-head",children:[e.jsx("div",{className:"tabs",children:Object.entries(A).map(([a,g])=>e.jsx("button",{className:`tab ${o===a?"active":""}`,onClick:()=>l(a),children:g},a))}),e.jsxs("div",{className:"search-box",children:[e.jsx(W,{size:15}),e.jsx("input",{placeholder:"Misafir, oda, rezervasyon no...",value:c,onChange:a=>d(a.target.value)})]})]}),e.jsxs("table",{className:"fo-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Misafir"}),e.jsx("th",{children:"Oda"}),e.jsx("th",{children:"Giriş/Çıkış"}),e.jsx("th",{children:"Kanal"}),e.jsx("th",{children:"Tutar / Bakiye"}),e.jsx("th",{children:"İşlemler"})]})}),e.jsxs("tbody",{children:[N.map((a,g)=>{var z;return e.jsxs(h.tr,{initial:{opacity:0},animate:{opacity:1},transition:{delay:g*.03},children:[e.jsx("td",{children:e.jsx("span",{className:"res-id",children:a.id})}),e.jsx("td",{children:e.jsxs("div",{className:"g-cell",children:[e.jsx("div",{className:"g-av",children:a.guest[0]}),e.jsxs("div",{children:[e.jsx("strong",{children:a.guest}),e.jsxs("span",{children:[a.pax," kişi · ",a.board]})]})]})}),e.jsx("td",{children:a.room?e.jsx("span",{className:"room-badge",children:a.room}):e.jsx("span",{className:"no-room",children:"Atanmadı"})}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("strong",{children:a.checkIn}),e.jsxs("small",{children:["→ ",a.checkOut]})]})}),e.jsx("td",{children:e.jsx("span",{className:"channel",children:a.channel})}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsxs("strong",{children:["₺",(z=a.total)==null?void 0:z.toLocaleString()]}),a.balance>0&&e.jsxs("span",{className:"bal-warn",children:["₺",a.balance.toLocaleString()," borç"]}),a.balance===0&&e.jsx("span",{className:"bal-ok",children:"✓ Kapandı"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"act-row",children:[a.status==="gelecek"&&e.jsxs("button",{className:"act-btn blue",onClick:()=>i(a),children:[e.jsx(M,{size:13})," Check-In"]}),a.status==="check-in"&&e.jsxs("button",{className:"act-btn red",onClick:()=>T(a.id),children:[e.jsx(C,{size:13})," Check-Out"]}),a.status==="check-out"&&e.jsxs("span",{className:"done-tag",children:[e.jsx(u,{size:13})," Tamamlandı"]}),e.jsx("button",{className:"act-icon",title:"Mesaj",children:e.jsx(P,{size:15})})]})})]},a.id)}),N.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,style:{textAlign:"center",padding:"40px",color:"#94a3b8",fontWeight:700},children:"Bu sekmede kayıt bulunmuyor."})})]})]})]}),e.jsxs(F,{children:[n&&e.jsx(E,{reservation:n,rooms:r,onConfirm:f,onClose:()=>i(null)}),j&&e.jsx(U,{rooms:r,onClose:()=>m(!1),onAdd:s})]}),e.jsx("style",{children:`
        .fo-page { padding:28px; display:flex; flex-direction:column; gap:20px; }
        .fo-head { display:flex; justify-content:space-between; align-items:flex-start; }
        .fo-head h2 { font-size:24px; font-weight:800; color:#1e293b; }
        .fo-head span { font-size:13px; color:#94a3b8; }
        .fo-actions { display:flex; align-items:center; gap:14px; }
        .kbs-tag { display:flex; align-items:center; gap:6px; font-size:12px; font-weight:700; color:#64748b; background:white; padding:9px 14px; border-radius:10px; border:1px solid #e2e8f0; }
        .kbs-tag strong { color:#10b981; }
        .btn-primary { padding:10px 18px; border-radius:12px; border:none; background:#3b82f6; color:white; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }

        .fo-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .fos-card { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:18px; display:flex; align-items:center; gap:14px; cursor:default; }
        .fos-icon { width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center; }
        .fos-val { font-size:26px; font-weight:900; color:#1e293b; line-height:1; }
        .fos-lbl { font-size:12px; color:#94a3b8; font-weight:700; }

        .fo-table-card { background:white; border-radius:20px; border:1px solid #e2e8f0; overflow:hidden; }
        .ft-head { display:flex; justify-content:space-between; align-items:center; padding:16px 20px; border-bottom:1px solid #f1f5f9; gap:16px; flex-wrap:wrap; }
        .tabs { display:flex; gap:8px; }
        .tab { padding:8px 16px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; color:#64748b; cursor:pointer; }
        .tab.active { background:#1e293b; color:white; border-color:#1e293b; }
        .search-box { display:flex; align-items:center; gap:8px; background:#f8fafc; border:1.5px solid #e2e8f0; padding:9px 14px; border-radius:10px; }
        .search-box input { border:none; background:transparent; outline:none; font-size:13px; width:220px; }

        .fo-table { width:100%; border-collapse:collapse; }
        .fo-table thead { background:#f8fafc; }
        .fo-table th { text-align:left; padding:12px 16px; font-size:11px; color:#94a3b8; text-transform:uppercase; font-weight:800; }
        .fo-table td { padding:14px 16px; font-size:13px; color:#475569; border-bottom:1px solid #f8fafc; }
        .fo-table tr:last-child td { border-bottom:none; }
        .fo-table tr:hover td { background:#fafbfc; }

        .res-id { font-family:monospace; font-size:11px; background:#f1f5f9; padding:2px 7px; border-radius:5px; color:#64748b; font-weight:700; }
        .g-cell { display:flex; align-items:center; gap:10px; }
        .g-av { width:32px; height:32px; background:#eff6ff; color:#3b82f6; border-radius:9px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px; flex-shrink:0; }
        .g-cell strong { display:block; color:#1e293b; font-size:13px; font-weight:700; }
        .g-cell span { font-size:11px; color:#94a3b8; }
        .room-badge { background:#f1f5f9; color:#1e293b; font-weight:800; padding:4px 10px; border-radius:8px; font-size:12px; }
        .no-room { font-size:11px; color:#cbd5e1; font-style:italic; }
        .channel { font-size:11px; font-weight:700; color:#64748b; }
        .bal-warn { display:block; font-size:11px; font-weight:700; color:#ef4444; }
        .bal-ok { display:block; font-size:11px; font-weight:700; color:#10b981; }

        .act-row { display:flex; align-items:center; gap:8px; }
        .act-btn { padding:6px 14px; border-radius:8px; border:none; font-size:11px; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:5px; }
        .act-btn.blue { background:#eff6ff; color:#3b82f6; }
        .act-btn.red  { background:#fef2f2; color:#ef4444; }
        .act-icon { background:transparent; border:none; color:#94a3b8; cursor:pointer; }
        .done-tag { display:flex; align-items:center; gap:4px; font-size:11px; font-weight:700; color:#10b981; }

        /* Check-in modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.8); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; z-index:1000; }
        .ci-modal,.wi-modal { background:white; border-radius:24px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.4); width:520px; max-height:90vh; overflow-y:auto; }
        .modal-head { padding:20px 26px; border-bottom:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; background:white; z-index:10; }
        .mh-title { display:flex; align-items:center; gap:10px; }
        .modal-head h3 { font-size:17px; font-weight:800; color:#1e293b; }
        .modal-head button { background:transparent; border:none; color:#94a3b8; cursor:pointer; }

        .ci-steps { display:flex; align-items:center; justify-content:center; gap:0; padding:16px 26px; border-bottom:1px solid #f1f5f9; background:#f8fafc; }
        .step { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:700; color:#94a3b8; }
        .step.active { color:#3b82f6; }
        .step.done { color:#10b981; }
        .step-dot { width:26px; height:26px; border-radius:50%; background:#e2e8f0; color:#94a3b8; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:900; }
        .step.active .step-dot { background:#3b82f6; color:white; }
        .step.done .step-dot { background:#10b981; color:white; }
        .step:not(:last-child)::after { content:''; width:40px; height:2px; background:#e2e8f0; margin:0 8px; }
        .step.done:not(:last-child)::after { background:#10b981; }

        .ci-body { padding:24px 26px; }
        .res-info-box { display:grid; grid-template-columns:1fr 1fr; gap:12px; background:#f8fafc; padding:16px; border-radius:14px; margin-bottom:20px; }
        .res-info-box label { font-size:10px; font-weight:800; color:#94a3b8; text-transform:uppercase; display:block; margin-bottom:2px; }
        .res-info-box strong { font-size:14px; color:#1e293b; font-weight:700; }
        .input-label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; display:block; margin-bottom:10px; }
        .assigned-room { background:#f0fdf4; color:#10b981; padding:12px 16px; border-radius:10px; font-weight:700; margin-bottom:16px; }
        .room-picker { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:20px; }
        .rpick { border:1.5px solid #e2e8f0; background:white; border-radius:14px; padding:14px 10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:3px; transition:0.2s; }
        .rpick:hover { border-color:#3b82f6; background:#eff6ff; }
        .rpick.active { border-color:#3b82f6; background:#eff6ff; }
        .rpick strong { font-size:18px; color:#1e293b; }
        .rpick span { font-size:11px; color:#94a3b8; }
        .rpick .rate { font-size:12px; color:#3b82f6; font-weight:700; }
        .btn-next { width:100%; padding:14px; border-radius:12px; border:none; background:#3b82f6; color:white; font-size:14px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; }
        .btn-next:disabled { opacity:.4; cursor:not-allowed; }

        .ci-scan { padding:20px 0; text-align:center; display:flex; flex-direction:column; align-items:center; gap:16px; }
        .scan-card { width:260px; height:160px; background:#f1f5f9; border-radius:20px; border:2px dashed #3b82f6; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; }
        .scan-line { position:absolute; width:100%; height:3px; background:linear-gradient(90deg,transparent,#3b82f6,transparent); animation:scan 1.5s infinite ease-in-out; }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        .ci-scan p { font-weight:800; color:#1e293b; margin:0; }
        .ci-scan small { color:#94a3b8; }

        .ci-done { text-align:center; display:flex; flex-direction:column; align-items:center; gap:16px; }
        .ci-done h3 { font-size:20px; font-weight:800; color:#10b981; }
        .data-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; width:100%; background:#f8fafc; padding:16px; border-radius:14px; }
        .data-grid label { font-size:10px; font-weight:800; color:#94a3b8; text-transform:uppercase; display:block; margin-bottom:2px; }
        .data-grid strong { font-size:14px; color:#1e293b; font-weight:700; }
        .btn-finish { width:100%; padding:15px; border-radius:12px; border:none; background:#10b981; color:white; font-size:14px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; }

        /* Walk-in modal */
        .wi-modal { width:560px; }
        .wi-body { padding:22px 26px; display:flex; flex-direction:column; gap:16px; }
        .wi-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .wg { display:flex; flex-direction:column; gap:6px; }
        .wg label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; }
        .wg input, .wg select { padding:10px 14px; border:1.5px solid #e2e8f0; border-radius:10px; font-size:13px; outline:none; }
        .calc-box { background:#f8fafc; border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:10px; }
        .calc-box > div { display:flex; justify-content:space-between; align-items:center; }
        .calc-box label { font-size:11px; font-weight:700; color:#64748b; }
        .calc-box input, .calc-box select { padding:8px 12px; border:1.5px solid #e2e8f0; border-radius:10px; font-size:13px; width:160px; outline:none; }
        .calc-total { font-weight:700; color:#64748b; }
        .modal-foot { padding:16px 26px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end; gap:10px; }
        .btn-cancel { padding:11px 20px; border-radius:10px; border:1px solid #e2e8f0; background:white; font-weight:700; cursor:pointer; }
      `})]})};export{Q as default};
