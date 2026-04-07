import{c as m,u as A,r as o,R as D,j as e,d as $,f as R,m as p,X as T,x as E,D as P}from"./index-sbCyfkT4.js";import{P as I}from"./plus-D4LU6kPK.js";import{R as u}from"./refresh-cw-9i269vQm.js";import{P as W}from"./power-CvSsaH2B.js";import{T as B}from"./trash-2-Cc7iIBWw.js";import{A as H}from"./alert-triangle-BZsbUJ6B.js";import{S as F}from"./shield-DaR1NV_y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=m("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=m("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=m("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),b={Server:e.jsx(y,{size:20}),Shield:e.jsx(F,{size:20}),Wifi:e.jsx(q,{size:20}),Database:e.jsx(P,{size:20}),HardDrive:e.jsx(U,{size:20}),Cpu:e.jsx(E,{size:20})},Q=()=>{const{addNotification:l}=A(),[j,f]=o.useState(!1),[v,d]=o.useState(!1),[n,r]=o.useState([{id:"SYS-001",name:"Ana Sunucu (ERP)",status:"online",load:12,uptime:"142 gün",icon:"Server"},{id:"SYS-002",name:"Banka Entegrasyon Geçidi",status:"online",load:5,uptime:"15 gün",icon:"Shield"},{id:"SYS-003",name:"Wi-Fi Ağı (Misafir)",status:"online",load:68,uptime:"4 gün",icon:"Wifi"},{id:"SYS-004",name:"Wi-Fi Ağı (Personel)",status:"online",load:42,uptime:"4 gün",icon:"Wifi"},{id:"SYS-005",name:"Veritabanı (Azure)",status:"warning",load:85,uptime:"240 gün",icon:"Database"},{id:"SYS-006",name:"Yedekleme Ünitesi (NAS)",status:"online",load:2,uptime:"12 gün",icon:"HardDrive"}]),[c,x]=o.useState({name:"",icon:"Server"}),h=D.useRef(6),k=()=>{f(!0),setTimeout(()=>{r(s=>s.map(i=>({...i,load:Math.max(1,i.load+Math.floor(Math.random()*10)-5)}))),f(!1),l({type:"info",msg:"Sistem durumları güncellendi"})},1500)},S=s=>{r(t=>t.map(a=>a.id===s?{...a,status:a.status==="online"?"offline":"online",load:a.status==="online"?0:Math.floor(Math.random()*50)}:a));const i=n.find(t=>t.id===s);l({type:(i==null?void 0:i.status)==="online"?"warn":"success",msg:`${i==null?void 0:i.name} ${(i==null?void 0:i.status)==="online"?"kapatıldı":"başlatıldı"}`})},w=s=>{const i=n.find(t=>t.id===s);r(t=>t.map(a=>a.id===s?{...a,status:"restarting",load:0}:a)),l({type:"info",msg:`${i==null?void 0:i.name} yeniden başlatılıyor...`}),setTimeout(()=>{r(t=>t.map(a=>a.id===s?{...a,status:"online",load:Math.floor(Math.random()*30),uptime:"0 gün"}:a)),l({type:"success",msg:`${i==null?void 0:i.name} yeniden başlatıldı`})},2e3)},N=s=>{s.preventDefault(),h.current++;const i=`SYS-${String(h.current).padStart(3,"0")}`;r(t=>[...t,{...c,id:i,status:"online",load:0,uptime:"0 gün"}]),l({type:"success",msg:`Yeni sistem eklendi: ${c.name}`}),x({name:"",icon:"Server"}),d(!1)},z=s=>{r(i=>i.filter(t=>t.id!==s))},C=n.filter(s=>s.status==="online").length,g=n.filter(s=>s.status==="warning"||s.load>80).length,[M,Y]=o.useState([40,60,45,80,55,70,90,65,50,85]);return o.useEffect(()=>{const s=setInterval(()=>{Y(i=>i.map(()=>20+Math.floor(Math.random()*70)))},5e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"it-page",children:[e.jsxs("div",{className:"it-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx($,{size:20})," IT Altyapı & Sistem İzleme"]}),e.jsx("span",{children:"Donanım, ağ ve yazılım servislerinin gerçek zamanlı durumu"})]}),e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsxs("button",{className:"btn-add",onClick:()=>d(!0),children:[e.jsx(I,{size:14})," Sistem Ekle"]}),e.jsx("button",{className:`btn-refresh ${j?"spin":""}`,onClick:k,children:e.jsx(u,{size:15})})]})]}),e.jsxs("div",{className:"it-kpi",children:[e.jsxs("div",{className:"kpi-item",children:[e.jsx("span",{children:"Çalışan"}),e.jsx("strong",{style:{color:"#10b981"},children:C})]}),e.jsxs("div",{className:"kpi-item",children:[e.jsx("span",{children:"Uyarı"}),e.jsx("strong",{style:{color:"#ef4444"},children:g})]}),e.jsxs("div",{className:"kpi-item",children:[e.jsx("span",{children:"Toplam"}),e.jsx("strong",{children:n.length})]})]}),e.jsx(R,{children:v&&e.jsx(p.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>d(!1),children:e.jsxs(p.form,{className:"modal-box",initial:{scale:.9},animate:{scale:1},onClick:s=>s.stopPropagation(),onSubmit:N,children:[e.jsxs("div",{className:"mb-head",children:[e.jsx("h3",{children:"Yeni Sistem Ekle"}),e.jsx("button",{type:"button",onClick:()=>d(!1),children:e.jsx(T,{size:18})})]}),e.jsxs("div",{className:"mf-grid",children:[e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"Sistem Adı *"}),e.jsx("input",{value:c.name,onChange:s=>x(i=>({...i,name:s.target.value})),required:!0,placeholder:"Ör: Redis Cache"})]}),e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"İkon"}),e.jsx("select",{value:c.icon,onChange:s=>x(i=>({...i,icon:s.target.value})),children:Object.keys(b).map(s=>e.jsx("option",{children:s},s))})]})]}),e.jsx("div",{className:"mf-foot",children:e.jsx("button",{type:"submit",className:"btn-add",children:"Ekle"})})]})})}),e.jsxs("div",{className:"it-grid",children:[e.jsx("div",{className:"systems-list",children:n.map((s,i)=>e.jsxs(p.div,{className:`system-card ${s.status}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:i*.05},children:[e.jsxs("div",{className:"sc-top",children:[e.jsx("div",{className:"sc-icon",children:b[s.icon]||e.jsx(y,{size:20})}),e.jsxs("div",{className:"sc-btns",children:[e.jsx("button",{className:"sc-btn",onClick:()=>w(s.id),title:"Yeniden Başlat",children:e.jsx(u,{size:12})}),e.jsx("button",{className:"sc-btn",onClick:()=>S(s.id),title:s.status==="online"?"Kapat":"Başlat",children:e.jsx(W,{size:12})}),e.jsx("button",{className:"sc-btn del",onClick:()=>z(s.id),children:e.jsx(B,{size:12})})]})]}),e.jsxs("div",{className:"sc-info",children:[e.jsx("strong",{children:s.name}),e.jsxs("span",{children:["Uptime: ",s.uptime]})]}),e.jsxs("div",{className:"sc-meter",children:[e.jsxs("div",{className:"m-label",children:["Yük: %",s.load]}),e.jsx("div",{className:"m-bar-bg",children:e.jsx("div",{className:"m-bar",style:{width:`${s.load}%`,background:s.load>80?"#ef4444":s.load>60?"#f59e0b":"#10b981"}})})]}),e.jsx("div",{className:`sc-status ${s.status}`,children:s.status==="online"?"● Çalışıyor":s.status==="warning"?"⚠ Yüksek Yük":s.status==="restarting"?"↻ Yeniden Başlatılıyor":"○ Kapalı"})]},s.id))}),e.jsxs("div",{className:"it-sidebar",children:[e.jsxs("div",{className:"traffic-card",children:[e.jsx("h3",{children:"İnternet Trafiği"}),e.jsxs("div",{className:"t-row",children:[e.jsxs("div",{className:"t-stat",children:[e.jsx("span",{children:"Download"}),e.jsx("strong",{children:"450 Mbps"})]}),e.jsxs("div",{className:"t-stat",children:[e.jsx("span",{children:"Upload"}),e.jsx("strong",{children:"120 Mbps"})]})]}),e.jsx("div",{className:"t-visual",children:M.map((s,i)=>e.jsx(p.div,{className:"v-bar",animate:{height:`${s}%`},transition:{duration:.5}},i))})]}),g>0&&e.jsxs("div",{className:"alert-box",children:[e.jsxs("div",{className:"ab-head",children:[e.jsx(H,{size:18,color:"#ef4444"}),e.jsx("strong",{children:"Kritik Uyarılar"})]}),n.filter(s=>s.load>80).map(s=>e.jsxs("p",{children:[e.jsx("strong",{children:s.name})," — %",s.load," yük tespit edildi."]},s.id))]})]})]}),e.jsx("style",{children:`
        .it-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .it-head { display: flex; justify-content: space-between; align-items: center; }
        .it-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .it-head span { font-size: 13px; color: #94a3b8; }
        .btn-refresh { width: 40px; height: 40px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: white; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .btn-refresh.spin svg { animation: spin 1s linear infinite; }
        .btn-add { padding: 10px 18px; border-radius: 12px; border: none; background: #1e293b; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        @keyframes spin { from {transform: rotate(0deg)} to {transform: rotate(360deg)} }
        .it-kpi { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .kpi-item { background: white; border-radius: 16px; border: 1px solid #e2e8f0; padding: 16px; text-align: center; }
        .kpi-item span { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; display: block; margin-bottom: 4px; }
        .kpi-item strong { font-size: 24px; font-weight: 900; }
        .it-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        .systems-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .system-card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; display: flex; flex-direction: column; gap: 14px; transition: 0.3s; }
        .system-card:hover { transform: translateY(-2px); border-color: #3b82f6; }
        .system-card.offline { opacity: 0.5; }
        .system-card.restarting { border-color: #f59e0b; }
        .sc-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .sc-icon { width: 40px; height: 40px; background: #f8fafc; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #3b82f6; }
        .sc-btns { display: flex; gap: 4px; }
        .sc-btn { width: 24px; height: 24px; border-radius: 6px; border: 1px solid #e2e8f0; background: white; color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .sc-btn:hover { border-color: #3b82f6; color: #3b82f6; }
        .sc-btn.del { color: #ef4444; border-color: #fecaca; }
        .sc-info strong { display: block; font-size: 14px; color: #1e293b; }
        .sc-info span { font-size: 11px; color: #94a3b8; }
        .sc-meter { display: flex; flex-direction: column; gap: 6px; }
        .m-label { font-size: 10px; font-weight: 800; color: #64748b; }
        .m-bar-bg { background: #f1f5f9; height: 6px; border-radius: 10px; overflow: hidden; }
        .m-bar { height: 100%; border-radius: 10px; transition: 0.5s; }
        .sc-status { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-align: center; }
        .sc-status.online { background: #f0fdf4; color: #10b981; }
        .sc-status.warning { background: #fef2f2; color: #ef4444; }
        .sc-status.offline { background: #f1f5f9; color: #94a3b8; }
        .sc-status.restarting { background: #fffbeb; color: #f59e0b; }
        .it-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .traffic-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .traffic-card h3 { font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 20px; }
        .t-row { display: flex; gap: 24px; margin-bottom: 24px; }
        .t-stat span { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }
        .t-stat strong { display: block; font-size: 18px; font-weight: 900; color: #1e293b; }
        .t-visual { height: 80px; display: flex; align-items: flex-end; gap: 4px; }
        .v-bar { flex: 1; background: #3b82f6; border-radius: 2px 2px 0 0; opacity: 0.3; }
        .alert-box { background: #fef2f2; border-radius: 20px; padding: 20px; border: 1px solid #fee2e2; }
        .ab-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
        .ab-head strong { font-size: 14px; color: #ef4444; }
        .alert-box p { font-size: 12px; color: #991b1b; line-height: 1.5; margin: 4px 0; }
        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-box { background: white; border-radius: 20px; width: 400px; padding: 24px; }
        .mb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
        .mb-head h3 { font-size: 17px; font-weight: 800; color: #1e293b; }
        .mb-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .mf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .mf { display: flex; flex-direction: column; gap: 6px; }
        .mf label { font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
        .mf input, .mf select { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .mf-foot { display: flex; justify-content: flex-end; margin-top: 16px; }
      `})]})};export{Q as default};
