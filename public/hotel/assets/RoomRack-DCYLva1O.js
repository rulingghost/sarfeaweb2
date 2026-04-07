import{u as g,r as c,j as e,f as m,m as b,X as f,i as h,b as j,A as k}from"./index-Cmjygl0X.js";const u={dolu:{bg:"#3b82f6",text:"white",label:"Dolu"},boş:{bg:"#10b981",text:"white",label:"Boş"},arızalı:{bg:"#ef4444",text:"white",label:"Arızalı"},kirli:{bg:"#f59e0b",text:"white",label:"Kirli"}},v={temiz:"#10b981",kirli:"#f59e0b"},w=({room:a,onClick:o})=>{const i=u[a.status]||u.boş,l=v[a.clean];return e.jsxs(b.div,{className:"room-card",style:{borderColor:i.bg,borderTopColor:i.bg},onClick:()=>o(a),whileHover:{scale:1.04,y:-4},whileTap:{scale:.98},children:[e.jsx("div",{className:"room-number",children:a.id}),e.jsx("div",{className:"room-type",children:a.type}),e.jsx("div",{className:"room-status-dot",style:{background:i.bg},children:i.label}),a.guest&&e.jsx("div",{className:"room-guest",children:a.guest.split(" ")[0]}),e.jsx("div",{className:"room-clean-dot",style:{background:l},title:a.clean})]})},y=({room:a,onClose:o,onUpdateStatus:i})=>{const[l,d]=c.useState(a.status),[r,p]=c.useState(a.clean),x=()=>{i(a.id,{status:l,clean:r}),o()};return e.jsx(b.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,children:e.jsxs(b.div,{className:"room-modal",onClick:t=>t.stopPropagation(),initial:{scale:.9,y:20},animate:{scale:1,y:0},children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h3",{children:["Oda ",a.id," — ",a.type]}),e.jsx("button",{onClick:o,children:e.jsx(f,{size:20})})]}),e.jsxs("div",{className:"modal-body",children:[a.guest&&e.jsxs("div",{className:"guest-info",children:[e.jsx(h,{size:16,color:"#3b82f6"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.guest}),e.jsxs("span",{children:[a.checkIn," → ",a.checkOut," · ",a.pax," kişi"]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Oda Durumu"}),e.jsx("div",{className:"btn-group",children:["dolu","boş","arızalı"].map(t=>e.jsx("button",{className:`status-btn ${l===t?"active-"+t:""}`,onClick:()=>d(t),children:u[t].label},t))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Temizlik Durumu"}),e.jsx("div",{className:"btn-group",children:["temiz","kirli"].map(t=>e.jsx("button",{className:`clean-btn ${r===t?"active":""}`,onClick:()=>p(t),children:t==="temiz"?e.jsxs(e.Fragment,{children:[e.jsx(j,{size:14})," Temiz"]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{size:14})," Kirli"]})},t))})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn-cancel",onClick:o,children:"İptal"}),e.jsx("button",{className:"btn-save",onClick:x,children:"Kaydet"})]})]})})},z=()=>{const{rooms:a,updateRoomStatus:o,stats:i}=g(),[l,d]=c.useState(null),[r,p]=c.useState("tümü"),x=[...new Set(a.map(s=>s.floor))].sort(),t=r==="tümü"?a:a.filter(s=>s.status===r||s.clean===r);return e.jsxs("div",{className:"rack-container",children:[e.jsxs("div",{className:"rack-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Room Rack — Oda Planı"}),e.jsx("span",{children:"Anlık oda durumu, doluluk ve temizlik takibi"})]}),e.jsx("div",{className:"rack-stats",children:[{label:"Dolu",count:i.occupied,color:"#3b82f6"},{label:"Boş",count:i.vacant,color:"#10b981"},{label:"Kirli",count:i.dirty,color:"#f59e0b"},{label:"Arızalı",count:i.outOfOrder,color:"#ef4444"}].map((s,n)=>e.jsxs("div",{className:"rack-stat",children:[e.jsx("div",{className:"rs-num",style:{color:s.color},children:s.count}),e.jsx("div",{className:"rs-lbl",children:s.label})]},n))})]}),e.jsxs("div",{className:"filter-bar",children:[["tümü","dolu","boş","arızalı","kirli"].map(s=>e.jsx("button",{className:`filter-btn ${r===s?"active":""}`,onClick:()=>p(s),children:s.charAt(0).toUpperCase()+s.slice(1)},s)),e.jsxs("div",{className:"occ-pill",children:["%",i.occupancyRate," Doluluk"]})]}),e.jsxs("div",{className:"legend",children:[e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"leg-dot",style:{background:"#3b82f6"}})," Dolu"]}),e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"leg-dot",style:{background:"#10b981"}})," Boş (Temiz)"]}),e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"leg-dot",style:{background:"#f59e0b"}})," Boş (Kirli)"]}),e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"leg-dot",style:{background:"#ef4444"}})," Arızalı (OOO)"]}),e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"clean-indicator",style:{background:"#10b981"}})," Temiz badge"]}),e.jsxs("div",{className:"leg-item",children:[e.jsx("div",{className:"clean-indicator",style:{background:"#f59e0b"}})," Kirli badge"]})]}),x.map(s=>e.jsxs("div",{className:"floor-section",children:[e.jsxs("div",{className:"floor-label",children:[s,". Kat"]}),e.jsx("div",{className:"rooms-grid",children:t.filter(n=>n.floor===s).map(n=>e.jsx(w,{room:n,onClick:d},n.id))})]},s)),e.jsx(m,{children:l&&e.jsx(y,{room:l,onClose:()=>d(null),onUpdateStatus:o})}),e.jsx("style",{children:`
        .rack-container { padding: 30px; display: flex; flex-direction: column; gap: 20px; }

        .rack-header { display: flex; justify-content: space-between; align-items: center; }
        .rack-header h2 { font-size: 24px; font-weight: 800; color: #1e293b; }
        .rack-header span { font-size: 14px; color: #94a3b8; }

        .rack-stats { display: flex; gap: 30px; }
        .rack-stat { text-align: center; }
        .rs-num { font-size: 28px; font-weight: 900; }
        .rs-lbl { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }

        .filter-bar { display: flex; gap: 10px; align-items: center; }
        .filter-btn { padding: 8px 18px; border-radius: 10px; border: 1.5px solid #e2e8f0; background: white; font-size: 13px; font-weight: 700; color: #64748b; cursor: pointer; transition: 0.2s; }
        .filter-btn.active, .filter-btn:hover { background: #1e293b; color: white; border-color: #1e293b; }
        .occ-pill { margin-left: auto; background: #eff6ff; color: #3b82f6; padding: 8px 20px; border-radius: 20px; font-weight: 800; font-size: 14px; }

        .legend { display: flex; gap: 20px; padding: 14px 18px; background: white; border-radius: 14px; border: 1px solid #e2e8f0; }
        .leg-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #64748b; font-weight: 600; }
        .leg-dot { width: 12px; height: 12px; border-radius: 4px; }
        .clean-indicator { width: 9px; height: 9px; border-radius: 50%; }

        .floor-section { background: white; border-radius: 18px; border: 1px solid #e2e8f0; padding: 20px 25px; }
        .floor-label { font-size: 12px; font-weight: 900; color: #94a3b8; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 15px; }
        .rooms-grid { display: flex; flex-wrap: wrap; gap: 12px; }

        .room-card {
          width: 100px; min-height: 90px; background: white; border-radius: 12px;
          border: 2px solid #e2e8f0; border-top-width: 4px;
          padding: 10px 8px; cursor: pointer; position: relative;
          display: flex; flex-direction: column; gap: 4px; align-items: center;
        }
        .room-number { font-size: 18px; font-weight: 900; color: #1e293b; }
        .room-type { font-size: 9px; color: #94a3b8; font-weight: 700; text-transform: uppercase; }
        .room-status-dot { font-size: 9px; font-weight: 800; color: white; padding: 2px 8px; border-radius: 20px; margin-top: 2px; }
        .room-guest { font-size: 10px; color: #64748b; font-weight: 700; }
        .room-clean-dot { position: absolute; top: 6px; right: 6px; width: 8px; height: 8px; border-radius: 50%; }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.7); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .room-modal { background: white; width: 420px; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.4); }
        .modal-header { padding: 24px 28px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
        .modal-header h3 { font-size: 20px; font-weight: 800; color: #1e293b; }
        .modal-header button { background: transparent; border: none; color: #94a3b8; cursor: pointer; }
        .modal-body { padding: 24px 28px; display: flex; flex-direction: column; gap: 20px; }
        .guest-info { display: flex; align-items: flex-start; gap: 12px; background: #eff6ff; padding: 16px; border-radius: 14px; }
        .guest-info strong { display: block; font-size: 15px; color: #1e293b; }
        .guest-info span { font-size: 12px; color: #64748b; }
        .form-group {}
        .form-group label { display: block; font-size: 12px; font-weight: 800; color: #64748b; text-transform: uppercase; margin-bottom: 10px; }
        .btn-group { display: flex; gap: 8px; }
        .status-btn, .clean-btn { padding: 10px 16px; border-radius: 10px; border: 1.5px solid #e2e8f0; background: white; font-size: 13px; font-weight: 700; cursor: pointer; transition: 0.2s; display: flex; align-items: center; gap: 6px; }
        .active-dolu    { background: #3b82f6; color: white; border-color: #3b82f6; }
        .active-boş     { background: #10b981; color: white; border-color: #10b981; }
        .active-arızalı { background: #ef4444; color: white; border-color: #ef4444; }
        .clean-btn.active { background: #1e293b; color: white; border-color: #1e293b; }
        .modal-footer { padding: 16px 28px; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 12px; }
        .btn-cancel { padding: 12px 24px; border-radius: 12px; border: 1px solid #e2e8f0; background: white; font-weight: 700; cursor: pointer; }
        .btn-save   { padding: 12px 28px; border-radius: 12px; border: none; background: #3b82f6; color: white; font-weight: 700; cursor: pointer; }
      `})]})};export{z as default};
