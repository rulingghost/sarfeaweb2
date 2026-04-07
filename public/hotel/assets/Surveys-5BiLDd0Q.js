import{d as t,u as f,r as m,j as e,E as n,m as r,S as o,b}from"./index-DZMFd3xx.js";import{D as h}from"./download-BP_uhAYV.js";import{S as u}from"./send-l8-YbLJi.js";import{B as g}from"./bar-chart-3-BW2zinpB.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]),C=()=>{const{addNotification:l}=f(),[c,d]=m.useState("tümü"),p=[{label:"Genel Memnuniyet",value:"%92",trend:"+2.1%",icon:e.jsx(o,{size:20,color:"#f59e0b"})},{label:"Personel Davranışı",value:"4.8/5",trend:"+0.5%",icon:e.jsx(v,{size:20,color:"#10b981"})},{label:"Oda Temizliği",value:"4.7/5",trend:"+1.2%",icon:e.jsx(n,{size:20,color:"#3b82f6"})},{label:"Yemek Kalitesi",value:"4.5/5",trend:"-0.3%",icon:e.jsx(g,{size:20,color:"#8b5cf6"})}],x=[{id:1,guest:"Ahmet Yılmaz",room:"101",score:5,comment:"Her şey mükemmeldi, personel çok güler yüzlü.",date:"2 saat önce",cat:"Genel"},{id:2,guest:"Sarah Johnson",room:"205",score:4,comment:"Kahvaltı çeşitleri artırılabilir ama oda çok temizdi.",date:"5 saat önce",cat:"Yemek"},{id:3,guest:"Klaus Weber",room:"304",score:2,comment:"Sıcak su gelmesi biraz vakit alıyor, teknik servis bakabilir.",date:"1 gün önce",cat:"Teknik"},{id:4,guest:"Ayşe Demir",room:"108",score:5,comment:"SPA hizmetlerinden çok memnun kaldım.",date:"2 gün önce",cat:"SPA"}];return e.jsxs("div",{className:"sur-page",children:[e.jsxs("div",{className:"sur-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(n,{size:20})," Anket & Geri Bildirim Yönetimi"]}),e.jsx("span",{children:"Misafir deneyimi analizi ve iyileştirme takibi"})]}),e.jsxs("div",{className:"head-actions",children:[e.jsxs("button",{className:"btn-secondary",children:[e.jsx(h,{size:14})," Rapor İndir"]}),e.jsx("button",{className:"btn-primary",onClick:()=>l({type:"info",msg:"Yeni anket formu oluşturma ekranı açılıyor..."}),children:"Yeni Anket Formu"})]})]}),e.jsx("div",{className:"sur-stats",children:p.map((a,i)=>e.jsxs(r.div,{className:"stat-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i*.1},children:[e.jsx("div",{className:"sc-icon",children:a.icon}),e.jsxs("div",{className:"sc-info",children:[e.jsx("span",{className:"sc-label",children:a.label}),e.jsxs("div",{className:"sc-row",children:[e.jsx("span",{className:"sc-value",children:a.value}),e.jsx("span",{className:`sc-trend ${a.trend.startsWith("+")?"up":"down"}`,children:a.trend})]})]})]},a.label))}),e.jsxs("div",{className:"sur-content",children:[e.jsxs("div",{className:"feedback-section",children:[e.jsxs("div",{className:"fs-head",children:[e.jsx("h3",{children:"Son Geri Bildirimler"}),e.jsx("div",{className:"fs-filters",children:["tümü","olumlu","olumsuz"].map(a=>e.jsx("button",{className:`f-tab ${c===a?"active":""}`,onClick:()=>d(a),children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),e.jsx("div",{className:"f-list",children:x.map((a,i)=>e.jsxs(r.div,{className:"f-card",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:i*.1},children:[e.jsxs("div",{className:"f-top",children:[e.jsxs("div",{className:"f-guest",children:[e.jsx("strong",{children:a.guest}),e.jsxs("span",{children:["Oda ",a.room," · ",a.date]})]}),e.jsx("div",{className:"f-score",children:[...Array(5)].map((k,s)=>e.jsx(o,{size:12,fill:s<a.score?"#f59e0b":"none",color:s<a.score?"#f59e0b":"#cbd5e1"},s))})]}),e.jsx("p",{className:"f-comment",children:a.comment}),e.jsxs("div",{className:"f-meta",children:[e.jsxs("span",{className:"f-cat",children:["#",a.cat]}),e.jsxs("div",{className:"f-actions",children:[e.jsxs("button",{className:"f-btn",children:[e.jsx(y,{size:14})," Yanıtla"]}),e.jsxs("button",{className:"f-btn",children:[e.jsx(b,{size:14})," Görev Ata"]}),e.jsx("button",{className:"f-btn more",children:e.jsx(j,{size:14})})]})]})]},a.id))})]}),e.jsxs("div",{className:"analysis-section",children:[e.jsx("h3",{children:"Kategori Bazlı Dağılım"}),e.jsx("div",{className:"cat-chart",children:[{label:"Hizmet Kalitesi",value:85,color:"#3b82f6"},{label:"Temizlik",value:92,color:"#10b981"},{label:"Fiyat/Performans",value:78,color:"#f59e0b"},{label:"Konum",value:98,color:"#8b5cf6"}].map(a=>e.jsxs("div",{className:"cat-row",children:[e.jsxs("div",{className:"cat-info",children:[e.jsx("span",{children:a.label}),e.jsxs("strong",{children:["%",a.value]})]}),e.jsx("div",{className:"cat-bar-bg",children:e.jsx(r.div,{className:"cat-bar",initial:{width:0},animate:{width:`${a.value}%`},style:{background:a.color}})})]},a.label))}),e.jsxs("div",{className:"survey-invite",children:[e.jsx("div",{className:"invite-icon",children:e.jsx(u,{size:24,color:"#3b82f6"})}),e.jsx("h4",{children:"Anket Gönder"}),e.jsx("p",{children:"Check-out yapan misafirlere otomatik anket gönderimi aktif."}),e.jsx("button",{className:"invite-btn",children:"Ayarları Düzenle"})]})]})]}),e.jsx("style",{children:`
        .sur-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .sur-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .sur-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .sur-head span { font-size: 13px; color: #94a3b8; }
        
        .head-actions { display: flex; gap: 10px; }
        .btn-secondary { padding: 10px 18px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: white; color: #475569; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #1e293b; color: white; font-weight: 700; font-size: 13px; cursor: pointer; }

        .sur-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .stat-card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; display: flex; align-items: center; gap: 16px; }
        .sc-icon { width: 44px; height: 44px; border-radius: 14px; background: #f8fafc; display: flex; align-items: center; justify-content: center; }
        .sc-label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; }
        .sc-row { display: flex; align-items: baseline; gap: 8px; margin-top: 4px; }
        .sc-value { font-size: 20px; font-weight: 900; color: #1e293b; }
        .sc-trend { font-size: 11px; font-weight: 800; padding: 2px 6px; border-radius: 6px; }
        .sc-trend.up { background: #f0fdf4; color: #10b981; }
        .sc-trend.down { background: #fef2f2; color: #ef4444; }

        .sur-content { display: grid; grid-template-columns: 1fr 350px; gap: 24px; }
        
        .feedback-section { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .fs-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .fs-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .fs-filters { display: flex; background: #f1f5f9; padding: 4px; border-radius: 10px; gap: 4px; }
        .f-tab { padding: 6px 12px; border-radius: 8px; border: none; font-size: 11px; font-weight: 700; color: #64748b; cursor: pointer; }
        .f-tab.active { background: white; color: #1e293b; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

        .f-list { display: flex; flex-direction: column; gap: 16px; }
        .f-card { border: 1.5px solid #f1f5f9; border-radius: 18px; padding: 20px; transition: 0.2s; }
        .f-card:hover { border-color: #3b82f6; background: #f8fafc; }
        .f-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .f-guest strong { display: block; font-size: 14px; color: #1e293b; }
        .f-guest span { font-size: 11px; color: #94a3b8; }
        .f-comment { font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 16px; }
        .f-meta { display: flex; justify-content: space-between; align-items: center; }
        .f-cat { font-size: 11px; font-weight: 800; color: #3b82f6; }
        .f-actions { display: flex; gap: 8px; }
        .f-btn { background: white; border: 1px solid #e2e8f0; padding: 6px 12px; border-radius: 8px; font-size: 11px; font-weight: 700; color: #64748b; cursor: pointer; display: flex; align-items: center; gap: 6px; }
        .f-btn:hover { border-color: #3b82f6; color: #3b82f6; }
        .f-btn.more { padding: 6px 8px; }

        .analysis-section { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; display: flex; flex-direction: column; gap: 20px; }
        .analysis-section h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        
        .cat-chart { display: flex; flex-direction: column; gap: 16px; }
        .cat-row { display: flex; flex-direction: column; gap: 8px; }
        .cat-info { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; }
        .cat-info span { color: #64748b; }
        .cat-bar-bg { background: #f1f5f9; height: 8px; border-radius: 10px; overflow: hidden; }
        .cat-bar { height: 100%; border-radius: 10px; }

        .survey-invite { margin-top: 10px; background: #eff6ff; border-radius: 20px; padding: 24px; text-align: center; }
        .invite-icon { width: 48px; height: 48px; background: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .survey-invite h4 { font-size: 14px; font-weight: 800; color: #1e293b; margin-bottom: 8px; }
        .survey-invite p { font-size: 11px; color: #64748b; line-height: 1.5; margin-bottom: 16px; }
        .invite-btn { width: 100%; padding: 12px; border: none; background: #3b82f6; color: white; border-radius: 12px; font-weight: 800; font-size: 12px; cursor: pointer; }
      `})]})};export{C as default};
