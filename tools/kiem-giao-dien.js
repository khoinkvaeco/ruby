#!/usr/bin/env node
// Kiem giao dien bang trinh duyet that (can Playwright + Chromium): node tools/kiem-giao-dien.js
// Sinh ra tu loi that 31/10/2026 (ban 1.6.0, nguoi dung bao kem anh iPhone): mot luat CSS viet SAU @media da de len
// luat dien thoai -> tren 390 px cot noi dung chi con 240 px. Cac phep kiem cu chi do "co tran ngang khong" nen bo sot.
// Kiem:
//  1. Moi trang x 10 kho man (320 → 1366 px): khong tran ngang, thanh dau 1 hang (≤ 60 px).
//  2. Trang mon: cot noi dung chiem ≥ 95 % be ngang KHA DUNG (tru le, tru muc luc neu dang hien).
//  3. Thanh nhay "Li thuyet · Mo rong · Bai tap" khong bi cat tren dien thoai.
// Da gai lai loi: bo luat luoi dien thoai -> muc 2 bao 240/354 px; bo nut ☰ o 861–1020 px -> muc 1 bao tran 103 px.
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { console.log('Bỏ qua: chưa có Playwright (npm i -D playwright).'); process.exit(0); }
(async () => {
  const goc = 'file://' + path.join(__dirname, '..') + '/';
  const KHO = [320, 360, 390, 430, 600, 768, 900, 1000, 1024, 1366];
  const TRANG = ['index.html', 'mon.html', 'mon.html?mon=toan', 'mon.html?mon=su-dia#dia-vung', 'lap-trinh.html', 'trac-nghiem.html',
    'trac-nghiem.html?mon=khtn', 'on-thi.html', 'cap-nhat-2026.html', 'ban-do.html', 'phien-ban.html'];
  const b = await chromium.launch(); let loi = 0, dem = 0; const loiJs = [];
  const sai = (s) => { loi++; console.log('✖ ' + s); };
  for (const w of KHO) {
    const p = await b.newPage({ viewport: { width: w, height: 800 } });
    p.on('pageerror', (e) => loiJs.push(w + 'px: ' + e.message));
    for (const u of TRANG) {
      await p.goto(goc + u); dem++;
      const r = await p.evaluate(() => {
        const o = { tran: document.documentElement.scrollWidth - innerWidth, dau: document.querySelector('header.dau').offsetHeight };
        const cd = document.querySelector('.chu-de');
        if (cd) {
          const m = document.querySelector('main'), cs = getComputedStyle(m);
          const ml = document.getElementById('mucLuc'), mlHien = ml && getComputedStyle(ml).display !== 'none';
          const kd = m.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - (mlHien ? ml.getBoundingClientRect().width + 20 : 0);
          o.tile = cd.getBoundingClientRect().width / kd; o.cot = Math.round(cd.getBoundingClientRect().width); o.kd = Math.round(kd);
          const n = document.querySelector('.nhay'); o.nhayCat = n && n.scrollWidth > n.clientWidth + 1;
        }
        return o;
      });
      if (r.tran > 0) sai(`${w}px ${u}: tràn ngang ${r.tran}px`);
      if (r.dau > 60) sai(`${w}px ${u}: thanh đầu cao ${r.dau}px (rớt dòng)`);
      if (r.tile !== undefined && r.tile < 0.95) sai(`${w}px ${u}: cột nội dung ${r.cot}/${r.kd}px (${Math.round(r.tile * 100)}%)`);
      if (r.nhayCat) sai(`${w}px ${u}: thanh Lí thuyết · Mở rộng · Bài tập bị cắt`);
    }
    await p.close();
  }
  await b.close();
  loiJs.forEach((x) => sai('lỗi JavaScript ' + x));
  console.log(`${dem} lượt (${TRANG.length} trang × ${KHO.length} khổ màn)`);
  if (loi) { console.log(`✖ ${loi} lỗi`); process.exit(1); }
  console.log('✔ Giao diện đạt ở mọi khổ màn');
})();
