// Mo rong mon Toan: ly = li thuyet them (dang bai, phuong phap, vi du mau, loi hay mac);
// bt = bai tap [muc, de, loi giai] voi muc 1 = co ban, 2 = van dung, 3 = nang cao.
window.MO_RONG = window.MO_RONG || {};
MO_RONG.toan = {
  can: { ly: `
<h3>Các dạng bài thường gặp</h3>
<ol><li><b>Tính giá trị</b> biểu thức chứa căn: đưa thừa số ra ngoài dấu căn rồi cộng các "căn đồng dạng" (cùng biểu thức dưới căn).</li>
<li><b>Rút gọn biểu thức</b> chứa biến: tìm ĐKXĐ → phân tích tử và mẫu thành nhân tử (x − 1 = (√x − 1)(√x + 1), x − 2√x + 1 = (√x − 1)²…) → quy đồng → rút gọn.</li>
<li><b>Giải phương trình chứa căn:</b> √A = B ⇔ B ≥ 0 và A = B²; √A = √B ⇔ A = B ≥ 0.</li>
<li><b>So sánh</b> hai số chứa căn: đưa về cùng dạng √a, hoặc bình phương hai số dương.</li></ol>
<h3>Ví dụ mẫu</h3>
<p>Rút gọn P = √x/(√x + 2) + 2/(√x − 2) với x ≥ 0, x ≠ 4.</p>
<p>Mẫu chung (√x + 2)(√x − 2) = x − 4. Tử: √x(√x − 2) + 2(√x + 2) = x − 2√x + 2√x + 4 = x + 4. Vậy <b>P = (x + 4)/(x − 4)</b>.</p>
<div class="meo">⚠️ Lỗi hay mắc: viết √(a + b) = √a + √b (SAI — ví dụ √(9 + 16) = 5 nhưng √9 + √16 = 7); viết √(x²) = x mà quên dấu giá trị tuyệt đối; quên điều kiện mẫu khác 0.</div>`,
    bt: [
      [1, 'Tính: √16 + √0,25 − ∛(−8).', '√16 = 4; √0,25 = 0,5; ∛(−8) = −2. Kết quả: 4 + 0,5 − (−2) = <b>6,5</b>.'],
      [1, 'Tìm điều kiện xác định của: a) √(2x − 6); b) 1/√(x − 1).', 'a) 2x − 6 ≥ 0 ⇔ <b>x ≥ 3</b>. b) Căn ở mẫu phải dương: x − 1 > 0 ⇔ <b>x > 1</b>.'],
      [1, 'Rút gọn √((2 − √5)²).', '√((2 − √5)²) = |2 − √5|. Vì √5 ≈ 2,236 > 2 nên 2 − √5 < 0 ⇒ kết quả <b>√5 − 2</b>.'],
      [1, 'Trục căn thức ở mẫu: a) 6/√3; b) 1/(√3 − 1).', 'a) 6/√3 = 6√3/3 = <b>2√3</b>. b) Nhân tử và mẫu với √3 + 1: (√3 + 1)/(3 − 1) = <b>(√3 + 1)/2</b>.'],
      [2, 'Rút gọn A = √12 + √27 − √48.', '√12 = 2√3; √27 = 3√3; √48 = 4√3 ⇒ A = (2 + 3 − 4)√3 = <b>√3</b>.'],
      [2, 'Giải phương trình √(x − 2) = 3.', 'ĐK: x ≥ 2. Bình phương hai vế: x − 2 = 9 ⇔ x = 11 (thoả mãn). Vậy <b>x = 11</b>.'],
      [2, 'Cho P = 1/(√x − 1) − 1/(√x + 1) với x ≥ 0, x ≠ 1. a) Rút gọn P. b) Tính P khi x = 9.', 'a) P = [(√x + 1) − (√x − 1)] / (x − 1) = <b>2/(x − 1)</b>. b) x = 9 ⇒ P = 2/8 = <b>1/4</b>.'],
      [3, 'Với P = 2/(x − 1) ở bài trên, tìm các số nguyên x để P nhận giá trị nguyên.', 'P nguyên ⇔ (x − 1) là ước của 2 ⇔ x − 1 ∈ {−2; −1; 1; 2} ⇔ x ∈ {−1; 0; 2; 3}. Đối chiếu ĐK x ≥ 0, x ≠ 1: <b>x ∈ {0; 2; 3}</b> (khi đó P = −2; 2; 1).'],
      [3, 'So sánh √2025 + √2027 và 2√2026.', 'Hai số đều dương, bình phương: (√2025 + √2027)² = 4052 + 2√(2025·2027) = 4052 + 2√(2026² − 1) < 4052 + 2·2026 = 8104 = (2√2026)². Vậy <b>√2025 + √2027 < 2√2026</b>.'],
      [3, 'Tìm giá trị nhỏ nhất của P = x − 2√x + 3 (x ≥ 0).', 'P = (√x − 1)² + 2 ≥ 2. Dấu "=" khi √x = 1 ⇔ x = 1. Vậy <b>GTNN của P là 2, khi x = 1</b>.']
    ] },

  hpt: { ly: `
<h3>Số nghiệm của hệ ax + by = c và a'x + b'y = c' (các hệ số khác 0)</h3>
<ul><li>a/a' ≠ b/b' → hệ có <b>một nghiệm duy nhất</b>.</li>
<li>a/a' = b/b' ≠ c/c' → hệ <b>vô nghiệm</b>.</li>
<li>a/a' = b/b' = c/c' → hệ có <b>vô số nghiệm</b>.</li></ul>
<h3>Ví dụ mẫu — giải bài toán bằng cách lập hệ</h3>
<p>Mua 3 quyển vở và 2 cái bút hết 36 nghìn đồng; mua 2 quyển vở và 3 cái bút hết 34 nghìn đồng. Tính giá mỗi loại.</p>
<p>Gọi giá một quyển vở là x, một cái bút là y (nghìn đồng, x, y &gt; 0). Ta có hệ 3x + 2y = 36 và 2x + 3y = 34. Cộng vế: 5x + 5y = 70 ⇒ x + y = 14. Trừ vế: x − y = 2. Suy ra <b>x = 8, y = 6</b>: vở 8 nghìn, bút 6 nghìn đồng.</p>
<div class="meo">⚠️ Lỗi hay mắc: quên đặt điều kiện cho ẩn; nhân một phương trình với một số nhưng quên nhân vế phải; cuối bài không trả lời đúng câu hỏi (kèm đơn vị).</div>`,
    bt: [
      [1, 'Giải hệ: 2x + y = 7 và x − y = 2.', 'Cộng vế: 3x = 9 ⇒ x = 3, y = 3 − 2 = 1. Nghiệm <b>(3; 1)</b>.'],
      [1, 'Giải hệ bằng phương pháp thế: x = 2y và 3x − y = 10.', 'Thế x = 2y: 6y − y = 10 ⇒ y = 2, x = 4. Nghiệm <b>(4; 2)</b>.'],
      [1, 'Cặp số (1; 2) có là nghiệm của phương trình 3x − y = 1 không?', '3·1 − 2 = 1 ✔. <b>Có</b>.'],
      [2, 'Giải hệ: 3x + 2y = 12 và 2x − 3y = −5.', 'Nhân PT1 với 3, PT2 với 2: 9x + 6y = 36; 4x − 6y = −10. Cộng: 13x = 26 ⇒ x = 2 ⇒ y = 3. Nghiệm <b>(2; 3)</b>.'],
      [2, 'Tìm hai số biết tổng của chúng là 59 và hai lần số lớn kém ba lần số bé 7 đơn vị.', 'Gọi số lớn x, số bé y: x + y = 59; 3y − 2x = 7. Thế x = 59 − y: 3y − 118 + 2y = 7 ⇒ y = 25, x = 34. <b>Hai số là 34 và 25</b>.'],
      [2, 'Một ca nô xuôi dòng 2 giờ được 60 km, ngược dòng 3 giờ được 72 km. Tính vận tốc riêng của ca nô và vận tốc dòng nước.', 'Gọi vận tốc riêng v, dòng nước u (km/h): v + u = 30; v − u = 24 ⇒ <b>v = 27 km/h, u = 3 km/h</b>.'],
      [2, 'Hai đội cùng làm một công việc thì 12 ngày xong. Nếu làm chung 8 ngày rồi đội A làm một mình 7 ngày nữa thì xong. Hỏi mỗi đội làm một mình thì bao lâu xong?', 'Gọi mỗi ngày đội A làm được a, đội B làm được b (phần công việc). a + b = 1/12; 8(a + b) + 7a = 1 ⇒ 8/12 + 7a = 1 ⇒ a = 1/21; b = 1/12 − 1/21 = 1/28. <b>Đội A: 21 ngày, đội B: 28 ngày</b>.'],
      [3, 'Cho hệ mx + y = 2 và x + y = 1. a) Tìm m để hệ có nghiệm duy nhất, tìm nghiệm đó. b) Với m nào hệ vô nghiệm?', 'Trừ vế: (m − 1)x = 1. a) <b>m ≠ 1</b>: x = 1/(m − 1), y = 1 − x = (m − 2)/(m − 1). b) <b>m = 1</b>: 0·x = 1 vô lí ⇒ vô nghiệm.'],
      [3, 'Giải hệ: 1/x + 1/y = 3/4 và 1/x − 1/y = 1/4.', 'Đặt a = 1/x, b = 1/y: a + b = 3/4, a − b = 1/4 ⇒ a = 1/2, b = 1/4 ⇒ <b>x = 2, y = 4</b>.']
    ] },

  bpt: { ly: `
<h3>Ví dụ mẫu — phương trình chứa ẩn ở mẫu</h3>
<p>Giải 1/(x − 1) + 2/(x + 1) = 4/(x² − 1). ĐKXĐ: x ≠ ±1. Quy đồng, khử mẫu: (x + 1) + 2(x − 1) = 4 ⇔ 3x − 1 = 4 ⇔ x = 5/3 (thoả mãn). Vậy <b>x = 5/3</b>.</p>
<h3>Chứng minh bất đẳng thức bằng biến đổi tương đương</h3>
<p>Ý tưởng: chuyển về dạng "tổng các bình phương ≥ 0". Ví dụ a² + b² ≥ 2ab ⇔ a² − 2ab + b² ≥ 0 ⇔ (a − b)² ≥ 0 (luôn đúng). Dấu "=" khi a = b.</p>
<div class="meo">⚠️ Lỗi hay mắc: nhân/chia hai vế bất phương trình cho số âm mà <b>quên đổi chiều</b>; giải phương trình chứa ẩn ở mẫu xong <b>quên loại nghiệm</b> vi phạm ĐKXĐ.</div>`,
    bt: [
      [1, 'Giải phương trình (x − 2)(2x + 6) = 0.', 'x − 2 = 0 hoặc 2x + 6 = 0 ⇒ <b>x = 2 hoặc x = −3</b>.'],
      [1, 'Giải bất phương trình 3x − 5 ≥ 7.', '3x ≥ 12 ⇔ <b>x ≥ 4</b>.'],
      [1, 'Giải bất phương trình 5 − 2x &lt; 1.', '−2x &lt; −4 ⇔ <b>x &gt; 2</b> (chia cho −2, đổi chiều).'],
      [2, 'Giải phương trình x/(x − 2) − 1/x = 2/(x(x − 2)).', 'ĐK x ≠ 0, x ≠ 2. Nhân x(x − 2): x² − (x − 2) = 2 ⇔ x² − x = 0 ⇔ x = 0 (loại) hoặc x = 1. Vậy <b>x = 1</b>.'],
      [2, 'Giải bất phương trình (2x − 1)/3 − (x + 1)/2 ≤ 1.', 'Nhân 6: 2(2x − 1) − 3(x + 1) ≤ 6 ⇔ x − 5 ≤ 6 ⇔ <b>x ≤ 11</b>.'],
      [2, 'Khuê có 200 000 đồng, mua một hộp bút giá 50 000 đồng và vở giá 12 000 đồng/quyển. Hỏi mua được nhiều nhất bao nhiêu quyển vở?', '50 000 + 12 000x ≤ 200 000 ⇔ x ≤ 12,5. x nguyên ⇒ <b>nhiều nhất 12 quyển</b>.'],
      [3, 'Chứng minh với mọi a, b, c: a² + b² + c² ≥ ab + bc + ca.', 'Nhân 2: 2a² + 2b² + 2c² − 2ab − 2bc − 2ca = (a − b)² + (b − c)² + (c − a)² ≥ 0. Dấu "=" khi a = b = c.'],
      [3, 'Cho a, b &gt; 0. Chứng minh a/b + b/a ≥ 2.', '(a − b)² ≥ 0 ⇒ a² + b² ≥ 2ab. Chia hai vế cho ab &gt; 0: a/b + b/a ≥ 2. Dấu "=" khi a = b.']
    ] },

  'ham-so': { ly: `
<h3>Tính chất biến thiên</h3>
<ul><li>a &gt; 0: hàm số <b>nghịch biến</b> khi x &lt; 0, <b>đồng biến</b> khi x &gt; 0.</li>
<li>a &lt; 0: hàm số <b>đồng biến</b> khi x &lt; 0, <b>nghịch biến</b> khi x &gt; 0.</li></ul>
<h3>Các dạng bài</h3>
<ol><li>Tính giá trị f(x₀); kiểm tra điểm M(x₀; y₀) thuộc đồ thị ⇔ y₀ = a·x₀².</li>
<li>Tìm a khi biết đồ thị đi qua một điểm.</li>
<li>Tìm toạ độ giao điểm của (P) và (d); tìm tham số để (d) cắt / tiếp xúc / không cắt (P) — dùng Δ.</li></ol>
<h3>Ví dụ mẫu</h3>
<p>Tìm giao điểm của (P): y = x² và (d): y = x + 2. Phương trình hoành độ: x² = x + 2 ⇔ x² − x − 2 = 0 ⇔ x = −1 hoặc x = 2. Giao điểm: <b>(−1; 1) và (2; 4)</b>.</p>`,
    bt: [
      [1, 'Cho f(x) = 2x². Tính f(−1), f(3).', 'f(−1) = 2; f(3) = 18.'],
      [1, 'Điểm A(−2; 8) có thuộc đồ thị y = 2x² không?', '2·(−2)² = 8 ✔. <b>Có</b>.'],
      [1, 'Tìm a biết đồ thị y = ax² đi qua M(2; −2).', '−2 = a·4 ⇒ <b>a = −1/2</b>.'],
      [2, 'Tìm toạ độ giao điểm của (P): y = x² và (d): y = −x + 6.', 'x² + x − 6 = 0 ⇔ x = 2 hoặc x = −3 ⇒ <b>(2; 4) và (−3; 9)</b>.'],
      [2, 'Lập bảng giá trị của y = −½x² với x = −2; −1; 0; 1; 2.', 'y lần lượt: −2; −0,5; 0; −0,5; −2.'],
      [2, 'Quãng đường rơi tự do (bỏ qua sức cản) là s = 5t² (s tính bằng m, t bằng giây). Sau bao lâu vật rơi được 80 m?', '5t² = 80 ⇔ t² = 16 ⇔ t = 4 (t &gt; 0). <b>4 giây</b>.'],
      [3, 'Tìm m để (d): y = 2x + m cắt (P): y = x² tại hai điểm phân biệt.', 'x² − 2x − m = 0 có Δ\' = 1 + m &gt; 0 ⇔ <b>m &gt; −1</b>.'],
      [3, 'Tìm m để (d): y = 2x + m tiếp xúc (P): y = x². Tìm toạ độ tiếp điểm.', 'Δ\' = 1 + m = 0 ⇔ <b>m = −1</b>; nghiệm kép x = 1 ⇒ tiếp điểm <b>(1; 1)</b>.'],
      [3, 'Với m &gt; −1, gọi x₁, x₂ là hoành độ giao điểm của (d): y = 2x + m và (P): y = x². Tìm m để x₁² + x₂² = 10.', 'Vi-ét: S = 2, P = −m. x₁² + x₂² = S² − 2P = 4 + 2m = 10 ⇔ <b>m = 3</b> (thoả m &gt; −1).']
    ] },

  'pt-bac-hai': { ly: `
<h3>Các trường hợp đặc biệt — giải nhanh không cần Δ</h3>
<ul><li>Khuyết c: ax² + bx = 0 ⇔ x(ax + b) = 0 ⇔ x = 0 hoặc x = −b/a.</li>
<li>Khuyết b: ax² + c = 0 ⇔ x² = −c/a (có nghiệm khi −c/a ≥ 0).</li>
<li>Nhẩm nghiệm bằng a + b + c = 0 hoặc a − b + c = 0.</li></ul>
<h3>Phương trình quy về bậc hai (mở rộng)</h3>
<p><b>Trùng phương</b> ax⁴ + bx² + c = 0: đặt t = x² (t ≥ 0) → at² + bt + c = 0 → chỉ lấy t ≥ 0 → x = ±√t.</p>
<h3>Ví dụ mẫu — bài toán thực tế</h3>
<p>Mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng 4 m, diện tích 96 m². Gọi chiều rộng x (m, x &gt; 0): x(x + 4) = 96 ⇔ x² + 4x − 96 = 0; Δ\' = 4 + 96 = 100 ⇒ x = −2 + 10 = 8 (nhận), x = −12 (loại). <b>Chiều rộng 8 m, chiều dài 12 m</b>.</p>
<div class="meo">⚠️ Trước khi dùng Vi-ét phải chắc chắn phương trình <b>có nghiệm</b> (Δ ≥ 0). Bài tìm tham số luôn phải đối chiếu lại điều kiện Δ.</div>`,
    bt: [
      [1, 'Giải phương trình 2x² − 8 = 0.', 'x² = 4 ⇔ <b>x = ±2</b>.'],
      [1, 'Giải phương trình x² − 3x = 0.', 'x(x − 3) = 0 ⇔ <b>x = 0 hoặc x = 3</b>.'],
      [1, 'Giải phương trình x² − 6x + 5 = 0.', 'a + b + c = 1 − 6 + 5 = 0 ⇒ <b>x₁ = 1, x₂ = 5</b>.'],
      [1, 'Giải phương trình x² + 4x + 4 = 0.', 'Δ\' = 4 − 4 = 0 ⇒ nghiệm kép <b>x = −2</b> (hoặc (x + 2)² = 0).'],
      [1, 'Không giải, tính tổng và tích các nghiệm của 2x² − 7x + 3 = 0.', 'Δ = 49 − 24 = 25 &gt; 0 nên có hai nghiệm. <b>S = 7/2, P = 3/2</b>.'],
      [2, 'Giải phương trình 3x² − 5x − 2 = 0.', 'Δ = 25 + 24 = 49 ⇒ x = (5 ± 7)/6 ⇒ <b>x₁ = 2, x₂ = −1/3</b>.'],
      [2, 'Tìm hai số biết tổng bằng 12 và tích bằng 35.', 'Hai số là nghiệm của X² − 12X + 35 = 0 ⇒ <b>5 và 7</b>.'],
      [2, 'Cho x² − 5x + 3 = 0 có hai nghiệm x₁, x₂. Tính x₁² + x₂² và 1/x₁ + 1/x₂.', 'Δ = 13 &gt; 0. S = 5, P = 3 ⇒ x₁² + x₂² = 25 − 6 = <b>19</b>; 1/x₁ + 1/x₂ = S/P = <b>5/3</b>.'],
      [2, 'Một ô tô đi quãng đường 120 km. Nếu tăng vận tốc thêm 10 km/h thì đến sớm hơn 1 giờ. Tính vận tốc ban đầu.', 'Gọi vận tốc x km/h (x &gt; 0): 120/x − 120/(x + 10) = 1 ⇔ x² + 10x − 1200 = 0; Δ\' = 1225 ⇒ x = −5 + 35 = <b>30 km/h</b>.'],
      [3, 'Cho x² − 2(m + 1)x + m² = 0. Tìm m để phương trình có hai nghiệm phân biệt.', 'Δ\' = (m + 1)² − m² = 2m + 1 &gt; 0 ⇔ <b>m &gt; −1/2</b>.'],
      [3, 'Với phương trình trên, tìm m để x₁² + x₂² = 12.', 'Cần Δ\' ≥ 0 ⇔ m ≥ −1/2. S = 2(m + 1), P = m²: 4(m + 1)² − 2m² = 12 ⇔ m² + 4m − 4 = 0 ⇔ m = −2 ± 2√2. Đối chiếu: <b>m = −2 + 2√2</b> (≈ 0,83); loại −2 − 2√2.'],
      [3, 'Giải phương trình x⁴ − 5x² + 4 = 0.', 'Đặt t = x² ≥ 0: t² − 5t + 4 = 0 ⇒ t = 1 hoặc t = 4 ⇒ <b>x ∈ {−2; −1; 1; 2}</b>.']
    ] },

  'luong-giac': { ly: `
<h3>Các hệ thức cơ bản (α là góc nhọn)</h3>
<div class="cong-thuc">sin²α + cos²α = 1 &nbsp;·&nbsp; tan α = sin α / cos α &nbsp;·&nbsp; tan α · cot α = 1 &nbsp;·&nbsp; 0 &lt; sin α, cos α &lt; 1</div>
<p>Khi góc α tăng từ 0° đến 90°: sin α và tan α <b>tăng</b>; cos α và cot α <b>giảm</b>.</p>
<h3>Giải tam giác vuông</h3>
<p>Biết 2 yếu tố (trong đó ít nhất 1 cạnh) → tìm các cạnh, góc còn lại bằng tỉ số lượng giác và định lí Pythagore. Dùng máy tính cầm tay ở chế độ <b>độ (Deg)</b>.</p>
<h3>Ví dụ mẫu — đo chiều cao</h3>
<p>Một cây có bóng dài 12 m trên mặt đất, tia nắng tạo với mặt đất góc 35°. Chiều cao cây h = 12 · tan 35° ≈ 12 · 0,7002 ≈ <b>8,4 m</b>.</p>`,
    bt: [
      [1, 'Tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm. Tính BC, sin B, cos B, tan B.', 'BC = √(9 + 16) = 5 cm. sin B = AC/BC = <b>4/5</b>; cos B = AB/BC = <b>3/5</b>; tan B = AC/AB = <b>4/3</b>.'],
      [1, 'Tính sin²30° + cos²30°.', '1/4 + 3/4 = <b>1</b> (đúng với mọi góc: sin²α + cos²α = 1).'],
      [1, 'So sánh sin 40° và cos 40°.', 'cos 40° = sin 50° &gt; sin 40° (sin tăng theo góc) ⇒ <b>sin 40° &lt; cos 40°</b>.'],
      [2, 'Một chiếc thang dài 4 m dựa vào tường, tạo với mặt đất góc 60°. Chân thang cách tường bao xa, đỉnh thang cao bao nhiêu?', 'Khoảng cách = 4·cos 60° = <b>2 m</b>; độ cao = 4·sin 60° = 2√3 ≈ <b>3,46 m</b>.'],
      [2, 'Tam giác ABC vuông tại A, đường cao AH, BH = 4 cm, CH = 9 cm. Tính AH, AB, AC.', 'AH² = BH·CH = 36 ⇒ AH = <b>6 cm</b>. BC = 13; AB² = BH·BC = 52 ⇒ AB = <b>2√13 cm</b>; AC² = CH·BC = 117 ⇒ AC = <b>3√13 cm</b>.'],
      [2, 'Cho sin α = 0,6 (α nhọn). Tính cos α, tan α.', 'cos α = √(1 − 0,36) = <b>0,8</b>; tan α = 0,6/0,8 = <b>0,75</b>.'],
      [3, 'Chứng minh với góc nhọn α trong tam giác vuông: sin²α + cos²α = 1.', 'sin²α + cos²α = (đối/huyền)² + (kề/huyền)² = (đối² + kề²)/huyền² = huyền²/huyền² = 1 (định lí Pythagore).'],
      [3, 'Từ đỉnh một ngọn hải đăng cao 50 m, người ta nhìn thấy một chiếc thuyền với góc hạ (góc giữa tia nhìn và phương ngang) bằng 30°. Tính khoảng cách từ thuyền đến chân hải đăng.', 'Góc hạ 30° bằng góc tạo bởi tia nhìn và mặt nước tại thuyền. d = 50 / tan 30° = 50√3 ≈ <b>86,6 m</b>.']
    ] },

  'duong-tron': { ly: `
<h3>Liên hệ giữa dây và khoảng cách đến tâm</h3>
<p>Trong một đường tròn: hai dây bằng nhau thì cách đều tâm; dây nào lớn hơn thì gần tâm hơn. Đường kính là dây lớn nhất.</p>
<h3>Vị trí tương đối của hai đường tròn (O; R), (O'; r), R ≥ r, d = OO'</h3>
<div class="cuon"><table><tr><th>Vị trí</th><th>Hệ thức</th><th>Số điểm chung</th></tr>
<tr><td>Cắt nhau</td><td>R − r &lt; d &lt; R + r</td><td>2</td></tr>
<tr><td>Tiếp xúc ngoài / trong</td><td>d = R + r / d = R − r</td><td>1</td></tr>
<tr><td>Ở ngoài nhau / đựng nhau</td><td>d &gt; R + r / d &lt; R − r</td><td>0</td></tr></table></div>
<h3>Ba cách chứng minh tứ giác nội tiếp</h3>
<ol><li>Tổng hai góc đối bằng 180°.</li><li>Hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới hai góc bằng nhau (đặc biệt: cùng bằng 90°).</li><li>Bốn đỉnh cách đều một điểm.</li></ol>
<h3>Ví dụ mẫu</h3>
<p>Từ M ở ngoài (O) kẻ hai tiếp tuyến MA, MB. Chứng minh MAOB nội tiếp: góc MAO = góc MBO = 90° (tiếp tuyến ⊥ bán kính) ⇒ tổng hai góc đối bằng 180° ⇒ <b>MAOB nội tiếp</b> (đường tròn đường kính MO).</p>`,
    bt: [
      [1, 'Đường tròn bán kính 5 cm có dây AB cách tâm 3 cm. Tính AB.', 'Kẻ OH ⊥ AB thì H là trung điểm AB. AH = √(25 − 9) = 4 ⇒ <b>AB = 8 cm</b>.'],
      [1, 'Góc nội tiếp chắn cung có số đo 100° thì có số đo bao nhiêu?', '<b>50°</b>.'],
      [1, 'Tính độ dài đường tròn và diện tích hình tròn bán kính 3 cm.', 'C = 6π ≈ <b>18,85 cm</b>; S = 9π ≈ <b>28,27 cm²</b>.'],
      [1, 'Tứ giác ABCD nội tiếp có Â = 70°, B̂ = 105°. Tính Ĉ, D̂.', 'Ĉ = 180° − 70° = <b>110°</b>; D̂ = 180° − 105° = <b>75°</b>.'],
      [2, 'Tính độ dài cung 60° và diện tích hình quạt 60° của đường tròn bán kính 6 cm.', 'l = π·6·60/180 = 2π ≈ <b>6,28 cm</b>; S = π·36·60/360 = 6π ≈ <b>18,85 cm²</b>.'],
      [2, 'Từ M ở ngoài (O; 3 cm) với OM = 5 cm, kẻ tiếp tuyến MA (A là tiếp điểm). Tính MA.', 'Tam giác OAM vuông tại A: MA = √(25 − 9) = <b>4 cm</b>.'],
      [2, 'Cho tam giác ABC nhọn, các đường cao BE, CF. Chứng minh tứ giác BCEF nội tiếp.', 'Góc BEC = góc BFC = 90° ⇒ E, F cùng nhìn BC dưới góc vuông ⇒ E, F thuộc đường tròn đường kính BC ⇒ <b>BCEF nội tiếp</b>.'],
      [3, 'Tiếp bài trên, gọi H là trực tâm. Chứng minh AEHF nội tiếp và AF·AB = AE·AC.', 'Góc AEH + góc AFH = 90° + 90° = 180° ⇒ AEHF nội tiếp. Tam giác AEB và AFC có góc A chung, góc AEB = góc AFC = 90° ⇒ đồng dạng ⇒ AE/AF = AB/AC ⇒ <b>AF·AB = AE·AC</b>.'],
      [3, 'Hai đường tròn (O; 5 cm) và (O\'; 3 cm) có OO\' = 7 cm. Xác định vị trí tương đối.', 'R − r = 2 &lt; 7 &lt; 8 = R + r ⇒ <b>cắt nhau</b>.'],
      [3, 'Tính diện tích hình viên phân giới hạn bởi dây AB và cung nhỏ AB, biết R = 4 cm và góc AOB = 90°.', 'S quạt = π·16·90/360 = 4π; S tam giác AOB = ½·4·4 = 8. S viên phân = 4π − 8 ≈ <b>4,57 cm²</b>.']
    ] },

  'hinh-khoi': { ly: `
<h3>Ví dụ mẫu</h3>
<p>Một lon nước hình trụ có đường kính đáy 6,6 cm, cao 12 cm. Thể tích V = π · 3,3² · 12 ≈ <b>410,5 cm³</b> (khoảng 410 mL — đúng với lon 330 mL còn khoảng trống phía trên).</p>
<div class="meo">⚠️ Đề hay cho <b>đường kính</b> — nhớ chia đôi để lấy bán kính. Đổi cùng đơn vị trước khi tính; 1 dm³ = 1 lít, 1 cm³ = 1 mL.</div>`,
    bt: [
      [1, 'Hình trụ có r = 3 cm, h = 5 cm. Tính diện tích xung quanh và thể tích.', 'S<sub>xq</sub> = 2π·3·5 = 30π ≈ <b>94,25 cm²</b>; V = π·9·5 = 45π ≈ <b>141,37 cm³</b>.'],
      [1, 'Hình nón có r = 3 cm, h = 4 cm. Tính đường sinh, diện tích xung quanh, thể tích.', 'l = √(9 + 16) = 5 cm; S<sub>xq</sub> = π·3·5 = <b>15π cm²</b>; V = ⅓π·9·4 = <b>12π cm³</b>.'],
      [1, 'Hình cầu bán kính 6 cm. Tính diện tích mặt cầu và thể tích.', 'S = 4π·36 = <b>144π cm²</b>; V = 4/3·π·216 = <b>288π cm³</b>.'],
      [2, 'Quả bóng đá có đường kính 22 cm. Tính diện tích da cần để may (bỏ qua đường may).', 'R = 11 cm ⇒ S = 4π·121 = 484π ≈ <b>1520,5 cm²</b>.'],
      [2, 'Chiếc nón lá có đường kính vành 40 cm, cao 19 cm. Tính diện tích lá cần để phủ mặt nón (diện tích xung quanh).', 'r = 20; l = √(400 + 361) = √761 ≈ 27,6 cm. S<sub>xq</sub> = π·20·27,6 ≈ <b>1733 cm²</b>.'],
      [3, 'Từ khối gỗ hình trụ r = 3 cm, h = 4 cm, người ta khoét bỏ một hình nón có cùng đáy và cùng chiều cao. Tính thể tích phần còn lại.', 'V trụ = 36π; V nón = 12π ⇒ còn lại <b>24π ≈ 75,4 cm³</b> (bằng 2/3 khối trụ).'],
      [3, 'Một quả cầu bán kính R đặt vừa khít trong một hình trụ (bán kính R, chiều cao 2R). Tính tỉ số thể tích quả cầu và hình trụ.', 'V cầu / V trụ = (4/3·πR³) / (πR²·2R) = <b>2/3</b> (kết quả nổi tiếng của Archimedes).']
    ] },

  'da-giac': { ly: `
<div class="cong-thuc">Tổng các góc của n-giác lồi: (n − 2)·180° &nbsp;·&nbsp; Mỗi góc của n-giác đều: (n − 2)·180° / n</div>
<div class="cuon"><table><tr><th>Đa giác đều cạnh a</th><th>Bán kính ngoại tiếp R</th><th>Bán kính nội tiếp r</th></tr>
<tr><td>Tam giác đều</td><td>a√3/3</td><td>a√3/6</td></tr>
<tr><td>Hình vuông</td><td>a√2/2</td><td>a/2</td></tr>
<tr><td>Lục giác đều</td><td>a</td><td>a√3/2</td></tr></table></div>`,
    bt: [
      [1, 'Tính số đo mỗi góc của ngũ giác đều, bát giác đều.', 'Ngũ giác: 3·180°/5 = <b>108°</b>; bát giác: 6·180°/8 = <b>135°</b>.'],
      [1, 'Tổng các góc của một lục giác là bao nhiêu?', '(6 − 2)·180° = <b>720°</b>.'],
      [1, 'Phép quay tâm O (tâm hình vuông) với góc nào biến hình vuông thành chính nó?', '<b>90°, 180°, 270°, 360°</b>.'],
      [2, 'Tính bán kính đường tròn ngoại tiếp và nội tiếp tam giác đều cạnh 6 cm.', 'R = 6√3/3 = <b>2√3 cm</b>; r = 6√3/6 = <b>√3 cm</b>.'],
      [2, 'Lục giác đều nội tiếp đường tròn bán kính 5 cm. Tính cạnh và chu vi.', 'Cạnh = R = <b>5 cm</b>; chu vi <b>30 cm</b>.'],
      [3, 'Một đa giác đều có mỗi góc bằng 140°. Đa giác đó có bao nhiêu cạnh?', '(n − 2)·180 = 140n ⇔ 40n = 360 ⇔ <b>n = 9</b>.'],
      [3, 'Tính diện tích lục giác đều cạnh 4 cm.', 'Lục giác đều gồm 6 tam giác đều cạnh a: S = 6·a²√3/4 = 3a²√3/2 = 24√3 ≈ <b>41,6 cm²</b>.']
    ] },

  'thong-ke': { ly: `
<h3>Các bước lập bảng tần số</h3>
<ol><li>Xác định các giá trị khác nhau của dữ liệu.</li><li>Đếm số lần xuất hiện (tần số n).</li><li>Tính tần số tương đối f = n / N · 100 % (N là tổng số dữ liệu). Tổng các tần số tương đối = 100 %.</li></ol>
<p><b>Số liệu ghép nhóm:</b> chia dữ liệu thành các nhóm dạng [a; b) — chứa a, không chứa b — rồi đếm tần số mỗi nhóm.</p>
<h3>Tính xác suất</h3>
<ol><li>Liệt kê không gian mẫu Ω (dùng bảng hoặc sơ đồ cây), kiểm tra các kết quả đồng khả năng.</li><li>Đếm số kết quả thuận lợi cho biến cố A.</li><li>P(A) = số kết quả thuận lợi / số phần tử của Ω (0 ≤ P(A) ≤ 1).</li></ol>`,
    bt: [
      [1, 'Điểm kiểm tra của 10 bạn: 7; 8; 9; 7; 6; 8; 8; 10; 7; 8. Lập bảng tần số và tính tần số tương đối của điểm 8.', 'Điểm 6: 1; 7: 3; 8: 4; 9: 1; 10: 1 (tổng 10). Tần số tương đối của điểm 8: 4/10 = <b>40 %</b>.'],
      [1, 'Gieo một con xúc xắc cân đối. Tính xác suất ra mặt 5 chấm; ra mặt có số chấm ≥ 5.', 'P(5) = <b>1/6</b>; P(≥ 5) = 2/6 = <b>1/3</b>.'],
      [1, 'Rút ngẫu nhiên một thẻ trong hộp có 20 thẻ đánh số 1 đến 20. Tính xác suất rút được thẻ ghi số chia hết cho 5.', 'Các số 5, 10, 15, 20 ⇒ 4/20 = <b>1/5</b>.'],
      [2, 'Gieo hai con xúc xắc. Tính xác suất tổng số chấm bằng 7; tổng ≥ 11.', 'Ω có 36 kết quả. Tổng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) ⇒ 6/36 = <b>1/6</b>. Tổng ≥ 11: (5,6), (6,5), (6,6) ⇒ 3/36 = <b>1/12</b>.'],
      [2, 'Hộp có 3 bi đỏ và 2 bi xanh. Lấy lần lượt 2 bi (không hoàn lại). Tính xác suất cả hai bi đều đỏ.', 'Số cách lấy có thứ tự: 5·4 = 20; cả hai đỏ: 3·2 = 6 ⇒ <b>6/20 = 3/10</b>.'],
      [2, 'Chiều cao (cm) của 40 học sinh: [150; 155): 5 bạn; [155; 160): 12; [160; 165): 15; [165; 170): 8. Tính tần số tương đối nhóm [160; 165).', '15/40 = <b>37,5 %</b> — đây cũng là nhóm có tần số lớn nhất.'],
      [3, 'Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất số đó là số chính phương.', 'Có 90 số (10 → 99). Số chính phương: 16, 25, 36, 49, 64, 81 ⇒ 6/90 = <b>1/15</b>.'],
      [3, 'Gieo một đồng xu 3 lần. Tính xác suất có ít nhất 2 lần ra mặt sấp.', 'Ω có 8 kết quả. Thuận lợi: SSS, SSN, SNS, NSS ⇒ 4/8 = <b>1/2</b>.']
    ] }
};
