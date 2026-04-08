import fs from 'fs';
import { execSync } from 'child_process';

const filePath = 'public/hotel/assets/index-CeGZvpZr.js';
let s = fs.readFileSync(filePath, 'utf8');

const oldState =
  '[nv,Ev]=S.useState({pinned:!1,onburo:!1,gelir:!1,finans:!1})';
const newState =
  '[nv,Ev]=S.useState({pinned:!1,front:!1,revenue:!1,fb:!1,guest:!1,operations:!1,analytics:!1,system:!1})';

const oldPrefix = 'h.jsxs("div",{className:"scroll-area",children:[';
const idx = s.indexOf(oldPrefix);
if (idx === -1) {
  console.error('scroll-area not found');
  process.exit(1);
}
const rest = s.slice(idx + oldPrefix.length);
const endMarker = '),C.length===0&&h.jsx("div",{className:"no-mod"';
const endIdx = rest.indexOf(endMarker);
if (endIdx === -1) {
  console.error('end marker not found');
  process.exit(1);
}
const oldMiddle = rest.slice(0, endIdx);

const sections = [
  {
    k: 'pinned',
    t: 'Sabitlenmiş Modüller',
    i: [
      'dashboard',
      'front-office',
      'new-reservation',
      'folio',
      'cash-desk',
      'room-rack',
      'housekeeping',
      'checkout',
    ],
  },
  {
    k: 'front',
    t: '🏨 Ön Büro & Operasyon',
    i: [
      'dashboard',
      'front-office',
      'new-reservation',
      'res-list',
      'res-card',
      'reservations-tape',
      'checkout',
      'room-rack',
      'kbs',
      'night-audit',
      'housekeeping',
    ],
  },
  {
    k: 'revenue',
    t: '💰 Gelir & Finans',
    i: [
      'revenue',
      'cash-desk',
      'folio',
      'finance',
      'accounting',
      'budget',
      'cost-control',
      'forecast',
    ],
  },
  {
    k: 'fb',
    t: '🍽️ Yiyecek & İçecek',
    i: ['pos', 'minibar', 'spa', 'entertainment', 'laundry', 'banquet'],
  },
  {
    k: 'guest',
    t: '👥 Misafir İlişkileri',
    i: ['crm', 'loyalty', 'surveys', 'group-res', 'lost-found'],
  },
  {
    k: 'operations',
    t: '⚙️ Operasyon & Destek',
    i: [
      'tech-service',
      'stock',
      'purchasing',
      'hr',
      'smart-room',
      'contracts',
      'tours',
    ],
  },
  {
    k: 'analytics',
    t: '📊 Analiz & Raporlama',
    i: ['global-vision', 'ai-strategy', 'sales-marketing', 'kvkk'],
  },
  {
    k: 'system',
    t: '🔧 Sistem & Entegrasyon',
    i: [
      'channel',
      'crs',
      'it-infra',
      'integrations',
      'system-admin',
      'dashboard-builder',
      'executive-vision',
      'agency-contracts',
    ],
  },
];

const arrJson = sections
  .map(
    (sec) =>
      `{k:"${sec.k}",t:${JSON.stringify(sec.t)},i:[${sec.i.map((x) => `"${x}"`).join(',')}]}`
  )
  .join(',');

// Bundle içinde gerçek template literal olmalı: `nav-item ${...}` — burada \` ve \${ kullan
const newMiddleOut = `([${arrJson}]).map(N=>{const F=C.filter(m=>N.i.includes(m.id));if(F.length===0)return null;const U=!!o&&F.length>0||nv[N.k];return h.jsxs("div",{className:"nav-section",children:[h.jsxs("button",{type:"button",className:"nav-section-head",onClick:()=>Ev(z=>({...z,[N.k]:!z[N.k]})),children:[h.jsx(Ho,{size:14,className:"nav-section-chevron",style:{transform:U?"rotate(90deg)":"rotate(0deg)"}}),h.jsx("span",{className:"nav-section-title",children:N.t}),h.jsx("span",{className:"nav-section-count",children:F.length})]}),U&&h.jsx("div",{className:"nav-section-body",children:F.map(m=>h.jsxs("button",{className:\`nav-item \${e===m.id?"active":""}\`,onClick:()=>t(m.id),children:[h.jsx("div",{className:"ni-icon",style:{color:e===m.id?"white":m.color},children:Bt.cloneElement(m.icon,{size:18})}),h.jsx("span",{children:m.name}),k[m.id]&&h.jsx("span",{className:\`nav-badge \${k[m.id]>0?"red":""}\`,children:k[m.id]})]},m.id))})]},N.k)})`;

if (!s.includes(oldState)) {
  console.error('oldState not found');
  process.exit(1);
}
if (oldMiddle.length < 100) {
  console.error('oldMiddle suspicious', oldMiddle.length);
  process.exit(1);
}

s = s.replace(oldState, newState);
s =
  s.slice(0, idx + oldPrefix.length) +
  newMiddleOut +
  s.slice(idx + oldPrefix.length + oldMiddle.length);

fs.writeFileSync(filePath, s, 'utf8');
execSync(`node --check ${filePath}`, { stdio: 'inherit' });
console.log('OK: 8 grup + Sabitlenmiş, Hub ile uyumlu');
