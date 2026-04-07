import{c as C,u as M,r as i,R as S,j as e,G as R,f as L,m as x,X as H,q as A,C as T,U as B,Z as q,b as P}from"./index-sbCyfkT4.js";import{P as $}from"./plus-D4LU6kPK.js";import{R as E}from"./refresh-cw-9i269vQm.js";import{M as G}from"./map-pin-22sxKq3Z.js";import{A as g}from"./arrow-right-D_zpoYzJ.js";import{T as I}from"./trash-2-Cc7iIBWw.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=C("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),Y=[{id:"HTL-01",name:"Grand Hotel Istanbul",city:"Istanbul",type:"City",capacity:320},{id:"HTL-02",name:"Antalya Resort & Spa",city:"Antalya",type:"Resort",capacity:550},{id:"HTL-03",name:"Boutique Hotel Izmir",city:"Izmir",type:"Boutique",capacity:60},{id:"HTL-04",name:"Alpine Lodge Erzurum",city:"Erzurum",type:"Mountain",capacity:120},{id:"HTL-05",name:"Bodrum Premium Sands",city:"Muğla",type:"Resort",capacity:420}],X=()=>{const{addNotification:c}=M(),[l,u]=i.useState(""),[b,o]=i.useState(!1),[f,h]=i.useState(!1),[y,j]=i.useState(Y.map(s=>({...s,occupancy:60+Math.floor(Math.random()*35),availability:Math.floor(Math.random()*40),rate:2e3+Math.floor(Math.random()*4e3)}))),[v,d]=i.useState([{id:"CRS-441",action:"Rezervasyon Transferi",from:"Antalya",to:"Istanbul",guest:"Ahmet Yılmaz",status:"success"},{id:"CRS-440",action:"Grup Blokaj Paylaşımı",from:"HQ",to:"All Hotels",guest:"Tech-A Group",status:"success"},{id:"CRS-439",action:"Müsaitlik Senkronizasyonu",from:"Channel",to:"CRS Hub",guest:"Sistem",status:"success"}]),[t,r]=i.useState({action:"Müsaitlik Senkronizasyonu",from:"Channel",to:"CRS Hub",guest:"Sistem"}),n=S.useRef(441),k=s=>{s.preventDefault(),n.current++;const a=`CRS-${n.current}`;d(p=>[{...t,id:a,status:"success"},...p]),c({type:"success",msg:"Yeni işlem kaydı eklendi"}),r({action:"Müsaitlik Senkronizasyonu",from:"Channel",to:"CRS Hub",guest:"Sistem"}),o(!1)},m=()=>{h(!0),setTimeout(()=>{j(s=>s.map(a=>({...a,occupancy:60+Math.floor(Math.random()*35),availability:Math.floor(Math.random()*40)}))),h(!1),c({type:"info",msg:"Tüm otel müsaitlikleri senkronize edildi"}),n.current++,d(s=>[{id:`CRS-${n.current}`,action:"Manuel Senkronizasyon",from:"Admin",to:"All Hotels",guest:"Sistem",status:"success"},...s])},1500)},z=s=>{c({type:"success",msg:`${s} üzerinden çapraz rezervasyon ekranına yönlendiriliyorsunuz...`})},w=s=>{d(a=>a.filter(p=>p.id!==s))},N=y.filter(s=>s.name.toLowerCase().includes(l.toLowerCase())||s.city.toLowerCase().includes(l.toLowerCase()));return e.jsxs("div",{className:"crs-page",children:[e.jsxs("div",{className:"crs-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(R,{size:20})," Merkezi Rezervasyon Sistemi (CRS)"]}),e.jsx("span",{children:"Zincir oteller arası çapraz rezervasyon ve merkezi müsaitlik takibi"})]}),e.jsxs("div",{className:"head-actions",children:[e.jsxs("button",{className:"btn-secondary",onClick:()=>o(!0),children:[e.jsx($,{size:14})," Manuel İşlem Ekle"]}),e.jsxs("button",{className:`btn-primary ${f?"spin":""}`,onClick:m,children:[e.jsx(E,{size:14})," ",f?"Güncelleniyor...":"Hızlı Müsaitlik Sorgula"]})]})]}),e.jsx(L,{children:b&&e.jsx(x.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(!1),children:e.jsxs(x.form,{className:"modal-box",initial:{scale:.9},animate:{scale:1},onClick:s=>s.stopPropagation(),onSubmit:k,children:[e.jsxs("div",{className:"mb-head",children:[e.jsx("h3",{children:"Manuel CRS İşlemi"}),e.jsx("button",{type:"button",onClick:()=>o(!1),children:e.jsx(H,{size:18})})]}),e.jsxs("div",{className:"mf-grid",children:[e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"İşlem Türü"}),e.jsx("input",{value:t.action,onChange:s=>r(a=>({...a,action:s.target.value})),required:!0})]}),e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"Misafir / Kaynak"}),e.jsx("input",{value:t.guest,onChange:s=>r(a=>({...a,guest:s.target.value})),required:!0})]}),e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"Nereden"}),e.jsx("input",{value:t.from,onChange:s=>r(a=>({...a,from:s.target.value})),required:!0})]}),e.jsxs("div",{className:"mf",children:[e.jsx("label",{children:"Nereye"}),e.jsx("input",{value:t.to,onChange:s=>r(a=>({...a,to:s.target.value})),required:!0})]})]}),e.jsx("div",{className:"mf-foot",children:e.jsx("button",{type:"submit",className:"btn-primary",children:"İşlemi Kaydet"})})]})})}),e.jsxs("div",{className:"crs-search-bar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(A,{size:18,color:"#94a3b8"}),e.jsx("input",{placeholder:"Otel adı veya şehir ara...",value:l,onChange:s=>u(s.target.value)})]}),e.jsxs("div",{className:"search-filters",children:[e.jsxs("div",{className:"sf-item",children:[e.jsx(T,{size:14})," 15 Mar - 20 Mar"]}),e.jsxs("div",{className:"sf-item",children:[e.jsx(B,{size:14})," 2 Yetişkin"]}),e.jsxs("button",{className:"btn-go",onClick:m,children:[e.jsx(q,{size:14})," Sorgula"]})]})]}),e.jsx("div",{className:"crs-grid",children:N.map((s,a)=>e.jsxs(x.div,{className:"hotel-crs-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.1},children:[e.jsx("div",{className:`hcc-type ${s.type.toLowerCase()}`,children:s.type}),e.jsxs("div",{className:"hcc-head",children:[e.jsx("div",{className:"hcc-icon",children:e.jsx(F,{size:24})}),e.jsxs("div",{className:"hcc-info",children:[e.jsx("strong",{children:s.name}),e.jsxs("span",{children:[e.jsx(G,{size:12})," ",s.city," · Kp: ",s.capacity]})]})]}),e.jsxs("div",{className:"hcc-stats",children:[e.jsxs("div",{className:"hccs",children:[e.jsx("span",{children:"Doluluk"}),e.jsxs("div",{className:"hccs-val",children:[e.jsxs("strong",{children:["%",s.occupancy]}),e.jsx("div",{className:"hccs-bar-bg",children:e.jsx("div",{className:"hccs-bar",style:{width:`${s.occupancy}%`,background:s.occupancy>90?"#ef4444":s.occupancy>70?"#f59e0b":"#10b981"}})})]})]}),e.jsxs("div",{className:"hccs",children:[e.jsx("span",{children:"Müsait Oda"}),e.jsx("strong",{className:`hccs-big ${s.availability<5?"critical":""}`,children:s.availability})]})]}),e.jsxs("div",{className:"hcc-bottom",children:[e.jsxs("div",{className:"hcc-price",children:[e.jsx("span",{children:"Başlayan Fiyat"}),e.jsxs("strong",{children:["₺",s.rate.toLocaleString()]})]}),e.jsxs("button",{className:"btn-res",onClick:()=>z(s.name),children:["Rezervasyon Yap ",e.jsx(g,{size:14})]})]})]},s.id))}),e.jsxs("div",{className:"crs-footer",children:[e.jsx("h3",{children:"Son Merkezi İşlemler"}),e.jsx("div",{className:"crs-log",children:v.map(s=>e.jsxs("div",{className:"log-row",children:[e.jsxs("span",{className:"log-id",children:["#",s.id]}),e.jsx("span",{className:"log-act",children:s.action}),e.jsxs("div",{className:"log-path",children:[s.from," ",e.jsx(g,{size:10})," ",s.to]}),e.jsx("span",{className:"log-guest",children:s.guest}),e.jsxs("div",{className:"log-status",children:[e.jsx(P,{size:14,color:"#10b981"})," Başarılı"]}),e.jsx("button",{className:"log-del",onClick:()=>w(s.id),children:e.jsx(I,{size:12})})]},s.id))})]}),e.jsx("style",{children:`
        .crs-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .crs-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .crs-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .crs-head span { font-size: 13px; color: #94a3b8; }
        
        .head-actions { display: flex; gap: 10px; }
        .btn-secondary { padding: 10px 18px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: white; color: #475569; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.2s; }
        .btn-secondary:hover { background: #f8fafc; border-color: #cbd5e1; }
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .spin svg { animation: spin 1s linear infinite; }
        @keyframes spin { from {transform: rotate(0deg)} to {transform: rotate(360deg)} }

        .crs-search-bar { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 16px; display: flex; gap: 16px; align-items: center; }
        .search-box { flex: 1; display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 10px 16px; }
        .search-box input { border: none; background: transparent; outline: none; font-size: 14px; width: 100%; color: #1e293b; }
        
        .search-filters { display: flex; gap: 8px; align-items: center; }
        .sf-item { background: #f1f5f9; padding: 8px 14px; border-radius: 10px; font-size: 12px; font-weight: 700; color: #475569; display: flex; align-items: center; gap: 8px; }
        .btn-go { background: #1e293b; color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 800; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        .crs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
        .hotel-crs-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; position: relative; overflow: hidden; transition: 0.3s; }
        .hotel-crs-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.05); border-color: #3b82f6; }
        
        .hcc-type { position: absolute; top: 0; right: 0; background: #f1f5f9; padding: 4px 14px; border-bottom-left-radius: 14px; font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; }
        .hotel-crs-card.city .hcc-type { background: #eff6ff; color: #3b82f6; }
        
        .hcc-head { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .hcc-icon { width: 52px; height: 52px; background: #f8fafc; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #3b82f6; border: 1px solid #f1f5f9; }
        .hcc-info strong { display: block; font-size: 16px; color: #1e293b; margin-bottom: 2px; }
        .hcc-info span { font-size: 12px; color: #94a3b8; display: flex; align-items: center; gap: 4px; }

        .hcc-stats { display: flex; gap: 24px; margin-bottom: 24px; padding: 16px; background: #f8fafc; border-radius: 16px; }
        .hccs { flex: 1; display: flex; flex-direction: column; gap: 6px; }
        .hccs span { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }
        .hccs-val { display: flex; align-items: center; gap: 8px; }
        .hccs-val strong { font-size: 14px; color: #1e293b; width: 40px; }
        .hccs-bar-bg { flex: 1; height: 5px; background: #e2e8f0; border-radius: 4px; overflow: hidden; }
        .hccs-bar { height: 100%; border-radius: 4px; transition: 0.5s; }
        .hccs-big { font-size: 20px; font-weight: 900; color: #1e293b; }
        .hccs-big.critical { color: #ef4444; }

        .hcc-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #f1f5f9; }
        .hcc-price span { display: block; font-size: 10px; color: #94a3b8; font-weight: 600; }
        .hcc-price strong { font-size: 18px; font-weight: 900; color: #1e293b; }
        .btn-res { background: transparent; border: 1.5px solid #1e293b; color: #1e293b; padding: 8px 14px; border-radius: 10px; font-size: 11px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.2s; }
        .btn-res:hover { background: #1e293b; color: white; }

        .crs-footer { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .crs-footer h3 { font-size: 16px; font-weight: 800; color: #1e293b; margin-bottom: 20px; }
        .crs-log { display: flex; flex-direction: column; }
        .log-row { display: grid; grid-template-columns: 80px 180px 180px 1fr 100px 30px; padding: 12px 16px; border-bottom: 1px solid #f8fafc; align-items: center; font-size: 12px; }
        .log-id { font-family: monospace; font-weight: 800; color: #3b82f6; }
        .log-act { font-weight: 700; color: #1e293b; }
        .log-path { font-size: 11px; color: #64748b; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        .log-guest { font-weight: 600; color: #475569; }
        .log-status { display: flex; align-items: center; gap: 6px; font-weight: 800; color: #10b981; }
        .log-del { background: transparent; border: none; color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .log-del:hover { color: #ef4444; }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-box { background: white; border-radius: 20px; width: 440px; padding: 24px; }
        .mb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .mb-head h3 { font-size: 17px; font-weight: 800; color: #1e293b; }
        .mb-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .mf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .mf { display: flex; flex-direction: column; gap: 6px; }
        .mf label { font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
        .mf input { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .mf-foot { display: flex; justify-content: flex-end; margin-top: 16px; }
      `})]})};export{X as default};
