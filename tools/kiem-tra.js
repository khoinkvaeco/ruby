#!/usr/bin/env node
// Kiem tra nhanh truoc khi day len (khong can trinh duyet): node tools/kiem-tra.js
// 1. Phien ban: ?v= trong moi trang HTML == PHIEN_BAN.so, va muc dau lich su khop so + ngay.
//    Lech la trinh duyet co the giu tep cu -> nguoi dung thay "ban moi" nua voi nua cu.
// 2. Moi cho dat hinh (data-hinh) deu co hinh that trong assets/hinh.js — thieu la o hinh trong tron.
// 2b. Bai hoc mo rong: khoa trung mon/bai co that, muc 1-3, de + loi giai khong rong.
// 3. Trac nghiem: dap an d nam trong danh sach lua chon, khoa mon co that.
const fs = require('fs'), path = require('path'), vm = require('vm');
const goc = path.join(__dirname, '..');
const doc = (p) => fs.readFileSync(path.join(goc, p), 'utf8');
const hop = { window: {}, document: {} }; hop.window = hop; vm.createContext(hop);
['assets/phien-ban.js', 'assets/hinh.js', 'assets/du-lieu.js', 'assets/trac-nghiem.js']
  .concat(fs.readdirSync(path.join(goc, 'assets/bai-hoc')).filter((f) => f.endsWith('.js')).map((f) => 'assets/bai-hoc/' + f)).forEach((p) => vm.runInContext(doc(p), hop, { filename: p }));
const { PHIEN_BAN, HINH, MON, TRAC_NGHIEM } = hop;
const MO_RONG = hop.MO_RONG || {};
let loi = 0;
const sai = (s) => { loi++; console.log('✖ ' + s); };

// 1. Phien ban
const html = fs.readdirSync(goc).filter((f) => f.endsWith('.html'));
if (PHIEN_BAN.lichSu[0].so !== PHIEN_BAN.so) sai(`lichSu[0].so = ${PHIEN_BAN.lichSu[0].so} khác so = ${PHIEN_BAN.so}`);
if (PHIEN_BAN.lichSu[0].ngay !== PHIEN_BAN.ngay) sai(`lichSu[0].ngay khác ngay`);
html.forEach((f) => {
  const s = doc(f);
  const tep = [...s.matchAll(/(?:href|src)="(assets\/[^"]+)"/g)].map((m) => m[1]);
  tep.forEach((t) => { const v = /\?v=([^"&]+)/.exec(t); if (!v || v[1] !== PHIEN_BAN.so) sai(`${f}: ${t} — cần ?v=${PHIEN_BAN.so}`); });
  if (!s.includes('assets/phien-ban.js')) sai(`${f}: thiếu assets/phien-ban.js (chân trang không có số phiên bản)`);
});

// 2. Hinh
const nguon = MON.flatMap((m) => m.bai.map((b) => [`${m.id}/${b.id}`, b.noi])).concat(html.map((f) => [f, doc(f)]));
let dem = 0; const daDung = new Set();
nguon.forEach(([ten, s]) => [...s.matchAll(/data-hinh="([^"]+)"/g)].forEach((m) => {
  dem++; daDung.add(m[1]);
  if (!HINH[m[1]]) sai(`${ten}: hình "${m[1]}" không có trong hinh.js`);
}));
html.forEach((f) => { if (/data-hinh=/.test(doc(f)) && !doc(f).includes('assets/hinh.js')) sai(`${f}: có chỗ đặt hình nhưng không nạp hinh.js`); });
Object.keys(HINH).filter((k) => !daDung.has(k)).forEach((k) => console.log(`  (lưu ý) hình "${k}" chưa được dùng ở đâu`));

// 2b. Bai hoc mo rong + bai tap: khoa phai trung mon/bai co that (sai khoa = noi dung bien mat im lang),
//     moi bai tap co muc 1-3, de va loi giai khong rong. Trang nao hien bai tap phai nap du tep bai-hoc.
let soBt = 0;
Object.entries(MO_RONG).forEach(([mon, ds]) => {
  const m = MON.find((x) => x.id === mon);
  if (!m) return sai(`bai-hoc: môn "${mon}" không có trong du-lieu.js`);
  Object.entries(ds).forEach(([bai, v]) => {
    if (!m.bai.some((b) => b.id === bai)) sai(`bai-hoc: ${mon}/${bai} không khớp chủ đề nào`);
    (v.bt || []).forEach((x, i) => {
      soBt++;
      if (![1, 2, 3].includes(x[0])) sai(`bai-hoc: ${mon}/${bai} bài ${i + 1}: mức "${x[0]}" phải là 1, 2 hoặc 3`);
      if (!String(x[1] || '').trim() || !String(x[2] || '').trim()) sai(`bai-hoc: ${mon}/${bai} bài ${i + 1}: thiếu đề hoặc lời giải`);
    });
    [...String(v.ly || '').matchAll(/data-hinh="([^"]+)"/g)].forEach((h) => { if (!HINH[h[1]]) sai(`bai-hoc: ${mon}/${bai}: hình "${h[1]}" không có`); });
  });
});
const tepBaiHoc = fs.readdirSync(path.join(goc, 'assets/bai-hoc')).filter((f) => f.endsWith('.js'));
['mon.html', 'index.html'].forEach((f) => tepBaiHoc.forEach((t) => { if (!doc(f).includes('assets/bai-hoc/' + t)) sai(`${f}: chưa nạp assets/bai-hoc/${t}`); }));

// 3. Trac nghiem
let cau = 0;
Object.entries(TRAC_NGHIEM).forEach(([k, ds]) => {
  if (!MON.some((m) => m.id === k)) sai(`trắc nghiệm: môn "${k}" không có trong du-lieu.js`);
  ds.forEach((q, i) => { cau++; if (!(Number.isInteger(q.d) && q.d >= 0 && q.d < q.c.length)) sai(`trắc nghiệm ${k} câu ${i + 1}: đáp án d = ${q.d} ngoài khoảng`); });
});

console.log(`Phiên bản ${PHIEN_BAN.so} · ${html.length} trang · ${dem} chỗ đặt hình / ${Object.keys(HINH).length} hình · ${soBt} bài tập · ${cau} câu trắc nghiệm`);
if (loi) { console.log(`✖ ${loi} lỗi`); process.exit(1); }
console.log('✔ Tất cả đạt');
