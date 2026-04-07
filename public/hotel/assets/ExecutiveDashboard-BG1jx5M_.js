import{u as f,j as e,H as p,U as h,C as m,B as b,m as g,a as u,b as j,A as y,c as v}from"./index-Cmjygl0X.js";import{D as k}from"./dollar-sign-DeAA87aW.js";import{C as w}from"./clock-ZWvq1P9G.js";import{A as N}from"./arrow-up-right-D1exjIrl.js";import{A as z}from"./arrow-down-right-DT9yjJzG.js";import{R as t,X as C,Y as A,T as o,C as D}from"./generateCategoricalChart-CZ4xd-5y.js";import{A as B,a as l}from"./AreaChart-G0BGFBWM.js";import{C as R}from"./CartesianGrid-6wqtghJy.js";import{P as K,a as $}from"./PieChart-39BSP6hQ.js";const H=[{day:"Pzt",gelir:42e3,hedef:38e3},{day:"Sal",gelir:51e3,hedef:38e3},{day:"Çar",gelir:38e3,hedef:38e3},{day:"Per",gelir:65e3,hedef:38e3},{day:"Cum",gelir:72e3,hedef:38e3},{day:"Cmt",gelir:88e3,hedef:38e3},{day:"Paz",gelir:54e3,hedef:38e3}],r=[{name:"Booking.com",value:38,color:"#003580"},{name:"Direkt",value:28,color:"#3b82f6"},{name:"Expedia",value:18,color:"#ef4444"},{name:"Diğer",value:16,color:"#94a3b8"}],I=()=>{const{stats:s,reservations:n,notifications:d,rooms:G}=f(),c=[{label:"Doluluk Oranı",value:`%${s.occupancyRate}`,sub:`${s.occupied}/${s.totalRooms} oda`,color:"#3b82f6",icon:e.jsx(p,{size:24}),trend:3.2},{label:"Bugün Giriş",value:s.todayArrivals,sub:"Beklenen misafir",color:"#10b981",icon:e.jsx(h,{size:24}),trend:5},{label:"Bugün Çıkış",value:s.todayDepartures,sub:"Check-out yapacak",color:"#f59e0b",icon:e.jsx(m,{size:24}),trend:0},{label:"Günlük Ciro",value:`₺${(s.todayRevenue/1e3).toFixed(0)}K`,sub:"Toplam konaklama geliri",color:"#8b5cf6",icon:e.jsx(k,{size:24}),trend:12.5},{label:"İç Misafir",value:s.inHouse,sub:"Aktif konaklama",color:"#ec4899",icon:e.jsx(b,{size:24}),trend:8},{label:"Bekleyen Görev",value:s.pendingTasks,sub:"HK + Teknik",color:"#ef4444",icon:e.jsx(w,{size:24}),trend:-2}],x=n.filter(a=>a.status==="check-in").slice(0,5);return e.jsxs("div",{className:"ed-container",children:[e.jsx("div",{className:"stat-grid",children:c.map((a,i)=>e.jsxs(g.div,{className:"stat-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i*.05},children:[e.jsxs("div",{className:"sc-top",children:[e.jsx("div",{className:"sc-icon",style:{background:`${a.color}18`,color:a.color},children:a.icon}),e.jsxs("div",{className:`sc-trend ${a.trend>0?"up":a.trend<0?"down":"neutral"}`,children:[a.trend>0?e.jsx(N,{size:14}):a.trend<0?e.jsx(z,{size:14}):null,a.trend!==0?`${Math.abs(a.trend)}%`:"—"]})]}),e.jsx("div",{className:"sc-value",children:a.value}),e.jsx("div",{className:"sc-label",children:a.label}),e.jsx("div",{className:"sc-sub",children:a.sub})]},i))}),e.jsxs("div",{className:"charts-row",children:[e.jsxs("div",{className:"card chart-card wide",children:[e.jsxs("div",{className:"card-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Haftalık Gelir Analizi"}),e.jsx("span",{children:"Fiili vs. Hedef"})]}),e.jsx("div",{className:"total-badge",children:"₺410K Bu Hafta"})]}),e.jsx("div",{style:{height:220},children:e.jsx(t,{width:"100%",height:"100%",children:e.jsxs(B,{data:H,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gelirGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.2}),e.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:0})]})}),e.jsx(R,{strokeDasharray:"3 3",stroke:"#f1f5f9"}),e.jsx(C,{dataKey:"day",axisLine:!1,tickLine:!1,tick:{fill:"#94a3b8",fontSize:12}}),e.jsx(A,{axisLine:!1,tickLine:!1,tick:{fill:"#94a3b8",fontSize:12},tickFormatter:a=>`₺${a/1e3}K`}),e.jsx(o,{formatter:a=>[`₺${a.toLocaleString()}`,""]}),e.jsx(l,{type:"monotone",dataKey:"hedef",stroke:"#e2e8f0",strokeDasharray:"5 5",fill:"none",strokeWidth:2}),e.jsx(l,{type:"monotone",dataKey:"gelir",stroke:"#3b82f6",fill:"url(#gelirGrad)",strokeWidth:3})]})})})]}),e.jsxs("div",{className:"card chart-card narrow",children:[e.jsx("div",{className:"card-head",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Kanal Dağılımı"}),e.jsx("span",{children:"Bu ay rezervasyonlar"})]})}),e.jsx("div",{style:{height:160,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{width:"100%",height:"100%",children:e.jsxs(K,{children:[e.jsx($,{data:r,cx:"50%",cy:"50%",innerRadius:45,outerRadius:70,dataKey:"value",paddingAngle:4,children:r.map((a,i)=>e.jsx(D,{fill:a.color},i))}),e.jsx(o,{formatter:a=>[`%${a}`,""]})]})})}),e.jsx("div",{className:"legend",children:r.map((a,i)=>e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"dot",style:{background:a.color}}),e.jsx("span",{children:a.name}),e.jsxs("strong",{children:["%",a.value]})]},i))})]})]}),e.jsxs("div",{className:"bottom-row",children:[e.jsxs("div",{className:"card table-card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("h3",{children:"Konaklayan Misafirler"}),e.jsxs("span",{className:"badge blue",children:[s.inHouse," Kişi"]})]}),e.jsxs("table",{className:"mini-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Oda"}),e.jsx("th",{children:"Misafir"}),e.jsx("th",{children:"Giriş"}),e.jsx("th",{children:"Çıkış"}),e.jsx("th",{children:"Bakiye"})]})}),e.jsx("tbody",{children:x.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"room-tag",children:a.room})}),e.jsx("td",{children:e.jsx("strong",{children:a.guest})}),e.jsx("td",{children:a.checkIn}),e.jsx("td",{children:a.checkOut}),e.jsx("td",{children:e.jsx("span",{className:a.balance>0?"bal-due":"bal-ok",children:a.balance>0?`₺${a.balance.toLocaleString()} Borç`:"✓ Kapandı"})})]},a.id))})]})]}),e.jsxs("div",{className:"card notif-card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("h3",{children:"Son Bildirimler"}),e.jsx(u,{size:18,color:"#94a3b8"})]}),e.jsx("div",{className:"notif-list",children:d.slice(0,6).map(a=>e.jsxs("div",{className:`notif-item ${a.type}`,children:[e.jsxs("div",{className:"notif-icon",children:[a.type==="success"&&e.jsx(j,{size:16}),a.type==="warn"&&e.jsx(y,{size:16}),a.type==="info"&&e.jsx(v,{size:16})]}),e.jsxs("div",{className:"notif-body",children:[e.jsx("span",{children:a.msg}),e.jsx("small",{children:a.time})]})]},a.id))})]}),e.jsxs("div",{className:"card room-status-card",children:[e.jsx("div",{className:"card-head",children:e.jsx("h3",{children:"Oda Durumu"})}),e.jsx("div",{className:"room-stats",children:[{label:"Dolu",count:s.occupied,color:"#3b82f6"},{label:"Boş",count:s.vacant,color:"#10b981"},{label:"Kirli",count:s.dirty,color:"#f59e0b"},{label:"Arızalı",count:s.outOfOrder,color:"#ef4444"}].map((a,i)=>e.jsxs("div",{className:"rs-row",children:[e.jsx("span",{className:"rs-dot",style:{background:a.color}}),e.jsx("span",{className:"rs-label",children:a.label}),e.jsx("div",{className:"rs-bar-wrap",children:e.jsx("div",{className:"rs-bar",style:{background:a.color,width:`${a.count/s.totalRooms*100}%`}})}),e.jsx("strong",{children:a.count})]},i))}),e.jsxs("div",{className:"occ-big",children:[e.jsx("span",{children:"Doluluk"}),e.jsxs("strong",{style:{color:"#3b82f6"},children:["%",s.occupancyRate]})]})]})]}),e.jsx("style",{children:`
        .ed-container { padding: 30px; display: flex; flex-direction: column; gap: 25px; min-height: 100%; }

        /* Stat Cards */
        .stat-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
        .stat-card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 22px; display: flex; flex-direction: column; gap: 8px; cursor: default; }
        .sc-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .sc-icon { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
        .sc-trend { font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 2px; }
        .sc-trend.up { color: #10b981; } .sc-trend.down { color: #ef4444; } .sc-trend.neutral { color: #94a3b8; }
        .sc-value { font-size: 28px; font-weight: 900; color: #1e293b; line-height: 1; }
        .sc-label { font-size: 13px; font-weight: 700; color: #475569; }
        .sc-sub { font-size: 11px; color: #94a3b8; }

        /* Cards base */
        .card { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 24px; }
        .card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .card-head h3 { font-size: 16px; font-weight: 800; color: #1e293b; margin-bottom: 4px; }
        .card-head > div > span, .card-head > span { font-size: 12px; color: #94a3b8; font-weight: 500; }

        /* Charts */
        .charts-row { display: grid; grid-template-columns: 1fr 320px; gap: 20px; }
        .chart-card.wide {}
        .total-badge { background: #eff6ff; color: #3b82f6; padding: 8px 16px; border-radius: 10px; font-size: 14px; font-weight: 800; }

        /* Legend */
        .legend { display: flex; flex-direction: column; gap: 8px; }
        .legend-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #64748b; }
        .dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .legend-item strong { margin-left: auto; color: #1e293b; font-weight: 800; }

        /* Bottom */
        .bottom-row { display: grid; grid-template-columns: 1fr 280px 260px; gap: 20px; }

        /* Table */
        .mini-table { width: 100%; border-collapse: collapse; }
        .mini-table th { text-align: left; padding: 10px; font-size: 11px; color: #94a3b8; text-transform: uppercase; border-bottom: 2px solid #f1f5f9; }
        .mini-table td { padding: 14px 10px; font-size: 13px; color: #475569; border-bottom: 1px solid #f8fafc; }
        .room-tag { background: #f1f5f9; color: #1e293b; font-weight: 800; padding: 4px 10px; border-radius: 8px; font-size: 13px; }
        .bal-due { color: #ef4444; font-weight: 700; font-size: 12px; }
        .bal-ok { color: #10b981; font-weight: 700; font-size: 12px; }

        /* Notifications */
        .notif-list { display: flex; flex-direction: column; gap: 10px; }
        .notif-item { display: flex; align-items: flex-start; gap: 10px; padding: 12px; border-radius: 12px; }
        .notif-item.success { background: #f0fdf4; }
        .notif-item.warn    { background: #fffbeb; }
        .notif-item.info    { background: #eff6ff; }
        .notif-icon { margin-top: 2px; }
        .notif-item.success .notif-icon { color: #10b981; }
        .notif-item.warn    .notif-icon { color: #f59e0b; }
        .notif-item.info    .notif-icon { color: #3b82f6; }
        .notif-body { display: flex; flex-direction: column; gap: 2px; }
        .notif-body span { font-size: 12px; font-weight: 600; color: #1e293b; }
        .notif-body small { font-size: 10px; color: #94a3b8; }

        .badge.blue { background: #eff6ff; color: #3b82f6; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; }

        /* Room Status */
        .room-stats { display: flex; flex-direction: column; gap: 14px; }
        .rs-row { display: flex; align-items: center; gap: 10px; }
        .rs-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .rs-label { font-size: 12px; font-weight: 700; color: #64748b; width: 55px; }
        .rs-bar-wrap { flex: 1; background: #f1f5f9; border-radius: 10px; height: 8px; overflow: hidden; }
        .rs-bar { height: 100%; border-radius: 10px; transition: width 0.6s ease; }
        .rs-row strong { font-size: 14px; font-weight: 800; color: #1e293b; width: 20px; text-align: right; }
        .occ-big { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #f1f5f9; }
        .occ-big span { font-size: 13px; font-weight: 700; color: #64748b; }
        .occ-big strong { font-size: 28px; font-weight: 900; }

        @media (max-width: 1400px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) { .charts-row, .bottom-row { grid-template-columns: 1fr; } }
      `})]})};export{I as default};
