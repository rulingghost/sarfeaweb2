import{c as z,u as F,r,R as K,j as e,f as j,m as h,X as v,U as R}from"./index-CeGZvpZr.js";import{P as w}from"./plus-CXzXoTcw.js";import{C as $}from"./clock-CjUZ5yfi.js";import{M as G}from"./map-pin-aRPLzRUy.js";import{T as I}from"./tag-Cm-kqkZa.js";import{T as L}from"./trash-2-D4J-9J_4.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=z("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=z("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),g=["Spor","Eğlence","Çocuk","Show","Müzik","Kültür","Spa"],b=["Sahil Bahçesi","Kids Club","Ana Havuz","Plaj Sahası","Amfi Tiyatro","Lobü Sahne","Fitness Salonu","Teras","Restoran"],_=()=>{const{addNotification:o}=F(),[m,N]=r.useState("Bugün"),[S,f]=r.useState(!1),[C,y]=r.useState(!1),[u,c]=r.useState([{id:"ACT-001",name:"Sabah Yogası",time:"09:00",endTime:"10:00",loc:"Sahil Bahçesi",cat:"Spor",status:"aktif",participants:12,day:"Bugün"},{id:"ACT-002",name:"Çocuk Kulübü: Boyama",time:"10:30",endTime:"12:00",loc:"Kids Club",cat:"Çocuk",status:"aktif",participants:8,day:"Bugün"},{id:"ACT-003",name:"Su Topu Turnuvası",time:"14:30",endTime:"15:30",loc:"Ana Havuz",cat:"Eğlence",status:"aktif",participants:24,day:"Bugün"},{id:"ACT-004",name:"Voleybol Maçı",time:"16:00",endTime:"17:00",loc:"Plaj Sahası",cat:"Spor",status:"bekliyor",participants:0,day:"Bugün"},{id:"ACT-005",name:"Sihirbazlık Gösterisi",time:"21:00",endTime:"22:00",loc:"Amfi Tiyatro",cat:"Show",status:"bekliyor",participants:0,day:"Bugün"},{id:"ACT-006",name:"Aqua Aerobik",time:"10:00",endTime:"10:45",loc:"Ana Havuz",cat:"Spor",status:"bekliyor",participants:0,day:"Yarın"},{id:"ACT-007",name:"Mini Disco",time:"20:00",endTime:"21:00",loc:"Kids Club",cat:"Çocuk",status:"bekliyor",participants:0,day:"Yarın"}]),[A,k]=r.useState([{id:"SH-001",title:"Türk Gecesi",date:"Yarın",icon:"💃",time:"21:00"},{id:"SH-002",title:"Canlı Müzik (Jazz)",date:"Cuma",icon:"🎷",time:"21:00"},{id:"SH-003",title:"Açık Hava Sineması",date:"Cumartesi",icon:"📽️",time:"21:30"}]),[s,n]=r.useState({name:"",time:"",endTime:"",loc:b[0],cat:g[0],day:"Bugün"}),[d,l]=r.useState({title:"",date:"",icon:"🎪",time:"21:00"}),p=K.useRef({act:7,show:3}),T=t=>{t.preventDefault(),p.current.act++;const i=`ACT-${String(p.current.act).padStart(3,"0")}`;c(a=>[...a,{...s,id:i,status:"bekliyor",participants:0}]),o({type:"info",msg:`Yeni aktivite eklendi: ${s.name}`}),n({name:"",time:"",endTime:"",loc:b[0],cat:g[0],day:"Bugün"}),f(!1)},B=t=>{t.preventDefault(),p.current.show++;const i=`SH-${String(p.current.show).padStart(3,"0")}`;k(a=>[...a,{...d,id:i}]),o({type:"success",msg:`Yeni şov eklendi: ${d.title}`}),l({title:"",date:"",icon:"🎪",time:"21:00"}),y(!1)},E=t=>{c(i=>i.map(a=>a.id===t?{...a,status:"aktif"}:a)),o({type:"success",msg:"Aktivite başlatıldı"})},M=t=>{c(i=>i.map(a=>a.id===t?{...a,status:"tamamlandı"}:a)),o({type:"info",msg:"Aktivite tamamlandı"})},P=t=>{c(i=>i.map(a=>a.id===t?{...a,participants:a.participants+1}:a))},Y=t=>{c(i=>i.filter(a=>a.id!==t))},D=t=>{k(i=>i.filter(a=>a.id!==t))},x=u.filter(t=>m==="Tümü"||t.day===m),H=x.filter(t=>t.status==="aktif").length,q=x.reduce((t,i)=>t+i.participants,0);return e.jsxs("div",{className:"ent-page",children:[e.jsxs("div",{className:"ent-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(O,{size:20})," Eğlence & Aktivite Yönetimi"]}),e.jsx("span",{children:"Günlük animasyon programı, özel şovlar ve misafir katılım takibi"})]}),e.jsxs("button",{className:"btn-primary",onClick:()=>f(!0),children:[e.jsx(w,{size:14})," Yeni Etkinlik Ekle"]})]}),e.jsx(j,{children:S&&e.jsxs(h.form,{className:"act-form",onSubmit:T,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},children:[e.jsxs("div",{className:"af-head",children:[e.jsx("h3",{children:"Yeni Aktivite"}),e.jsx("button",{type:"button",onClick:()=>f(!1),children:e.jsx(v,{size:18})})]}),e.jsxs("div",{className:"af-grid",children:[e.jsx("input",{value:s.name,onChange:t=>n(i=>({...i,name:t.target.value})),placeholder:"Aktivite adı *",required:!0}),e.jsx("input",{type:"time",value:s.time,onChange:t=>n(i=>({...i,time:t.target.value})),required:!0}),e.jsx("input",{type:"time",value:s.endTime,onChange:t=>n(i=>({...i,endTime:t.target.value})),required:!0}),e.jsx("select",{value:s.loc,onChange:t=>n(i=>({...i,loc:t.target.value})),children:b.map(t=>e.jsx("option",{children:t},t))}),e.jsx("select",{value:s.cat,onChange:t=>n(i=>({...i,cat:t.target.value})),children:g.map(t=>e.jsx("option",{children:t},t))}),e.jsxs("select",{value:s.day,onChange:t=>n(i=>({...i,day:t.target.value})),children:[e.jsx("option",{children:"Bugün"}),e.jsx("option",{children:"Yarın"})]})]}),e.jsx("div",{className:"af-foot",children:e.jsx("button",{type:"submit",className:"btn-primary",children:"Ekle"})})]})}),e.jsxs("div",{className:"ent-grid",children:[e.jsxs("div",{className:"program-section",children:[e.jsxs("div",{className:"ps-head",children:[e.jsx("div",{className:"day-tabs",children:["Bugün","Yarın","Tümü"].map(t=>e.jsx("button",{className:`d-tab ${m===t?"active":""}`,onClick:()=>N(t),children:t},t))}),e.jsxs("div",{className:"ps-stats",children:[e.jsx("strong",{children:H})," Aktif · ",e.jsx("strong",{children:q})," Katılımcı"]})]}),e.jsxs("div",{className:"activity-list",children:[x.length===0&&e.jsx("div",{style:{textAlign:"center",padding:30,color:"#94a3b8",fontSize:13},children:"Bu gün için aktivite yok"}),x.map((t,i)=>e.jsxs(h.div,{className:`act-card ${t.status}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:i*.05},children:[e.jsxs("div",{className:"act-time",children:[e.jsx($,{size:14})," ",t.time," - ",t.endTime]}),e.jsxs("div",{className:"act-info",children:[e.jsx("strong",{children:t.name}),e.jsxs("span",{children:[e.jsx(G,{size:11})," ",t.loc," · ",e.jsx(I,{size:11})," ",t.cat]})]}),e.jsxs("div",{className:"act-right",children:[e.jsxs("div",{className:"act-users",onClick:()=>P(t.id),style:{cursor:"pointer"},title:"Katılımcı ekle",children:[e.jsx(R,{size:12})," ",t.participants," Katılımcı"]}),e.jsxs("div",{className:"act-btns",children:[t.status==="bekliyor"&&e.jsx("button",{className:"ab green",onClick:()=>E(t.id),children:"Başlat"}),t.status==="aktif"&&e.jsx("button",{className:"ab purple",onClick:()=>M(t.id),children:"Bitir"}),t.status==="tamamlandı"&&e.jsx("span",{className:"ab done",children:"✓"}),e.jsx("button",{className:"ab del",onClick:()=>Y(t.id),children:e.jsx(L,{size:12})})]})]})]},t.id))]})]}),e.jsxs("div",{className:"ent-sidebar",children:[e.jsxs("div",{className:"featured-shows",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:0},children:"Haftalık Özel Şovlar"}),e.jsx("button",{className:"add-show-btn",onClick:()=>y(!0),children:e.jsx(w,{size:14})})]}),e.jsx(j,{children:C&&e.jsxs(h.form,{className:"show-form",onSubmit:B,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("input",{value:d.title,onChange:t=>l(i=>({...i,title:t.target.value})),placeholder:"Şov adı *",required:!0}),e.jsx("input",{value:d.date,onChange:t=>l(i=>({...i,date:t.target.value})),placeholder:"Gün (Cuma, Pazar)",required:!0}),e.jsx("select",{value:d.icon,onChange:t=>l(i=>({...i,icon:t.target.value})),children:["🎪","💃","🎷","📽️","🎸","🎭","🎤","🎵"].map(t=>e.jsx("option",{children:t},t))}),e.jsx("button",{type:"submit",className:"btn-primary sm",children:"Ekle"})]})}),e.jsx("div",{className:"show-list",children:A.map(t=>e.jsxs("div",{className:"show-card",children:[e.jsx("div",{className:"sc-icon",children:t.icon}),e.jsxs("div",{className:"sc-info",children:[e.jsx("strong",{children:t.title}),e.jsxs("span",{children:[t.date," @ ",t.time]})]}),e.jsx("button",{className:"sc-rsvp",onClick:()=>{o({type:"success",msg:`Şov duyuruldu: ${t.title}`})},children:"Duyur"}),e.jsx("button",{className:"sc-del",onClick:()=>D(t.id),children:e.jsx(v,{size:12})})]},t.id))})]}),e.jsxs("div",{className:"kids-club-box",children:[e.jsxs("div",{className:"kc-head",children:[e.jsx(J,{size:24,color:"#8b5cf6"}),e.jsx("h3",{children:"Kids Club Durumu"})]}),e.jsxs("div",{className:"kc-stats",children:[e.jsxs("div",{className:"ks-i",children:[e.jsx("span",{children:"Aktif Çocuk"}),e.jsx("strong",{children:u.filter(t=>t.cat==="Çocuk"&&t.status==="aktif").reduce((t,i)=>t+i.participants,0)})]}),e.jsxs("div",{className:"ks-i",children:[e.jsx("span",{children:"Aktivite"}),e.jsx("strong",{children:u.filter(t=>t.cat==="Çocuk").length})]})]})]}),e.jsxs("div",{className:"staff-box",children:[e.jsx("h4",{children:"Ekip Durumu (Animasyon)"}),e.jsx("div",{className:"st-list",children:[{name:"Ricardo",role:"DJ / Teknik"},{name:"Elena",role:"Yoga Eğitmeni"},{name:"Mert",role:"Çocuk Şefi"}].map(t=>e.jsxs("div",{className:"st-row",children:[e.jsx("div",{className:"st-av",children:t.name[0]}),e.jsxs("div",{className:"st-info",children:[e.jsx("strong",{children:t.name}),e.jsx("span",{children:t.role})]}),e.jsx("div",{className:"st-dot"})]},t.name))})]})]})]}),e.jsx("style",{children:`
        .ent-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .ent-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .ent-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .ent-head span { font-size: 13px; color: #94a3b8; }
        
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .btn-primary.sm { padding: 8px 12px; font-size: 11px; }

        /* Activity Form */
        .act-form { background: white; border-radius: 18px; border: 1.5px solid #e2e8f0; padding: 20px; }
        .af-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .af-head h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        .af-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .af-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
        .af-grid input, .af-grid select { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .af-grid input:focus, .af-grid select:focus { border-color: #3b82f6; }
        .af-foot { display: flex; justify-content: flex-end; margin-top: 12px; }

        .ent-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        
        .program-section { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; display: flex; flex-direction: column; gap: 20px; }
        .ps-head { display: flex; justify-content: space-between; align-items: center; }
        .day-tabs { display: flex; background: #f1f5f9; padding: 4px; border-radius: 10px; gap: 4px; }
        .d-tab { padding: 6px 14px; border-radius: 8px; border: none; font-size: 11px; font-weight: 700; color: #64748b; cursor: pointer; }
        .d-tab.active { background: white; color: #1e293b; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .ps-stats { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }
        .ps-stats strong { color: #3b82f6; }

        .activity-list { display: flex; flex-direction: column; gap: 12px; }
        .act-card { display: flex; align-items: center; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 18px; border: 1.5px solid #f1f5f9; transition: 0.2s; }
        .act-card:hover { border-color: #3b82f6; background: white; }
        .act-card.aktif { border-left: 4px solid #10b981; }
        .act-card.tamamlandı { opacity: 0.6; }
        
        .act-time { width: 110px; font-size: 12px; font-weight: 800; color: #3b82f6; display: flex; align-items: center; gap: 6px; white-space: nowrap; }
        .act-info { flex: 1; }
        .act-info strong { display: block; font-size: 14px; color: #1e293b; }
        .act-info span { font-size: 11px; color: #94a3b8; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        
        .act-right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .act-users { font-size: 10px; font-weight: 700; color: #64748b; display: flex; align-items: center; gap: 4px; }
        .act-btns { display: flex; gap: 5px; }
        .ab { padding: 4px 10px; border-radius: 6px; border: none; font-size: 10px; font-weight: 700; cursor: pointer; }
        .ab.green { background: #f0fdf4; color: #10b981; }
        .ab.purple { background: #f5f3ff; color: #8b5cf6; }
        .ab.done { background: #f1f5f9; color: #64748b; cursor: default; }
        .ab.del { background: transparent; color: #cbd5e1; padding: 4px; }
        .ab.del:hover { color: #ef4444; }

        .ent-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .featured-shows { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; }
        .featured-shows h3 { font-size: 14px; font-weight: 800; color: #1e293b; }
        .add-show-btn { width: 28px; height: 28px; border-radius: 8px; border: 1.5px solid #e2e8f0; background: white; color: #3b82f6; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        
        .show-form { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
        .show-form input, .show-form select { padding: 8px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 12px; outline: none; }
        
        .show-list { display: flex; flex-direction: column; gap: 12px; }
        .show-card { display: flex; align-items: center; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px; }
        .sc-icon { font-size: 20px; width: 36px; height: 36px; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .sc-info { flex: 1; }
        .sc-info strong { display: block; font-size: 12px; color: #1e293b; }
        .sc-info span { font-size: 10px; color: #94a3b8; }
        .sc-rsvp { padding: 4px 10px; background: #1e293b; color: white; border-radius: 6px; font-size: 9px; font-weight: 700; border: none; cursor: pointer; }
        .sc-del { background: none; border: none; color: #cbd5e1; cursor: pointer; }
        .sc-del:hover { color: #ef4444; }

        .kids-club-box { background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 20px; padding: 20px; }
        .kc-head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .kc-head h3 { font-size: 14px; font-weight: 800; color: #8b5cf6; }
        .kc-stats { display: flex; gap: 20px; }
        .ks-i span { display: block; font-size: 10px; color: #7c3aed; font-weight: 600; }
        .ks-i strong { font-size: 18px; color: #5b21b6; }

        .staff-box h4 { font-size: 12px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; padding-left: 8px; }
        .st-list { display: flex; flex-direction: column; gap: 8px; }
        .st-row { background: white; padding: 10px; border-radius: 12px; border: 1px solid #f1f5f9; display: flex; align-items: center; gap: 10px; }
        .st-av { width: 32px; height: 32px; background: #f8fafc; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #3b82f6; }
        .st-info { flex: 1; }
        .st-info strong { display: block; font-size: 12px; color: #1e293b; }
        .st-info span { font-size: 10px; color: #94a3b8; }
        .st-dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
      `})]})};export{_ as default};
