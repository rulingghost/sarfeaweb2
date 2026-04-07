import{c as G,u as Y,r as o,R as $,j as e,f as y,m as c,X as v,U as B,C as M}from"./index-CeGZvpZr.js";import{P as S}from"./plus-CXzXoTcw.js";import{E as R}from"./eye-DTylCQNr.js";import{T as H}from"./trash-2-D4J-9J_4.js";import{A as O}from"./arrow-up-right-CfReZH3s.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=G("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),d={aday:{label:"Aday",color:"#94a3b8",bg:"#f1f5f9"},görüşme:{label:"Görüşme",color:"#3b82f6",bg:"#eff6ff"},teklif:{label:"Teklif Verildi",color:"#f59e0b",bg:"#fffbeb"},sözleşme:{label:"Sözleşme",color:"#10b981",bg:"#f0fdf4"},kaybedildi:{label:"Kaybedildi",color:"#ef4444",bg:"#fef2f2"}},J=()=>{var w,C;const{addNotification:g}=Y(),[F,p]=o.useState(!1),[L,k]=o.useState(!1),[t,x]=o.useState(null),[r,h]=o.useState([{id:"L-001",name:"Teknoloji A.Ş.",contact:"Ali Vural",phone:"+90 532 111 0001",value:85e3,probability:80,stage:"teklif",date:"2026-03-14",notes:"200 kişilik seminer talebi"},{id:"L-002",name:"Global Turizm",contact:"Zeynep Gök",phone:"+90 533 222 0002",value:142e3,probability:40,stage:"görüşme",date:"2026-03-12",notes:"Yaz sezonu grubu"},{id:"L-003",name:"Gıda Sanayi Ltd.",contact:"Mehmet Öz",phone:"+90 534 333 0003",value:22500,probability:95,stage:"sözleşme",date:"2026-03-15",notes:"Çalışan motivasyon etkinliği"},{id:"L-004",name:"Eğitim Koçu",contact:"Merve Hanım",phone:"+90 535 444 0004",value:12e3,probability:10,stage:"aday",date:"2026-03-10",notes:"Eğitim kampı düşünüyor"}]),[A,N]=o.useState([{id:"C-001",title:"Bayram Özel %20",target:"Bireysel",color:"#8b5cf6",status:"aktif",reservations:124},{id:"C-002",title:"Şirket İndirimi 2026",target:"Kurumsal",color:"#3b82f6",status:"aktif",reservations:87},{id:"C-003",title:"Erken Rezervasyon",target:"Global",color:"#10b981",status:"aktif",reservations:203}]),[l,n]=o.useState({name:"",contact:"",phone:"",value:"",probability:"",stage:"aday",notes:""}),[m,u]=o.useState({title:"",target:"Bireysel",color:"#3b82f6"}),f=$.useRef({lead:4,camp:3}),K=a=>{a.preventDefault(),f.current.lead++;const s=`L-${String(f.current.lead).padStart(3,"0")}`;h(i=>[{...l,id:s,value:Number(l.value),probability:Number(l.probability),date:new Date().toISOString().slice(0,10)},...i]),g({type:"info",msg:`Yeni satış fırsatı: ${l.name} — ₺${Number(l.value).toLocaleString()}`}),n({name:"",contact:"",phone:"",value:"",probability:"",stage:"aday",notes:""}),p(!1)},T=a=>{a.preventDefault(),f.current.camp++;const s=`C-${String(f.current.camp).padStart(3,"0")}`;N(i=>[...i,{...m,id:s,status:"aktif",reservations:0}]),g({type:"success",msg:`Yeni kampanya oluşturuldu: ${m.title}`}),u({title:"",target:"Bireysel",color:"#3b82f6"}),k(!1)},b=(a,s)=>{var i;h(D=>D.map(j=>j.id===a?{...j,stage:s}:j)),g({type:s==="sözleşme"?"success":"info",msg:`Fırsat durumu güncellendi → ${(i=d[s])==null?void 0:i.label}`})},E=a=>{h(s=>s.filter(i=>i.id!==a))},P=a=>{N(s=>s.filter(i=>i.id!==a))},z=r.filter(a=>a.stage!=="kaybedildi").reduce((a,s)=>a+s.value,0);return e.jsxs("div",{className:"sm-page",children:[e.jsxs("div",{className:"sm-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(q,{size:20})," Satış & Pazarlama Yönetimi"]}),e.jsx("span",{children:"Kurumsal satış süreçleri, kampanya takibi ve lead yönetimi"})]}),e.jsxs("button",{className:"btn-primary",onClick:()=>p(!0),children:[e.jsx(S,{size:15})," Yeni Satış Fırsatı"]})]}),e.jsx(y,{children:F&&e.jsxs(c.form,{className:"lead-form",onSubmit:K,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},children:[e.jsxs("div",{className:"lf-head",children:[e.jsx("h3",{children:"Yeni Satış Fırsatı"}),e.jsx("button",{type:"button",onClick:()=>p(!1),children:e.jsx(v,{size:18})})]}),e.jsxs("div",{className:"lf-grid",children:[e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Firma Adı *"}),e.jsx("input",{value:l.name,onChange:a=>n(s=>({...s,name:a.target.value})),placeholder:"Şirket adı",required:!0})]}),e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Yetkili Kişi *"}),e.jsx("input",{value:l.contact,onChange:a=>n(s=>({...s,contact:a.target.value})),placeholder:"Ad Soyad",required:!0})]}),e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Telefon"}),e.jsx("input",{value:l.phone,onChange:a=>n(s=>({...s,phone:a.target.value})),placeholder:"+90 5xx..."})]}),e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Tahmini Değer (₺) *"}),e.jsx("input",{type:"number",value:l.value,onChange:a=>n(s=>({...s,value:a.target.value})),required:!0})]}),e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Olasılık %"}),e.jsx("input",{type:"number",value:l.probability,onChange:a=>n(s=>({...s,probability:a.target.value})),max:100})]}),e.jsxs("div",{className:"lf",children:[e.jsx("label",{children:"Aşama"}),e.jsx("select",{value:l.stage,onChange:a=>n(s=>({...s,stage:a.target.value})),children:Object.entries(d).map(([a,s])=>e.jsx("option",{value:a,children:s.label},a))})]}),e.jsxs("div",{className:"lf full",children:[e.jsx("label",{children:"Notlar"}),e.jsx("input",{value:l.notes,onChange:a=>n(s=>({...s,notes:a.target.value})),placeholder:"Detaylar..."})]})]}),e.jsxs("div",{className:"lf-foot",children:[e.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>p(!1),children:"İptal"}),e.jsx("button",{type:"submit",className:"btn-primary",children:"Fırsat Kaydet"})]})]})}),e.jsxs("div",{className:"sm-grid",children:[e.jsxs("div",{className:"pipeline-section",children:[e.jsxs("div",{className:"ps-head",children:[e.jsx("h3",{children:"Satış Hattı (Pipeline)"}),e.jsxs("div",{className:"ps-stats",children:[e.jsxs("div",{className:"ps-i",children:[e.jsx("strong",{children:r.length})," Fırsat"]}),e.jsxs("div",{className:"ps-i",children:[e.jsxs("strong",{children:["₺",(z/1e3).toFixed(0),"K"]})," Hacim"]})]})]}),e.jsx("div",{className:"lead-list",children:r.map((a,s)=>{const i=d[a.stage]||d.aday;return e.jsxs(c.div,{className:"lead-card",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:s*.05},children:[e.jsxs("div",{className:"lc-top",children:[e.jsxs("div",{className:"lc-info",children:[e.jsx("strong",{children:a.name}),e.jsxs("span",{children:[e.jsx(B,{size:11})," ",a.contact," ",a.phone&&`· ${a.phone}`]})]}),e.jsxs("span",{className:"lc-value",children:["₺",a.value.toLocaleString()]})]}),e.jsxs("div",{className:"lc-mid",children:[e.jsx("div",{className:"lc-stage",style:{background:i.bg,color:i.color},children:i.label}),e.jsxs("div",{className:"lc-prob",children:[e.jsxs("span",{children:["Olasılık: %",a.probability]}),e.jsx("div",{className:"prob-bar-bg",children:e.jsx("div",{className:"prob-bar",style:{width:`${a.probability}%`,background:i.color}})})]})]}),e.jsxs("div",{className:"lc-foot",children:[e.jsxs("span",{children:[e.jsx(M,{size:11})," ",a.date]}),e.jsxs("div",{className:"lc-actions",children:[a.stage==="aday"&&e.jsx("button",{className:"la blue",onClick:()=>b(a.id,"görüşme"),children:"Görüşme"}),a.stage==="görüşme"&&e.jsx("button",{className:"la amber",onClick:()=>b(a.id,"teklif"),children:"Teklif Ver"}),a.stage==="teklif"&&e.jsx("button",{className:"la green",onClick:()=>b(a.id,"sözleşme"),children:"Sözleşme"}),a.stage!=="sözleşme"&&a.stage!=="kaybedildi"&&e.jsx("button",{className:"la red",onClick:()=>b(a.id,"kaybedildi"),children:"Kaybet"}),e.jsx("button",{className:"la detail",onClick:()=>x(a),children:e.jsx(R,{size:14})}),e.jsx("button",{className:"la del",onClick:()=>E(a.id),children:e.jsx(H,{size:14})})]})]})]},a.id)})})]}),e.jsxs("div",{className:"sm-sidebar",children:[e.jsxs("div",{className:"camp-card-main",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[e.jsx("h3",{style:{marginBottom:0},children:"Aktif Kampanyalar"}),e.jsx("button",{className:"add-camp-btn",onClick:()=>k(!0),children:e.jsx(S,{size:14})})]}),e.jsx(y,{children:L&&e.jsxs(c.form,{className:"camp-form",onSubmit:T,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[e.jsx("input",{value:m.title,onChange:a=>u(s=>({...s,title:a.target.value})),placeholder:"Kampanya adı *",required:!0}),e.jsxs("select",{value:m.target,onChange:a=>u(s=>({...s,target:a.target.value})),children:[e.jsx("option",{children:"Bireysel"}),e.jsx("option",{children:"Kurumsal"}),e.jsx("option",{children:"Global"})]}),e.jsx("button",{type:"submit",className:"btn-primary sm",children:"Ekle"})]})}),e.jsx("div",{className:"cl",children:A.map(a=>e.jsxs("div",{className:"ci",children:[e.jsx("div",{className:"ci-dot",style:{background:a.color}}),e.jsxs("div",{className:"ci-info",children:[e.jsx("strong",{children:a.title}),e.jsxs("span",{children:["Hedef: ",a.target]})]}),e.jsxs("div",{className:"ci-stat",children:[a.reservations," Rez."]}),e.jsx("button",{className:"ci-del",onClick:()=>P(a.id),children:e.jsx(v,{size:12})})]},a.id))})]}),e.jsxs("div",{className:"sales-stats-c",children:[e.jsx("div",{className:"ssc-head",children:"Satış Performansı"}),e.jsxs("div",{className:"ssc-metrics",children:[e.jsxs("div",{className:"sscm",children:[e.jsx("span",{className:"sscm-l",children:"Dönüşüm Oranı"}),e.jsxs("div",{className:"sscm-v",children:[r.length>0?(r.filter(a=>a.stage==="sözleşme").length/r.length*100).toFixed(1):0,"% ",e.jsx(O,{size:12,color:"#10b981"})]})]}),e.jsxs("div",{className:"sscm",children:[e.jsx("span",{className:"sscm-l",children:"Pipeline Hacmi"}),e.jsxs("div",{className:"sscm-v",children:["₺",(z/1e3).toFixed(0),"K"]})]}),e.jsxs("div",{className:"sscm",children:[e.jsx("span",{className:"sscm-l",children:"Aktif Fırsatlar"}),e.jsx("div",{className:"sscm-v",children:r.filter(a=>a.stage!=="kaybedildi"&&a.stage!=="sözleşme").length})]})]})]})]})]}),e.jsx(y,{children:t&&e.jsx(c.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>x(null),children:e.jsxs(c.div,{className:"modal-box",initial:{scale:.9},animate:{scale:1},onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"mb-head",children:[e.jsx("h3",{children:t.name}),e.jsx("button",{onClick:()=>x(null),children:e.jsx(v,{size:18})})]}),e.jsxs("div",{className:"detail-grid",children:[e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Yetkili"}),e.jsx("strong",{children:t.contact})]}),e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Telefon"}),e.jsx("strong",{children:t.phone||"—"})]}),e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Değer"}),e.jsxs("strong",{style:{color:"#10b981"},children:["₺",t.value.toLocaleString()]})]}),e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Olasılık"}),e.jsxs("strong",{children:["%",t.probability]})]}),e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Aşama"}),e.jsx("strong",{style:{color:(w=d[t.stage])==null?void 0:w.color},children:(C=d[t.stage])==null?void 0:C.label})]}),e.jsxs("div",{className:"dg",children:[e.jsx("span",{children:"Tarih"}),e.jsx("strong",{children:t.date})]})]}),t.notes&&e.jsxs("div",{className:"detail-notes",children:["📝 ",t.notes]}),e.jsx("div",{className:"mb-foot",children:e.jsx("button",{className:"btn-cancel",onClick:()=>x(null),children:"Kapat"})})]})})}),e.jsx("style",{children:`
        .sm-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .sm-head { display: flex; justify-content: space-between; align-items: center; }
        .sm-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .sm-head span { font-size: 13px; color: #94a3b8; }
        
        .btn-primary { padding: 12px 20px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 10px; }
        .btn-primary.sm { padding: 8px 14px; font-size: 12px; }
        .btn-cancel { padding: 10px 18px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; font-weight: 700; cursor: pointer; font-size: 13px; }

        /* Lead Form */
        .lead-form { background: white; border-radius: 20px; border: 1.5px solid #e2e8f0; padding: 24px; }
        .lf-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .lf-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .lf-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .lf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .lf { display: flex; flex-direction: column; gap: 6px; }
        .lf.full { grid-column: 1 / -1; }
        .lf label { font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
        .lf input, .lf select { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .lf input:focus, .lf select:focus { border-color: #3b82f6; }
        .lf-foot { display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px; }

        .sm-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        
        .pipeline-section { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .ps-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .ps-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .ps-stats { display: flex; gap: 12px; }
        .ps-i { font-size: 11px; font-weight: 800; color: #1e293b; padding: 4px 10px; background: #f1f5f9; border-radius: 20px; }
        .ps-i strong { color: #3b82f6; }

        .lead-list { display: flex; flex-direction: column; gap: 14px; }
        .lead-card { background: #f8fafc; border-radius: 18px; border: 1.5px solid #f1f5f9; padding: 18px; display: flex; flex-direction: column; gap: 14px; transition: 0.2s; }
        .lead-card:hover { border-color: #3b82f6; background: white; }
        
        .lc-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .lc-info strong { display: block; font-size: 14px; color: #1e293b; }
        .lc-info span { font-size: 11px; color: #94a3b8; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        .lc-value { font-size: 15px; font-weight: 900; color: #1e293b; }

        .lc-mid { display: grid; grid-template-columns: 100px 1fr; gap: 16px; align-items: center; }
        .lc-stage { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-align: center; }
        .lc-prob { display: flex; flex-direction: column; gap: 4px; }
        .lc-prob span { font-size: 9px; font-weight: 700; color: #94a3b8; }
        .prob-bar-bg { background: #e2e8f0; height: 5px; border-radius: 10px; overflow: hidden; }
        .prob-bar { height: 100%; border-radius: 10px; }

        .lc-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid #f1f5f9; }
        .lc-foot span { font-size: 10px; color: #cbd5e1; display: flex; align-items: center; gap: 4px; }
        .lc-actions { display: flex; gap: 5px; }
        .la { padding: 4px 10px; border-radius: 6px; border: none; font-size: 10px; font-weight: 700; cursor: pointer; }
        .la.blue { background: #eff6ff; color: #3b82f6; }
        .la.amber { background: #fffbeb; color: #f59e0b; }
        .la.green { background: #f0fdf4; color: #10b981; }
        .la.red { background: #fef2f2; color: #ef4444; }
        .la.detail, .la.del { background: transparent; color: #94a3b8; padding: 4px; }
        .la.del:hover { color: #ef4444; }
        .la.detail:hover { color: #3b82f6; }

        .sm-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .camp-card-main { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .camp-card-main h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        .add-camp-btn { width: 30px; height: 30px; border-radius: 8px; border: 1.5px solid #e2e8f0; background: white; color: #3b82f6; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .camp-form { display: flex; gap: 8px; margin-bottom: 14px; overflow: hidden; }
        .camp-form input, .camp-form select { padding: 8px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 12px; outline: none; flex: 1; }
        .cl { display: flex; flex-direction: column; gap: 14px; }
        .ci { display: flex; align-items: center; gap: 12px; }
        .ci-dot { width: 8px; height: 8px; border-radius: 50%; }
        .ci-info { flex: 1; }
        .ci-info strong { display: block; font-size: 13px; color: #1e293b; }
        .ci-info span { font-size: 11px; color: #94a3b8; }
        .ci-stat { font-size: 11px; font-weight: 800; color: #10b981; }
        .ci-del { background: none; border: none; color: #cbd5e1; cursor: pointer; }
        .ci-del:hover { color: #ef4444; }

        .sales-stats-c { background: #1e293b; border-radius: 24px; padding: 24px; color: white; }
        .ssc-head { font-size: 13px; font-weight: 700; color: #94a3b8; margin-bottom: 16px; text-transform: uppercase; }
        .ssc-metrics { display: flex; flex-direction: column; gap: 16px; }
        .sscm-l { font-size: 11px; color: #94a3b8; }
        .sscm-v { font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 8px; }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-box { background: white; border-radius: 20px; width: 480px; max-height: 80vh; overflow-y: auto; padding: 24px; }
        .mb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .mb-head h3 { font-size: 17px; font-weight: 800; color: #1e293b; }
        .mb-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .dg { padding: 10px; background: #f8fafc; border-radius: 10px; }
        .dg span { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; display: block; margin-bottom: 3px; }
        .dg strong { font-size: 13px; color: #1e293b; }
        .detail-notes { padding: 10px; background: #fffbeb; border-radius: 10px; font-size: 12px; color: #92400e; margin-top: 10px; }
        .mb-foot { display: flex; justify-content: flex-end; margin-top: 14px; }
      `})]})};export{J as default};
