import{u as g,j as e,R as f}from"./index-DZMFd3xx.js";const b=()=>{const{reservations:c,rooms:i,TODAY:p}=g(),d=p,r=Array.from({length:14},(s,l)=>{const t=new Date(d);return t.setDate(t.getDate()-2+l),t.toISOString().split("T")[0]}),o=r.map(s=>{const l=new Date(s+"T12:00:00");return{date:s,label:l.toLocaleDateString("tr-TR",{day:"2-digit",month:"short"}),isToday:s===d}}),x=i.map(s=>{const l=c.filter(t=>t.room===s.id&&t.status!=="iptal");return{room:s,reservations:l}}),h=(s,l)=>s.find(t=>t.checkIn<=l&&t.checkOut>l);return e.jsxs("div",{className:"tc-container",children:[e.jsxs("div",{className:"tc-header",children:[e.jsx("h2",{children:"Rezervasyon Takvimi (Tape Chart)"}),e.jsxs("span",{children:["14 günlük görünüm — ",o[0].label," / ",o[o.length-1].label]})]}),e.jsxs("div",{className:"tc-legend",children:[e.jsxs("div",{className:"leg",children:[e.jsx("div",{className:"leg-dot",style:{background:"#3b82f6"}})," Dolu"]}),e.jsxs("div",{className:"leg",children:[e.jsx("div",{className:"leg-dot",style:{background:"#10b981"}})," Müsait"]}),e.jsxs("div",{className:"leg",children:[e.jsx("div",{className:"leg-dot",style:{background:"#ef4444"}})," OOO"]}),e.jsxs("div",{className:"leg",children:[e.jsx("div",{className:"leg-dot today-dot"}),e.jsx("span",{children:"Bugün"})]})]}),e.jsxs("div",{className:"tc-summary",children:[e.jsxs("div",{className:"tcs-item",children:[e.jsx("strong",{children:i.length}),e.jsx("span",{children:"Toplam Oda"})]}),e.jsxs("div",{className:"tcs-item",children:[e.jsx("strong",{children:i.filter(s=>s.status==="dolu").length}),e.jsx("span",{children:"Dolu"})]}),e.jsxs("div",{className:"tcs-item",children:[e.jsx("strong",{children:i.filter(s=>s.status==="boş").length}),e.jsx("span",{children:"Boş"})]}),e.jsxs("div",{className:"tcs-item",children:[e.jsx("strong",{children:i.filter(s=>s.status==="arızalı").length}),e.jsx("span",{children:"OOO"})]}),e.jsxs("div",{className:"tcs-item",children:[e.jsxs("strong",{children:["%",Math.round(i.filter(s=>s.status==="dolu").length/i.length*100)]}),e.jsx("span",{children:"Doluluk"})]})]}),e.jsx("div",{className:"tape-wrap",children:e.jsxs("div",{className:"tape-grid",style:{gridTemplateColumns:`120px repeat(${r.length}, 1fr)`},children:[e.jsx("div",{className:"hcell room-label-head",children:"Oda"}),o.map(s=>e.jsx("div",{className:`hcell day-head ${s.isToday?"today":""}`,children:e.jsx("span",{children:s.label})},s.date)),x.map(({room:s,reservations:l})=>e.jsxs(f.Fragment,{children:[e.jsxs("div",{className:"dcell room-label",children:[e.jsx("div",{className:"rl-num",children:s.id}),e.jsx("div",{className:"rl-type",children:s.type})]}),r.map(t=>{const a=h(l,t),n=s.status==="arızalı";return e.jsxs("div",{className:`dcell day-cell ${a?"occupied":""} ${n&&!a?"ooo":""} ${t===d?"today-col":""}`,title:a?`${a.guest} (${a.id})`:"",children:[a&&e.jsx("div",{className:"occ-bar",style:{background:"#3b82f6"},children:a.checkIn===t&&e.jsx("span",{className:"occ-name",children:a.guest.split(" ")[0]})}),n&&!a&&e.jsx("div",{className:"ooo-bar",children:"OOO"})]},t)})]},s.id))]})}),e.jsx("style",{children:`
        .tc-container { padding:28px; display:flex; flex-direction:column; gap:18px; }
        .tc-header h2 { font-size:22px; font-weight:800; color:#1e293b; }
        .tc-header span { font-size:13px; color:#94a3b8; }
        .tc-legend { display:flex; gap:20px; }
        .leg { display:flex; align-items:center; gap:6px; font-size:12px; font-weight:700; color:#64748b; }
        .leg-dot { width:14px; height:14px; border-radius:4px; }
        .today-dot { width:14px; height:14px; border-radius:4px; background:#fef08a; border:2px solid #eab308; }

        .tape-wrap { background:white; border-radius:20px; border:1px solid #e2e8f0; overflow:auto; }
        .tape-grid { display:grid; min-width:max-content; }

        .hcell { padding:12px 10px; background:#f8fafc; border-bottom:2px solid #e2e8f0; font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; text-align:center; }
        .hcell.room-label-head { text-align:left; padding-left:16px; }
        .hcell.day-head { }
        .hcell.today { background:#fffbeb; color:#b45309; }
        .hcell.today span { font-weight:900; }

        .dcell { padding:6px 4px; border-bottom:1px solid #f1f5f9; border-right:1px solid #f8fafc; min-height:48px; position:relative; }
        .dcell.room-label { display:flex; flex-direction:column; justify-content:center; padding:6px 14px; border-right:2px solid #e2e8f0; background:white; }
        .rl-num { font-size:15px; font-weight:900; color:#1e293b; }
        .rl-type { font-size:10px; color:#94a3b8; font-weight:700; }
        .dcell.day-cell { }
        .dcell.today-col { background:#fffde7; }
        .occ-bar { position:absolute; inset:4px 2px; border-radius:6px; display:flex; align-items:center; overflow:hidden; }
        .occ-name { font-size:10px; color:white; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding:0 6px; }
        .ooo-bar { position:absolute; inset:4px 2px; background:#fef2f2; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:800; color:#ef4444; border:1px dashed #fca5a5; }
        .tc-summary { display:flex; gap:16px; }
        .tcs-item { background:white; border:1px solid #e2e8f0; border-radius:14px; padding:14px 22px; text-align:center; }
        .tcs-item strong { display:block; font-size:22px; font-weight:900; color:#1e293b; }
        .tcs-item span { font-size:11px; color:#94a3b8; font-weight:700; }
      `})]})};export{b as default};
