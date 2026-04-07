import{u as b,r as i,j as e,x as j,m as k,b as y,A as v}from"./index-oD4_PD50.js";import{R as w}from"./refresh-cw-DS5yJXpn.js";import{E as N}from"./external-link-B0xvpO_l.js";import{P as S}from"./plus-nsyKK2uL.js";import{S as z}from"./shield-CU8r3lxx.js";import{S as C}from"./save-C9Mykxtv.js";const A=[{id:"booking",name:"Booking.com",status:"aktif",sync:"5 dk önce",logo:"B"},{id:"expedia",name:"Expedia",status:"aktif",sync:"2 dk önce",logo:"E"},{id:"hotels",name:"Hotels.com",status:"aktif",sync:"8 dk önce",logo:"H"},{id:"airbnb",name:"Airbnb",status:"uyarı",sync:"1 saat önce",logo:"A"},{id:"website",name:"Otel Web Sitesi",status:"aktif",sync:"Anlık",logo:"W"}],K=()=>{const{addNotification:o,reservations:p}=b(),[t,l]=i.useState(!1),[d,c]=i.useState(!1),[x,f]=i.useState({standard:1850,deluxe:2400,suite:4200,family:3100}),[r,g]=i.useState({Single:!1,Double:!1,Triple:!1}),h=A.map(a=>{const s=p.filter(n=>a.id==="booking"?n.channel==="Booking.com":a.id==="expedia"?n.channel==="Expedia":a.id==="website"?n.channel==="Direkt":!1).length;return{...a,resCount:s}}),m=()=>{l(!0),setTimeout(()=>{l(!1),o({type:"success",msg:"Tüm kanallar başarıyla güncellendi!"})},2e3)},u=(a,s)=>{f(n=>({...n,[a]:parseInt(s)||0}))};return e.jsxs("div",{className:"chan-page",children:[e.jsxs("div",{className:"chan-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(j,{size:20})," Kanal Yönetimi (Channel Manager)"]}),e.jsx("span",{children:"OTA fiyat, kontenjan ve durdur/satış (Stop Sale) yönetimi"})]}),e.jsxs("button",{className:`btn-primary ${t?"syncing":""}`,onClick:m,disabled:t,children:[e.jsx(w,{size:15,className:t?"spin":""}),t?"Senkronize Ediliyor...":"Tüm Kanalları Güncelle"]})]}),e.jsxs("div",{className:"chan-grid",children:[e.jsxs("div",{className:"chan-list",children:[e.jsx("h3",{children:"Bağlı Satış Kanalları"}),h.map((a,s)=>e.jsxs(k.div,{className:`chan-card ${a.status}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:s*.1},children:[e.jsx("div",{className:"ch-logo",children:a.logo}),e.jsxs("div",{className:"ch-info",children:[e.jsx("strong",{children:a.name}),e.jsxs("span",{children:["Son Senk: ",a.sync]}),a.resCount>0&&e.jsxs("span",{className:"ch-res-count",children:[a.resCount," rez."]})]}),e.jsxs("div",{className:`ch-status ${a.status}`,children:[a.status==="aktif"?e.jsx(y,{size:14}):e.jsx(v,{size:14}),a.status==="aktif"?"Bağlantı Tamam":"Senkronizasyon Hatası"]}),e.jsx("button",{className:"ch-btn",children:e.jsx(N,{size:14})})]},a.id)),e.jsxs("button",{className:"add-chan",children:[e.jsx(S,{size:14})," Yeni Kanal Bağla"]})]}),e.jsx("div",{className:"chan-main",children:e.jsxs("div",{className:"rate-card",children:[e.jsxs("div",{className:"rc-head",children:[e.jsx("h3",{children:"Genel Fiyat Dağıtımı"}),e.jsx("p",{children:"Burada yapılan değişiklikler tüm aktif kanallara anında yansıtılır."})]}),e.jsx("div",{className:"rate-grid",children:Object.entries(x).map(([a,s])=>e.jsxs("div",{className:"rate-item",children:[e.jsxs("label",{children:[a.toUpperCase()," ODA"]}),e.jsxs("div",{className:"price-input",children:[e.jsx("span",{children:"₺"}),e.jsx("input",{type:"number",value:s,onChange:n=>u(a,n.target.value)})]}),e.jsxs("div",{className:"rate-meta",children:[e.jsxs("span",{children:["Önceki: ₺",(s*.95).toFixed(0)]}),e.jsx("span",{className:"plus",children:"+%5"})]})]},a))}),e.jsxs("div",{className:"stop-sale-section",children:[e.jsxs("h3",{children:[e.jsx(z,{size:16})," Satış Durdurma (Stop Sale)"]}),e.jsx("div",{className:"stop-grid",children:["Single","Double","Triple"].map(a=>e.jsxs("div",{className:`stop-item ${r[a]?"stopped":""}`,children:[e.jsxs("span",{children:[a," Odalar"]}),e.jsx("span",{className:"stop-status",children:r[a]?"🛑 Durduruldu":"✅ Satışta"}),e.jsxs("div",{className:"toggle",children:[e.jsx("input",{type:"checkbox",id:`stop-${a}`,checked:r[a],onChange:()=>g(s=>({...s,[a]:!s[a]}))}),e.jsx("label",{htmlFor:`stop-${a}`})]})]},a))})]}),e.jsx("div",{className:"rc-foot",children:e.jsxs("button",{className:`btn-save ${d?"saved":""}`,onClick:()=>{c(!0),o({type:"success",msg:"Fiyatlar ve stop-sale durumu tüm kanallara gönderildi!"}),setTimeout(()=>c(!1),2e3)},children:[e.jsx(C,{size:15})," ",d?"✓ Gönderildi!":"Değişiklikleri Kanallara Gönder"]})})]})})]}),e.jsx("style",{children:`
        .chan-page { padding: 28px; display: flex; flex-direction: column; gap: 20px; }
        .chan-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .chan-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .chan-head span { font-size: 13px; color: #94a3b8; }
        
        .btn-primary { padding: 12px 20px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3); }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from {transform: rotate(0deg)} to {transform: rotate(360deg)} }

        .chan-grid { display: grid; grid-template-columns: 350px 1fr; gap: 24px; }
        
        .chan-list { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; display: flex; flex-direction: column; gap: 12px; }
        .chan-list h3 { font-size: 14px; font-weight: 800; color: #64748b; margin-bottom: 8px; text-transform: uppercase; }
        
        .chan-card { padding: 16px; border-radius: 15px; border: 1.5px solid #f1f5f9; display: flex; align-items: center; gap: 14px; transition: 0.2s; }
        .chan-card:hover { border-color: #3b82f6; background: #f8fafc; }
        .ch-logo { width: 40px; height: 40px; background: #1e293b; color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; }
        .ch-info { flex: 1; }
        .ch-info strong { display: block; font-size: 14px; color: #1e293b; }
        .ch-info span { font-size: 11px; color: #94a3b8; }
        .ch-status { font-size: 10px; font-weight: 800; display: flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 20px; }
        .ch-status.aktif { background: #f0fdf4; color: #10b981; }
        .ch-status.uyarı { background: #fef2f2; color: #ef4444; }
        .ch-btn { background: transparent; border: none; color: #cbd5e1; cursor: pointer; padding: 5px; }
        .ch-btn:hover { color: #3b82f6; }
        
        .add-chan { margin-top: 10px; border: 2px dashed #e2e8f0; background: transparent; padding: 12px; border-radius: 12px; color: #94a3b8; font-weight: 700; cursor: pointer; font-size: 12px; transition: 0.2s; }
        .add-chan:hover { border-color: #3b82f6; color: #3b82f6; background: #eff6ff; }

        .chan-main { display: flex; flex-direction: column; gap: 20px; }
        .rate-card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; }
        .rc-head { margin-bottom: 24px; }
        .rc-head h3 { font-size: 18px; font-weight: 800; color: #1e293b; }
        .rc-head p { font-size: 13px; color: #94a3b8; }
        
        .rate-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 30px; }
        .rate-item { background: #f8fafc; padding: 16px; border-radius: 16px; border: 1px solid #f1f5f9; }
        .rate-item label { display: block; font-size: 10px; font-weight: 800; color: #64748b; margin-bottom: 8px; }
        .price-input { display: flex; align-items: center; gap: 8px; position: relative; }
        .price-input span { font-size: 18px; font-weight: 800; color: #1e293b; }
        .price-input input { background: transparent; border: none; font-size: 24px; font-weight: 900; color: #3b82f6; width: 100%; outline: none; }
        .rate-meta { display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; font-weight: 700; color: #94a3b8; }
        .rate-meta .plus { color: #10b981; }

        .stop-sale-section { border-top: 1px solid #f1f5f9; padding-top: 24px; margin-bottom: 24px; }
        .stop-sale-section h3 { font-size: 14px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .stop-grid { display: flex; gap: 20px; }
        .stop-item { display: flex; align-items: center; gap: 12px; padding: 10px 16px; background: #f8fafc; border-radius: 12px; font-size: 13px; font-weight: 700; color: #64748b; }
        
        .toggle { position: relative; display: inline-block; width: 40px; height: 22px; }
        .toggle input { display: none; }
        .toggle label { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; border-radius: 34px; }
        .toggle label:before { content: ""; position: absolute; height: 16px; width: 16px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
        .toggle input:checked + label { background-color: #ef4444; }
        .toggle input:checked + label:before { transform: translateX(18px); }

        .btn-save { width: 100%; padding: 16px; border: none; background: #1e293b; color: white; border-radius: 15px; font-weight: 800; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; }
        .btn-save:hover { background: #3b82f6; transform: translateY(-2px); }
      `})]})};export{K as default};
