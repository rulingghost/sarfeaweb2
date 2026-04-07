import{c as T,u as P,r as n,R as K,j as e,Q as W,f as y,m as f,X as v,s as $,e as E,P as G}from"./index-oD4_PD50.js";import{P as q}from"./plus-nsyKK2uL.js";import{A}from"./alert-triangle-V1TnVnZG.js";import{T as B}from"./trash-2-CKNgfso4.js";import{P as H}from"./pie-chart-BI1_FPGp.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=T("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),J=()=>{const{addNotification:c}=P(),[k,d]=n.useState(!1),[u,N]=n.useState(""),[z,o]=n.useState(!1),[p,b]=n.useState([{id:"RC-001",name:"Klasik Hamburger",cost:125,price:450,ingredients:"Et 150g, Ekmek, Soğan, Salata, Sos"},{id:"RC-002",name:"Margarita Pizza",cost:85,price:380,ingredients:"Hamur, Mozzarella, Domates Sos, Fesleğen"},{id:"RC-003",name:"Izgara Bonfile",cost:320,price:850,ingredients:"Dana bonfile 250g, Tereyağ, Garnitür"},{id:"RC-004",name:"Sezar Salata",cost:65,price:290,ingredients:"Marul, Parmesan, Kruton, Sezar Sos, Tavuk"},{id:"RC-005",name:"Deniz Mahkemesi",cost:280,price:680,ingredients:"Karides, Kalamar, Midye, Pirinç, Sebze"},{id:"RC-006",name:"Club Sandwich",cost:95,price:220,ingredients:"Tost Ekmek, Tavuk, Jambon, Yumurta, Salata"}]),[g,S]=n.useState([{id:"W-001",item:"Domates (5 kg)",reason:"Son kullanma",amount:120,date:"2026-03-14"},{id:"W-002",item:"Süt (10 Lt)",reason:"Bozulma",amount:85,date:"2026-03-13"}]),[i,l]=n.useState({name:"",cost:"",price:"",ingredients:""}),[t,x]=n.useState({item:"",reason:"Son kullanma",amount:""}),m=K.useRef({recipe:6,waste:2}),C=s=>{s.preventDefault(),m.current.recipe++;const a=`RC-${String(m.current.recipe).padStart(3,"0")}`;b(r=>[...r,{...i,id:a,cost:Number(i.cost),price:Number(i.price)}]),c({type:"info",msg:`Yeni reçete oluşturuldu: ${i.name}`}),l({name:"",cost:"",price:"",ingredients:""}),d(!1)},R=s=>{s.preventDefault(),m.current.waste++;const a=`W-${String(m.current.waste).padStart(3,"0")}`;S(r=>[...r,{...t,id:a,amount:Number(t.amount),date:new Date().toISOString().slice(0,10)}]),c({type:"warn",msg:`Zayi kaydı: ${t.item} — ₺${t.amount}`}),x({item:"",reason:"Son kullanma",amount:""}),o(!1)},M=s=>{b(a=>a.filter(r=>r.id!==s))},F=p.filter(s=>!u||s.name.toLowerCase().includes(u.toLowerCase())),j=p.length>0?(p.reduce((s,a)=>s+a.cost/a.price*100,0)/p.length).toFixed(1):0,D=g.reduce((s,a)=>s+a.amount,0);return e.jsxs("div",{className:"cc-page",children:[e.jsxs("div",{className:"cc-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(W,{size:20})," Maliyet Kontrol & Reçete Yönetimi"]}),e.jsx("span",{children:"F&B maliyetleri, COGS analizi ve stok varyans takibi"})]}),e.jsxs("div",{className:"head-stats",children:[e.jsxs("div",{className:`hs-i ${Number(j)>30?"red":"green"}`,children:["Global Food Cost: %",j]}),e.jsxs("button",{className:"btn-primary",onClick:()=>d(!0),children:[e.jsx(q,{size:14})," Yeni Reçete Oluştur"]})]})]}),e.jsx(y,{children:k&&e.jsxs(f.form,{className:"recipe-form",onSubmit:C,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},children:[e.jsxs("div",{className:"rf-head",children:[e.jsx("h3",{children:"Yeni Reçete"}),e.jsx("button",{type:"button",onClick:()=>d(!1),children:e.jsx(v,{size:18})})]}),e.jsxs("div",{className:"rf-grid",children:[e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Ürün Adı *"}),e.jsx("input",{value:i.name,onChange:s=>l(a=>({...a,name:s.target.value})),placeholder:"Ör: Izgara Tavuk",required:!0})]}),e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Maliyet (₺) *"}),e.jsx("input",{type:"number",value:i.cost,onChange:s=>l(a=>({...a,cost:s.target.value})),required:!0})]}),e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Satış Fiyatı (₺) *"}),e.jsx("input",{type:"number",value:i.price,onChange:s=>l(a=>({...a,price:s.target.value})),required:!0})]}),e.jsxs("div",{className:"rf full",children:[e.jsx("label",{children:"İçindekiler"}),e.jsx("input",{value:i.ingredients,onChange:s=>l(a=>({...a,ingredients:s.target.value})),placeholder:"Et, Ekmek, Soğan..."})]})]}),e.jsxs("div",{className:"rf-foot",children:[e.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>d(!1),children:"İptal"}),e.jsx("button",{type:"submit",className:"btn-primary",children:"Reçete Kaydet"})]})]})}),e.jsxs("div",{className:"cc-grid",children:[e.jsx("div",{className:"cc-main",children:e.jsxs("div",{className:"cc-card",children:[e.jsxs("div",{className:"ccc-head",children:[e.jsx("h3",{children:"Reçete Bazlı Maliyet Analizi"}),e.jsxs("div",{className:"search-bar",children:[e.jsx($,{size:14,color:"#94a3b8"}),e.jsx("input",{placeholder:"Ürün veya reçete ara...",value:u,onChange:s=>N(s.target.value)})]})]}),e.jsxs("div",{className:"recipe-list",children:[e.jsxs("div",{className:"rl-head",children:[e.jsx("span",{children:"Ürün Adı"}),e.jsx("span",{children:"Maliyet"}),e.jsx("span",{children:"Satış"}),e.jsx("span",{children:"Marj (%)"}),e.jsx("span",{children:"Durum"}),e.jsx("span",{})]}),F.map((s,a)=>{const r=(s.cost/s.price*100).toFixed(1),h=r>35?"high":r<25?"low":"normal";return e.jsxs(f.div,{className:"rl-row",initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{delay:a*.05},children:[e.jsxs("div",{className:"rl-name",children:[e.jsx("strong",{children:s.name}),e.jsx("div",{className:"rl-ingr",children:s.ingredients})]}),e.jsxs("div",{className:"rl-cost",children:["₺",s.cost]}),e.jsxs("div",{className:"rl-price",children:["₺",s.price]}),e.jsxs("div",{className:"rl-percent",children:[e.jsx("div",{className:"p-bar-bg",children:e.jsx("div",{className:"p-bar",style:{width:`${r}%`,background:r>35?"#ef4444":"#10b981"}})}),e.jsxs("span",{children:["%",r]})]}),e.jsx("div",{className:`rl-status ${h}`,children:h==="high"?e.jsxs(e.Fragment,{children:[e.jsx(A,{size:12})," Yüksek"]}):h==="low"?"İdeal":"Normal"}),e.jsx("button",{className:"rl-del",onClick:()=>M(s.id),children:e.jsx(B,{size:14})})]},s.id)})]})]})}),e.jsxs("div",{className:"cc-sidebar",children:[e.jsxs("div",{className:"cogs-card",children:[e.jsx("h3",{children:"COGS Dağılımı"}),e.jsx("div",{className:"cogs-stats",children:[{label:"Mutfak",pct:32.1,color:"#3b82f6"},{label:"Bar",pct:18.4,color:"#10b981"},{label:"Minibar",pct:12.5,color:"#f59e0b"}].map(s=>e.jsxs("div",{className:"cs-i",children:[e.jsx("span",{children:s.label}),e.jsxs("strong",{children:["%",s.pct]}),e.jsx("div",{className:"cs-bar",style:{width:`${s.pct}%`,background:s.color}})]},s.label))})]}),e.jsxs("div",{className:"warning-box",children:[e.jsxs("div",{className:"wb-head",children:[e.jsx(E,{size:18,color:"#ef4444"}),e.jsx("strong",{children:"Zayi & Fire Takibi"})]}),e.jsxs("div",{className:"waste-list",children:[g.map(s=>e.jsxs("div",{className:"waste-row",children:[e.jsx("span",{children:s.item}),e.jsx("span",{className:"waste-reason",children:s.reason}),e.jsxs("strong",{children:["₺",s.amount]})]},s.id)),e.jsxs("div",{className:"waste-total",children:["Toplam Fire: ₺",D]})]}),e.jsxs("button",{className:"wb-btn",onClick:()=>o(!0),children:[e.jsx(w,{size:12})," Zayi Kaydı Gir"]})]}),e.jsx(y,{children:z&&e.jsx(f.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(!1),children:e.jsxs(f.form,{className:"modal-box",initial:{scale:.9},animate:{scale:1},onClick:s=>s.stopPropagation(),onSubmit:R,children:[e.jsxs("div",{className:"mb-head",children:[e.jsx("h3",{children:"Zayi Kaydı"}),e.jsx("button",{type:"button",onClick:()=>o(!1),children:e.jsx(v,{size:18})})]}),e.jsxs("div",{className:"rf-grid",children:[e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Ürün *"}),e.jsx("input",{value:t.item,onChange:s=>x(a=>({...a,item:s.target.value})),placeholder:"Ör: Domates 5kg",required:!0})]}),e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Tutar (₺) *"}),e.jsx("input",{type:"number",value:t.amount,onChange:s=>x(a=>({...a,amount:s.target.value})),required:!0})]}),e.jsxs("div",{className:"rf",children:[e.jsx("label",{children:"Neden"}),e.jsxs("select",{value:t.reason,onChange:s=>x(a=>({...a,reason:s.target.value})),children:[e.jsx("option",{children:"Son kullanma"}),e.jsx("option",{children:"Bozulma"}),e.jsx("option",{children:"Depolama hatası"}),e.jsx("option",{children:"Üretim firesi"})]})]})]}),e.jsx("div",{className:"rf-foot",children:e.jsx("button",{type:"submit",className:"btn-primary",children:"Kaydı Gir"})})]})})}),e.jsxs("div",{className:"summary-list",children:[e.jsx("h4",{children:"Hızlı İşlemler"}),e.jsxs("button",{className:"sl-btn",onClick:()=>o(!0),children:[e.jsx(w,{size:14})," Zayi Kaydı Gir"]}),e.jsxs("button",{className:"sl-btn",onClick:()=>c({type:"info",msg:"Sayım farkı raporu oluşturuluyor..."}),children:[e.jsx(G,{size:14})," Sayım Farkı Raporu"]}),e.jsxs("button",{className:"sl-btn",onClick:()=>c({type:"info",msg:"Menü mühendisliği analizi başlatıldı"}),children:[e.jsx(H,{size:14})," Menü Mühendisliği"]})]})]})]}),e.jsx("style",{children:`
        .cc-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .cc-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .cc-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .cc-head span { font-size: 13px; color: #94a3b8; }
        
        .head-stats { display: flex; align-items: center; gap: 16px; }
        .hs-i { padding: 8px 16px; border-radius: 20px; font-size: 11px; font-weight: 800; }
        .hs-i.red { background: #fef2f2; color: #ef4444; border: 1px solid #fee2e2; }
        .hs-i.green { background: #f0fdf4; color: #10b981; border: 1px solid #bbf7d0; }
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #1e293b; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .btn-cancel { padding: 10px 18px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; font-weight: 700; cursor: pointer; font-size: 13px; }

        /* Recipe Form */
        .recipe-form { background: white; border-radius: 18px; border: 1.5px solid #e2e8f0; padding: 22px; }
        .rf-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .rf-head h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        .rf-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .rf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .rf { display: flex; flex-direction: column; gap: 6px; }
        .rf.full { grid-column: 1 / -1; }
        .rf label { font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
        .rf input, .rf select { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .rf input:focus { border-color: #3b82f6; }
        .rf-foot { display: flex; justify-content: flex-end; gap: 10px; margin-top: 14px; }

        .cc-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        
        .cc-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .ccc-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .ccc-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .search-bar { background: #f8fafc; border: 1.5px solid #f1f5f9; border-radius: 10px; padding: 6px 12px; display: flex; align-items: center; gap: 8px; width: 220px; }
        .search-bar input { border: none; background: transparent; outline: none; font-size: 12px; width: 100%; }

        .recipe-list { display: flex; flex-direction: column; }
        .rl-head { display: grid; grid-template-columns: 2fr 80px 80px 1fr 90px 40px; padding: 12px; font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; border-bottom: 1.5px solid #f8fafc; }
        .rl-row { display: grid; grid-template-columns: 2fr 80px 80px 1fr 90px 40px; padding: 14px 12px; align-items: center; border-bottom: 1px solid #f8fafc; transition: 0.2s; }
        .rl-row:hover { background: #f8fafc; }
        .rl-name strong { font-size: 14px; color: #1e293b; display: block; }
        .rl-ingr { font-size: 10px; color: #94a3b8; margin-top: 2px; }
        .rl-cost, .rl-price { font-size: 13px; font-weight: 700; color: #475569; }
        
        .rl-percent { display: flex; align-items: center; gap: 10px; }
        .p-bar-bg { flex: 1; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .p-bar { height: 100%; border-radius: 10px; }
        .rl-percent span { font-size: 11px; font-weight: 800; color: #1e293b; width: 40px; }

        .rl-status { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 20px; display: flex; align-items: center; gap: 4px; justify-content: center; }
        .rl-status.high { background: #fef2f2; color: #ef4444; }
        .rl-status.low { background: #f0fdf4; color: #10b981; }
        .rl-status.normal { background: #f1f5f9; color: #64748b; }
        .rl-del { background: none; border: none; color: #cbd5e1; cursor: pointer; }
        .rl-del:hover { color: #ef4444; }

        .cc-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .cogs-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .cogs-card h3 { font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 20px; }
        .cogs-stats { display: flex; flex-direction: column; gap: 16px; }
        .cs-i { display: flex; flex-direction: column; gap: 6px; }
        .cs-i span { font-size: 11px; font-weight: 700; color: #94a3b8; }
        .cs-i strong { font-size: 16px; font-weight: 900; color: #1e293b; }
        .cs-bar { height: 4px; border-radius: 10px; }

        .warning-box { background: #fff5f5; border: 1px solid #ffe3e3; border-radius: 20px; padding: 20px; }
        .wb-head { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .wb-head strong { font-size: 14px; color: #ef4444; }
        .waste-list { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
        .waste-row { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #64748b; padding: 6px 0; border-bottom: 1px solid #fee2e2; }
        .waste-row strong { color: #ef4444; }
        .waste-reason { font-size: 10px; color: #94a3b8; }
        .waste-total { font-size: 13px; font-weight: 800; color: #ef4444; padding-top: 6px; }
        .wb-btn { background: white; border: 1px solid #fee2e2; padding: 8px 14px; border-radius: 8px; font-size: 11px; font-weight: 700; color: #ef4444; cursor: pointer; display: flex; align-items: center; gap: 6px; width: 100%; justify-content: center; }

        .summary-list { display: flex; flex-direction: column; gap: 8px; }
        .summary-list h4 { font-size: 12px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px; padding-left: 10px; }
        .sl-btn { background: white; border: 1.5px solid #f1f5f9; border-radius: 14px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 700; color: #475569; cursor: pointer; transition: 0.2s; }
        .sl-btn:hover { border-color: #1e293b; color: #1e293b; background: #f8fafc; }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-box { background: white; border-radius: 20px; width: 420px; padding: 24px; }
        .mb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .mb-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .mb-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
      `})]})};export{J as default};
