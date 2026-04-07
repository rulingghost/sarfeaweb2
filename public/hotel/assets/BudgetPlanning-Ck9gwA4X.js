import{u as A,r as d,R as M,j as e,f as F,m as b,X as G,A as T}from"./index-DZMFd3xx.js";import{T as $}from"./target-CL5Rgom7.js";import{P as E}from"./plus-DjkIBjav.js";import{S as D}from"./save-CR66Mgir.js";import{P as R}from"./pen-line-39eYajjb.js";import{T as Y}from"./trash-2-BamlJCVr.js";import{A as K}from"./arrow-up-right-DV1cLJWE.js";const V=()=>{const{addNotification:x}=A(),[w,l]=d.useState(!1),[k,f]=d.useState(null),[H,L]=d.useState(null),[n,o]=d.useState([{id:"B-001",dept:"Konaklama",budget:15e6,actual:1245e4},{id:"B-002",dept:"Yiyecek & İçecek",budget:52e5,actual:48e5},{id:"B-003",dept:"SPA & Sağlık",budget:12e5,actual:85e4},{id:"B-004",dept:"Operasyonel Giderler",budget:24e5,actual:21e5},{id:"B-005",dept:"Pazarlama",budget:85e4,actual:92e4}]),[i,c]=d.useState({dept:"",budget:"",actual:""}),[u,h]=d.useState(""),m=M.useRef(5),p=n.reduce((s,t)=>s+t.budget,0),j=n.reduce((s,t)=>s+t.actual,0),y=p>0?(j/p*100).toFixed(1):0,v=s=>{const t=s.actual/s.budget*100;return t>100?"over-budget":t>=90?"ahead":t>=70?"on-track":"behind"},N=s=>{s.preventDefault(),m.current++;const t=`B-${String(m.current).padStart(3,"0")}`;o(a=>[...a,{...i,id:t,budget:Number(i.budget),actual:Number(i.actual)}]),x({type:"info",msg:`Yeni bütçe kalemi eklendi: ${i.dept}`}),c({dept:"",budget:"",actual:""}),l(!1)},z=s=>{f(s.id),h(s.budget.toString())},B=s=>{o(t=>t.map(a=>a.id===s?{...a,budget:Number(u)}:a)),x({type:"success",msg:"Bütçe güncellendi"}),f(null)},S=(s,t)=>{o(a=>a.map(r=>r.id===s?{...r,actual:r.actual+t}:r)),x({type:"info",msg:`Gerçekleşen güncellendi: +₺${t.toLocaleString()}`})},C=s=>{o(t=>t.filter(a=>a.id!==s))},g=n.filter(s=>s.actual/s.budget*100>100);return e.jsxs("div",{className:"bp-page",children:[e.jsxs("div",{className:"bp-head",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:[e.jsx($,{size:20})," Bütçe Planlama & Takibi"]}),e.jsx("span",{children:"Departman bazlı yıllık finansal hedefler ve gerçekleşme oranları"})]}),e.jsx("div",{className:"head-actions",children:e.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[e.jsx(E,{size:14})," Yeni Bütçe Kalemi"]})})]}),e.jsx(F,{children:w&&e.jsxs(b.form,{className:"budget-form",onSubmit:N,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},children:[e.jsxs("div",{className:"bf-head",children:[e.jsx("h3",{children:"Yeni Bütçe Kalemi"}),e.jsx("button",{type:"button",onClick:()=>l(!1),children:e.jsx(G,{size:18})})]}),e.jsxs("div",{className:"bf-grid",children:[e.jsxs("div",{className:"bf",children:[e.jsx("label",{children:"Departman *"}),e.jsx("input",{value:i.dept,onChange:s=>c(t=>({...t,dept:s.target.value})),placeholder:"Ör: Eğlence",required:!0})]}),e.jsxs("div",{className:"bf",children:[e.jsx("label",{children:"Yıllık Bütçe (₺) *"}),e.jsx("input",{type:"number",value:i.budget,onChange:s=>c(t=>({...t,budget:s.target.value})),required:!0})]}),e.jsxs("div",{className:"bf",children:[e.jsx("label",{children:"Gerçekleşen (₺)"}),e.jsx("input",{type:"number",value:i.actual,onChange:s=>c(t=>({...t,actual:s.target.value})),placeholder:"0"})]})]}),e.jsxs("div",{className:"bf-foot",children:[e.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>l(!1),children:"İptal"}),e.jsx("button",{type:"submit",className:"btn-primary",children:"Ekle"})]})]})}),e.jsxs("div",{className:"bp-global",children:[e.jsxs("div",{className:"bg-left",children:[e.jsx("span",{className:"bg-label",children:"Toplam Bütçe Gerçekleşme Oranı"}),e.jsxs("div",{className:"bg-val-row",children:[e.jsxs("strong",{children:["%",y]}),e.jsx("div",{className:"bg-bar-wrap",children:e.jsx(b.div,{className:"bg-bar",initial:{width:0},animate:{width:`${Math.min(y,100)}%`}})})]})]}),e.jsxs("div",{className:"bg-right",children:[e.jsxs("div",{className:"bg-stat",children:[e.jsx("span",{children:"Hedef"}),e.jsxs("strong",{children:["₺",(p/1e6).toFixed(1),"M"]})]}),e.jsxs("div",{className:"bg-stat",children:[e.jsx("span",{children:"Gerçekleşen"}),e.jsxs("strong",{children:["₺",(j/1e6).toFixed(1),"M"]})]})]})]}),e.jsxs("div",{className:"bp-content",children:[e.jsx("div",{className:"dept-grid",children:n.map((s,t)=>{const a=Math.round(s.actual/s.budget*100),r=v(s);return e.jsxs(b.div,{className:`depth-card ${r}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:t*.05},children:[e.jsxs("div",{className:"dc-head",children:[e.jsx("strong",{children:s.dept}),e.jsx("div",{className:`status-pill ${r}`,children:r==="ahead"?"Hedef Üstü":r==="on-track"?"Planda":r==="behind"?"Gecikmede":"Aşım"})]}),e.jsxs("div",{className:"dc-metrics",children:[e.jsxs("div",{className:"dcm",children:[e.jsx("span",{children:"Bütçe"}),k===s.id?e.jsxs("div",{style:{display:"flex",gap:6,marginTop:4},children:[e.jsx("input",{type:"number",value:u,onChange:P=>h(P.target.value),style:{width:100,padding:"4px 8px",borderRadius:6,border:"1.5px solid #3b82f6",fontSize:12}}),e.jsx("button",{onClick:()=>B(s.id),style:{background:"#10b981",color:"white",border:"none",borderRadius:6,padding:"4px 8px",cursor:"pointer",fontSize:11},children:e.jsx(D,{size:12})})]}):e.jsxs("strong",{children:["₺",(s.budget/1e6).toFixed(1),"M"]})]}),e.jsxs("div",{className:"dcm",children:[e.jsx("span",{children:"Gerçekleşen"}),e.jsxs("strong",{children:["₺",(s.actual/1e6).toFixed(1),"M"]})]})]}),e.jsxs("div",{className:"dc-progress",children:[e.jsxs("div",{className:"dcp-info",children:[e.jsx("span",{children:"İlerleme"}),e.jsxs("strong",{children:["%",a]})]}),e.jsx("div",{className:"dcp-bar-bg",children:e.jsx("div",{className:"dcp-bar",style:{width:`${Math.min(a,100)}%`,background:a>100?"#ef4444":"#3b82f6"}})})]}),e.jsxs("div",{className:"dc-actions",children:[e.jsxs("button",{className:"dc-btn",onClick:()=>z(s),children:[e.jsx(R,{size:12})," Düzenle"]}),e.jsx("button",{className:"dc-btn",onClick:()=>S(s.id,1e5),children:"+₺100K"}),e.jsx("button",{className:"dc-btn del",onClick:()=>C(s.id),children:e.jsx(Y,{size:12})})]})]},s.id)})}),e.jsxs("div",{className:"bp-sidebar",children:[e.jsxs("div",{className:"comparison-card",children:[e.jsx("h3",{children:"Yıllık Karşılaştırma"}),e.jsx("div",{className:"comp-list",children:[{year:"2026 (Tahmin)",val:`₺${(p/1e6).toFixed(1)}M`,trend:"+12.5%",color:"#3b82f6"},{year:"2025 (Gerçek)",val:"₺21.5M",trend:"+8.2%",color:"#10b981"},{year:"2024 (Gerçek)",val:"₺19.8M",trend:"+4.1%",color:"#94a3b8"}].map(s=>e.jsxs("div",{className:"comp-row",children:[e.jsxs("div",{className:"cr-year",style:{borderLeft:`3px solid ${s.color}`},children:[e.jsx("span",{children:s.year}),e.jsx("strong",{children:s.val})]}),e.jsxs("div",{className:"cr-trend up",children:[e.jsx(K,{size:12})," ",s.trend]})]},s.year))})]}),g.length>0&&e.jsxs("div",{className:"warning-card",children:[e.jsxs("div",{className:"wc-head",children:[e.jsx(T,{size:18,color:"#ef4444"})," ",e.jsx("strong",{children:"Bütçe Alarmı"})]}),g.map(s=>e.jsxs("p",{children:[e.jsxs("strong",{children:['"',s.dept,'"']})," departmanı bütçesi %",Math.round((s.actual/s.budget-1)*100)," oranında aşıldı."]},s.id))]}),e.jsxs("div",{className:"dept-summary",children:[e.jsx("h4",{children:"Departman Sayıları"}),e.jsxs("div",{className:"ds-row",children:[e.jsx("span",{children:"Toplam"}),e.jsx("strong",{children:n.length})]}),e.jsxs("div",{className:"ds-row",children:[e.jsx("span",{children:"Planda"}),e.jsx("strong",{style:{color:"#3b82f6"},children:n.filter(s=>v(s)==="on-track").length})]}),e.jsxs("div",{className:"ds-row",children:[e.jsx("span",{children:"Bütçe Aşımı"}),e.jsx("strong",{style:{color:"#ef4444"},children:g.length})]})]})]})]}),e.jsx("style",{children:`
        .bp-page { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
        .bp-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .bp-head h2 { font-size: 22px; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 10px; }
        .bp-head span { font-size: 13px; color: #94a3b8; }
        
        .btn-primary { padding: 10px 18px; border-radius: 12px; border: none; background: #1e293b; color: white; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .btn-cancel { padding: 10px 18px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; font-weight: 700; cursor: pointer; font-size: 13px; }

        /* Form */
        .budget-form { background: white; border-radius: 18px; border: 1.5px solid #e2e8f0; padding: 22px; }
        .bf-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .bf-head h3 { font-size: 15px; font-weight: 800; color: #1e293b; }
        .bf-head button { background: none; border: none; color: #94a3b8; cursor: pointer; }
        .bf-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .bf { display: flex; flex-direction: column; gap: 6px; }
        .bf label { font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
        .bf input { padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 13px; outline: none; }
        .bf input:focus { border-color: #3b82f6; }
        .bf-foot { display: flex; justify-content: flex-end; gap: 10px; margin-top: 14px; }

        .bp-global { background: #1e293b; border-radius: 24px; padding: 24px 32px; color: white; display: flex; justify-content: space-between; align-items: center; gap: 40px; }
        .bg-left { flex: 1; }
        .bg-label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; }
        .bg-val-row { display: flex; align-items: center; gap: 20px; margin-top: 10px; }
        .bg-val-row strong { font-size: 28px; font-weight: 900; }
        .bg-bar-wrap { flex: 1; height: 10px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; }
        .bg-bar { height: 100%; background: #3b82f6; border-radius: 10px; }
        .bg-right { display: flex; gap: 32px; }
        .bg-stat span { display: block; font-size: 11px; color: #94a3b8; margin-bottom: 4px; }
        .bg-stat strong { font-size: 20px; font-weight: 800; color: white; }

        .bp-content { display: grid; grid-template-columns: 1fr 340px; gap: 24px; }
        .dept-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        
        .depth-card { background: white; border-radius: 24px; border: 1.5px solid #e2e8f0; padding: 24px; display: flex; flex-direction: column; gap: 16px; transition: 0.3s; }
        .depth-card:hover { transform: translateY(-3px); border-color: #3b82f6; }
        
        .dc-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .dc-head strong { font-size: 15px; font-weight: 800; color: #1e293b; }
        .status-pill { font-size: 9px; font-weight: 800; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; }
        .status-pill.ahead { background: #f0fdf4; color: #10b981; }
        .status-pill.on-track { background: #eff6ff; color: #3b82f6; }
        .status-pill.behind { background: #fff7ed; color: #f59e0b; }
        .status-pill.over-budget { background: #fef2f2; color: #ef4444; }

        .dc-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .dcm span { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }
        .dcm strong { display: block; font-size: 16px; font-weight: 900; color: #1e293b; margin-top: 4px; }
        
        .dc-progress { display: flex; flex-direction: column; gap: 8px; }
        .dcp-info { display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #64748b; }
        .dcp-bar-bg { height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .dcp-bar { height: 100%; border-radius: 10px; transition: 0.5s; }

        .dc-actions { display: flex; gap: 6px; }
        .dc-btn { padding: 6px 10px; border: 1.5px solid #e2e8f0; border-radius: 8px; background: white; font-size: 10px; font-weight: 700; color: #64748b; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: 0.2s; }
        .dc-btn:hover { border-color: #3b82f6; color: #3b82f6; }
        .dc-btn.del { color: #ef4444; border-color: #fecaca; }
        .dc-btn.del:hover { background: #fef2f2; }

        .bp-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .comparison-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 24px; }
        .comparison-card h3 { font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 20px; }
        .comp-list { display: flex; flex-direction: column; gap: 16px; }
        .comp-row { display: flex; justify-content: space-between; align-items: center; }
        .cr-year { padding-left: 12px; }
        .cr-year span { display: block; font-size: 11px; color: #94a3b8; }
        .cr-year strong { font-size: 14px; font-weight: 800; color: #1e293b; }
        .cr-trend { font-size: 10px; font-weight: 800; display: flex; align-items: center; gap: 2px; }
        .cr-trend.up { color: #10b981; }

        .warning-card { background: #fef2f2; border: 1px solid #fee2e2; border-radius: 20px; padding: 20px; }
        .wc-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
        .wc-head strong { font-size: 14px; color: #ef4444; }
        .warning-card p { font-size: 12px; color: #991b1b; line-height: 1.5; margin: 4px 0; }

        .dept-summary { background: white; border-radius: 20px; border: 1px solid #e2e8f0; padding: 20px; }
        .dept-summary h4 { font-size: 12px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px; }
        .ds-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; }
        .ds-row strong { font-weight: 800; }
      `})]})};export{V as default};
