import{c as j,u as k,r as l,j as e,s as y,m as w,p as v,q as N}from"./index-oD4_PD50.js";import{D as z}from"./download-BsXGwHDC.js";import{P as C}from"./plus-nsyKK2uL.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=j("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]),o={"check-in":{label:"İç Misafir",color:"#10b981",bg:"#f0fdf4"},"check-out":{label:"Çıkış Yaptı",color:"#64748b",bg:"#f8fafc"},gelecek:{label:"Gelecek",color:"#3b82f6",bg:"#eff6ff"},iptal:{label:"İptal",color:"#ef4444",bg:"#fef2f2"}},L={"Booking.com":"#003580",Expedia:"#ef4444",Direkt:"#10b981",HotelRunner:"#f59e0b",TUI:"#8b5cf6"},T=()=>{const{reservations:r,checkIn:x,checkOut:h,addNotification:I}=k(),[c,b]=l.useState(""),[i,f]=l.useState("tümü"),[d,n]=l.useState("checkIn"),p=r.filter(t=>{const s=c.toLowerCase(),a=!s||t.guest.toLowerCase().includes(s)||t.id.toLowerCase().includes(s)||(t.room||"").includes(s),m=i==="tümü"||t.status===i;return a&&m}).sort((t,s)=>(t[d]||"").localeCompare(s[d]||"")),g=t=>{x(t)},u=t=>{h(t)};return e.jsxs("div",{className:"rl-container",children:[e.jsxs("div",{className:"rl-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Rezervasyon Listesi"}),e.jsx("span",{children:"Tüm kanallardan gelen rezervasyonların tam listesi"})]}),e.jsxs("div",{className:"rl-actions",children:[e.jsxs("button",{className:"btn-outline",children:[e.jsx(z,{size:16})," Excel İndir"]}),e.jsxs("button",{className:"btn-primary",children:[e.jsx(C,{size:16})," Yeni Rezervasyon"]})]})]}),e.jsxs("div",{className:"rl-filters",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(y,{size:16,color:"#94a3b8"}),e.jsx("input",{type:"text",placeholder:"Misafir adı, oda no veya rezervasyon no ara...",value:c,onChange:t=>b(t.target.value)})]}),e.jsx("div",{className:"status-filters",children:["tümü","check-in","gelecek","check-out","iptal"].map(t=>{var s;return e.jsxs("button",{className:`tab-btn ${i===t?"active":""}`,onClick:()=>f(t),children:[((s=o[t])==null?void 0:s.label)||"Tümü",e.jsx("span",{className:"tab-count",children:t==="tümü"?r.length:r.filter(a=>a.status===t).length})]},t)})})]}),e.jsx("div",{className:"rl-table-wrap",children:e.jsxs("table",{className:"rl-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>n("id"),children:"# No"}),e.jsx("th",{onClick:()=>n("guest"),children:"Misafir"}),e.jsx("th",{children:"Oda"}),e.jsx("th",{onClick:()=>n("checkIn"),children:"Giriş"}),e.jsx("th",{onClick:()=>n("checkOut"),children:"Çıkış"}),e.jsx("th",{children:"Gece"}),e.jsx("th",{children:"Kanal"}),e.jsx("th",{children:"Toplam"}),e.jsx("th",{children:"Bakiye"}),e.jsx("th",{children:"Durum"}),e.jsx("th",{children:"İşlem"})]})}),e.jsx("tbody",{children:p.map((t,s)=>{const a=o[t.status]||o.gelecek;return e.jsxs(w.tr,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:s*.03},children:[e.jsx("td",{children:e.jsx("span",{className:"res-id",children:t.id})}),e.jsx("td",{children:e.jsxs("div",{className:"guest-cell",children:[e.jsx("div",{className:"guest-avatar",children:t.guest[0]}),e.jsxs("div",{children:[e.jsx("strong",{children:t.guest}),e.jsxs("span",{children:[t.pax," Kişi"]})]})]})}),e.jsx("td",{children:t.room?e.jsx("span",{className:"room-tag",children:t.room}):e.jsx("span",{className:"no-room",children:"Atanmadı"})}),e.jsx("td",{children:t.checkIn}),e.jsx("td",{children:t.checkOut}),e.jsx("td",{children:e.jsx("strong",{children:t.nights})}),e.jsxs("td",{children:[e.jsx("span",{className:"channel-dot",style:{background:L[t.channel]||"#94a3b8"}}),t.channel]}),e.jsx("td",{children:e.jsxs("strong",{children:["₺",t.total.toLocaleString()]})}),e.jsx("td",{children:t.balance>0?e.jsxs("span",{className:"bal-due",children:["₺",t.balance.toLocaleString()]}):e.jsx("span",{className:"bal-ok",children:"Kapandı"})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill",style:{background:a.bg,color:a.color},children:a.label})}),e.jsx("td",{children:e.jsxs("div",{className:"action-btns",children:[t.status==="gelecek"&&e.jsxs("button",{className:"act-btn green",onClick:()=>g(t.id),title:"Check-in yap",children:[e.jsx(v,{size:14})," Giriş"]}),t.status==="check-in"&&e.jsxs("button",{className:"act-btn red",onClick:()=>u(t.id),title:"Check-out yap",children:[e.jsx(N,{size:14})," Çıkış"]}),e.jsx("button",{className:"act-icon",children:e.jsx(S,{size:15})})]})})]},t.id)})})]})}),e.jsxs("div",{className:"rl-footer",children:[e.jsxs("span",{children:[p.length," rezervasyon listeleniyor"]}),e.jsx("span",{children:"Sayfa 1 / 1"})]}),e.jsx("style",{children:`
        .rl-container { padding: 30px; display: flex; flex-direction: column; gap: 20px; }

        .rl-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .rl-header h2 { font-size: 24px; font-weight: 800; color: #1e293b; }
        .rl-header span { font-size: 14px; color: #94a3b8; }
        .rl-actions { display: flex; gap: 12px; }
        .btn-outline { padding: 10px 18px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: white; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; color: #475569; }
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        .rl-filters { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .search-box { display: flex; align-items: center; gap: 10px; background: white; border: 1.5px solid #e2e8f0; padding: 10px 16px; border-radius: 12px; min-width: 340px; }
        .search-box input { border: none; outline: none; font-size: 13px; color: #475569; background: transparent; width: 100%; }
        .status-filters { display: flex; gap: 8px; }
        .tab-btn { padding: 9px 16px; border-radius: 10px; border: 1.5px solid #e2e8f0; background: white; font-size: 12px; font-weight: 700; color: #64748b; cursor: pointer; display: flex; align-items: center; gap: 7px; transition: 0.2s; }
        .tab-btn.active { background: #1e293b; color: white; border-color: #1e293b; }
        .tab-count { background: #f1f5f9; color: #64748b; padding: 1px 6px; border-radius: 10px; font-size: 11px; }
        .tab-btn.active .tab-count { background: rgba(255,255,255,0.2); color: white; }

        .rl-table-wrap { background: white; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; }
        .rl-table { width: 100%; border-collapse: collapse; }
        .rl-table thead { background: #f8fafc; }
        .rl-table th { text-align: left; padding: 14px 16px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 800; cursor: pointer; white-space: nowrap; }
        .rl-table th:hover { color: #3b82f6; }
        .rl-table td { padding: 16px; font-size: 13px; color: #475569; border-bottom: 1px solid #f8fafc; vertical-align: middle; }
        .rl-table tr:last-child td { border-bottom: none; }
        .rl-table tr:hover td { background: #fafbfc; }

        .res-id { font-family: monospace; font-size: 12px; font-weight: 700; color: #64748b; background: #f1f5f9; padding: 3px 8px; border-radius: 6px; }
        .guest-cell { display: flex; align-items: center; gap: 10px; }
        .guest-avatar { width: 34px; height: 34px; background: #eff6ff; color: #3b82f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 14px; flex-shrink: 0; }
        .guest-cell strong { display: block; color: #1e293b; font-weight: 700; }
        .guest-cell span { font-size: 11px; color: #94a3b8; }
        .room-tag { background: #f1f5f9; color: #1e293b; font-weight: 800; padding: 4px 10px; border-radius: 8px; font-size: 13px; }
        .no-room { font-size: 11px; color: #cbd5e1; font-style: italic; }
        .channel-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; }
        .bal-due { color: #ef4444; font-weight: 700; }
        .bal-ok  { color: #10b981; font-weight: 700; }
        .status-pill { padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 800; white-space: nowrap; }

        .action-btns { display: flex; align-items: center; gap: 8px; }
        .act-btn { padding: 6px 12px; border-radius: 8px; border: none; font-size: 11px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 5px; }
        .act-btn.green { background: #ecfdf5; color: #10b981; }
        .act-btn.red   { background: #fef2f2; color: #ef4444; }
        .act-icon { background: transparent; border: none; color: #94a3b8; cursor: pointer; }

        .rl-footer { display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; font-weight: 600; padding: 0 4px; }
      `})]})};export{T as default};
