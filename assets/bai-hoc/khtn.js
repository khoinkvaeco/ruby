// Mo rong mon KHTN. Quy uoc: trong luc P = 10·m (g ≈ 10 m/s²) nhu SGK; the tich khi o dieu kien chuan (đkc: 25 °C, 1 bar) = 24,79 L/mol.
window.MO_RONG = window.MO_RONG || {};
MO_RONG.khtn = {
  'co-nang': { ly: `
<h3>Định luật bảo toàn cơ năng</h3>
<p>Khi chỉ có lực hấp dẫn (bỏ qua ma sát, sức cản), động năng và thế năng chuyển hoá qua lại nhưng <b>cơ năng W = W<sub>đ</sub> + W<sub>t</sub> không đổi</b>. Vật đi lên: W<sub>đ</sub> giảm, W<sub>t</sub> tăng; vật đi xuống thì ngược lại.</p>
<h3>Ví dụ mẫu</h3>
<p>Thả rơi vật từ độ cao 5 m. Khi chạm đất toàn bộ thế năng thành động năng: 10·m·5 = ½·m·v² ⇒ v² = 100 ⇒ <b>v = 10 m/s</b> (không phụ thuộc khối lượng!).</p>
<p><b>Hiệu suất</b>: H = A<sub>có ích</sub> / A<sub>toàn phần</sub> · 100 %. Máy nào cũng có H &lt; 100 % vì một phần năng lượng hao phí (thường thành nhiệt).</p>
<div class="meo">⚠️ Đổi đơn vị trước khi tính: g → kg, km/h → m/s (chia 3,6), phút → giây, kW → W.</div>`,
    bt: [
      [1, 'Vật khối lượng 0,5 kg ở độ cao 4 m so với mặt đất. Tính thế năng trọng trường (mốc ở mặt đất).', 'W<sub>t</sub> = 10·m·h = 10·0,5·4 = <b>20 J</b>.'],
      [1, 'Ô tô 1000 kg chạy với vận tốc 72 km/h. Tính động năng.', '72 km/h = 20 m/s. W<sub>đ</sub> = ½·1000·20² = <b>200 000 J</b>.'],
      [1, 'Kéo một thùng hàng bằng lực 50 N đi được 8 m theo phương của lực. Tính công.', 'A = F·s = 50·8 = <b>400 J</b>.'],
      [2, 'Một người kéo thùng nước 10 kg từ giếng sâu 6 m lên trong 20 giây. Tính công và công suất.', 'A = 10·10·6 = <b>600 J</b>; 𝒫 = 600/20 = <b>30 W</b>.'],
      [2, 'Máy bơm công suất 1,5 kW hoạt động trong 2 phút. Tính công máy thực hiện.', 'A = 𝒫·t = 1500·120 = <b>180 000 J</b>.'],
      [3, 'Ném một vật 2 kg thẳng đứng lên từ mặt đất với vận tốc 6 m/s (bỏ qua sức cản). a) Tính độ cao cực đại. b) Ở độ cao nào động năng bằng thế năng?', 'a) W = ½·2·36 = 36 J = 10·2·h<sub>max</sub> ⇒ <b>h<sub>max</sub> = 1,8 m</b>. b) W<sub>đ</sub> = W<sub>t</sub> = 18 J ⇒ 20h = 18 ⇒ <b>h = 0,9 m</b>.'],
      [3, 'Cần cẩu nâng kiện hàng 2 tấn lên cao 15 m trong 30 giây, hiệu suất 80 %. Tính công suất của cần cẩu.', 'A<sub>có ích</sub> = 10·2000·15 = 300 000 J; A<sub>tp</sub> = 300 000 / 0,8 = 375 000 J; 𝒫 = 375 000/30 = <b>12 500 W = 12,5 kW</b>.']
    ] },

  'anh-sang': { ly: `
<h3>Công thức thấu kính — quy ước dùng trong bài tập</h3>
<div class="cong-thuc">Ảnh thật (thấu kính hội tụ, d &gt; f): 1/f = 1/d + 1/d'<br>Ảnh ảo (thấu kính hội tụ, d &lt; f): 1/f = 1/d − 1/d'<br>Thấu kính phân kì (ảnh ảo): 1/f = 1/d' − 1/d<br>Độ phóng đại: h'/h = d'/d</div>
<div class="cuon"><table><tr><th>Vị trí vật (thấu kính hội tụ)</th><th>Tính chất ảnh</th></tr>
<tr><td>d &gt; 2f</td><td>thật, ngược chiều, nhỏ hơn vật (máy ảnh, mắt)</td></tr>
<tr><td>d = 2f</td><td>thật, ngược chiều, bằng vật</td></tr>
<tr><td>f &lt; d &lt; 2f</td><td>thật, ngược chiều, lớn hơn vật (máy chiếu)</td></tr>
<tr><td>d &lt; f</td><td>ảo, cùng chiều, lớn hơn vật (kính lúp)</td></tr></table></div>
<p><b>Màu sắc vật:</b> vật màu nào thì tán xạ mạnh ánh sáng màu đó; vật trắng tán xạ mọi màu, vật đen hầu như không tán xạ.</p>`,
    bt: [
      [1, 'Vì sao nhìn chiếc thìa nhúng trong cốc nước ta thấy nó như bị gãy ở mặt nước?', 'Do <b>khúc xạ ánh sáng</b>: ánh sáng từ phần thìa trong nước truyền sang không khí bị đổi hướng tại mặt nước.'],
      [1, 'Một kính lúp có số bội giác 5x. Tính tiêu cự.', 'G = 25/f ⇒ f = 25/5 = <b>5 cm</b>.'],
      [1, 'Thấu kính hội tụ tiêu cự 10 cm, vật đặt cách thấu kính 30 cm. Nêu tính chất ảnh và vị trí ảnh.', 'd = 30 &gt; 2f = 20 ⇒ ảnh <b>thật, ngược chiều, nhỏ hơn vật</b>. 1/d\' = 1/10 − 1/30 = 1/15 ⇒ <b>d\' = 15 cm</b>.'],
      [2, 'Vật AB cao 2 cm đặt vuông góc trục chính, cách thấu kính hội tụ (f = 12 cm) 18 cm. Tính khoảng cách từ ảnh đến thấu kính và chiều cao ảnh.', '1/d\' = 1/12 − 1/18 = 1/36 ⇒ <b>d\' = 36 cm</b>; h\' = 2·36/18 = <b>4 cm</b> (ảnh thật, ngược chiều).'],
      [2, 'Vật đặt cách thấu kính hội tụ (f = 20 cm) 10 cm. Ảnh có tính chất gì, cách thấu kính bao nhiêu?', 'd &lt; f ⇒ ảnh ảo. 1/d\' = 1/d − 1/f = 1/10 − 1/20 = 1/20 ⇒ <b>d\' = 20 cm</b>, ảnh ảo, cùng chiều, <b>lớn gấp 2 lần</b> vật.'],
      [2, 'Một tấm vải đỏ đặt dưới ánh sáng xanh lục sẽ có màu gì? Vì sao?', 'Gần như <b>màu đen</b>: vải đỏ chỉ tán xạ mạnh ánh sáng đỏ, hấp thụ ánh sáng xanh lục.'],
      [3, 'Vật đặt trước thấu kính hội tụ cho ảnh thật cách thấu kính 40 cm, ảnh cao bằng vật. Tính tiêu cự.', 'Ảnh thật bằng vật ⇔ d = d\' = 2f ⇒ 2f = 40 ⇒ <b>f = 20 cm</b>.'],
      [3, 'Vật cách thấu kính phân kì (f = 20 cm) 30 cm. Tính vị trí ảnh và độ phóng đại.', '1/d\' = 1/f + 1/d = 1/20 + 1/30 = 1/12 ⇒ <b>d\' = 12 cm</b> (ảnh ảo, cùng phía vật); h\'/h = 12/30 = <b>0,4</b> (nhỏ hơn vật).']
    ] },

  dien: { ly: `
<h3>Điện trở phụ thuộc vào gì?</h3>
<p>R = ρ·l/S: tỉ lệ thuận với <b>chiều dài</b> l, tỉ lệ nghịch với <b>tiết diện</b> S, phụ thuộc <b>vật liệu</b> (điện trở suất ρ). Bạc, đồng dẫn điện tốt (ρ nhỏ) nên làm dây dẫn; nichrome (ρ lớn) làm dây đốt nóng.</p>
<h3>Các bước giải bài mạch điện</h3>
<ol><li>Vẽ lại mạch, xác định đoạn nào nối tiếp, đoạn nào song song.</li><li>Tính điện trở tương đương từ trong ra ngoài.</li><li>Tính cường độ mạch chính I = U/R<sub>tđ</sub>, rồi tính hiệu điện thế, cường độ từng phần.</li></ol>
<p><b>Ý nghĩa số ghi trên dụng cụ:</b> "220 V – 1000 W" nghĩa là dùng đúng hiệu điện thế 220 V thì công suất là 1000 W.</p>
<div class="meo">💡 Tiết kiệm điện: tắt thiết bị khi không dùng, chọn đèn LED, điều hoà để 26 °C trở lên, rút sạc khi pin đầy.</div>`,
    bt: [
      [1, 'Dây dẫn có điện trở 20 Ω mắc vào hiệu điện thế 12 V. Tính cường độ dòng điện.', 'I = 12/20 = <b>0,6 A</b>.'],
      [1, 'R₁ = 10 Ω nối tiếp R₂ = 15 Ω, mắc vào U = 10 V. Tính R<sub>tđ</sub>, I, U₁, U₂.', 'R<sub>tđ</sub> = <b>25 Ω</b>; I = <b>0,4 A</b>; U₁ = 0,4·10 = <b>4 V</b>; U₂ = <b>6 V</b>.'],
      [1, 'Bóng đèn ghi 220 V – 60 W. Tính cường độ định mức và điện trở của đèn.', 'I = 60/220 ≈ <b>0,27 A</b>; R = U²/𝒫 = 48 400/60 ≈ <b>807 Ω</b>.'],
      [2, 'R₁ = 6 Ω song song R₂ = 12 Ω, mắc vào U = 12 V. Tính R<sub>tđ</sub> và cường độ qua mỗi điện trở.', '1/R = 1/6 + 1/12 = 1/4 ⇒ <b>R<sub>tđ</sub> = 4 Ω</b>; I = 3 A; I₁ = 12/6 = <b>2 A</b>; I₂ = 12/12 = <b>1 A</b>.'],
      [2, 'Ấm điện 1000 W dùng 30 phút mỗi ngày. Tính điện năng tiêu thụ trong 30 ngày và tiền điện (giả sử 3 000 đồng/kWh).', 'Mỗi ngày 1 kW·0,5 h = 0,5 kWh; 30 ngày: <b>15 kWh</b>; tiền: <b>45 000 đồng</b>.'],
      [2, 'Dây đồng dài 100 m, tiết diện 0,5 mm², điện trở suất 1,7·10⁻⁸ Ω·m. Tính điện trở.', 'S = 0,5·10⁻⁶ m². R = 1,7·10⁻⁸·100 / (0,5·10⁻⁶) = <b>3,4 Ω</b>.'],
      [3, 'Mạch gồm R₁ = 4 Ω nối tiếp với cụm (R₂ = 6 Ω song song R₃ = 3 Ω), U = 12 V. Tính cường độ qua từng điện trở.', 'R₂₃ = 6·3/9 = 2 Ω; R<sub>tđ</sub> = 6 Ω; I = I₁ = <b>2 A</b>; U₂₃ = 2·2 = 4 V ⇒ I₂ = <b>2/3 A</b>, I₃ = <b>4/3 A</b>.'],
      [3, 'Hai bóng 220 V – 100 W và 220 V – 40 W mắc nối tiếp vào mạng 220 V. Bóng nào sáng hơn? Vì sao?', 'R₁ = 220²/100 = 484 Ω; R₂ = 220²/40 = 1210 Ω. Nối tiếp nên cùng I, công suất 𝒫 = I²R ⇒ bóng có R lớn hơn sáng hơn: <b>bóng 40 W sáng hơn</b> (cả hai đều sáng yếu hơn định mức).']
    ] },

  'dien-tu': { ly: `
<h3>Từ trường và nam châm</h3>
<ul><li>Nam châm có hai cực Bắc (N) và Nam (S): cùng cực đẩy nhau, khác cực hút nhau.</li>
<li>Đường sức từ ở bên ngoài nam châm đi ra từ cực N, đi vào cực S.</li>
<li>Dòng điện cũng sinh ra từ trường (nam châm điện).</li></ul>
<h3>Máy phát điện xoay chiều</h3>
<p>Gồm hai bộ phận chính: <b>nam châm</b> và <b>cuộn dây</b>; bộ phận quay là rôto, bộ phận đứng yên là stato. Khi quay, số đường sức từ qua cuộn dây biến thiên liên tục → dòng điện cảm ứng xoay chiều. Lưới điện Việt Nam: <b>220 V – 50 Hz</b> (50 chu kì mỗi giây).</p>
<h3>Năng lượng với cuộc sống</h3>
<div class="cuon"><table><tr><th>Năng lượng tái tạo</th><th>Năng lượng hoá thạch</th></tr>
<tr><td>Mặt trời, gió, nước, sinh khối, địa nhiệt — không cạn kiệt, ít phát thải</td><td>Than, dầu mỏ, khí tự nhiên — sẽ cạn kiệt, phát thải CO₂ gây hiệu ứng nhà kính</td></tr></table></div>`,
    bt: [
      [1, 'Nêu điều kiện xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín.', 'Khi <b>số đường sức từ xuyên qua tiết diện cuộn dây biến thiên</b> (tăng hoặc giảm).'],
      [1, 'Nêu các tác dụng của dòng điện xoay chiều, mỗi tác dụng một ví dụ.', 'Tác dụng <b>nhiệt</b> (bàn là, nồi cơm điện), <b>quang</b> (đèn), <b>từ</b> (nam châm điện, quạt), <b>sinh lí</b> (điện giật — cần an toàn).'],
      [2, 'Đưa nam châm vào trong cuộn dây rồi giữ yên. Kim điện kế lệch rồi trở về số 0. Giải thích.', 'Lúc đưa vào, số đường sức từ qua cuộn dây <b>tăng</b> → có dòng cảm ứng. Khi giữ yên, số đường sức <b>không đổi</b> → hết dòng điện.'],
      [2, 'Đinamo xe đạp hoạt động như thế nào?', 'Bánh xe làm <b>nam châm quay</b> trong cuộn dây → số đường sức từ qua cuộn dây biến thiên → sinh dòng điện xoay chiều làm đèn sáng. Xe dừng thì đèn tắt.'],
      [3, 'Dòng điện của lưới điện 50 Hz đổi chiều bao nhiêu lần trong một giây?', 'Mỗi chu kì đổi chiều 2 lần ⇒ <b>100 lần/giây</b>.'],
      [3, 'So sánh năng lượng tái tạo và năng lượng hoá thạch; đề xuất 3 việc em làm được để tiết kiệm năng lượng.', 'Tái tạo: không cạn kiệt, ít ô nhiễm nhưng phụ thuộc thời tiết. Hoá thạch: ổn định nhưng cạn kiệt, gây ô nhiễm. Việc làm: tắt đèn khi ra khỏi phòng; đi xe đạp/xe buýt; dùng thiết bị tiết kiệm điện.']
    ] },

  'kim-loai': { ly: `
<h3>Tính chất vật lí của kim loại</h3>
<p>Dẫn điện, dẫn nhiệt, có ánh kim, tính dẻo. Dẫn điện tốt nhất: <b>Ag &gt; Cu &gt; Au &gt; Al &gt; Fe</b>. Kim loại nhẹ nhất Li, cứng nhất Cr, nóng chảy thấp nhất Hg (lỏng ở nhiệt độ thường).</p>
<h3>Ăn mòn kim loại và cách bảo vệ</h3>
<p>Ăn mòn là sự phá huỷ kim loại do tác dụng của môi trường (oxygen, hơi nước, acid…). Bảo vệ: sơn, mạ, bôi dầu mỡ; dùng hợp kim không gỉ (inox); để đồ vật nơi khô ráo.</p>
<h3>Các bước giải bài tính theo phương trình hoá học</h3>
<ol><li>Viết và cân bằng PTHH.</li><li>Đổi dữ kiện ra số mol: n = m/M hoặc n = V/24,79 (khí ở đkc).</li><li>Dựa vào tỉ lệ mol trong PTHH để tìm số mol chất cần tính.</li><li>Đổi ra khối lượng / thể tích.</li></ol>
<p>Nguyên tử khối hay dùng: H = 1, C = 12, O = 16, Na = 23, Mg = 24, Al = 27, S = 32, Cl = 35,5, Fe = 56, Cu = 64, Zn = 65, Ag = 108.</p>`,
    bt: [
      [1, 'Viết PTHH: a) Mg + HCl; b) Fe + CuSO₄; c) Al + O₂.', 'a) Mg + 2HCl → MgCl₂ + H₂↑. b) Fe + CuSO₄ → FeSO₄ + Cu. c) 4Al + 3O₂ → 2Al₂O₃ (t°).'],
      [1, 'Những kim loại nào trong dãy hoạt động tác dụng với nước ở nhiệt độ thường?', '<b>K, Na, Ca</b> (tạo base tan và khí H₂).'],
      [1, 'Cu có tác dụng với dung dịch AgNO₃ không? Viết PTHH nếu có.', '<b>Có</b> vì Cu đứng trước Ag: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.'],
      [2, 'Cho 6,5 g Zn tác dụng hết với dung dịch HCl. Tính thể tích H₂ thu được ở đkc.', 'n(Zn) = 6,5/65 = 0,1 mol ⇒ n(H₂) = 0,1 mol ⇒ V = 0,1·24,79 = <b>2,479 L</b>.'],
      [2, 'Ngâm 5,6 g Fe trong dung dịch CuSO₄ dư. Tính khối lượng Cu tạo thành.', 'n(Fe) = 0,1 mol ⇒ n(Cu) = 0,1 mol ⇒ m = <b>6,4 g</b>.'],
      [2, 'Vì sao không được dùng thùng bằng sắt để đựng dung dịch CuSO₄?', 'Vì Fe mạnh hơn Cu nên <b>phản ứng</b> với CuSO₄ (Fe + CuSO₄ → FeSO₄ + Cu) làm thủng thùng và hỏng dung dịch.'],
      [3, 'Cho 10 g hỗn hợp Cu và Zn tác dụng với HCl dư thu được 2,479 L H₂ (đkc). Tính phần trăm khối lượng mỗi kim loại.', 'Chỉ Zn phản ứng: n(H₂) = 0,1 mol ⇒ n(Zn) = 0,1 ⇒ m(Zn) = 6,5 g ⇒ <b>%Zn = 65 %, %Cu = 35 %</b>.'],
      [3, 'Có ba mẩu kim loại Al, Fe, Cu. Nêu cách nhận biết.', 'Cho vào dung dịch NaOH: mẩu tan, có khí là <b>Al</b>. Hai mẩu còn lại cho vào HCl: mẩu tan, có khí là <b>Fe</b>; không hiện tượng là <b>Cu</b>.']
    ] },

  'huu-co': { ly: `
<h3>Đặc điểm hợp chất hữu cơ</h3>
<p>Thường dễ cháy, kém bền với nhiệt, phản ứng chậm. Trong phân tử: C hoá trị IV, H hoá trị I, O hoá trị II. <b>Công thức cấu tạo</b> cho biết thứ tự liên kết các nguyên tử — cùng công thức phân tử có thể khác chất.</p>
<h3>Phương trình hoá học cần nhớ</h3>
<ul>
<li>CH₄ + Cl₂ → CH₃Cl + HCl (ánh sáng) — phản ứng thế</li>
<li>C₂H₄ + Br₂ → C₂H₄Br₂ — phản ứng cộng (làm mất màu nước bromine)</li>
<li>2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑</li>
<li>CH₃COOH + NaOH → CH₃COONa + H₂O</li>
<li>CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (H₂SO₄ đặc, t°) — phản ứng ester hoá</li>
<li>C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (lên men rượu)</li>
</ul>
<h3>Nguồn nhiên liệu</h3>
<p>Dầu mỏ, khí thiên nhiên, than; dùng tiết kiệm và hiệu quả, chuyển dần sang nhiên liệu sạch (biogas, xăng sinh học E5…).</p>`,
    bt: [
      [1, 'Viết PTHH đốt cháy ethylene.', 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O (t°).'],
      [1, 'Bằng cách nào phân biệt được hai khí CH₄ và C₂H₄?', 'Dẫn qua <b>nước bromine</b>: khí làm mất màu là C₂H₄, không hiện tượng là CH₄.'],
      [1, 'Hoà 30 mL ethylic alcohol vào nước được 100 mL hỗn hợp. Tính độ rượu.', '<b>30°</b>.'],
      [2, 'Tính thể tích ethylic alcohol nguyên chất có trong 500 mL rượu 40°.', '500·40/100 = <b>200 mL</b>.'],
      [2, 'Nêu cách phân biệt ba lọ mất nhãn: giấm ăn, rượu etylic, nước.', 'Quỳ tím: hoá đỏ là <b>giấm</b>. Hai lọ còn lại đem đốt: cháy được là <b>rượu</b>, không cháy là <b>nước</b>.'],
      [2, 'Viết PTHH điều chế ethyl acetate từ acetic acid và ethylic alcohol. Nêu điều kiện.', 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, xúc tác H₂SO₄ đặc, đun nóng (phản ứng thuận nghịch).'],
      [3, 'Đốt cháy hoàn toàn 4,6 g C₂H₅OH. Tính khối lượng CO₂ và H₂O tạo thành.', 'n = 4,6/46 = 0,1 mol. C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O ⇒ CO₂ 0,2 mol = <b>8,8 g</b>; H₂O 0,3 mol = <b>5,4 g</b>.'],
      [3, 'Nhận biết ba dung dịch: glucose, saccharose, hồ tinh bột.', 'Nhỏ dung dịch iodine: hoá xanh tím là <b>tinh bột</b>. Hai mẫu còn lại làm phản ứng tráng bạc: có lớp bạc là <b>glucose</b>, còn lại là <b>saccharose</b>.']
    ] },

  'di-truyen': { ly: `
<h3>Thuật ngữ cần nắm</h3>
<ul><li><b>Tính trạng</b>: đặc điểm của cơ thể (màu hạt, chiều cao…). <b>Cặp tính trạng tương phản</b>: hai trạng thái trái ngược (hạt vàng – hạt xanh).</li>
<li><b>Gen</b>: đoạn DNA quy định một tính trạng. <b>Kiểu gen</b>: tổ hợp gen (AA, Aa, aa). <b>Kiểu hình</b>: tính trạng biểu hiện ra ngoài.</li>
<li><b>Đồng hợp</b> (AA, aa) — thuần chủng; <b>dị hợp</b> (Aa).</li></ul>
<h3>Cách giải bài lai một cặp tính trạng</h3>
<ol><li>Quy ước gen (chữ hoa: trội, chữ thường: lặn).</li><li>Xác định kiểu gen của P.</li><li>Viết giao tử của P, lập sơ đồ lai (bảng Punnett).</li><li>Kết luận tỉ lệ kiểu gen, kiểu hình.</li></ol>
<h3>Công thức về gen</h3>
<div class="cong-thuc">N = 2A + 2G &nbsp;·&nbsp; A = T, G = C &nbsp;·&nbsp; L = N/2 × 3,4 Å &nbsp;·&nbsp; Một tế bào nguyên phân k lần liên tiếp tạo 2<sup>k</sup> tế bào con</div>`,
    bt: [
      [1, 'Ở đậu Hà Lan, A quy định hạt vàng trội hoàn toàn so với a hạt xanh. Cho P: AA × aa. Xác định F₁ và F₂.', 'F₁: 100 % <b>Aa (hạt vàng)</b>. F₁ × F₁: Aa × Aa ⇒ F₂: 1AA : 2Aa : 1aa, kiểu hình <b>3 vàng : 1 xanh</b>.'],
      [1, 'Một mạch DNA có trình tự: A – T – G – C – C – A. Viết trình tự mạch bổ sung.', '<b>T – A – C – G – G – T</b>.'],
      [1, 'Mạch khuôn của gen có trình tự T – A – C – G. Viết trình tự mRNA được phiên mã.', '<b>A – U – G – C</b> (A–U, T–A, G–C, C–G).'],
      [1, 'Người có 2n = 46. Tế bào trứng (giao tử) có bao nhiêu NST?', 'n = <b>23</b>.'],
      [2, 'Lai phân tích một cây hoa đỏ (trội), đời con có tỉ lệ 1 đỏ : 1 trắng. Kiểu gen của cây hoa đỏ đem lai?', 'Lai với aa cho 1 : 1 ⇒ cây hoa đỏ cho 2 loại giao tử ⇒ <b>Aa</b>.'],
      [2, 'Một gen có 3000 nucleotide, trong đó A = 600. Tính số nucleotide loại G và chiều dài gen.', 'G = (3000 − 2·600)/2 = <b>900</b>. L = 1500 × 3,4 = <b>5100 Å</b>.'],
      [2, 'Một tế bào ruồi giấm (2n = 8) nguyên phân 3 lần liên tiếp. Tạo ra bao nhiêu tế bào con, mỗi tế bào có bao nhiêu NST?', '2³ = <b>8 tế bào</b>, mỗi tế bào <b>8 NST</b> (giống tế bào mẹ).'],
      [3, 'P: AaBb × AaBb, hai cặp gen phân li độc lập, trội hoàn toàn. Tính tỉ lệ kiểu hình ở đời con và tỉ lệ cá thể aabb.', 'Kiểu hình <b>9 : 3 : 3 : 1</b>. aabb = ¼ · ¼ = <b>1/16</b>.'],
      [3, 'Bố mẹ đều bình thường sinh một con bị bạch tạng (gen lặn trên NST thường). Xác định kiểu gen bố mẹ và xác suất đứa con tiếp theo bị bệnh.', 'Con bệnh aa nhận a từ cả bố và mẹ ⇒ bố mẹ đều <b>Aa</b>. Aa × Aa ⇒ xác suất con aa = <b>1/4</b>.'],
      [3, 'Vì sao trong cấu trúc dân số, tỉ lệ nam : nữ xấp xỉ 1 : 1?', 'Mẹ (XX) chỉ cho giao tử X; bố (XY) cho hai loại giao tử X và Y <b>với tỉ lệ ngang nhau</b> ⇒ hợp tử XX và XY xấp xỉ 1 : 1.']
    ] },

  'tien-hoa': { ly: `
<h3>Bằng chứng tiến hoá</h3>
<ul><li><b>Hoá thạch</b>: di tích sinh vật cổ trong đá cho thấy sinh vật thay đổi qua các thời kì.</li>
<li><b>Giải phẫu so sánh</b>: chi trước của người, mèo, cá voi, dơi có cấu tạo xương giống nhau (cơ quan tương đồng) → chung nguồn gốc.</li>
<li><b>Sinh học phân tử</b>: các loài càng gần nhau thì trình tự DNA, protein càng giống nhau.</li></ul>
<h3>Cơ chế chọn lọc tự nhiên</h3>
<p>Cá thể trong quần thể có biến dị di truyền → môi trường "giữ lại" cá thể có biến dị thích nghi (sống sót, sinh sản nhiều) → qua nhiều thế hệ, đặc điểm thích nghi trở nên phổ biến.</p>`,
    bt: [
      [1, 'Chọn lọc tự nhiên là gì?', 'Quá trình môi trường giữ lại những cá thể mang biến dị có lợi (sống sót, sinh sản nhiều hơn) và đào thải cá thể mang biến dị bất lợi.'],
      [1, 'Phân biệt chọn lọc tự nhiên và chọn lọc nhân tạo.', 'Tự nhiên: do <b>môi trường</b>, giữ biến dị có lợi cho <b>sinh vật</b> → hình thành loài thích nghi. Nhân tạo: do <b>con người</b>, giữ biến dị có lợi cho <b>con người</b> → tạo giống vật nuôi, cây trồng.'],
      [2, 'Giải thích vì sao vi khuẩn ngày càng kháng thuốc kháng sinh, và vì sao phải dùng kháng sinh đúng liều, đủ thời gian.', 'Trong quần thể vi khuẩn có sẵn một số cá thể mang gen kháng thuốc. Dùng kháng sinh tiêu diệt cá thể nhạy cảm, cá thể kháng thuốc sống sót và sinh sản → quần thể kháng thuốc. Dùng thiếu liều càng tạo điều kiện cho cá thể kháng thuốc sống sót.'],
      [2, 'Chi trước của người, cánh dơi, vây cá voi khác nhau về hình dạng nhưng giống nhau về cấu tạo xương. Điều đó nói lên gì?', 'Đó là <b>cơ quan tương đồng</b> — bằng chứng các loài có <b>chung nguồn gốc</b>, sau đó biến đổi để thích nghi với môi trường khác nhau.'],
      [3, 'Ở Anh thế kỉ XIX, khi khói nhà máy làm thân cây sẫm màu, bướm bạch dương màu sẫm tăng lên, màu sáng giảm. Giải thích bằng chọn lọc tự nhiên.', 'Trên thân cây sẫm, bướm sáng dễ bị chim phát hiện và ăn; bướm sẫm được nguỵ trang, sống sót và sinh sản nhiều → tỉ lệ bướm sẫm tăng qua các thế hệ. Môi trường thay đổi → hướng chọn lọc thay đổi.']
    ] }
};
