// Phan dung chung moi trang: thanh dau, che do toi, chan trang.
// Viet thuan JS, khong thu vien ngoai -> mo thang tep index.html la chay, khong can mang.
(function () {
  var MENU = [
    ['index.html', '🏠 Trang chủ'],
    ['mon.html', '📚 Các môn'],
    ['lap-trinh.html', '💻 Học lập trình'],
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
    chan.innerHTML = 'Góc học tập của Minh Khuê · Lớp 9 · Chương trình GDPT 2018<br>' +
      'Nội dung tóm tắt để ôn tập — luôn đối chiếu với sách giáo khoa và lời thầy cô.';
    document.body.appendChild(chan);
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
  });
})();
