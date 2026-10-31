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


  /* ================= BỔ SUNG (rà soát toàn bộ) ================= */
  // Hop nhieu dong: '|' trong nhan = xuong dong
  function hop2(x, y, w, h, s, mau, co) {
    var dong = String(s).split('|'), co_ = co || 12, s2 = '';
    dong.forEach(function (d, i) {
      s2 += chu(x + w / 2, y + h / 2 + 4 + (i - (dong.length - 1) / 2) * (co_ + 3), d, ' text-anchor="middle" font-size="' + co_ + '" font-weight="600"');
    });
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" class="o"' + (mau ? ' style="stroke:' + mau + '"' : '') + '/>' + s2;
  }
  var BANG_MAU = [LAM, XANH, HONG, CAM, '#7c3aed', '#0891b2'];
  // So do ngang: cac hop noi bang mui ten (nhan duoi mui ten tuy chon)
  function luong(ten, ds, nhan, cao) {
    var n = ds.length, gap = 26, w = (450 - (n - 1) * gap) / n, h = cao || 52, s = '';
    ds.forEach(function (d, i) {
      var x = 5 + i * (w + gap);
      s += hop2(x, 20, w, h, d, BANG_MAU[i % BANG_MAU.length], n > 4 ? 11 : 12);
      if (i < n - 1) {
        s += dt(x + w + 2, 20 + h / 2, x + w + gap - 3, 20 + h / 2, 'n', mt(ten));
        if (nhan && nhan[i]) s += chu(x + w + gap / 2, 20 + h + 18, nhan[i], ' text-anchor="middle" font-size="11"');
      }
    });
    return svg(ten, 460, h + (nhan ? 50 : 40), s);
  }
  // So do doc: cac hop chong len nhau
  function doc(ten, ds) {
    var s = '';
    ds.forEach(function (d, i) {
      var y = 8 + i * 48;
      s += hop2(80, y, 300, 34, d, BANG_MAU[i % BANG_MAU.length]);
      if (i < ds.length - 1) s += dt(230, y + 35, 230, y + 46, 'n', mt(ten));
    });
    return svg(ten, 460, ds.length * 48, s);
  }
  // Truc moc thoi gian: ds = [[nam, dong1, dong2], ...]
  function trucMoc(ten, ds) {
    var buoc = 430 / ds.length, s = dt(15, 80, 465, 80, 'c', mt(ten) + ' stroke-width="3"');
    ds.forEach(function (d, i) {
      var x = 30 + buoc / 2 + i * buoc - 10, tren = i % 2 === 0;
      s += '<circle cx="' + x + '" cy="80" r="7" style="fill:' + BANG_MAU[i % BANG_MAU.length] + '"/>' +
        chu(x, tren ? 62 : 108, d[0], ' text-anchor="middle" font-weight="700" font-size="13"') +
        chu(x, tren ? 30 : 128, d[1], ' text-anchor="middle" font-size="11"') + chu(x, tren ? 44 : 142, d[2] || '', ' text-anchor="middle" font-size="11"');
    });
    return svg(ten, 480, 160, s);
  }
  function truc(ox, oy, r, ten) { // truc toa do nho cho cac o hinh nho
    return dt(ox - r, oy, ox + r, oy, 'n', mt(ten)) + dt(ox, oy + r - 10, ox, oy - r + 10, 'n', mt(ten));
  }
  function nguyenTu(x, y, s) { return chu(x, y + 5, s, ' text-anchor="middle" font-weight="700" font-size="15"'); }
  function lk(x1, y1, x2, y2, doi) { // lien ket hoa hoc, cat bot hai dau de khong de len chu
    var dx = x2 - x1, dy = y2 - y1, d = Math.sqrt(dx * dx + dy * dy), ux = dx / d, uy = dy / d, a = 11;
    var p = [x1 + ux * a, y1 + uy * a, x2 - ux * a, y2 - uy * a];
    if (!doi) return dt(p[0], p[1], p[2], p[3]);
    return dt(p[0] - uy * 3, p[1] + ux * 3, p[2] - uy * 3, p[3] + ux * 3) + dt(p[0] + uy * 3, p[1] - ux * 3, p[2] + uy * 3, p[3] - ux * 3);
  }

  /* ---- Toán ---- */
  H['hpt-vi-tri'] = { chu: 'Mỗi phương trình bậc nhất hai ẩn là một đường thẳng. Hai đường thẳng cắt nhau → hệ có 1 nghiệm (toạ độ giao điểm); song song → vô nghiệm; trùng nhau → vô số nghiệm.',
    svg: svg('hpt-vi-tri', 470, 200,
      truc(80, 90, 70, 'hpt-vi-tri') + dt(25, 145, 140, 30, 'c') + dt(25, 50, 140, 130, '', ' style="stroke:' + HONG + '" stroke-width="2.5"') +
      '<circle cx="82.4" cy="88" r="4.5" style="fill:' + CAM + '"/>' + chu(80, 185, 'Cắt nhau → 1 nghiệm', ' text-anchor="middle" font-size="12"') +
      truc(235, 90, 70, 'hpt-vi-tri') + dt(180, 140, 290, 50, 'c') + dt(180, 115, 290, 25, '', ' style="stroke:' + HONG + '" stroke-width="2.5"') +
      chu(235, 185, 'Song song → vô nghiệm', ' text-anchor="middle" font-size="12"') +
      truc(390, 90, 70, 'hpt-vi-tri') + dt(335, 140, 445, 40, 'c', ' stroke-width="6" opacity=".45"') + dt(335, 140, 445, 40, '', ' style="stroke:' + HONG + '" stroke-dasharray="7 5" stroke-width="2.5"') +
      chu(390, 185, 'Trùng nhau → vô số nghiệm', ' text-anchor="middle" font-size="12"')) };

  H['truc-so'] = { chu: 'Tập nghiệm x < 3 trên trục số: phần tô đậm là nghiệm, dấu ")" tại 3 nghĩa là KHÔNG lấy số 3 (x ≤ 3 thì dùng "]"). Sách giáo khoa thường gạch bỏ phần không thuộc tập nghiệm (bên phải).',
    svg: svg('truc-so', 460, 110, (function () {
      var s = dt(10, 60, 450, 60, 'n', mt('truc-so')), x3 = 60 + 5 * 45;
      s += dt(10, 60, x3, 60, '', ' stroke-width="7" style="stroke:var(--chinh);opacity:.75"');
      for (var i = 0; i <= 8; i++) { var x = 60 + i * 45; s += dt(x, 54, x, 66) + chu(x, 88, i - 2, ' text-anchor="middle" font-size="13"'); }
      for (var j = x3 + 8; j < 440; j += 10) s += dt(j, 50, j + 8, 40, '', ' style="stroke:' + HONG + '"');
      return s + chu(x3, 67, ')', ' text-anchor="middle" font-size="26" font-weight="700" class="tc"') + chu(80, 30, 'x < 3', ' class="tc" font-weight="700"') + chu(360, 30, 'bị gạch bỏ', ' font-size="11" style="fill:' + HONG + '"');
    })()) };

  H.delta = { chu: 'Số nghiệm của ax² + bx + c = 0 (vẽ với a > 0) chính là số giao điểm của parabol với trục hoành: Δ > 0 cắt tại 2 điểm, Δ = 0 tiếp xúc (nghiệm kép), Δ < 0 không cắt (vô nghiệm).',
    svg: svg('delta', 470, 200, [[-1, 'Δ > 0: 2 nghiệm'], [0, 'Δ = 0: nghiệm kép'], [1, 'Δ < 0: vô nghiệm']].map(function (p, i) {
      var ox = 80 + i * 155, oy = 140, s = dt(ox - 70, oy, ox + 70, oy, 'n', mt('delta')) + dt(ox, oy + 25, ox, 15, 'p');
      s += '<path d="' + duongCong(function (x) { return x * x + p[0]; }, -1.5, 1.5, ox, oy, 38) + '" class="c" fill="none"/>';
      if (p[0] === -1) s += '<circle cx="' + (ox - 38) + '" cy="' + oy + '" r="4.5" style="fill:' + HONG + '"/><circle cx="' + (ox + 38) + '" cy="' + oy + '" r="4.5" style="fill:' + HONG + '"/>';
      if (p[0] === 0) s += '<circle cx="' + ox + '" cy="' + oy + '" r="4.5" style="fill:' + HONG + '"/>';
      return s + chu(ox, 190, p[1], ' text-anchor="middle" font-size="12"');
    }).join('')) };

  H['he-thuc-luong'] = { chu: 'Tam giác ABC vuông tại A, đường cao AH = h. Cạnh huyền BC = a, AC = b, AB = c; hình chiếu BH = c\', CH = b\'. Ta có b² = a·b\', c² = a·c\', h² = b\'·c\', b·c = a·h.',
    svg: svg('he-thuc-luong', 380, 230,
      '<polygon points="40,190 340,190 148,46" class="n" fill="none"/>' + dt(148, 46, 148, 190, '', ' style="stroke:' + HONG + '" stroke-width="2.5"') +
      '<polyline points="140.8,55.6 150.4,62.8 157.6,53.2" class="n" fill="none"/><polyline points="148,178 160,178 160,190" class="n" fill="none"/>' +
      chu(24, 196, 'B') + chu(346, 196, 'C') + chu(142, 38, 'A') + chu(143, 208, 'H') +
      chu(80, 110, 'c', ' class="tc" font-weight="700"') + chu(250, 110, 'b', ' class="tc" font-weight="700"') + chu(154, 130, 'h', ' style="fill:' + HONG + '" font-weight="700"') +
      chu(88, 182, 'c\'', ' style="fill:' + XANH + '"') + chu(240, 182, 'b\'', ' style="fill:' + XANH + '"') + chu(190, 224, 'a = BC = b\' + c\'', ' text-anchor="middle" font-size="12"')) };

  H['tu-giac-nt'] = { chu: 'Tứ giác ABCD có bốn đỉnh nằm trên một đường tròn (tứ giác nội tiếp) ⇔ tổng hai góc đối bằng 180°: Â + Ĉ = 180°, B̂ + D̂ = 180°.',
    svg: svg('tu-giac-nt', 320, 240,
      '<circle cx="160" cy="120" r="90" class="n" fill="none"/>' +
      '<polygon points="82.1,75 82.1,165 237.9,165 205,42.1" class="c" fill="none"/>' +
      '<circle cx="82.1" cy="75" r="16" style="fill:' + HONG + ';opacity:.25"/><circle cx="237.9" cy="165" r="16" style="fill:' + HONG + ';opacity:.25"/>' +
      '<circle cx="82.1" cy="165" r="16" style="fill:' + XANH + ';opacity:.25"/><circle cx="205" cy="42.1" r="16" style="fill:' + XANH + ';opacity:.25"/>' +
      chu(62, 72, 'A') + chu(62, 180, 'B') + chu(244, 182, 'C') + chu(210, 34, 'D') + '<circle cx="160" cy="120" r="3" class="cham"/>' + chu(164, 116, 'O', ' font-size="12"') +
      chu(160, 232, 'Â + Ĉ = 180°', ' text-anchor="middle" style="fill:' + HONG + '" font-size="13"')) };

  H['da-giac-deu'] = { chu: 'Lục giác đều: 6 cạnh bằng nhau, mỗi góc (6 − 2)·180°/6 = 120°. Có đường tròn ngoại tiếp (đi qua các đỉnh) và đường tròn nội tiếp (tiếp xúc các cạnh) cùng tâm O. Phép quay tâm O góc 60° biến lục giác thành chính nó.',
    svg: svg('da-giac-deu', 320, 235,
      '<circle cx="160" cy="115" r="85" class="p" fill="none"/>' + '<circle cx="160" cy="115" r="73.6" fill="none" style="stroke:' + XANH + '" stroke-dasharray="3 3"/>' +
      '<polygon points="245,115 202.5,41.4 117.5,41.4 75,115 117.5,188.6 202.5,188.6" class="c" fill="var(--chinh-nhat)" fill-opacity=".5"/>' +
      dt(160, 115, 245, 115, '', ' style="stroke:' + HONG + '"') + chu(196, 110, 'R', ' style="fill:' + HONG + '" font-size="12"') +
      dt(160, 115, 160, 188.6, '', ' style="stroke:' + XANH + '"') + chu(165, 160, 'r', ' style="fill:' + XANH + '" font-size="12"') +
      '<circle cx="160" cy="115" r="3" class="cham"/>' + chu(146, 112, 'O', ' font-size="12"') + chu(222, 50, '120°', ' font-size="12"') +
      chu(160, 228, 'ngoại tiếp R (nét đứt) · nội tiếp r (xanh)', ' text-anchor="middle" font-size="11"')) };

  H['cay-xac-suat'] = { chu: 'Sơ đồ cây khi gieo hai đồng xu: không gian mẫu có 4 kết quả đồng khả năng SS, SN, NS, NN. Biến cố "có đúng một mặt sấp" gồm 2 kết quả (tô màu) → xác suất 2/4 = 1/2.',
    svg: svg('cay-xac-suat', 420, 220, (function () {
      var s = '', la = [[280, 30, 'S', 'SS', 0], [280, 85, 'N', 'SN', 1], [280, 140, 'S', 'NS', 1], [280, 195, 'N', 'NN', 0]];
      s += dt(45, 112, 150, 58, 'n') + dt(45, 112, 150, 167, 'n') + '<circle cx="40" cy="112" r="6" class="cham"/>';
      s += hop2(150, 42, 36, 32, 'S', LAM) + hop2(150, 151, 36, 32, 'N', LAM) + chu(70, 74, 'Lần 1', ' font-size="11"') + chu(210, 18, 'Lần 2', ' font-size="11"');
      la.forEach(function (l, i) {
        var y0 = i < 2 ? 58 : 167;
        s += dt(188, y0, 262, l[1], 'n') + hop2(262, l[1] - 15, 36, 30, l[2], XANH);
        s += '<rect x="320" y="' + (l[1] - 14) + '" width="64" height="28" rx="14" style="fill:' + (l[4] ? HONG : 'var(--vien)') + ';opacity:' + (l[4] ? .85 : .7) + '"/>' +
          chu(352, l[1] + 5, l[3], ' text-anchor="middle" font-weight="700"' + (l[4] ? ' style="fill:#fff"' : ''));
      });
      return s;
    })()) };

  /* ---- Ngữ văn ---- */
  H['song-that'] = { chu: 'Một khổ song thất lục bát: hai câu 7 chữ, một câu 6 chữ, một câu 8 chữ. Ô cùng màu là các tiếng hiệp vần: tiếng 7 câu đầu vần với tiếng 5 câu thứ hai; tiếng 7 câu thứ hai vần với tiếng 6 câu lục và tiếng 6 câu bát; tiếng 8 câu bát vần sang khổ sau.',
    svg: svg('song-that', 360, 190, (function () {
      var hang = [7, 7, 6, 8], mau = { '0-6': HONG, '1-4': HONG, '1-6': CAM, '2-5': CAM, '3-5': CAM, '3-7': XANH }, s = '';
      hang.forEach(function (n, r) {
        var y = 30 + r * 42, x0 = 70 + (8 - n) * 15;
        s += chu(10, y + 5, ['Thất', 'Thất', 'Lục', 'Bát'][r], ' font-size="12"');
        for (var k = 0; k < n; k++) {
          var m = mau[r + '-' + k];
          s += '<circle cx="' + (x0 + k * 32) + '" cy="' + y + '" r="12" style="fill:' + (m || 'var(--the)') + ';stroke:' + (m || 'var(--phu)') + '"/>' +
            chu(x0 + k * 32, y + 4, k + 1, ' text-anchor="middle" font-size="11"' + (m ? ' style="fill:#fff"' : ''));
        }
      });
      return s;
    })()) };

  H['bo-cuc-kieu'] = { chu: 'Bố cục ba phần của Truyện Kiều (3254 câu lục bát).',
    svg: luong('bo-cuc-kieu', ['Gặp gỡ|và đính ước', 'Gia biến|và lưu lạc', 'Đoàn tụ']) };

  H['dan-y-nlxh'] = { chu: 'Dàn ý bài nghị luận xã hội — đi lần lượt từ trên xuống, mỗi luận điểm ở phần bàn luận đều cần lí lẽ và dẫn chứng.',
    svg: doc('dan-y-nlxh', ['Mở bài: nêu vấn đề', 'Giải thích từ khoá, ý nghĩa', 'Bàn luận: lí lẽ + dẫn chứng', 'Phản đề: bác bỏ ý kiến trái chiều', 'Bài học nhận thức và hành động', 'Kết bài: khẳng định, liên hệ bản thân']) };

  H['doan-phan-tich'] = { chu: 'Công thức viết một đoạn phân tích thơ/truyện.',
    svg: luong('doan-phan-tich', ['Trích dẫn', 'Chỉ ra|nghệ thuật', 'Tác dụng,|ý nghĩa', 'Liên hệ,|đánh giá']) };

  H['cau-ghep'] = { chu: 'Câu ghép có hai cụm chủ ngữ (C) – vị ngữ (V) không bao chứa nhau, nối bằng cặp quan hệ từ "vì … nên" (nguyên nhân – kết quả).',
    svg: svg('cau-ghep', 470, 120, (function () {
      var o = [['Vì', 0], ['trời', 'C'], ['mưa to', 'V'], ['nên', 0], ['đường', 'C'], ['ngập nước.', 'V']], x = 10, s = '';
      o.forEach(function (p) {
        var w = p[0].length * 9 + 18, m = p[1] === 'C' ? LAM : p[1] === 'V' ? HONG : CAM;
        s += '<rect x="' + x + '" y="30" width="' + w + '" height="36" rx="8" style="fill:' + m + ';opacity:.15;stroke:' + m + '"/>' +
          chu(x + w / 2, 54, p[0], ' text-anchor="middle" font-weight="600"') + chu(x + w / 2, 90, p[1] || 'QHT', ' text-anchor="middle" font-size="12" style="fill:' + m + '" font-weight="700"');
        x += w + 6;
      });
      return s + chu(10, 18, 'Vế 1 (nguyên nhân)', ' font-size="11"') + chu(250, 18, 'Vế 2 (kết quả)', ' font-size="11"');
    })()) };

  /* ---- Tiếng Anh ---- */
  H['thi-truc'] = { chu: 'Trục thời gian các thì: quá khứ hoàn thành xảy ra TRƯỚC một mốc quá khứ; hiện tại hoàn thành nối từ quá khứ đến hiện tại (since/for); tương lai nằm sau "bây giờ".',
    svg: svg('thi-truc', 470, 180,
      dt(10, 100, 460, 100, 'n', mt('thi-truc') + ' stroke-width="2.5"') + dt(300, 85, 300, 115, '', ' stroke-width="3" style="stroke:' + HONG + '"') +
      chu(300, 135, 'NOW', ' text-anchor="middle" font-weight="700" style="fill:' + HONG + '"') + chu(30, 135, 'Past', ' font-size="12"') + chu(420, 135, 'Future', ' font-size="12"') +
      '<circle cx="90" cy="100" r="7" style="fill:' + CAM + '"/>' + chu(90, 160, 'Past perfect', ' text-anchor="middle" font-size="12" style="fill:' + CAM + '"') + chu(90, 176, 'had + V3', ' text-anchor="middle" font-size="11"') +
      '<circle cx="170" cy="100" r="7" style="fill:' + LAM + '"/>' + chu(170, 160, 'Past simple', ' text-anchor="middle" font-size="12" style="fill:' + LAM + '"') + chu(170, 176, 'V2/ed', ' text-anchor="middle" font-size="11"') +
      dt(90, 88, 160, 88, '', mt('thi-truc') + ' style="stroke:' + CAM + ';color:' + CAM + '"') + chu(125, 80, 'before', ' text-anchor="middle" font-size="11"') +
      '<path d="M170,92 Q235,25 296,92" fill="none" style="stroke:' + XANH + ';color:' + XANH + '" stroke-width="2.5"' + mt('thi-truc') + '/>' +
      chu(235, 34, 'Present perfect: have/has + V3', ' text-anchor="middle" font-size="12" style="fill:' + XANH + '"') +
      '<circle cx="390" cy="100" r="7" style="fill:#7c3aed"/>' + chu(390, 160, 'Future: will + V', ' text-anchor="middle" font-size="12" style="fill:#7c3aed"')) };

  H['bi-dong'] = { chu: 'Đổi câu chủ động sang bị động: tân ngữ (O) lên làm chủ ngữ, động từ thành be + V3 (be chia theo thì của câu gốc), chủ ngữ cũ thành "by + O" (thường bỏ được).',
    svg: svg('bi-dong', 470, 190, (function () {
      function o(x, y, w, s, m) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="8" style="fill:' + m + ';opacity:.15;stroke:' + m + '"/>' + chu(x + w / 2, y + 22, s, ' text-anchor="middle" font-weight="600"'); }
      return chu(10, 20, 'Chủ động', ' font-size="12" font-weight="700"') + o(10, 30, 90, 'They', LAM) + o(110, 30, 100, 'clean', XANH) + o(220, 30, 130, 'the room.', HONG) +
        chu(10, 112, 'Bị động', ' font-size="12" font-weight="700"') + o(10, 122, 130, 'The room', HONG) + o(150, 122, 150, 'is cleaned', XANH) + o(310, 122, 120, '(by them).', LAM) +
        '<path d="M285,66 C285,95 75,90 75,120" fill="none" style="stroke:' + HONG + ';color:' + HONG + '"' + mt('bi-dong') + '/>' +
        '<path d="M160,66 L225,120" fill="none" style="stroke:' + XANH + ';color:' + XANH + '"' + mt('bi-dong') + '/>' +
        '<path d="M55,66 C55,100 370,90 370,120" fill="none" stroke-dasharray="4 4" style="stroke:' + LAM + ';color:' + LAM + '"' + mt('bi-dong') + '/>' +
        chu(355, 52, 'S · V · O', ' font-size="12"') + chu(240, 178, 'be (is) + V3 (cleaned)', ' text-anchor="middle" font-size="12" style="fill:' + XANH + '"');
    })()) };

  H['lui-thi'] = { chu: 'Câu tường thuật: lùi một thì so với lời nói trực tiếp.',
    svg: svg('lui-thi', 460, 200, (function () {
      var ds = [['present simple', 'past simple'], ['present continuous', 'past continuous'], ['present perfect / past simple', 'past perfect'], ['will / can / may', 'would / could / might']], s = '';
      ds.forEach(function (d, i) {
        var y = 10 + i * 47;
        s += hop2(5, y, 200, 34, d[0], LAM, 12) + hop2(255, y, 200, 34, d[1], HONG, 12) + dt(207, y + 17, 252, y + 17, 'n', mt('lui-thi'));
      });
      return s;
    })()) };

  /* ---- KHTN bổ sung ---- */
  H['lang-kinh'] = { chu: 'Lăng kính tán sắc ánh sáng trắng thành dải màu từ đỏ đến tím: tia tím bị lệch nhiều nhất, tia đỏ lệch ít nhất (giống cầu vồng).',
    svg: svg('lang-kinh', 420, 220, (function () {
      var s = '<polygon points="150,30 85,190 215,190" fill="var(--chinh-nhat)" class="n" fill-opacity=".6"/>';
      s += dt(10, 150, 113, 120, '', ' stroke-width="4" style="stroke:var(--chu)"') + chu(14, 140, 'Ánh sáng trắng', ' font-size="11"');
      s += '<polygon points="113,120 185,118 185,132" style="fill:var(--chu);opacity:.25"/>';
      ['#dc2626', '#f97316', '#eab308', '#16a34a', '#2563eb', '#4f46e5', '#9333ea'].forEach(function (m, i) {
        s += dt(185 + i * 0.5, 118 + i * 2, 410, 140 + i * 11, '', ' stroke-width="3" style="stroke:' + m + '"');
      });
      return s + chu(350, 130, 'Đỏ', ' font-size="12" style="fill:#dc2626"') + chu(352, 222, '', '') + chu(380, 218, 'Tím', ' font-size="12" style="fill:#9333ea"');
    })()) };

  H['phan-ki'] = { chu: 'Thấu kính phân kì luôn cho ảnh ảo A\'B\' cùng chiều, nhỏ hơn vật, nằm trong khoảng tiêu cự. Tia ló có đường kéo dài (nét đứt) đi qua tiêu điểm F.',
    svg: svg('phan-ki', 420, 220,
      dt(10, 110, 410, 110) + dt(210, 20, 210, 200, '', ' stroke-width="3" style="stroke:' + LAM + '"') +
      '<path d="M203,20 L210,32 L217,20 M203,200 L210,188 L217,200" fill="none" style="stroke:' + LAM + '" stroke-width="3"/>' +
      dt(90, 110, 90, 62, '', mt('phan-ki') + ' stroke-width="3" style="stroke:' + XANH + ';color:' + XANH + '"') +
      dt(170, 110, 170, 96, '', mt('phan-ki') + ' stroke-width="3" style="stroke:' + HONG + ';color:' + HONG + '"') +
      '<polyline points="90,60 210,60 290,-6.7" fill="none" style="stroke:' + CAM + '"/>' + dt(210, 60, 150, 110, '', ' stroke-dasharray="5 4" style="stroke:' + CAM + '"') +
      dt(90, 60, 330, 160, '', ' style="stroke:' + CAM + ';opacity:.8"') +
      [[150, 'F'], [270, 'F\'']].map(function (p) { return '<circle cx="' + p[0] + '" cy="110" r="3.5" class="cham"/>' + chu(p[0] - 4, 128, p[1]); }).join('') +
      '<circle cx="210" cy="110" r="3.5" class="cham"/>' + chu(214, 126, 'O') + chu(76, 126, 'A') + chu(76, 60, 'B') + chu(160, 92, 'B\'', ' font-size="12"') +
      chu(14, 212, 'Vật AB', ' style="fill:' + XANH + '" font-size="12"') + chu(240, 212, 'Ảnh ảo A\'B\' (nhỏ, cùng chiều)', ' style="fill:' + HONG + '" font-size="12"')) };

  H['cam-ung'] = { chu: 'Cảm ứng điện từ: đưa nam châm lại gần hoặc ra xa cuộn dây kín, số đường sức từ qua cuộn dây biến thiên → xuất hiện dòng điện cảm ứng làm đèn sáng. Nam châm đứng yên thì không có dòng điện. Máy phát điện hoạt động theo nguyên tắc này.',
    svg: svg('cam-ung', 420, 220, (function () {
      var s = '<rect x="30" y="80" width="50" height="40" style="fill:#dc2626"/><rect x="80" y="80" width="50" height="40" style="fill:' + LAM + '"/>' +
        chu(55, 106, 'N', ' text-anchor="middle" font-weight="700" style="fill:#fff"') + chu(105, 106, 'S', ' text-anchor="middle" font-weight="700" style="fill:#fff"') +
        dt(60, 60, 140, 60, '', mt('cam-ung') + ' stroke-width="2.5" style="stroke:' + CAM + ';color:' + CAM + '"') + chu(40, 50, 'đưa vào / kéo ra', ' font-size="11"');
      for (var i = 0; i < 8; i++) s += '<ellipse cx="' + (180 + i * 18) + '" cy="100" rx="9" ry="34" fill="none" style="stroke:#b45309" stroke-width="2.5"/>';
      s += '<polyline points="180,134 180,185 230,185" fill="none" class="n"/><polyline points="306,134 306,185 256,185" fill="none" class="n"/>';
      s += '<circle cx="243" cy="185" r="13" style="fill:#fde047;stroke:var(--chu)"/>' + dt(234, 176, 252, 194) + dt(252, 176, 234, 194);
      [[-24, -10], [24, -10], [0, -26]].forEach(function (d) { s += dt(243 + d[0] * .6, 185 + d[1] * .6, 243 + d[0], 185 + d[1], '', ' style="stroke:#eab308" stroke-width="2"'); });
      return s + chu(220, 50, 'Cuộn dây', ' font-size="12"') + chu(268, 205, 'Đèn sáng', ' font-size="12"');
    })()) };

  H['huu-co'] = { chu: 'Công thức cấu tạo của một số hợp chất hữu cơ: methane chỉ có liên kết đơn; ethylene có một liên kết đôi C=C; ethylic alcohol có nhóm –OH; acetic acid có nhóm –COOH.',
    svg: svg('huu-co', 470, 270,
      // CH4
      nguyenTu(115, 60, 'C') + nguyenTu(115, 20, 'H') + nguyenTu(115, 100, 'H') + nguyenTu(70, 60, 'H') + nguyenTu(160, 60, 'H') +
      lk(115, 60, 115, 20) + lk(115, 60, 115, 100) + lk(115, 60, 70, 60) + lk(115, 60, 160, 60) + chu(115, 128, 'Methane CH₄', ' text-anchor="middle" class="tc" font-weight="600"') +
      // C2H4
      nguyenTu(320, 60, 'C') + nguyenTu(380, 60, 'C') + lk(320, 60, 380, 60, 1) +
      nguyenTu(285, 30, 'H') + nguyenTu(285, 90, 'H') + nguyenTu(415, 30, 'H') + nguyenTu(415, 90, 'H') +
      lk(320, 60, 285, 30) + lk(320, 60, 285, 90) + lk(380, 60, 415, 30) + lk(380, 60, 415, 90) + chu(350, 128, 'Ethylene C₂H₄', ' text-anchor="middle" class="tc" font-weight="600"') +
      // C2H5OH
      nguyenTu(60, 195, 'C') + nguyenTu(110, 195, 'C') + nguyenTu(160, 195, 'O') + nguyenTu(200, 195, 'H') +
      nguyenTu(60, 158, 'H') + nguyenTu(60, 232, 'H') + nguyenTu(22, 195, 'H') + nguyenTu(110, 158, 'H') + nguyenTu(110, 232, 'H') +
      lk(60, 195, 110, 195) + lk(110, 195, 160, 195) + lk(160, 195, 200, 195) + lk(60, 195, 60, 158) + lk(60, 195, 60, 232) + lk(60, 195, 22, 195) + lk(110, 195, 110, 158) + lk(110, 195, 110, 232) +
      '<rect x="146" y="180" width="68" height="30" rx="8" fill="none" style="stroke:' + HONG + '" stroke-dasharray="4 3"/>' +
      chu(115, 262, 'Ethylic alcohol C₂H₅OH', ' text-anchor="middle" class="tc" font-weight="600"') +
      // CH3COOH
      nguyenTu(285, 195, 'C') + nguyenTu(335, 195, 'C') + nguyenTu(335, 152, 'O') + nguyenTu(385, 195, 'O') + nguyenTu(425, 195, 'H') +
      nguyenTu(285, 158, 'H') + nguyenTu(285, 232, 'H') + nguyenTu(248, 195, 'H') +
      lk(285, 195, 335, 195) + lk(335, 195, 335, 152, 1) + lk(335, 195, 385, 195) + lk(385, 195, 425, 195) + lk(285, 195, 285, 158) + lk(285, 195, 285, 232) + lk(285, 195, 248, 195) +
      '<rect x="318" y="136" width="124" height="76" rx="8" fill="none" style="stroke:' + HONG + '" stroke-dasharray="4 3"/>' +
      chu(350, 262, 'Acetic acid CH₃COOH', ' text-anchor="middle" class="tc" font-weight="600"')) };

  H['tien-hoa'] = { chu: 'Sự sống tiến hoá từ đơn giản đến phức tạp qua hàng tỉ năm (sơ đồ đơn giản hoá, theo thứ tự xuất hiện).',
    svg: svg('tien-hoa', 470, 220, (function () {
      var ds = ['Đơn bào', 'Đa bào', 'Cá', 'Lưỡng cư', 'Bò sát', 'Thú', 'Người'], s = '';
      ds.forEach(function (d, i) {
        var x = 6 + i * 66, y = 170 - i * 24;
        s += hop2(x, y, 60, 30, d, BANG_MAU[i % 6], 11);
        if (i < ds.length - 1) s += dt(x + 30, y - 2, x + 62, y - 10, 'n', mt('tien-hoa'));
      });
      return s + dt(10, 212, 460, 212, 'p', mt('tien-hoa')) + chu(360, 207, 'thời gian', ' font-size="11"') + chu(10, 26, 'phức tạp dần ↑', ' font-size="11"');
    })()) };

  /* ---- Lịch sử & Địa lí ---- */
  H['cttg2'] = { chu: 'Diễn biến chính của Chiến tranh thế giới thứ hai (1939–1945).',
    svg: trucMoc('cttg2', [['1/9/1939', 'Đức tấn công', 'Ba Lan'], ['6/1941', 'Đức tấn công', 'Liên Xô'], ['12/1941', 'Nhật tấn công', 'Trân Châu Cảng'], ['1942–43', 'Trận', 'Xta-lin-grát'], ['9/5/1945', 'Phát xít Đức', 'đầu hàng'], ['15/8/1945', 'Nhật', 'đầu hàng']]) };

  H['moc-1911'] = { chu: 'Hành trình đến Cách mạng tháng Tám 1945.',
    svg: trucMoc('moc-1911', [['1911', 'Ra đi tìm', 'đường cứu nước'], ['1920', 'Đọc Luận', 'cương Lê-nin'], ['1925', 'Hội VN Cách', 'mạng Thanh niên'], ['1930', 'Thành lập', 'Đảng CSVN'], ['1941', 'Mặt trận', 'Việt Minh'], ['1945', 'Cách mạng', 'tháng Tám']]) };

  H['tg-sau-1945'] = { chu: 'Thế giới sau năm 1945: từ trật tự hai cực và Chiến tranh lạnh đến xu thế đa cực, toàn cầu hoá.',
    svg: trucMoc('tg-sau-1945', [['1945', 'Liên hợp quốc', 'ra đời'], ['1947', 'Bắt đầu', 'Chiến tranh lạnh'], ['1967', 'ASEAN', 'thành lập'], ['1989', 'Kết thúc', 'Chiến tranh lạnh'], ['1991', 'Liên Xô', 'tan rã'], ['1995', 'Việt Nam vào', 'ASEAN']]) };

  H['dan-so'] = { chu: 'Dân số Việt Nam qua các cuộc Tổng điều tra (triệu người, số làm tròn). Dân số tăng nhanh rồi tăng chậm dần; năm 2023 vượt 100 triệu người.',
    svg: svg('dan-so', 420, 230, (function () {
      var ds = [[1979, 52.7], [1989, 64.4], [1999, 76.3], [2009, 85.8], [2019, 96.2]], s = dt(40, 190, 400, 190) + dt(40, 190, 40, 15, 'n', mt('dan-so'));
      [0, 25, 50, 75, 100].forEach(function (v) { s += dt(36, 190 - v * 1.6, 400, 190 - v * 1.6, 'p') + chu(10, 194 - v * 1.6, v, ' font-size="11"'); });
      ds.forEach(function (d, i) {
        var x = 62 + i * 68, h = d[1] * 1.6;
        s += '<rect x="' + x + '" y="' + (190 - h) + '" width="40" height="' + h + '" rx="4" style="fill:var(--chinh);opacity:' + (0.55 + i * 0.1) + '"/>' +
          chu(x + 20, 184 - h, String(d[1]).replace('.', ','), ' text-anchor="middle" font-size="12"') + chu(x + 20, 208, d[0], ' text-anchor="middle" font-size="12"');
      });
      return s + chu(46, 20, 'triệu người', ' font-size="11"');
    })()) };

  H['cac-vung'] = { chu: 'Sơ đồ vị trí tương đối của 6 vùng kinh tế – xã hội (theo Nghị quyết 252/2025/QH15, 34 tỉnh, thành) từ Bắc vào Nam — sơ đồ đơn giản hoá để dễ nhớ, KHÔNG phải bản đồ; khi học hãy dùng Atlat/bản đồ chính thức. Số trong ngoặc là số tỉnh, thành của vùng.',
    svg: svg('cac-vung', 360, 350, (function () {
      function v(x, y, w, h, s, m) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" style="fill:' + m + ';opacity:.22;stroke:' + m + '"/>' + (function () { var d = s.split('|'), r = ''; d.forEach(function (t, i) { r += chu(x + w / 2, y + h / 2 + 4 + (i - (d.length - 1) / 2) * 15, t, ' text-anchor="middle" font-size="12" font-weight="600"'); }); return r; })(); }
      return v(20, 10, 200, 58, 'Trung du và|miền núi phía Bắc (9)', XANH) + v(150, 74, 120, 42, 'ĐB sông Hồng (6)', HONG) +
        v(175, 122, 105, 54, 'Bắc Trung Bộ|(5)', LAM) + v(95, 182, 200, 82, 'Duyên hải Nam Trung Bộ|và Tây Nguyên (6)', CAM) +
        v(130, 270, 140, 32, 'Đông Nam Bộ (3)', '#7c3aed') + v(40, 308, 160, 34, 'ĐB sông Cửu Long (5)', '#0891b2') +
        chu(300, 30, 'Bắc ↑', ' font-size="12"') + chu(300, 338, 'Nam ↓', ' font-size="12"') + chu(304, 196, 'Biển', ' font-size="11"') + chu(304, 212, 'Đông →', ' font-size="11"');
    })()) };

  /* ---- GDCD ---- */
  H.eisenhower = { chu: 'Ma trận Eisenhower giúp quản lí thời gian: chia việc theo mức QUAN TRỌNG và KHẨN CẤP để biết việc nào làm trước.',
    svg: svg('eisenhower', 440, 250, (function () {
      var o = [['Làm ngay|(ôn bài thi ngày mai)', HONG], ['Lên kế hoạch|(học lập trình, thể thao)', XANH], ['Làm nhanh / nhờ hỗ trợ|(tin nhắn gấp)', CAM], ['Bỏ bớt|(lướt mạng vô bổ)', 'var(--phu)']], s = '';
      o.forEach(function (c, i) {
        var x = 100 + (i % 2) * 165, y = 40 + Math.floor(i / 2) * 100;
        s += '<rect x="' + x + '" y="' + y + '" width="160" height="95" rx="10" style="fill:' + c[1] + ';opacity:.18;stroke:' + c[1] + '"/>';
        c[0].split('|').forEach(function (t, k) { s += chu(x + 80, y + 45 + k * 18, t, ' text-anchor="middle" font-size="' + (k ? 11 : 13) + '"' + (k ? '' : ' font-weight="700"')); });
      });
      return s + chu(180, 28, 'Khẩn cấp', ' text-anchor="middle" font-weight="600"') + chu(345, 28, 'Không khẩn cấp', ' text-anchor="middle" font-weight="600"') +
        chu(90, 92, 'Quan trọng', ' text-anchor="end" font-weight="600"') + chu(90, 192, 'Không', ' text-anchor="end" font-weight="600"') + chu(90, 208, 'quan trọng', ' text-anchor="end" font-weight="600"');
    })()) };

  H['trach-nhiem'] = { chu: 'Người vi phạm pháp luật phải chịu trách nhiệm pháp lí, gồm bốn loại tuỳ theo tính chất và mức độ vi phạm.',
    svg: svg('trach-nhiem', 460, 190, (function () {
      var s = hop2(150, 8, 160, 40, 'Vi phạm pháp luật', HONG, 13);
      [['Hình sự', 'tội phạm'], ['Hành chính', 'vi phạm quản lí NN'], ['Dân sự', 'quan hệ tài sản,|nhân thân'], ['Kỉ luật', 'trong cơ quan,|đơn vị']].forEach(function (d, i) {
        var x = 5 + i * 115;
        s += dt(230, 48, x + 52, 98, 'n', mt('trach-nhiem')) + hop2(x, 100, 105, 34, d[0], BANG_MAU[i], 12);
        d[1].split('|').forEach(function (t, k) { s += chu(x + 52, 154 + k * 15, t, ' text-anchor="middle" font-size="11"'); });
      });
      return s;
    })()) };

  /* ---- Tin học ---- */
  H['bang-tinh'] = { chu: 'Ví dụ bảng tính: ô D7 dùng =COUNTIF(C2:C6,">=8") đếm số bạn đạt từ 8 điểm (kết quả 3); cột D dùng =IF(C2>=5,"Đạt","Chưa đạt").',
    svg: svg('bang-tinh', 460, 250, (function () {
      var cot = [30, 40, 150, 70, 120], ten = ['', 'A', 'B', 'C', 'D'], s = '';
      var du = [['1', 'STT', 'Họ tên', 'Điểm', 'Kết quả'], ['2', '1', 'An', '9', 'Đạt'], ['3', '2', 'Bình', '7', 'Đạt'], ['4', '3', 'Chi', '8.5', 'Đạt'], ['5', '4', 'Dũng', '4', 'Chưa đạt'], ['6', '5', 'Khuê', '10', 'Đạt'], ['7', '', 'Số bạn ≥ 8:', '', '3']];
      s += '<rect x="10" y="6" width="420" height="24" rx="4" class="o2"/>' + chu(18, 23, 'fx', ' font-style="italic" font-weight="700" font-size="12"') + chu(44, 23, '=COUNTIF(C2:C6,">=8")', ' font-size="12" class="tc"');
      var y = 40;
      [ten].concat(du).forEach(function (r, ri) {
        var x = 10;
        r.forEach(function (c, ci) {
          var dau = ri === 0 || ci === 0, chon = ri === 7 && ci === 4;
          s += '<rect x="' + x + '" y="' + y + '" width="' + cot[ci] + '" height="26" style="fill:' + (chon ? CAM : dau ? 'var(--vien)' : 'var(--the)') + ';stroke:var(--phu);' + (chon ? 'opacity:.9' : '') + '" stroke-width=".8"/>' +
            chu(x + (ci === 2 && !dau ? 6 : cot[ci] / 2), y + 18, c, (ci === 2 && !dau ? '' : ' text-anchor="middle"') + ' font-size="12"' + (c === 'Chưa đạt' ? ' style="fill:' + HONG + '"' : ''));
          x += cot[ci];
        });
        y += 26;
      });
      return s;
    })()) };

  H['kiem-tin'] = { chu: 'Bốn câu hỏi để kiểm tra một thông tin trên mạng trước khi tin hoặc chia sẻ.',
    svg: luong('kiem-tin', ['Nguồn nào?|chính thống?', 'Ai viết?|có rõ ràng?', 'Khi nào?|còn mới?', 'Đối chiếu|nhiều nguồn'], null, 56) };

  /* ---- Công nghệ ---- */
  H['chon-nghe'] = { chu: 'Nghề phù hợp nằm ở chỗ giao nhau của ba yếu tố: điều mình THÍCH, điều mình LÀM TỐT và điều xã hội CẦN.',
    svg: svg('chon-nghe', 360, 260,
      '<circle cx="140" cy="100" r="78" style="fill:' + HONG + ';opacity:.2;stroke:' + HONG + '"/>' +
      '<circle cx="220" cy="100" r="78" style="fill:' + LAM + ';opacity:.2;stroke:' + LAM + '"/>' +
      '<circle cx="180" cy="168" r="78" style="fill:' + XANH + ';opacity:.2;stroke:' + XANH + '"/>' +
      chu(105, 80, 'Sở thích', ' text-anchor="middle" font-weight="700"') + chu(255, 80, 'Năng lực', ' text-anchor="middle" font-weight="700"') +
      chu(180, 215, 'Nhu cầu', ' text-anchor="middle" font-weight="700"') + chu(180, 231, 'xã hội', ' text-anchor="middle" font-weight="700"') +
      chu(180, 126, 'Nghề', ' text-anchor="middle" font-size="12" font-weight="700" class="tc"') + chu(180, 140, 'phù hợp', ' text-anchor="middle" font-size="12" font-weight="700" class="tc"')) };

  H['mach-nha'] = { chu: 'Sơ đồ nguyên lí mạng điện trong nhà đơn giản: dây pha qua aptomat rồi chia nhánh song song — nhánh đèn có công tắc trên dây pha, nhánh ổ cắm. Các đồ dùng điện đều mắc song song với nhau.',
    svg: svg('mach-nha', 460, 220,
      chu(10, 45, 'Pha (L)', ' font-size="12" style="fill:#dc2626"') + chu(10, 185, 'Trung tính (N)', ' font-size="12" style="fill:' + LAM + '"') +
      dt(60, 55, 110, 55, '', ' style="stroke:#dc2626" stroke-width="2.5"') + '<rect x="110" y="40" width="60" height="30" rx="5" class="o2"/>' + chu(140, 60, 'Aptomat', ' text-anchor="middle" font-size="11"') +
      dt(170, 55, 440, 55, '', ' style="stroke:#dc2626" stroke-width="2.5"') + dt(10, 195, 440, 195, '', ' style="stroke:' + LAM + '" stroke-width="2.5"') +
      // nhanh den: cong tac + bong den
      dt(250, 55, 250, 85) + '<circle cx="250" cy="87" r="3" class="cham"/>' + dt(250, 87, 266, 108, 'n', ' stroke-width="2.5"') + '<circle cx="250" cy="112" r="3" class="cham"/>' +
      chu(272, 102, 'Công tắc', ' font-size="11"') + dt(250, 112, 250, 132) +
      '<circle cx="250" cy="148" r="16" fill="#fde047" fill-opacity=".5" class="n"/>' + dt(239, 137, 261, 159) + dt(261, 137, 239, 159) + chu(272, 152, 'Đèn', ' font-size="11"') + dt(250, 164, 250, 195) +
      // nhanh o cam
      dt(380, 55, 380, 110) + '<rect x="360" y="110" width="40" height="44" rx="6" class="o2"/><circle cx="373" cy="132" r="3.5" class="cham"/><circle cx="387" cy="132" r="3.5" class="cham"/>' +
      chu(406, 136, 'Ổ cắm', ' font-size="11"') + dt(380, 154, 380, 195) +
      '<circle cx="250" cy="55" r="3.5" class="cham"/><circle cx="380" cy="55" r="3.5" class="cham"/><circle cx="250" cy="195" r="3.5" class="cham"/><circle cx="380" cy="195" r="3.5" class="cham"/>') };

  /* ---- Học lập trình ---- */
  H['bien-hop'] = { chu: 'Biến giống một chiếc hộp có dán nhãn tên: lệnh gán tuoi = 14 cất giá trị 14 vào hộp tên "tuoi". Gán lại thì giá trị cũ bị thay.',
    svg: svg('bien-hop', 460, 150, [['ten', '"Minh Khuê"', 'str', HONG], ['tuoi', '14', 'int', LAM], ['diem_toan', '9.5', 'float', XANH]].map(function (b, i) {
      var x = 15 + i * 150;
      return '<path d="M' + x + ',50 L' + (x + 130) + ',50 L' + (x + 130) + ',120 L' + x + ',120 Z" style="fill:' + b[3] + ';opacity:.15;stroke:' + b[3] + '" stroke-width="2"/>' +
        '<path d="M' + (x - 6) + ',50 L' + (x + 12) + ',34 L' + (x + 118) + ',34 L' + (x + 136) + ',50" fill="none" style="stroke:' + b[3] + '" stroke-width="2"/>' +
        chu(x + 65, 92, b[1], ' text-anchor="middle" font-weight="700" font-family="monospace"') +
        '<rect x="' + (x + 25) + '" y="128" width="80" height="20" rx="5" style="fill:' + b[3] + '"/>' + chu(x + 65, 143, b[0], ' text-anchor="middle" font-size="12" font-family="monospace" style="fill:#fff"') +
        chu(x + 65, 20, b[2], ' text-anchor="middle" font-size="11"');
    }).join('')) };

  H['list-chi-so'] = { chu: 'Danh sách (list) đánh chỉ số từ 0 ở bên trái; chỉ số âm đếm từ cuối: diem[0] là 8.5, diem[-1] là 6.5.',
    svg: svg('list-chi-so', 460, 140, (function () {
      var v = ['8.5', '9', '7.25', '10', '6.5'], s = chu(10, 72, 'diem =', ' font-family="monospace" font-weight="700"');
      v.forEach(function (x, i) {
        var cx = 80 + i * 72;
        s += '<rect x="' + cx + '" y="45" width="72" height="42" style="fill:var(--chinh-nhat);stroke:var(--chinh)" stroke-width="2"/>' + chu(cx + 36, 72, x, ' text-anchor="middle" font-weight="700" font-family="monospace"') +
          chu(cx + 36, 30, i, ' text-anchor="middle" font-family="monospace" style="fill:' + LAM + '"') + chu(cx + 36, 110, i - 5, ' text-anchor="middle" font-family="monospace" style="fill:' + HONG + '"');
      });
      return s + chu(10, 30, 'chỉ số', ' font-size="11" style="fill:' + LAM + '"') + chu(10, 110, 'chỉ số âm', ' font-size="11" style="fill:' + HONG + '"');
    })()) };

  H['vong-lap'] = { chu: 'Sơ đồ khối của vòng lặp: kiểm tra điều kiện, đúng thì làm thân vòng lặp rồi quay lại kiểm tra; sai thì thoát vòng lặp.',
    svg: svg('vong-lap', 420, 290,
      '<rect x="150" y="8" width="120" height="32" rx="16" class="o"/>' + chu(210, 29, 'i = 1', ' text-anchor="middle" font-family="monospace"') + dt(210, 40, 210, 60, 'n', mt('vong-lap')) +
      '<polygon points="210,62 280,97 210,132 140,97" class="o" style="stroke:' + CAM + '"/>' + chu(210, 102, 'i <= 10 ?', ' text-anchor="middle" font-size="12" font-family="monospace"') +
      dt(210, 132, 210, 152, 'n', mt('vong-lap')) + chu(216, 148, 'Đúng', ' font-size="11" style="fill:' + XANH + '"') +
      '<rect x="140" y="154" width="140" height="32" class="o" style="stroke:' + XANH + '"/>' + chu(210, 175, 'print(7 * i)', ' text-anchor="middle" font-size="12" font-family="monospace"') + dt(210, 186, 210, 204, 'n', mt('vong-lap')) +
      '<rect x="140" y="206" width="140" height="32" class="o" style="stroke:' + XANH + '"/>' + chu(210, 227, 'i = i + 1', ' text-anchor="middle" font-size="12" font-family="monospace"') +
      '<polyline points="140,222 90,222 90,97 136,97" fill="none" class="n"' + mt('vong-lap') + '/>' + chu(40, 160, 'lặp lại', ' font-size="11"') +
      '<polyline points="280,97 340,97 340,255" fill="none" class="n"' + mt('vong-lap') + '/>' + chu(288, 90, 'Sai', ' font-size="11" style="fill:' + HONG + '"') +
      '<rect x="290" y="257" width="100" height="30" rx="15" class="o"/>' + chu(340, 277, 'Kết thúc', ' text-anchor="middle" font-size="12"')) };

  /* ---- Ôn thi ---- */
  H['duong-quen'] = { chu: 'Đường cong quên lãng: không ôn thì sau vài ngày nhớ được rất ít (nét đứt). Ôn lại sau 1 – 3 – 7 ngày, mỗi lần ôn trí nhớ được kéo lên và quên chậm hơn (nét liền).',
    svg: svg('duong-quen', 440, 240, (function () {
      var ox = 50, oy = 200, kx = 36, ky = 1.7, s = dt(ox, oy, 430, oy, 'n', mt('duong-quen')) + dt(ox, oy, ox, 15, 'n', mt('duong-quen'));
      s += chu(56, 14, '% nhớ', ' font-size="11"') + chu(428, 192, 'ngày', ' font-size="11" text-anchor="end"');
      [0, 1, 3, 7, 10].forEach(function (d) { s += dt(ox + d * kx, oy - 4, ox + d * kx, oy + 4) + chu(ox + d * kx, oy + 18, d, ' text-anchor="middle" font-size="11"'); });
      s += '<path d="' + duongCong(function (t) { return (100 * Math.exp(-t / 1.2) + 0) * ky / kx; }, 0, 10, ox, oy, kx) + '" fill="none" class="p" stroke-width="2"/>';
      var on = [0, 1, 3, 7], tau = [1.2, 2.5, 5, 10], d = '';
      on.forEach(function (t0, i) {
        var t1 = i < 3 ? on[i + 1] : 10;
        for (var k = 0; k <= 20; k++) {
          var t = t0 + (t1 - t0) * k / 20, y = 100 * Math.exp(-(t - t0) / tau[i]);
          d += (k === 0 ? (i ? 'L' : 'M') : 'L') + (ox + t * kx).toFixed(1) + ',' + (oy - y * ky).toFixed(1);
        }
        if (i < 3) s += '<circle cx="' + (ox + t1 * kx) + '" cy="' + (oy - 100 * ky) + '" r="5" style="fill:' + HONG + '"/>';
      });
      s += '<path d="' + d + '" fill="none" class="c"/>';
      return s + chu(ox + kx + 10, oy - 100 * ky + 4, 'ôn lại', ' font-size="11" style="fill:' + HONG + '"');
    })()) };

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
