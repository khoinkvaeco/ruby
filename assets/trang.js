// Phan dung chung moi trang: thanh dau, che do toi, chan trang.
// Viet thuan JS, khong thu vien ngoai -> mo thang tep index.html la chay, khong can mang.
(function () {
  var MENU = [
    ['index.html', '🏠 Trang chủ'],
    ['mon.html', '📚 Các môn'],
    ['lap-trinh.html', '💻 Học lập trình'],
    ['trac-nghiem.html', '📝 Trắc nghiệm'],
    ['on-thi.html', '🎯 Ôn thi vào 10']
  ];

  function trangHienTai() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function veDau() {
    var dau = document.createElement('header');
    dau.className = 'dau';
    var hien = trangHienTai();
    var links = MENU.map(function (m) {
      return '<a href="' + m[0] + '"' + (m[0] === hien ? ' class="dang"' : '') + '>' + m[1] + '</a>';
    }).join('');
    dau.innerHTML = '<div class="khung"><a class="logo" href="index.html">🌸 Góc học tập của Minh Khuê</a>' +
      '<nav class="menu">' + links + '<button class="nut-toi" id="nutToi" title="Đổi sáng / tối">🌙</button></nav></div>';
    document.body.insertBefore(dau, document.body.firstChild);

    var chan = document.createElement('footer');
    var pb = window.PHIEN_BAN;
    chan.innerHTML = 'Góc học tập của Minh Khuê · Lớp 9 · Chương trình GDPT 2018<br>' +
      'Nội dung tóm tắt để ôn tập — luôn đối chiếu với sách giáo khoa và lời thầy cô.' +
      (pb ? '<br><a href="phien-ban.html" id="nhanPhienBan">Phiên bản ' + pb.so + ' · cập nhật ' + pb.ngay + ' · Có gì mới?</a>' : '');
    document.body.appendChild(chan);
  }

  function thongBao(html, nut) { // dai thong bao tren dau trang
    var d = document.createElement('div');
    d.className = 'dai-bao';
    d.innerHTML = '<div class="khung"><span>' + html + '</span></div>';
    if (nut) d.querySelector('.khung').appendChild(nut);
    var x = document.createElement('button'); x.textContent = '✕'; x.title = 'Đóng';
    x.addEventListener('click', function () { d.remove(); });
    d.querySelector('.khung').appendChild(x);
    var dau = document.querySelector('header.dau');
    dau.parentNode.insertBefore(d, dau.nextSibling);
  }

  // Hai cau hoi khac nhau:
  // (1) "Trang vua duoc cap nhat tu lan truoc minh mo chua?" -> so voi phien ban da xem luu tren may.
  // (2) "Ban dang mo co cu hon ban tren mang khong?" (trinh duyet giu tep cu trong bo nho dem) ->
  //     hoi lai tep phien-ban.js tren may chu, khong dung bo nho dem. Mo bang file:// thi bo qua (khong co may chu).
  function kiemPhienBan() {
    var pb = window.PHIEN_BAN;
    if (!pb) return;
    var daXem = localStorage.getItem('phien-ban-da-xem');
    if (daXem && daXem !== pb.so && trangHienTai() !== 'phien-ban.html') {
      thongBao('🎉 Trang đã được cập nhật lên <b>phiên bản ' + pb.so + '</b> (trước đó ' + daXem + '). <a href="phien-ban.html">Xem có gì mới</a>');
    }
    localStorage.setItem('phien-ban-da-xem', pb.so);

    if (location.protocol === 'file:' || !window.fetch) return;
    fetch('assets/phien-ban.js?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (t) {
        var m = /so:\s*'([^']+)'/.exec(t);
        if (!m || m[1] === pb.so) return;
        var nut = document.createElement('button');
        nut.className = 'nut'; nut.textContent = '🔄 Tải bản mới';
        nut.addEventListener('click', function () { location.reload(); });
        thongBao('⬆️ Đã có <b>phiên bản ' + m[1] + '</b> mới hơn bản bạn đang xem (' + pb.so + ').', nut);
      }).catch(function () { /* mat mang: giu im lang, trang van dung binh thuong */ });
  }

  // Nho lua chon sang/toi tren may (localStorage), lan sau mo lai van giu
  function cheDo() {
    var luu = localStorage.getItem('che-do');
    if (luu === 'toi') document.documentElement.setAttribute('data-che-do', 'toi');
    var nut = document.getElementById('nutToi');
    function capNhat() {
      nut.textContent = document.documentElement.getAttribute('data-che-do') === 'toi' ? '☀️' : '🌙';
    }
    capNhat();
    nut.addEventListener('click', function () {
      var toi = document.documentElement.getAttribute('data-che-do') === 'toi';
      if (toi) document.documentElement.removeAttribute('data-che-do');
      else document.documentElement.setAttribute('data-che-do', 'toi');
      localStorage.setItem('che-do', toi ? 'sang' : 'toi');
      capNhat();
    });
  }

  // Bo dau tieng Viet de tim "phuong trinh" cung ra "phương trình"
  window.boDau = function (s) {
    return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  };

  document.addEventListener('DOMContentLoaded', function () {
    veDau();
    cheDo();
    kiemPhienBan();
  });
})();
