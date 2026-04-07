import{u as S,r as x,j as e,m as j,b as c,n as O,R,f as B,k as K,B as T,o as I}from"./index-CeGZvpZr.js";import{A as M}from"./arrow-right-D-9_QtIF.js";const d=["Misafir Bilgileri","Oda & Tarih","Fiyatlandırma","Onay"],w=[{code:"BB",label:"Oda Kahvaltı",desc:"Sadece kahvaltı dahil"},{code:"HB",label:"Yarım Pansiyon",desc:"Kahvaltı + akşam yemeği"},{code:"FB",label:"Tam Pansiyon",desc:"3 öğün dahil"},{code:"AI",label:"Her Şey Dahil",desc:"Sınırsız yiyecek-içecek"}],A=["Direkt","Booking.com","Expedia","HotelRunner","TUI","Acente"],H=()=>{var u;const{rooms:h,addReservation:v,guests:g}=S(),[i,p]=x.useState(0),[k,m]=x.useState(!1),[s,b]=x.useState({guest:"",phone:"",email:"",nationality:"TR",pax:2,room:"",checkIn:"2026-03-14",checkOut:"2026-03-17",board:"HB",channel:"Direkt",paid:0,payMethod:"Kredi Kartı",notes:""}),r=(a,n)=>b(C=>({...C,[a]:n})),t=h.find(a=>a.id===s.room),o=s.checkIn&&s.checkOut?Math.max(1,Math.round((new Date(s.checkOut)-new Date(s.checkIn))/864e5)):0,l=t&&o?t.rate*o:0,f=h.filter(a=>a.status==="boş"&&a.clean==="temiz"),y=[s.guest.length>1,s.room&&s.checkIn&&s.checkOut&&o>0,s.board&&s.channel,!0][i],N=()=>{v({guest:s.guest,room:s.room,type:t==null?void 0:t.type,channel:s.channel,checkIn:s.checkIn,checkOut:s.checkOut,nights:o,pax:Number(s.pax),status:"gelecek",total:l,paid:Number(s.paid),balance:l-Number(s.paid),board:s.board,notes:s.notes}),m(!0)},z=()=>{m(!1),p(0),b({guest:"",phone:"",email:"",nationality:"TR",pax:2,room:"",checkIn:"2026-03-14",checkOut:"2026-03-17",board:"HB",channel:"Direkt",paid:0,payMethod:"Kredi Kartı",notes:""})};return k?e.jsxs("div",{className:"wizard-done",children:[e.jsx(j.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",bounce:.5},children:e.jsx(c,{size:80,color:"#10b981"})}),e.jsx("h2",{children:"Rezervasyon Oluşturuldu!"}),e.jsxs("p",{children:[s.guest," — ",o," gece · Oda ",s.room," · ₺",l.toLocaleString()]}),e.jsx("div",{className:"done-actions",children:e.jsxs("button",{className:"btn-outline",onClick:z,children:[e.jsx(O,{size:16})," Yeni Rezervasyon"]})})]}):e.jsxs("div",{className:"wizard-page",children:[e.jsxs("div",{className:"wizard-header",children:[e.jsx("h2",{children:"Yeni Rezervasyon Sihirbazı"}),e.jsxs("p",{children:["Adım ",i+1,"/",d.length," — ",d[i]]})]}),e.jsx("div",{className:"wizard-progress",children:d.map((a,n)=>e.jsxs(R.Fragment,{children:[e.jsxs("div",{className:`wp-step ${n<i?"done":""} ${n===i?"active":""}`,children:[e.jsx("div",{className:"wp-dot",children:n<i?e.jsx(c,{size:14}):n+1}),e.jsx("span",{children:a})]}),n<d.length-1&&e.jsx("div",{className:`wp-line ${n<i?"done":""}`})]},n))}),e.jsx("div",{className:"wizard-body",children:e.jsx(B,{mode:"wait",children:e.jsxs(j.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},exit:{opacity:0,x:-30},className:"wizard-panel",children:[i===0&&e.jsxs("div",{className:"wstep",children:[e.jsxs("h3",{children:[e.jsx(K,{size:18})," Misafir Bilgileri"]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"fg full",children:[e.jsx("label",{children:"Ad Soyad *"}),e.jsx("input",{value:s.guest,onChange:a=>r("guest",a.target.value),placeholder:"Misafir adı soyadı"}),g.length>0&&s.guest.length>1&&e.jsx("div",{className:"guest-suggest",children:g.filter(a=>a.name.toLowerCase().includes(s.guest.toLowerCase())).slice(0,4).map(a=>e.jsxs("button",{className:"sug-item",onClick:()=>r("guest",a.name),children:[e.jsx("strong",{children:a.name}),e.jsxs("span",{children:[a.loyalty," · ",a.visits," konaklama"]})]},a.id))})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Telefon"}),e.jsx("input",{value:s.phone,onChange:a=>r("phone",a.target.value),placeholder:"+90 5xx xxx xx xx"})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"E-posta"}),e.jsx("input",{value:s.email,onChange:a=>r("email",a.target.value),placeholder:"email@example.com"})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Uyruk"}),e.jsx("select",{value:s.nationality,onChange:a=>r("nationality",a.target.value),children:["TR","DE","US","UK","FR","RU","AE","NL","BE"].map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Kişi Sayısı"}),e.jsx("input",{type:"number",value:s.pax,onChange:a=>r("pax",a.target.value),min:1,max:8})]}),e.jsxs("div",{className:"fg full",children:[e.jsx("label",{children:"Notlar"}),e.jsx("textarea",{value:s.notes,onChange:a=>r("notes",a.target.value),placeholder:"VIP, özel istek, vb.",rows:2})]})]})]}),i===1&&e.jsxs("div",{className:"wstep",children:[e.jsxs("h3",{children:[e.jsx(T,{size:18})," Oda & Tarih Seçimi"]}),e.jsxs("div",{className:"date-grid",children:[e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Giriş Tarihi *"}),e.jsx("input",{type:"date",value:s.checkIn,onChange:a=>r("checkIn",a.target.value)})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Çıkış Tarihi *"}),e.jsx("input",{type:"date",value:s.checkOut,onChange:a=>r("checkOut",a.target.value)})]}),o>0&&e.jsxs("div",{className:"nights-badge",children:[o," Gece"]})]}),e.jsxs("label",{className:"sec-label",children:["Müsait Odalar (",f.length," oda)"]}),e.jsx("div",{className:"room-grid",children:f.map(a=>e.jsxs("button",{className:`room-card ${s.room===a.id?"active":""}`,onClick:()=>r("room",a.id),children:[e.jsx("div",{className:"rc-num",children:a.id}),e.jsx("div",{className:"rc-type",children:a.type}),e.jsxs("div",{className:"rc-rate",children:["₺",a.rate,e.jsx("small",{children:"/gece"})]}),o>0&&e.jsxs("div",{className:"rc-total",children:["₺",(a.rate*o).toLocaleString()," toplam"]}),s.room===a.id&&e.jsx("div",{className:"rc-check",children:e.jsx(c,{size:16,color:"#10b981"})})]},a.id))})]}),i===2&&e.jsxs("div",{className:"wstep",children:[e.jsxs("h3",{children:[e.jsx(I,{size:18})," Fiyatlandırma & Kanal"]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"fg full",children:[e.jsx("label",{children:"Pansiyon Tipi"}),e.jsx("div",{className:"board-grid",children:w.map(a=>e.jsxs("button",{className:`board-btn ${s.board===a.code?"active":""}`,onClick:()=>r("board",a.code),children:[e.jsx("strong",{children:a.code}),e.jsx("span",{children:a.label}),e.jsx("small",{children:a.desc})]},a.code))})]}),e.jsxs("div",{className:"fg full",children:[e.jsx("label",{children:"Rezervasyon Kanalı"}),e.jsx("div",{className:"channel-grid",children:A.map(a=>e.jsx("button",{className:`channel-btn ${s.channel===a?"active":""}`,onClick:()=>r("channel",a),children:a},a))})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Ön Ödeme (₺)"}),e.jsx("input",{type:"number",value:s.paid,onChange:a=>r("paid",a.target.value),min:0,max:l})]}),e.jsxs("div",{className:"fg",children:[e.jsx("label",{children:"Ödeme Yöntemi"}),e.jsx("select",{value:s.payMethod,onChange:a=>r("payMethod",a.target.value),children:["Nakit","Kredi Kartı","EFT/Havale","Açık Hesap"].map(a=>e.jsx("option",{children:a},a))})]})]})]}),i===3&&e.jsxs("div",{className:"wstep",children:[e.jsxs("h3",{children:[e.jsx(c,{size:18})," Rezervasyon Özeti"]}),e.jsxs("div",{className:"confirm-grid",children:[e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Misafir"}),e.jsx("strong",{children:s.guest})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Oda"}),e.jsxs("strong",{children:[s.room," — ",t==null?void 0:t.type]})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Giriş / Çıkış"}),e.jsxs("strong",{children:[s.checkIn," → ",s.checkOut," (",o," gece)"]})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Kişi Sayısı"}),e.jsx("strong",{children:s.pax})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Pansiyon"}),e.jsx("strong",{children:(u=w.find(a=>a.code===s.board))==null?void 0:u.label})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Kanal"}),e.jsx("strong",{children:s.channel})]}),e.jsxs("div",{className:"cg-row price",children:[e.jsx("span",{children:"Toplam Tutar"}),e.jsxs("strong",{children:["₺",l.toLocaleString()]})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Ön Ödeme"}),e.jsxs("strong",{className:"green",children:["₺",Number(s.paid).toLocaleString()]})]}),e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Kalan Bakiye"}),e.jsxs("strong",{className:"red",children:["₺",Math.max(0,l-Number(s.paid)).toLocaleString()]})]}),s.notes&&e.jsxs("div",{className:"cg-row",children:[e.jsx("span",{children:"Notlar"}),e.jsx("strong",{children:s.notes})]})]})]})]},i)})}),e.jsxs("div",{className:"wizard-nav",children:[e.jsx("button",{className:"btn-back",onClick:()=>p(a=>a-1),disabled:i===0,children:"← Geri"}),e.jsx("div",{className:"dots",children:d.map((a,n)=>e.jsx("div",{className:`dot ${n===i?"active":""}`},n))}),i<d.length-1?e.jsxs("button",{className:"btn-next-w",onClick:()=>p(a=>a+1),disabled:!y,children:["İleri ",e.jsx(M,{size:15})]}):e.jsx("button",{className:"btn-finish",onClick:N,children:"✓ Rezervasyonu Oluştur"})]}),e.jsx("style",{children:`
        .wizard-page { max-width:720px; margin:0 auto; padding:30px; display:flex; flex-direction:column; gap:24px; }
        .wizard-header h2 { font-size:24px; font-weight:800; color:#1e293b; }
        .wizard-header p { font-size:14px; color:#94a3b8; font-weight:600; }
        .wizard-done { padding:60px; display:flex; flex-direction:column; align-items:center; gap:20px; text-align:center; }
        .wizard-done h2 { font-size:28px; font-weight:900; color:#1e293b; }
        .wizard-done p { font-size:16px; color:#64748b; }
        .done-actions { display:flex; gap:12px; }
        .btn-outline { padding:12px 24px; border-radius:12px; border:1.5px solid #e2e8f0; background:white; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }

        .wizard-progress { display:flex; align-items:center; background:white; border-radius:16px; border:1px solid #e2e8f0; padding:20px 24px; }
        .wp-step { display:flex; align-items:center; gap:8px; }
        .wp-dot { width:28px; height:28px; border-radius:50%; background:#e2e8f0; color:#94a3b8; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; flex-shrink:0; }
        .wp-step.active .wp-dot { background:#3b82f6; color:white; }
        .wp-step.done .wp-dot { background:#10b981; color:white; }
        .wp-step span { font-size:12px; font-weight:700; color:#94a3b8; white-space:nowrap; }
        .wp-step.active span { color:#3b82f6; }
        .wp-step.done span { color:#10b981; }
        .wp-line { flex:1; height:2px; background:#e2e8f0; margin:0 10px; }
        .wp-line.done { background:#10b981; }

        .wizard-body { background:white; border-radius:20px; border:1px solid #e2e8f0; overflow:hidden; }
        .wizard-panel { padding:28px; }
        .wstep h3 { font-size:17px; font-weight:800; color:#1e293b; margin-bottom:20px; display:flex; align-items:center; gap:8px; }

        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .fg { display:flex; flex-direction:column; gap:6px; }
        .fg.full { grid-column:1/-1; }
        .fg label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; }
        .fg input, .fg select, .fg textarea { padding:11px 14px; border:1.5px solid #e2e8f0; border-radius:10px; font-size:13px; outline:none; }
        .fg textarea { resize:none; }
        .fg input:focus, .fg select:focus { border-color:#3b82f6; }
        .guest-suggest { background:white; border:1.5px solid #e2e8f0; border-radius:10px; overflow:hidden; margin-top:4px; }
        .sug-item { width:100%; display:flex; flex-direction:column; padding:10px 14px; background:white; border:none; cursor:pointer; text-align:left; border-bottom:1px solid #f1f5f9; }
        .sug-item:hover { background:#f8fafc; }
        .sug-item strong { font-size:13px; color:#1e293b; }
        .sug-item span { font-size:11px; color:#94a3b8; }

        .date-grid { display:grid; grid-template-columns:1fr 1fr auto; gap:14px; align-items:end; margin-bottom:20px; }
        .nights-badge { padding:11px 18px; background:#eff6ff; color:#3b82f6; border-radius:10px; font-weight:800; font-size:14px; white-space:nowrap; }
        .sec-label { font-size:11px; font-weight:800; color:#94a3b8; text-transform:uppercase; display:block; margin-bottom:12px; }
        .room-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .room-card { border:1.5px solid #e2e8f0; background:white; border-radius:16px; padding:16px 10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; position:relative; transition:0.2s; }
        .room-card:hover { border-color:#3b82f6; background:#eff6ff; }
        .room-card.active { border-color:#3b82f6; background:#eff6ff; }
        .rc-num { font-size:20px; font-weight:900; color:#1e293b; }
        .rc-type { font-size:10px; color:#94a3b8; font-weight:700; text-transform:uppercase; }
        .rc-rate { font-size:14px; font-weight:800; color:#3b82f6; }
        .rc-rate small { font-size:10px; font-weight:600; color:#94a3b8; }
        .rc-total { font-size:11px; color:#10b981; font-weight:700; }
        .rc-check { position:absolute; top:6px; right:6px; }

        .board-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .board-btn { border:1.5px solid #e2e8f0; background:white; border-radius:12px; padding:14px 10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:2px; transition:0.2s; }
        .board-btn:hover, .board-btn.active { border-color:#3b82f6; background:#eff6ff; }
        .board-btn strong { font-size:16px; color:#1e293b; font-weight:900; }
        .board-btn span { font-size:11px; color:#3b82f6; font-weight:700; }
        .board-btn small { font-size:10px; color:#94a3b8; }
        .channel-grid { display:flex; flex-wrap:wrap; gap:8px; }
        .channel-btn { padding:9px 16px; border-radius:10px; border:1.5px solid #e2e8f0; background:white; font-size:12px; font-weight:700; cursor:pointer; }
        .channel-btn.active { background:#1e293b; color:white; border-color:#1e293b; }

        .confirm-grid { background:#f8fafc; border-radius:16px; padding:20px; display:flex; flex-direction:column; gap:0; }
        .cg-row { display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #e2e8f0; font-size:13px; }
        .cg-row span { color:#64748b; }
        .cg-row strong { color:#1e293b; }
        .cg-row:last-child { border-bottom:none; }
        .cg-row.price { background:#eff6ff; margin:-1px -0px; padding:14px 0; }
        .cg-row.price span, .cg-row.price strong { font-weight:900; font-size:16px; color:#3b82f6; }
        .green { color:#10b981 !important; }
        .red { color:#ef4444 !important; }

        .wizard-nav { background:white; border-radius:16px; border:1px solid #e2e8f0; padding:16px 24px; display:flex; align-items:center; justify-content:space-between; }
        .btn-back { padding:12px 20px; border-radius:12px; border:1.5px solid #e2e8f0; background:white; font-size:14px; font-weight:700; cursor:pointer; color:#64748b; }
        .btn-back:disabled { opacity:.3; cursor:not-allowed; }
        .dots { display:flex; gap:8px; }
        .dot { width:8px; height:8px; border-radius:50%; background:#e2e8f0; }
        .dot.active { background:#3b82f6; width:24px; border-radius:10px; }
        .btn-next-w { padding:12px 24px; border-radius:12px; border:none; background:#3b82f6; color:white; font-size:14px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .btn-next-w:disabled { opacity:.4; cursor:not-allowed; }
        .btn-finish { padding:12px 24px; border-radius:12px; border:none; background:#10b981; color:white; font-size:14px; font-weight:800; cursor:pointer; }
      `})]})};export{H as default};
