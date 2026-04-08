import fs from 'fs';
const s = fs.readFileSync('public/hotel/assets/index-CeGZvpZr.js', 'utf8');
const needle = 'h.jsxs("div",{className:"scroll-area"';
const a = s.indexOf(needle);
const b = s.indexOf('C.length===0&&h.jsx("div",{className:"no-mod"');
console.log(s.slice(a, b + 80));
