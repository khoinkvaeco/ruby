// Hinh minh hoa ve bang SVG (khong dung anh ngoai): net ro khi phong to, nhe, chay khong can mang,
// va doi mau theo che do sang/toi vi net ve dung bien CSS (--chu, --chinh, --phu).
// Du lieu bai hoc chi dat cho trong: <figure class="hinh" data-hinh="ten"></figure>;
// mon.html goi veHinh() de dien SVG vao — o tim kiem doc chu cua bai se khong lan chu tren hinh.
(function () {
  var H = {};
  var HONG = '#db2777', XANH = '#16a34a', CAM = '#f59e0b', LAM = '#2563eb';

  function svg(ten, rong, cao, than) {
    // Moi hinh co id mui ten rieng: nhieu SVG cung trang trung id la mui ten an nham hinh khac
    return '<svg viewBox="0 0 ' + rong + ' ' + cao + '" role="img" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><marker id="mt-' + ten + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
      '<path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>' + than + '</svg>';
  }
  function mt(ten) { return ' marker-end="url(#mt-' + ten + ')"'; }
  function chu(x, y, s, them) { return '<text x="' + x + '" y="' + y + '"' + (them || '') + '>' + s + '</text>'; }
  function dt(x1, y1, x2, y2, lop, them) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + (lop || 'n') + '"' + (them || '') + '/>';
  }
  // Duong cong y = f(x) trong he truc co goc (ox, oy), ti le k px / don vi
  function duongCong(f, x0, x1, ox, oy, k) {
    var d = '';
    for (var i = 0; i <= 80; i++) {
      var x = x0 + (x1 - x0) * i / 80;
      d += (i ? 'L' : 'M') + (ox + x * k).toFixed(1) + ',' + (oy - f(x) * k).toFixed(1);
    }
    return d;
  }
  function hop(x, y, w, h, s, mau) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" class="o"' +
      (mau ? ' style="stroke:' + mau + '"' : '') + '/>' + chu(x + w / 2, y + h / 2 + 5, s, ' text-anchor="middle" font-weight="600"');
  }

  /* ---------------- TOÁN ---------------- */
  H.parabol = { chu: 'Đồ thị y = x² (a > 0, bề lõm lên) và y = −½x² (a < 0, bề lõm xuống). Cả hai có đỉnh O và nhận Oy làm trục đối xứng.',
    svg: svg('parabol', 340, 260,
      dt(10, 130, 330, 130, 'n', mt('parabol')) + dt(170, 250, 170, 10, 'n', mt('parabol')) +
      chu(318, 148, 'x') + chu(178, 20, 'y') + chu(176, 146, 'O') +
      [-3, -2, -1, 1, 2, 3].map(function (i) { return dt(170 + i * 25, 127, 170 + i * 25, 133) + chu(166 + i * 25, 146, i, ' font-size="11"'); }).join('') +
      '<path d="' + duongCong(function (x) { return x * x; }, -2.2, 2.2, 170, 130, 25) + '" class="c" fill="none"/>' +
      '<path d="' + duongCong(function (x) { return -x * x / 2; }, -3.2, 3.2, 170, 130, 25) + '" fill="none" style="stroke:' + HONG + '"/>' +
      '<circle cx="195" cy="105" r="3.5" class="cham"/><circle cx="145" cy="105" r="3.5" class="cham"/>' +
      chu(222, 40, 'y = x²', ' class="tc"') + chu(240, 238, 'y = −½x²', ' style="fill:' + HONG + '"') +
      dt(195, 105, 195, 130, 'p') + dt(145, 105, 145, 130, 'p') + chu(200, 100, '(1; 1)', ' font-size="11"')) };

  H['tam-giac'] = { chu: 'Tam giác ABC vuông tại A, xét góc nhọn B: AC là cạnh đối, AB là cạnh kề, BC là cạnh huyền. sin B = AC/BC, cos B = AB/BC, tan B = AC/AB.',
    svg: svg('tam-giac', 340, 230,
      '<polygon points="60,190 280,190 60,50" class="n" fill="none"/>' +
      '<polyline points="60,175 75,175 75,190" class="n" fill="none"/>' +
      '<path d="M248,190 A32,32 0 0 0 253,173" fill="none" style="stroke:' + HONG + '"/>' + chu(196, 184, 'góc B', ' style="fill:' + HONG + '" font-size="11"') +
      chu(44, 204, 'A') + chu(286, 204, 'B') + chu(46, 46, 'C') +
      dt(60, 52, 60, 188, 'c', ' stroke-width="4"') + chu(8, 126, 'cạnh đối', ' class="tc" font-size="12"') +
      dt(62, 190, 278, 190, '', ' stroke-width="4" style="stroke:' + XANH + '"') + chu(140, 216, 'cạnh kề', ' style="fill:' + XANH + '" font-size="12"') +
      chu(180, 110, 'cạnh huyền', ' style="fill:' + CAM + '" font-size="12" transform="rotate(32.5 180 110)"') +
      dt(62, 51, 278, 189, '', ' stroke-width="4" style="stroke:' + CAM + '"')) };

  H['noi-tiep'] = { chu: 'Góc nội tiếp AMB chắn cung AB (cung đậm) bằng nửa góc ở tâm AOB: 60° = ½ · 120°.',
    svg: svg('noi-tiep', 320, 240,
      '<circle cx="160" cy="120" r="90" class="n" fill="none"/>' +
      '<path d="M82.1,165 A90,90 0 0 0 237.9,165" fill="none" stroke-width="5" style="stroke:' + HONG + '"/>' +
      '<polyline points="82.1,165 144.4,31.4 237.9,165" class="c" fill="none"/>' +
      '<polyline points="82.1,165 160,120 237.9,165" fill="none" style="stroke:' + XANH + '"/>' +
      '<circle cx="160" cy="120" r="3.5" class="cham"/>' +
      chu(64, 178, 'A') + chu(244, 178, 'B') + chu(138, 24, 'M') + chu(154, 112, 'O') +
      chu(137, 62, '60°', ' class="tc" font-size="12"') + chu(146, 150, '120°', ' style="fill:' + XANH + '" font-size="12"')) };

  H['tiep-tuyen'] = { chu: 'Tiếp tuyến vuông góc với bán kính tại tiếp điểm. Hai tiếp tuyến MA, MB cắt nhau tại M thì MA = MB và MO là tia phân giác của góc AMB.',
    svg: svg('tiep-tuyen', 340, 240,
      '<circle cx="110" cy="120" r="70" class="n" fill="none"/>' +
      dt(137.2, 55.5, 300, 120, 'c') + dt(137.2, 184.5, 300, 120, 'c') +
      dt(110, 120, 137.2, 55.5, '', ' style="stroke:' + XANH + '"') + dt(110, 120, 137.2, 184.5, '', ' style="stroke:' + XANH + '"') +
      dt(110, 120, 300, 120, 'p') +
      '<circle cx="110" cy="120" r="3.5" class="cham"/>' +
      chu(96, 116, 'O') + chu(130, 46, 'A') + chu(130, 204, 'B') + chu(306, 125, 'M') +
      // dau goc vuong tai tiep diem, dung theo huong ban kinh va tiep tuyen
      '<polyline points="133.3,64.7 142.6,68.4 146.5,59.2" class="n" fill="none"/>' +
      '<polyline points="133.3,175.3 142.6,171.6 146.5,180.8" class="n" fill="none"/>' +
      chu(108, 96, 'R', ' style="fill:' + XANH + '" font-size="12"')) };

  H['hinh-khoi'] = { chu: 'Hình trụ (bán kính đáy r, chiều cao h) · Hình nón (đường sinh l, l² = h² + r²) · Hình cầu (bán kính R). Nét đứt là phần bị che.',
    svg: svg('hinh-khoi', 440, 220,
      // hinh tru
      '<ellipse cx="75" cy="40" rx="48" ry="13" class="c" fill="none"/>' +
      '<path d="M27,170 A48,13 0 0 0 123,170" class="c" fill="none"/><path d="M27,170 A48,13 0 0 1 123,170" class="c p2" fill="none"/>' +
      dt(27, 40, 27, 170, 'c') + dt(123, 40, 123, 170, 'c') + dt(75, 170, 123, 170, '', ' style="stroke:' + HONG + '"') +
      dt(75, 40, 75, 170, 'p') + chu(128, 176, 'r', ' style="fill:' + HONG + '"') + chu(80, 110, 'h') + chu(48, 208, 'Hình trụ', ' font-weight="600"') +
      // hinh non
      '<path d="M170,170 A48,13 0 0 0 266,170" class="c" fill="none"/><path d="M170,170 A48,13 0 0 1 266,170" class="c p2" fill="none"/>' +
      dt(218, 35, 170, 170, 'c') + dt(218, 35, 266, 170, 'c') + dt(218, 35, 218, 170, 'p') + dt(218, 170, 266, 170, '', ' style="stroke:' + HONG + '"') +
      chu(222, 110, 'h') + chu(244, 96, 'l', ' style="fill:' + XANH + '" font-weight="700"') + chu(271, 176, 'r', ' style="fill:' + HONG + '"') + chu(188, 208, 'Hình nón', ' font-weight="600"') +
      // hinh cau
      '<circle cx="370" cy="105" r="58" class="c" fill="none"/>' +
      '<path d="M312,105 A58,15 0 0 0 428,105" class="c" fill="none"/><path d="M312,105 A58,15 0 0 1 428,105" class="c p2" fill="none"/>' +
      dt(370, 105, 428, 105, '', ' style="stroke:' + HONG + '"') + '<circle cx="370" cy="105" r="3" class="cham"/>' +
      chu(394, 124, 'R', ' style="fill:' + HONG + '"') + chu(340, 208, 'Hình cầu', ' font-weight="600"')) };

  H['bieu-do-cot'] = { chu: 'Ví dụ biểu đồ cột tần số: điểm kiểm tra Toán của một lớp 40 học sinh. Tần số tương đối của điểm 8 là 12/40 = 30 %.',
    svg: svg('bieu-do-cot', 360, 230, (function () {
      var ds = [[5, 3], [6, 6], [7, 9], [8, 12], [9, 7], [10, 3]], s = '';
      s += dt(40, 190, 340, 190) + dt(40, 190, 40, 15, 'n', mt('bieu-do-cot')) + chu(46, 22, 'Tần số', ' font-size="11"');
      [0, 4, 8, 12].forEach(function (v) { s += dt(36, 190 - v * 13, 340, 190 - v * 13, 'p') + chu(18, 194 - v * 13, v, ' font-size="11"'); });
      ds.forEach(function (d, i) {
        var x = 58 + i * 46, h = d[1] * 13;
        s += '<rect x="' + x + '" y="' + (190 - h) + '" width="30" height="' + h + '" rx="4" style="fill:' + (d[0] === 8 ? HONG : 'var(--chinh)') + ';opacity:.85"/>' +
          chu(x + 15, 185 - h, d[1], ' text-anchor="middle" font-size="12"') + chu(x + 15, 208, d[0], ' text-anchor="middle"');
      });
      return s + chu(300, 225, 'Điểm', ' font-size="11"');
    })()) };

  /* ---------------- KHTN ---------------- */
  H['con-lac'] = { chu: 'Con lắc dao động: ở vị trí cao nhất (A, B) thế năng lớn nhất, động năng bằng 0; ở vị trí thấp nhất (O) động năng lớn nhất. Bỏ qua ma sát thì cơ năng không đổi.',
    svg: svg('con-lac', 360, 230,
      dt(150, 20, 270, 20, '', ' stroke-width="4" style="stroke:var(--phu)"') +
      '<path d="M124,142.9 A150,150 0 0 0 296,142.9" class="p" fill="none"/>' +
      dt(210, 20, 124, 142.9, 'p') + dt(210, 20, 296, 142.9, 'p') + dt(210, 20, 210, 170, 'n') +
      '<circle cx="124" cy="142.9" r="11" style="fill:' + CAM + ';opacity:.5"/><circle cx="296" cy="142.9" r="11" style="fill:' + CAM + ';opacity:.5"/>' +
      '<circle cx="210" cy="170" r="12" style="fill:' + HONG + '"/>' +
      chu(96, 136, 'A') + chu(310, 136, 'B') + chu(206, 202, 'O') +
      chu(20, 175, 'Wt lớn nhất', ' style="fill:' + CAM + '" font-size="12"') + chu(20, 191, 'Wđ = 0', ' style="fill:' + CAM + '" font-size="12"') +
      chu(150, 222, 'Wđ lớn nhất, Wt nhỏ nhất', ' style="fill:' + HONG + '" font-size="12"')) };

  H['khuc-xa'] = { chu: 'Khúc xạ ánh sáng: tia sáng đi từ không khí vào nước bị gãy khúc tại mặt phân cách, góc khúc xạ r nhỏ hơn góc tới i. Một phần ánh sáng bị phản xạ trở lại.',
    svg: svg('khuc-xa', 380, 250,
      '<rect x="10" y="125" width="360" height="115" style="fill:' + LAM + ';opacity:.15"/>' +
      dt(10, 125, 370, 125) + dt(190, 15, 190, 240, 'p') +
      dt(100, 35, 188, 123, '', mt('khuc-xa') + ' style="stroke:' + CAM + ';color:' + CAM + '" stroke-width="2.5"') +
      dt(190, 125, 240, 235, '', mt('khuc-xa') + ' style="stroke:' + CAM + ';color:' + CAM + '" stroke-width="2.5"') +
      dt(190, 125, 270, 45, '', mt('khuc-xa') + ' style="stroke:' + CAM + ';color:' + CAM + ';opacity:.4"') +
      '<path d="M190,85 A40,40 0 0 0 161.7,96.7" fill="none" class="n"/>' + chu(166, 80, 'i') +
      '<path d="M190,170 A45,45 0 0 0 208.5,166" fill="none" class="n"/>' + chu(196, 188, 'r') +
      chu(20, 110, 'Không khí') + chu(20, 228, 'Nước') + chu(196, 26, 'Pháp tuyến', ' font-size="11"') +
      chu(70, 30, 'Tia tới', ' font-size="12"') + chu(248, 232, 'Tia khúc xạ', ' font-size="12"') + chu(262, 40, 'Tia phản xạ', ' font-size="11" opacity=".7"')) };

  H['thau-kinh'] = { chu: 'Dựng ảnh qua thấu kính hội tụ (f = OF = OF\'): vật AB đặt trong khoảng f < d < 2f cho ảnh thật A\'B\' ngược chiều, lớn hơn vật. Ba tia đặc biệt gặp nhau tại B\'.',
    svg: svg('thau-kinh', 420, 230,
      dt(10, 110, 410, 110) +
      dt(210, 20, 210, 200, '', ' stroke-width="3" style="stroke:' + LAM + '"') +
      '<path d="M203,30 L210,18 L217,30 M203,190 L210,202 L217,190" fill="none" style="stroke:' + LAM + '" stroke-width="3"/>' +
      dt(110, 110, 110, 62, '', mt('thau-kinh') + ' stroke-width="3" style="stroke:' + XANH + ';color:' + XANH + '"') +
      dt(360, 110, 360, 183, '', mt('thau-kinh') + ' stroke-width="3" style="stroke:' + HONG + ';color:' + HONG + '"') +
      // tia 1: song song truc chinh -> qua F'
      '<polyline points="110,60 210,60 360,185" fill="none" style="stroke:' + CAM + '"/>' +
      // tia 2: qua quang tam
      dt(110, 60, 360, 185, '', ' style="stroke:' + CAM + ';opacity:.8"') +
      // tia 3: qua F -> lo song song
      '<polyline points="110,60 210,185 360,185" fill="none" style="stroke:' + CAM + ';opacity:.6"/>' +
      [[150, 'F'], [270, 'F\'']].map(function (p) { return '<circle cx="' + p[0] + '" cy="110" r="3.5" class="cham"/>' + chu(p[0] - 4, 128, p[1]); }).join('') +
      '<circle cx="210" cy="110" r="3.5" class="cham"/>' + chu(214, 126, 'O') +
      chu(96, 126, 'A') + chu(96, 58, 'B') + chu(364, 104, 'A\'') + chu(364, 200, 'B\'') +
      chu(14, 222, 'Vật AB', ' style="fill:' + XANH + '" font-size="12"') + chu(300, 222, 'Ảnh thật A\'B\'', ' style="fill:' + HONG + '" font-size="12"')) };

  function dienTro(x, y, nhan, doc) { // dien tro: hinh chu nhat nho
    return doc ? '<rect x="' + (x - 9) + '" y="' + (y - 22) + '" width="18" height="44" class="o2"/>' + chu(x + 14, y + 4, nhan, ' font-size="12"')
      : '<rect x="' + (x - 22) + '" y="' + (y - 9) + '" width="44" height="18" class="o2"/>' + chu(x - 9, y - 14, nhan, ' font-size="12"');
  }
  function pin(x, y) { // nguon dien: vach dai (+) va vach ngan (-)
    return '<rect x="' + (x - 8) + '" y="' + (y - 16) + '" width="16" height="32" style="fill:var(--the)"/>' +
      dt(x - 4, y - 14, x - 4, y + 14, 'n', ' stroke-width="2.5"') + dt(x + 4, y - 7, x + 4, y + 7, 'n', ' stroke-width="4"') +
      chu(x - 14, y + 28, '+  −', ' font-size="11"');
  }
  H['mach-dien'] = { chu: 'Trái: đoạn mạch nối tiếp — dòng điện như nhau, Rtđ = R₁ + R₂. Phải: đoạn mạch song song — hiệu điện thế như nhau, 1/Rtđ = 1/R₁ + 1/R₂.',
    svg: svg('mach-dien', 440, 220,
      '<rect x="25" y="40" width="160" height="130" class="n" fill="none"/>' +
      '<rect x="58" y="31" width="44" height="18" class="o2"/><rect x="112" y="31" width="44" height="18" class="o2"/>' +
      chu(70, 24, 'R₁', ' font-size="12"') + chu(124, 24, 'R₂', ' font-size="12"') + pin(105, 170) +
      dt(25, 105, 25, 75, '', mt('mach-dien') + ' style="stroke:' + HONG + ';color:' + HONG + '" stroke-width="2"') + chu(32, 98, 'I', ' style="fill:' + HONG + '"') +
      chu(62, 212, 'Nối tiếp', ' font-weight="600"') +
      '<rect x="245" y="40" width="170" height="130" class="n" fill="none"/>' +
      dt(275, 40, 275, 110) + dt(385, 40, 385, 110) + dt(275, 110, 385, 110) +
      '<circle cx="275" cy="40" r="3.5" class="cham"/><circle cx="385" cy="40" r="3.5" class="cham"/>' +
      '<rect x="308" y="31" width="44" height="18" class="o2"/><rect x="308" y="101" width="44" height="18" class="o2"/>' +
      chu(321, 24, 'R₁', ' font-size="12"') + chu(321, 136, 'R₂', ' font-size="12"') + pin(330, 170) +
      dt(245, 120, 245, 90, '', mt('mach-dien') + ' style="stroke:' + HONG + ';color:' + HONG + '" stroke-width="2"') + chu(252, 112, 'I', ' style="fill:' + HONG + '"') +
      chu(292, 212, 'Song song', ' font-weight="600"')) };

  H['day-hoat-dong'] = { chu: 'Dãy hoạt động hoá học của kim loại: càng về bên trái kim loại càng mạnh. Kim loại đứng trước H đẩy được hydrogen ra khỏi dung dịch acid.',
    svg: svg('day-hoat-dong', 460, 120, (function () {
      var ds = ['K', 'Na', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Pb', 'H', 'Cu', 'Ag', 'Au'], s = '';
      ds.forEach(function (e, i) {
        var x = 14 + i * 37, laH = e === 'H';
        s += '<rect x="' + x + '" y="30" width="32" height="32" rx="7" style="fill:' + (laH ? CAM : 'var(--chinh)') + ';opacity:' + (laH ? 1 : (1 - i * 0.06)) + '"/>' +
          chu(x + 16, 51, e, ' text-anchor="middle" font-weight="700" style="fill:#fff"');
      });
      s += dt(20, 85, 440, 85, 'n', mt('day-hoat-dong')) + chu(20, 106, 'Mạnh', ' font-size="12"') + chu(398, 106, 'Yếu', ' font-size="12"') +
        chu(14, 20, 'Tác dụng với acid → H₂', ' font-size="12" style="fill:' + XANH + '"') + chu(345, 20, 'Không tác dụng', ' font-size="12" style="fill:' + HONG + '"');
      return s;
    })()) };

  H.adn = { chu: 'Phân tử DNA là chuỗi xoắn kép gồm hai mạch; các nucleotide liên kết theo nguyên tắc bổ sung: A – T, G – C.',
    svg: svg('adn', 440, 200, (function () {
      var s = '', cap = ['AT', 'GC', 'TA', 'CG', 'AT', 'AT', 'GC', 'CG', 'TA', 'GC', 'AT', 'CG', 'TA', 'GC'];
      var MAU = { A: HONG, T: CAM, G: XANH, C: LAM };
      cap.forEach(function (c, i) {
        var x = 30 + i * 28, y1 = 100 + 55 * Math.sin(x / 40), y2 = 100 - 55 * Math.sin(x / 40), giua = (y1 + y2) / 2;
        s += dt(x, y1, x, giua, '', ' stroke-width="5" style="stroke:' + MAU[c[0]] + '"') + dt(x, giua, x, y2, '', ' stroke-width="5" style="stroke:' + MAU[c[1]] + '"');
      });
      s += '<path d="' + duongCong(function (x) { return -55 * Math.sin((30 + x) / 40); }, 0, 380, 30, 100, 1) + '" fill="none" class="n" stroke-width="3"/>';
      s += '<path d="' + duongCong(function (x) { return 55 * Math.sin((30 + x) / 40); }, 0, 380, 30, 100, 1) + '" fill="none" class="n" stroke-width="3"/>';
      ['A', 'T', 'G', 'C'].forEach(function (k, i) { s += '<rect x="' + (120 + i * 55) + '" y="180" width="14" height="14" rx="3" style="fill:' + MAU[k] + '"/>' + chu(138 + i * 55, 192, k, ' font-weight="700"'); });
      return s;
    })()) };

  H.punnett = { chu: 'Bảng Punnett phép lai Aa × Aa (quy luật phân li của Mendel): kiểu gen 1 AA : 2 Aa : 1 aa → kiểu hình 3 trội : 1 lặn.',
    svg: svg('punnett', 300, 230, (function () {
      var s = '', o = [['AA', 1], ['Aa', 1], ['Aa', 1], ['aa', 0]];
      s += chu(150, 22, '♂ giao tử', ' text-anchor="middle" font-size="12"') + chu(30, 150, '♀ giao tử', ' font-size="12" transform="rotate(-90 30 150)" text-anchor="middle"');
      s += chu(140, 52, 'A', ' text-anchor="middle" font-weight="700"') + chu(220, 52, 'a', ' text-anchor="middle" font-weight="700"');
      s += chu(64, 110, 'A', ' text-anchor="middle" font-weight="700"') + chu(64, 190, 'a', ' text-anchor="middle" font-weight="700"');
      o.forEach(function (x, i) {
        var cx = 100 + (i % 2) * 80, cy = 65 + Math.floor(i / 2) * 80;
        s += '<rect x="' + cx + '" y="' + cy + '" width="80" height="80" class="n" style="fill:' + (x[1] ? 'var(--chinh-nhat)' : '#fef3c7') + '"/>' +
          chu(cx + 40, cy + 47, x[0], ' text-anchor="middle" font-size="20" font-weight="700"' + (x[1] ? '' : ' style="fill:#78350f"'));
      });
      return s;
    })()) };

  H['gen-protein'] = { chu: 'Từ gen đến tính trạng: DNA phiên mã thành mRNA (A–U, T–A, G–C, C–G), mRNA được dịch mã tại ribosome thành chuỗi amino acid (protein), protein biểu hiện thành tính trạng.',
    svg: svg('gen-protein', 460, 110,
      hop(10, 30, 90, 46, 'Gen (DNA)', LAM) + hop(130, 30, 90, 46, 'mRNA', XANH) + hop(250, 30, 90, 46, 'Protein', HONG) + hop(370, 30, 80, 46, 'Tính trạng', CAM) +
      dt(102, 53, 127, 53, 'n', mt('gen-protein')) + dt(222, 53, 247, 53, 'n', mt('gen-protein')) + dt(342, 53, 367, 53, 'n', mt('gen-protein')) +
      chu(115, 98, 'phiên mã', ' font-size="11" text-anchor="middle"') + chu(235, 98, 'dịch mã', ' font-size="11" text-anchor="middle"')) };

  function tb(x, y, r, n, mau) { // te bao + so NST
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="none" style="stroke:' + mau + '" stroke-width="2.5"/>' + chu(x, y + 5, n, ' text-anchor="middle" font-weight="700"');
  }
  H['phan-bao'] = { chu: 'Nguyên phân: một tế bào 2n tạo 2 tế bào con 2n giống hệt mẹ. Giảm phân: một tế bào 2n qua hai lần phân bào tạo 4 tế bào n (giao tử).',
    svg: svg('phan-bao', 460, 200,
      chu(70, 20, 'Nguyên phân', ' text-anchor="middle" font-weight="600"') + tb(70, 60, 26, '2n', LAM) +
      dt(58, 86, 40, 120, 'n', mt('phan-bao')) + dt(82, 86, 100, 120, 'n', mt('phan-bao')) + tb(34, 148, 24, '2n', LAM) + tb(106, 148, 24, '2n', LAM) +
      chu(310, 20, 'Giảm phân', ' text-anchor="middle" font-weight="600"') + tb(310, 60, 26, '2n', HONG) +
      dt(298, 86, 260, 108, 'n', mt('phan-bao')) + dt(322, 86, 360, 108, 'n', mt('phan-bao')) +
      tb(250, 125, 18, 'n', CAM) + tb(370, 125, 18, 'n', CAM) +
      dt(242, 143, 222, 160, 'n', mt('phan-bao')) + dt(258, 143, 278, 160, 'n', mt('phan-bao')) + dt(362, 143, 342, 160, 'n', mt('phan-bao')) + dt(378, 143, 398, 160, 'n', mt('phan-bao')) +
      tb(215, 178, 15, 'n', XANH) + tb(285, 178, 15, 'n', XANH) + tb(335, 178, 15, 'n', XANH) + tb(405, 178, 15, 'n', XANH) +
      chu(150, 196, 'giao tử →', ' font-size="11"')) };

  /* ---------------- MÔN KHÁC ---------------- */
  H['moc-su'] = { chu: 'Các mốc lớn của lịch sử Việt Nam từ 1930 đến 1986.',
    svg: svg('moc-su', 480, 170, (function () {
      var ds = [[1930, 'Thành lập', 'Đảng CSVN'], [1945, 'Cách mạng', 'Tháng Tám'], [1954, 'Điện Biên', 'Phủ'], [1973, 'Hiệp định', 'Pa-ri'], [1975, 'Thống nhất', 'đất nước'], [1986, 'Đổi mới', '']];
      var s = dt(20, 80, 465, 80, 'c', mt('moc-su') + ' stroke-width="3"');
      ds.forEach(function (d, i) {
        var x = 40 + i * 78, tren = i % 2 === 0;
        s += '<circle cx="' + x + '" cy="80" r="7" style="fill:' + [HONG, CAM, XANH, LAM, HONG, CAM][i] + '"/>' +
          chu(x, tren ? 62 : 108, d[0], ' text-anchor="middle" font-weight="700"') +
          chu(x, tren ? 30 : 130, d[1], ' text-anchor="middle" font-size="11"') + chu(x, tren ? 44 : 144, d[2], ' text-anchor="middle" font-size="11"');
      });
      return s;
    })()) };

  H['so-do-khoi'] = { chu: 'Sơ đồ khối thuật toán xếp loại điểm: hình thoi là điều kiện (rẽ nhánh), hình chữ nhật là xử lí, hình bo tròn là bắt đầu / kết thúc.',
    svg: svg('so-do-khoi', 420, 310,
      '<rect x="150" y="10" width="120" height="34" rx="17" class="o"/>' + chu(210, 32, 'Bắt đầu', ' text-anchor="middle"') +
      dt(210, 44, 210, 64, 'n', mt('so-do-khoi')) +
      '<polygon points="170,66 250,66 240,96 160,96" class="o"/>' + chu(205, 86, 'Nhập điểm', ' text-anchor="middle" font-size="12"') +
      dt(210, 96, 210, 116, 'n', mt('so-do-khoi')) +
      '<polygon points="210,118 280,153 210,188 140,153" class="o" style="stroke:' + CAM + '"/>' + chu(210, 158, 'điểm ≥ 5 ?', ' text-anchor="middle" font-size="12"') +
      dt(280, 153, 320, 153) + dt(320, 153, 320, 205, 'n', mt('so-do-khoi')) + chu(288, 146, 'Đúng', ' font-size="11" style="fill:' + XANH + '"') +
      dt(140, 153, 100, 153) + dt(100, 153, 100, 205, 'n', mt('so-do-khoi')) + chu(104, 146, 'Sai', ' font-size="11" style="fill:' + HONG + '"') +
      '<rect x="270" y="207" width="100" height="32" class="o" style="stroke:' + XANH + '"/>' + chu(320, 228, 'In "Đạt"', ' text-anchor="middle" font-size="12"') +
      '<rect x="40" y="207" width="120" height="32" class="o" style="stroke:' + HONG + '"/>' + chu(100, 228, 'In "Chưa đạt"', ' text-anchor="middle" font-size="12"') +
      dt(320, 239, 320, 262) + dt(100, 239, 100, 262) + dt(100, 262, 320, 262) + dt(210, 262, 210, 268, 'n', mt('so-do-khoi')) +
      '<rect x="150" y="270" width="120" height="34" rx="17" class="o"/>' + chu(210, 292, 'Kết thúc', ' text-anchor="middle"')) };

  window.HINH = H;
  // Dien SVG vao moi <figure class="hinh" data-hinh="..."> chua ve trong vung goc
  window.veHinh = function (goc) {
    (goc || document).querySelectorAll('figure.hinh[data-hinh]').forEach(function (f) {
      var h = H[f.getAttribute('data-hinh')];
      if (!h || f.querySelector('svg')) return;
      f.innerHTML = h.svg;
      var cap = document.createElement('figcaption');
      cap.textContent = h.chu;
      f.appendChild(cap);
    });
  };
})();
