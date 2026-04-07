import{c as s,u as p,j as e,s as n,Z as x}from"./index-oD4_PD50.js";import{S as h}from"./save-C9Mykxtv.js";import{h as m,X as g,Y as f,t as u,R as b}from"./generateCategoricalChart-DOT3sozt.js";import{L as t}from"./Line-CQCWC4d5.js";import{B as j}from"./bar-chart-3-BW_Axrd8.js";import{P as v}from"./pie-chart-BI1_FPGp.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);var A=m({chartName:"LineChart",GraphicalChild:t,axisComponents:[{axisType:"xAxis",AxisComp:g},{axisType:"yAxis",AxisComp:f}],formatAxisMap:u});const C=[{name:"Doluluk ve Ciro",icon:e.jsx(j,{size:16})},{name:"Anket Sonuçları",icon:e.jsx(w,{size:16})},{name:"POS & Satışlar",icon:e.jsx(v,{size:16})},{name:"Yorumlar & NPS",icon:e.jsx(z,{size:16})},{name:"Kanal Yönetimi",icon:e.jsx(x,{size:16})},{name:"Satın Alma",icon:e.jsx(l,{size:16}),new:!0},{name:"Spa & Wellness",icon:e.jsx(N,{size:16})}],M=[{name:"Jan",val:3e4},{name:"Feb",val:35e3},{name:"Mar",val:32e3},{name:"Apr",val:4e4},{name:"May",val:45e3}],T=()=>{const{stats:L,cashTransactions:d,rooms:S}=p(),r=d.filter(a=>a.type==="gelir").slice(-5).map((a,i)=>{var o;return{name:((o=a.date)==null?void 0:o.slice(5))||`D${i+1}`,val:a.amount}}),c=r.length>2?r:M;return e.jsxs("div",{className:"builder-container",children:[e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"title-section",children:[e.jsx(l,{size:32,className:"icon-blue"}),e.jsxs("div",{children:[e.jsx("h2",{children:"Custom Dashboard Builder"}),e.jsx("span",{children:"Drag-and-drop widget arayüzü, dinamik veri kaynakları ve rapor oluşturma"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn outline",children:[e.jsx(h,{size:18})," KAYDET VE YAYINLA"]}),e.jsxs("button",{className:"btn outline",children:[e.jsx(y,{size:18})," JSON DIŞA AKTAR"]}),e.jsx("button",{className:"btn primary red",children:"CANLI MODA GEÇ"})]})]}),e.jsxs("div",{className:"builder-grid",children:[e.jsx("aside",{className:"left-panel",children:e.jsxs("section",{className:"card sources-card",children:[e.jsx("h3",{children:"VERİ KAYNAKLARI"}),e.jsx("div",{className:"source-list",children:C.map((a,i)=>e.jsxs("div",{className:"source-item",children:[a.icon,e.jsx("span",{children:a.name}),a.new&&e.jsx("div",{className:"new-tag",children:"YENİ"})]},i))})]})}),e.jsxs("section",{className:"canvas-area",children:[e.jsx("div",{className:"canvas-header",children:e.jsxs("div",{className:"search-box",children:[e.jsx(n,{size:16,className:"gray"}),e.jsx("input",{type:"text",placeholder:"Widget Ara..."})]})}),e.jsxs("div",{className:"canvas-grid",children:[e.jsxs("div",{className:"widget preview-widget wider",children:[e.jsxs("div",{className:"w-head",children:[e.jsx("span",{children:"Aylık Ciro İstatistikleri"}),e.jsx("strong",{children:"$920, 9%"})]}),e.jsx("div",{style:{height:150},children:e.jsx(b,{width:"100%",height:"100%",children:e.jsx(A,{data:c,children:e.jsx(t,{type:"monotone",dataKey:"val",stroke:"#3b82f6",strokeWidth:3,dot:{r:4,fill:"#3b82f6"}})})})}),e.jsx("div",{className:"drag-handle",children:e.jsx(k,{size:16})})]}),e.jsxs("div",{className:"widget preview-widget",children:[e.jsx("div",{className:"w-head",children:e.jsx("span",{children:"Occupancy Gauge"})}),e.jsx("div",{className:"gauge-placeholder",children:e.jsxs("div",{className:"gauge-inner",children:[e.jsx("strong",{children:"92%"}),e.jsx("span",{children:"Bugün"})]})}),e.jsxs("div",{className:"w-footer",children:[e.jsx("span",{children:"▲ 92%"}),e.jsx("span",{children:"◆ 82%"}),e.jsx("span",{children:"0,24"})]})]})]}),e.jsxs("div",{className:"canvas-footer",children:[e.jsxs("span",{children:["Çalışma Alanı: ",e.jsx("strong",{children:"Genel Müdür Paneli"})]}),e.jsx("span",{children:"Son Kayıt: 1 dak. Önce"})]})]}),e.jsx("aside",{className:"right-panel",children:e.jsxs("section",{className:"card props-card",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(n,{size:16,className:"gray"}),e.jsx("input",{type:"text",placeholder:"Widget Ara..."})]}),e.jsx("h3",{children:"WIDGET ÖZELLİKLERİ"}),e.jsxs("div",{className:"prop-section",children:[e.jsx("span",{className:"p-label",children:"Renkler"}),e.jsx("div",{className:"color-dots",children:["#3b82f6","#84cc16","#f59e0b","#ef4444","#d946ef","#8b5cf6"].map(a=>e.jsx("div",{className:"c-dot",style:{background:a}},a))})]}),e.jsxs("div",{className:"prop-section mt-20",children:[e.jsx("span",{className:"p-label",children:"Veri Zaman Aralığı"}),e.jsxs("select",{className:"p-select",children:[e.jsx("option",{children:"Gerçek Zamanlı"}),e.jsx("option",{children:"Bugün"}),e.jsx("option",{children:"Son 7 Gün"}),e.jsx("option",{children:"Bu Ay"}),e.jsx("option",{children:"Custom"})]})]}),e.jsxs("div",{className:"prop-section mt-20",children:[e.jsx("span",{className:"p-label",children:"Yenileme Sıklığı"}),e.jsxs("select",{className:"p-select",children:[e.jsx("option",{children:"Her 1 Dakika"}),e.jsx("option",{children:"2 Dakika"}),e.jsx("option",{children:"5 Dakika"})]})]}),e.jsx("div",{className:"auto-save mt-20",children:e.jsxs("div",{className:"s-head",children:[e.jsx("span",{children:"Otomatik"}),e.jsxs("div",{className:"dot-group",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"dot active"}),e.jsx("div",{className:"dot"})]})]})})]})})]}),e.jsx("style",{children:`
        .builder-container {
          padding: 30px;
          background: #f1f5f9;
          height: calc(100vh - 70px);
          overflow-y: auto;
          display: flex; flex-direction: column; gap: 30px;
        }

        .header { display: flex; justify-content: space-between; align-items: center; }
        .title-section { display: flex; align-items: center; gap: 20px; }
        .icon-blue { color: #3b82f6; }
        .title-section h2 { font-size: 24px; font-weight: 800; color: #1e293b; }
        .title-section span { font-size: 14px; color: #64748b; }

        .actions { display: flex; gap: 10px; }
        .btn { padding: 12px 20px; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; border: none; display: flex; align-items: center; gap: 8px; }
        .btn.outline { background: white; border: 1px solid #e2e8f0; color: #1e293b; }
        .btn.primary.red { background: #ef4444; color: white; }

        .builder-grid { display: grid; grid-template-columns: 220px 1fr 280px; gap: 30px; flex: 1; }

        .card { background: white; border-radius: 16px; border: 1px solid #e2e8f0; padding: 25px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .card h3 { font-size: 11px; font-weight: 900; color: #1e293b; margin-bottom: 25px; letter-spacing: 1px; }

        .source-list { display: flex; flex-direction: column; gap: 5px; }
        .source-item { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; font-size: 12px; font-weight: 700; color: #64748b; cursor: pointer; transition: 0.2s; }
        .source-item:hover { background: #f8fafc; color: #3b82f6; }
        .new-tag { font-size: 9px; background: #f59e0b; color: white; padding: 2px 6px; border-radius: 4px; margin-left: auto; }

        .canvas-area { background: #fff; border-radius: 20px; border: 2px dashed #e2e8f0; padding: 30px; position: relative; background-image: radial-gradient(#e2e8f0 1px, transparent 1px); background-size: 20px 20px; }
        .canvas-header { margin-bottom: 30px; }
        .search-box { display: flex; align-items: center; gap: 10px; background: white; border: 1px solid #e2e8f0; padding: 8px 15px; border-radius: 12px; }
        .search-box input { border: none; outline: none; font-size: 13px; width: 100%; }

        .canvas-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .widget { background: white; border-radius: 16px; border: 1px solid #e2e8f0; padding: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); position: relative; overflow: hidden; }
        .widget.wider { grid-column: span 1; }
        .w-head { display: flex; flex-direction: column; margin-bottom: 15px; }
        .w-head span { font-size: 11px; font-weight: 800; color: #94a3b8; }
        .w-head strong { font-size: 18px; color: #1e293b; }

        .drag-handle { position: absolute; top: 10px; right: 10px; cursor: move; color: #cbd5e1; }

        .gauge-placeholder { height: 100px; display: flex; align-items: center; justify-content: center; position: relative; }
        .gauge-placeholder::before { content: ''; position: absolute; width: 120px; height: 60px; border: 10px solid #f1f5f9; border-bottom: 0; border-radius: 100px 100px 0 0; }
        .gauge-inner { text-align: center; margin-top: 20px; }
        .gauge-inner strong { display: block; font-size: 20px; color: #1e293b; }
        .gauge-inner span { font-size: 10px; color: #94a3b8; font-weight: 800; }
        .w-footer { display: flex; justify-content: space-between; margin-top: 15px; font-size: 11px; font-weight: 800; color: #64748b; }

        .canvas-footer { position: absolute; bottom: 20px; left: 30px; right: 30px; display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; font-weight: 700; }

        .p-label { font-size: 11px; font-weight: 800; color: #94a3b8; display: block; margin-bottom: 12px; }
        .color-dots { display: flex; gap: 8px; flex-wrap: wrap; }
        .c-dot { width: 20px; height: 20px; border-radius: 50%; cursor: pointer; border: 2px solid white; box-shadow: 0 0 0 1px #e2e8f0; }

        .p-select { width: 100%; padding: 10px; border-radius: 10px; border: 1px solid #e2e8f0; font-size: 13px; color: #1e293b; font-weight: 700; outline: none; }

        .auto-save { background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0; }
        .auto-save .s-head { display: flex; justify-content: space-between; align-items: center; font-size: 11px; font-weight: 800; color: #64748b; }
        .dot-group { display: flex; gap: 4px; }
        .dot-group .dot { width: 6px; height: 6px; background: #cbd5e1; border-radius: 50%; }
        .dot-group .dot.active { background: #3b82f6; }

        .gray { color: #94a3b8; }
        .mt-20 { margin-top: 20px; }
      `})]})};export{T as default};
