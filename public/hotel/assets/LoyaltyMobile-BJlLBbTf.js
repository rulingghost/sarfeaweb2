import{c as o,u as d,r as c,j as e,H as p,f as x,m as n,S as m,a as b,t as h}from"./index-oD4_PD50.js";import{S as f}from"./smartphone-L9YhyBDt.js";import{P as g}from"./plus-nsyKK2uL.js";import{M as u}from"./message-square-CAywfrPn.js";import{E as y}from"./external-link-B0xvpO_l.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),P=()=>{const{guests:k}=d(),[i,s]=c.useState("program"),l=[{name:"Silver",color:"#94a3b8",points:"0 - 1000",perks:["%5 İndirim","Geç Check-out"],count:142},{name:"Gold",color:"#f59e0b",points:"1001 - 5000",perks:["%10 İndirim","Oda Upgrade","Ücretsiz Kahvaltı"],count:45},{name:"Platinum",color:"#3b82f6",points:"5001+",perks:["%20 İndirim","VIP Transfer","SPA Kullanımı"],count:12}],r=[{id:"REQ-1",guest:"Ahmet Yılmaz",type:"Room Service",title:"Ekstra Yastık",status:"yeni",time:"14:20"},{id:"REQ-2",guest:"Sarah Johnson",type:"Housekeeping",title:"Oda Temizliği",status:"hazırlanıyor",time:"14:15"},{id:"REQ-3",guest:"Klaus Weber",type:"Concierge",title:"Taksi Çağır",status:"tamamlandı",time:"13:50"}];return e.jsxs("div",{className:"loy-page",children:[e.jsxs("div",{className:"loy-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx(p,{size:20})," Sadakat & Mobil Uygulama"]}),e.jsx("span",{children:"Misafir bağlılığı, puan sistemi ve mobil uygulama talepleri"})]}),e.jsxs("div",{className:"tab-switcher",children:[e.jsx("button",{className:i==="program"?"active":"",onClick:()=>s("program"),children:"Sadakat Programı"}),e.jsx("button",{className:i==="mobile"?"active":"",onClick:()=>s("mobile"),children:"Mobil Talepler"})]})]}),e.jsx(x,{mode:"wait",children:i==="program"?e.jsxs(n.div,{className:"loy-content",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:[e.jsx("div",{className:"level-grid",children:l.map((a,N)=>e.jsxs("div",{className:"level-card",children:[e.jsxs("div",{className:"lc-head",children:[e.jsx(v,{size:24,color:a.color}),e.jsxs("div",{children:[e.jsxs("h3",{children:[a.name," Members"]}),e.jsxs("span",{children:[a.points," Puan"]})]}),e.jsxs("div",{className:"count-pill",children:[a.count," Üye"]})]}),e.jsx("ul",{className:"perk-list",children:a.perks.map(t=>e.jsxs("li",{children:[e.jsx(m,{size:10})," ",t]},t))}),e.jsx("button",{className:"lc-btn",children:"Üyeleri Listele"})]},a.name))}),e.jsxs("div",{className:"loy-stats-row",children:[e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"sb-label",children:"Toplam Sadakat Puanı"}),e.jsx("div",{className:"sb-value",children:"1,420,500"}),e.jsx("div",{className:"sb-trend up",children:"+12.4%"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"sb-label",children:"Harcanan Puanlar"}),e.jsx("div",{className:"sb-value",children:"₺125,000"}),e.jsx("div",{className:"sb-trend down",children:"-4.2%"})]}),e.jsxs("div",{className:"stat-box",children:[e.jsx("div",{className:"sb-label",children:"Mobil Uygulama İndirme"}),e.jsx("div",{className:"sb-value",children:"842"}),e.jsx("div",{className:"sb-trend up",children:"+8.1%"})]})]}),e.jsxs("div",{className:"campaign-section",children:[e.jsxs("h3",{children:[e.jsx(j,{size:16})," Aktif Kampanyalar"]}),e.jsxs("div",{className:"camp-grid",children:[[{title:"Yaz Tatili %15 Puan",desc:"SPA harcamalarında 2 kat puan kazanma fırsatı.",type:"SPA"},{title:"Hafta sonu Kaçamağı",desc:"3 gece kal 2 gece öde kampanyası mobil üyelerinize özel.",type:"Konaklama"}].map(a=>e.jsxs("div",{className:"camp-card",children:[e.jsx("div",{className:"camp-icon",children:e.jsx(f,{size:18})}),e.jsxs("div",{className:"camp-info",children:[e.jsx("strong",{children:a.title}),e.jsx("p",{children:a.desc})]}),e.jsx("button",{className:"edit-btn",children:"Düzenle"})]},a.title)),e.jsxs("button",{className:"add-camp",children:[e.jsx(g,{size:14})," Yeni Kampanya Oluştur"]})]})]})]},"program"):e.jsx(n.div,{className:"mobile-content",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:e.jsxs("div",{className:"mobile-main",children:[e.jsxs("div",{className:"mobile-requests",children:[e.jsxs("div",{className:"mr-head",children:[e.jsx("h3",{children:"Aktif Mobil Talepler"}),e.jsxs("div",{className:"badge blue",children:[r.filter(a=>a.status!=="tamamlandı").length," Bekleyen"]})]}),e.jsx("div",{className:"request-list",children:r.map(a=>e.jsxs("div",{className:`req-item ${a.status}`,children:[e.jsx("div",{className:"req-icon",children:e.jsx(b,{size:16})}),e.jsxs("div",{className:"req-info",children:[e.jsx("strong",{children:a.guest}),e.jsxs("span",{children:[a.type," — ",a.title]})]}),e.jsxs("div",{className:"req-meta",children:[e.jsx("div",{className:"req-time",children:a.time}),e.jsx("div",{className:`status-tag ${a.status}`,children:a.status})]}),e.jsx("button",{className:"req-btn",children:e.jsx(h,{size:14})})]},a.id))})]}),e.jsxs("div",{className:"mobile-preview",children:[e.jsx("div",{className:"phone-mockup",children:e.jsxs("div",{className:"mock-screen",children:[e.jsx("div",{className:"app-header",children:"Otel Uygulaması"}),e.jsxs("div",{className:"app-body",children:[e.jsxs("div",{className:"app-card guest",children:["Hoş Geldiniz, ",e.jsx("strong",{children:"Sayın Yılmaz"})]}),e.jsxs("div",{className:"app-menu",children:[e.jsx("div",{className:"menu-i",children:"🛎️ Resepsiyon"}),e.jsx("div",{className:"menu-i",children:"🧹 Oda Temizliği"}),e.jsx("div",{className:"menu-i",children:"🍽️ Oda Servisi"}),e.jsx("div",{className:"menu-i",children:"💆 SPA Rezervasyon"})]})]})]})}),e.jsxs("div",{className:"mock-actions",children:[e.jsx("h4",{children:"Uygulama Ayarları"}),e.jsxs("button",{className:"mbtn",children:[e.jsx(u,{size:14})," Push Bildirimi Gönder"]}),e.jsxs("button",{className:"mbtn",children:[e.jsx(y,{size:14})," Uygulama Linkini Gönder"]})]})]})]})},"mobile")}),e.jsx("style",{children:`
        .loy-page { padding: 28px; display: flex; flex-direction: column; gap: 20px; }
        .loy-head { display: flex; justify-content: space-between; align-items: center; }
        .loy-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .loy-head span { font-size: 13px; color: #94a3b8; }
        
        .tab-switcher { background: #f1f5f9; padding: 4px; border-radius: 12px; display: flex; gap: 4px; }
        .tab-switcher button { padding: 8px 16px; border-radius: 8px; border: none; font-size: 12px; font-weight: 700; color: #64748b; cursor: pointer; transition: 0.2s; }
        .tab-switcher button.active { background: white; color: #1e293b; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }

        .loy-content { display: flex; flex-direction: column; gap: 24px; }
        .level-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .level-card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; display: flex; flex-direction: column; gap: 20px; position: relative; overflow: hidden; }
        .lc-head { display: flex; align-items: center; gap: 12px; }
        .lc-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; }
        .lc-head span { font-size: 12px; color: #94a3b8; font-weight: 600; }
        .count-pill { margin-left: auto; padding: 4px 10px; background: #f1f5f9; border-radius: 20px; font-size: 10px; font-weight: 800; color: #475569; }
        
        .perk-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .perk-list li { font-size: 12px; font-weight: 600; color: #475569; display: flex; align-items: center; gap: 8px; }
        .lc-btn { margin-top: auto; padding: 12px; border: 1.5px solid #f1f5f9; border-radius: 12px; background: transparent; font-weight: 700; font-size: 12px; cursor: pointer; color: #64748b; transition: 0.2s; }
        .lc-btn:hover { border-color: #3b82f6; color: #3b82f6; background: #f8fafc; }

        .loy-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-box { background: #1e293b; border-radius: 20px; padding: 20px; color: white; position: relative; }
        .sb-label { font-size: 11px; font-weight: 700; color: #94a3b8; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
        .sb-value { font-size: 24px; font-weight: 900; }
        .sb-trend { position: absolute; top: 20px; right: 20px; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
        .sb-trend.up { background: #f0fdf4; color: #10b981; }
        .sb-trend.down { background: #fef2f2; color: #ef4444; }

        .campaign-section h3 { font-size: 14px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .camp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .camp-card { background: white; border-radius: 16px; border: 1.5px solid #f1f5f9; padding: 16px; display: flex; align-items: center; gap: 14px; }
        .camp-icon { width: 40px; height: 40px; background: #eff6ff; color: #3b82f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .camp-info strong { display: block; font-size: 14px; color: #1e293b; }
        .camp-info p { font-size: 12px; color: #94a3b8; margin: 2px 0 0; }
        .edit-btn { margin-left: auto; padding: 6px 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; color: #64748b; background: white; }
        .add-camp { border: 2px dashed #e2e8f0; border-radius: 16px; padding: 16px; background: transparent; color: #94a3b8; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; }

        .mobile-main { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        .mobile-requests { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; }
        .mr-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .mr-head h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        .badge { padding: 4px 10px; border-radius: 20px; font-size: 10px; font-weight: 800; }
        .badge.blue { background: #eff6ff; color: #3b82f6; }

        .request-list { display: flex; flex-direction: column; gap: 10px; }
        .req-item { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 14px; border: 1.5px solid #f1f5f9; transition: 0.2s; }
        .req-item:hover { border-color: #3b82f6; background: #f8fafc; }
        .req-icon { width: 36px; height: 36px; background: #fff7ed; color: #f59e0b; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .req-info strong { display: block; font-size: 13px; color: #1e293b; }
        .req-info span { font-size: 11px; color: #94a3b8; }
        .req-meta { margin-left: auto; text-align: right; }
        .req-time { font-size: 10px; color: #94a3b8; margin-bottom: 2px; }
        .status-tag { font-size: 9px; font-weight: 800; text-transform: uppercase; padding: 2px 8px; border-radius: 20px; display: inline-block; }
        .status-tag.yeni { background: #f0fdf4; color: #10b981; }
        .status-tag.hazırlanıyor { background: #eff6ff; color: #3b82f6; }
        .status-tag.tamamlandı { background: #f1f5f9; color: #94a3b8; }
        .req-btn { background: transparent; border: none; color: #cbd5e1; cursor: pointer; }

        .phone-mockup { width: 240px; height: 480px; background: #1e293b; border: 8px solid #0f172a; border-radius: 36px; padding: 8px; margin: 0 auto 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .mock-screen { background: #f8fafc; height: 100%; border-radius: 24px; overflow: hidden; display: flex; flex-direction: column; }
        .app-header { background: #3b82f6; color: white; padding: 20px 10px; text-align: center; font-weight: 800; font-size: 12px; }
        .app-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; }
        .app-card { background: white; padding: 12px; border-radius: 12px; font-size: 11px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .app-card strong { color: #3b82f6; }
        .app-menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .menu-i { background: white; padding: 12px 6px; border-radius: 10px; font-size: 9px; text-align: center; font-weight: 700; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

        .mock-actions h4 { font-size: 14px; font-weight: 800; color: #1e293b; margin-bottom: 12px; }
        .mbtn { width: 100%; padding: 12px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: white; font-weight: 700; font-size: 12px; color: #475569; display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer; transition: 0.2s; }
        .mbtn:hover { border-color: #3b82f6; color: #3b82f6; background: #f8fafc; }
      `})]})};export{P as default};
