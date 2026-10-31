// Du lieu kien thuc cac mon lop 9 (chuong trinh GDPT 2018).
// Moi mon: id (dung tren URL mon.html?mon=id), ten, bieu tuong, mo ta, danh sach bai.
// Noi dung de dang HTML de co the chen bang, cong thuc, meo.
window.MON = [];

/* ============================ TOÁN ============================ */
MON.push({
  id: 'toan', ten: 'Toán', bieu: '📐',
  moTa: 'Căn thức, phương trình, hệ phương trình, hàm số y = ax², hình học đường tròn, lượng giác, thống kê – xác suất.',
  bai: [
    { id: 'can', ten: 'Căn bậc hai, căn bậc ba', noi: `
<p><b>Căn bậc hai số học</b> của a ≥ 0 là số x ≥ 0 sao cho x² = a, kí hiệu √a.</p>
<div class="cong-thuc">
√(A²) = |A| &nbsp;·&nbsp; √(AB) = √A·√B (A, B ≥ 0) &nbsp;·&nbsp; √(A/B) = √A/√B (A ≥ 0, B &gt; 0)<br>
Đưa thừa số ra ngoài: √(A²B) = |A|√B (B ≥ 0)<br>
Trục căn ở mẫu: A/√B = A√B / B &nbsp;·&nbsp; C/(√A ± √B) = C(√A ∓ √B)/(A − B)<br>
Căn bậc ba: ∛(a³) = a, mọi số thực đều có đúng một căn bậc ba.
</div>
<p><b>Điều kiện xác định:</b> √A xác định khi A ≥ 0; biểu thức có mẫu thì mẫu ≠ 0.</p>
<div class="meo">💡 Bài rút gọn biểu thức (thường là câu 1 đề thi vào 10): luôn viết <b>điều kiện xác định</b> trước, phân tích mẫu thành nhân tử để quy đồng, cuối cùng đối chiếu điều kiện.</div>
<details><summary>Ví dụ: Rút gọn A = √50 − 3√8 + √18</summary>
A = 5√2 − 6√2 + 3√2 = 2√2.</details>` },

    { id: 'hpt', ten: 'Phương trình & hệ hai phương trình bậc nhất hai ẩn', noi: `
<p>Phương trình bậc nhất hai ẩn: <code>ax + by = c</code> (a, b không đồng thời bằng 0), có vô số nghiệm; tập nghiệm biểu diễn bởi một đường thẳng.</p>
<p>Hệ hai phương trình: hai đường thẳng <b>cắt nhau</b> → 1 nghiệm; <b>song song</b> → vô nghiệm; <b>trùng nhau</b> → vô số nghiệm.</p>
<h3>Hai cách giải</h3>
<ul><li><b>Phương pháp thế:</b> rút một ẩn từ một phương trình, thế vào phương trình kia.</li>
<li><b>Phương pháp cộng đại số:</b> nhân để hệ số một ẩn đối nhau (hoặc bằng nhau) rồi cộng (trừ) vế theo vế.</li></ul>
<details><summary>Ví dụ: x + y = 5 và 2x − y = 1</summary>Cộng vế: 3x = 6 ⇒ x = 2, y = 3.</details>
<h3>Giải bài toán bằng cách lập hệ phương trình</h3>
<ol><li>Chọn ẩn, đặt điều kiện, đơn vị.</li><li>Biểu diễn các đại lượng chưa biết theo ẩn, lập hệ.</li><li>Giải hệ.</li><li>Đối chiếu điều kiện, trả lời.</li></ol>
<div class="meo">💡 Dạng hay gặp: chuyển động (s = v·t), năng suất – công việc (làm chung, làm riêng: 1 giờ làm được 1/x công việc), tìm số, phần trăm.</div>` },

    { id: 'bpt', ten: 'Bất đẳng thức, bất phương trình bậc nhất một ẩn', noi: `
<ul><li>Cộng cùng một số vào hai vế: giữ chiều bất đẳng thức.</li>
<li>Nhân với số <b>dương</b>: giữ chiều; nhân với số <b>âm</b>: <b>đổi chiều</b>.</li>
<li>Tính chất bắc cầu: a &gt; b, b &gt; c ⇒ a &gt; c.</li></ul>
<p>Bất phương trình bậc nhất một ẩn: <code>ax + b &gt; 0</code> (a ≠ 0). Ví dụ −2x + 6 &gt; 0 ⇔ −2x &gt; −6 ⇔ x &lt; 3.</p>
<p>Phương trình quy về bậc nhất: phương trình tích <code>(ax+b)(cx+d)=0</code> ⇔ ax+b=0 hoặc cx+d=0; phương trình chứa ẩn ở mẫu: tìm ĐKXĐ → quy đồng, khử mẫu → giải → đối chiếu ĐKXĐ.</p>` },

    { id: 'ham-so', ten: 'Hàm số y = ax² (a ≠ 0)', noi: `
<ul><li>Đồ thị là một <b>parabol</b> đỉnh O, nhận Oy làm trục đối xứng.</li>
<li>a &gt; 0: parabol quay bề lõm lên, y ≥ 0, giá trị nhỏ nhất y = 0 tại x = 0.</li>
<li>a &lt; 0: parabol quay bề lõm xuống, y ≤ 0, giá trị lớn nhất y = 0 tại x = 0.</li></ul>
<p><b>Vẽ đồ thị:</b> lập bảng giá trị với x = −2, −1, 0, 1, 2 rồi nối các điểm bằng đường cong trơn.</p>
<p><b>Giao parabol (P): y = ax² và đường thẳng (d): y = mx + n</b> — hoành độ giao điểm là nghiệm của <code>ax² − mx − n = 0</code>. Δ &gt; 0: cắt tại 2 điểm; Δ = 0: tiếp xúc; Δ &lt; 0: không cắt.</p>` },

    { id: 'pt-bac-hai', ten: 'Phương trình bậc hai & định lí Vi-ét', noi: `
<p>Dạng <code>ax² + bx + c = 0</code> (a ≠ 0).</p>
<div class="cong-thuc">
Δ = b² − 4ac<br>
Δ &gt; 0: x₁,₂ = (−b ± √Δ) / 2a &nbsp;·&nbsp; Δ = 0: x₁ = x₂ = −b / 2a &nbsp;·&nbsp; Δ &lt; 0: vô nghiệm<br>
Công thức thu gọn (b = 2b'): Δ' = b'² − ac, x₁,₂ = (−b' ± √Δ') / a
</div>
<h3>Định lí Vi-ét</h3>
<div class="cong-thuc">Nếu có nghiệm x₁, x₂ thì: S = x₁ + x₂ = −b/a, &nbsp; P = x₁·x₂ = c/a</div>
<ul><li>a + b + c = 0 ⇒ x₁ = 1, x₂ = c/a.</li>
<li>a − b + c = 0 ⇒ x₁ = −1, x₂ = −c/a.</li>
<li>Hai số có tổng S, tích P là nghiệm của X² − SX + P = 0 (cần S² ≥ 4P).</li>
<li>a và c trái dấu (ac &lt; 0) ⇒ phương trình luôn có hai nghiệm trái dấu.</li></ul>
<div class="meo">💡 Biểu thức đối xứng: x₁² + x₂² = S² − 2P; 1/x₁ + 1/x₂ = S/P; (x₁ − x₂)² = S² − 4P.</div>
<details><summary>Ví dụ: x² − 5x + 6 = 0</summary>Δ = 25 − 24 = 1 ⇒ x₁ = 3, x₂ = 2. Kiểm tra: S = 5, P = 6 ✔</details>` },

    { id: 'luong-giac', ten: 'Tỉ số lượng giác & hệ thức trong tam giác vuông', noi: `
<p>Tam giác ABC vuông tại A, góc nhọn B:</p>
<div class="cong-thuc">sin B = đối/huyền = AC/BC &nbsp;·&nbsp; cos B = kề/huyền = AB/BC<br>tan B = đối/kề = AC/AB &nbsp;·&nbsp; cot B = kề/đối = AB/AC</div>
<div class="meo">💡 Mẹo nhớ: "<b>Sin đi học, Cos không hư, Tan đoàn kết, Cot kết đoàn</b>" — sin = đối/huyền, cos = kề/huyền, tan = đối/kề, cot = kề/đối.</div>
<p>Hai góc phụ nhau (α + β = 90°): sin α = cos β, tan α = cot β.</p>
<div class="cuon"><table><tr><th></th><th>30°</th><th>45°</th><th>60°</th></tr>
<tr><td>sin</td><td>1/2</td><td>√2/2</td><td>√3/2</td></tr>
<tr><td>cos</td><td>√3/2</td><td>√2/2</td><td>1/2</td></tr>
<tr><td>tan</td><td>√3/3</td><td>1</td><td>√3</td></tr>
<tr><td>cot</td><td>√3</td><td>1</td><td>√3/3</td></tr></table></div>
<p><b>Hệ thức cạnh và góc:</b> cạnh góc vuông = cạnh huyền × sin góc đối = cạnh huyền × cos góc kề; cạnh góc vuông = cạnh góc vuông kia × tan góc đối.</p>
<p><b>Hệ thức lượng</b> (đường cao AH = h, hình chiếu BH = c', CH = b'): b² = a·b', c² = a·c', h² = b'·c', b·c = a·h, 1/h² = 1/b² + 1/c².</p>` },

    { id: 'duong-tron', ten: 'Đường tròn, góc với đường tròn, tứ giác nội tiếp', noi: `
<ul>
<li>Đường kính vuông góc với dây thì đi qua trung điểm của dây.</li>
<li><b>Vị trí đường thẳng – đường tròn</b> (d = khoảng cách từ tâm): d &lt; R cắt; d = R tiếp xúc; d &gt; R không giao.</li>
<li><b>Tiếp tuyến</b> vuông góc với bán kính tại tiếp điểm. Hai tiếp tuyến cắt nhau tại M: MA = MB, MO là phân giác góc AMB.</li>
<li><b>Góc nội tiếp</b> bằng nửa số đo cung bị chắn; góc nội tiếp chắn nửa đường tròn là góc vuông.</li>
<li>Góc tạo bởi tia tiếp tuyến và dây cung bằng nửa số đo cung bị chắn.</li>
<li><b>Tứ giác nội tiếp</b> ⇔ tổng hai góc đối bằng 180°; hoặc hai đỉnh kề cùng nhìn cạnh nối hai đỉnh còn lại dưới một góc bằng nhau.</li>
<li>Tam giác: tâm đường tròn <b>ngoại tiếp</b> = giao ba đường trung trực; tâm <b>nội tiếp</b> = giao ba đường phân giác. Tam giác vuông: tâm ngoại tiếp là trung điểm cạnh huyền.</li>
</ul>
<div class="cong-thuc">Độ dài đường tròn C = 2πR &nbsp;·&nbsp; Cung n°: l = πRn/180<br>Diện tích hình tròn S = πR² &nbsp;·&nbsp; Hình quạt n°: S = πR²n/360 = lR/2<br>Hình vành khuyên: S = π(R² − r²)</div>
<div class="meo">💡 Bài hình thi vào 10 hầu như luôn có câu "chứng minh tứ giác nội tiếp". Tìm hai góc vuông nhìn cùng một cạnh — đó là cách nhanh nhất.</div>` },

    { id: 'hinh-khoi', ten: 'Hình trụ, hình nón, hình cầu', noi: `
<div class="cuon"><table><tr><th>Hình</th><th>Diện tích xung quanh</th><th>Thể tích</th></tr>
<tr><td>Hình trụ (bán kính r, chiều cao h)</td><td>S<sub>xq</sub> = 2πrh; S<sub>tp</sub> = 2πrh + 2πr²</td><td>V = πr²h</td></tr>
<tr><td>Hình nón (đường sinh l)</td><td>S<sub>xq</sub> = πrl; S<sub>tp</sub> = πrl + πr²</td><td>V = ⅓πr²h</td></tr>
<tr><td>Hình cầu (bán kính R)</td><td>S = 4πR²</td><td>V = 4/3·πR³</td></tr></table></div>
<p>Hình nón: l² = h² + r² (định lí Pythagore).</p>` },

    { id: 'da-giac', ten: 'Đa giác đều & phép quay', noi: `
<ul><li>Đa giác đều: tất cả các cạnh bằng nhau và tất cả các góc bằng nhau. Mỗi góc của n-giác đều bằng (n − 2)·180°/n.</li>
<li>Mọi đa giác đều đều có một đường tròn ngoại tiếp và một đường tròn nội tiếp, cùng tâm.</li>
<li>Phép quay tâm O góc α biến đa giác đều n cạnh thành chính nó khi α = k·360°/n.</li></ul>` },

    { id: 'thong-ke', ten: 'Thống kê & xác suất', noi: `
<ul><li><b>Tần số</b>: số lần một giá trị xuất hiện. <b>Tần số tương đối</b> = tần số / tổng số dữ liệu (thường ghi %).</li>
<li>Biểu diễn bằng bảng tần số, biểu đồ cột, biểu đồ hình quạt tròn; số liệu ghép nhóm dùng biểu đồ cột liền nhau (tần số ghép nhóm).</li>
<li><b>Phép thử ngẫu nhiên</b>, <b>không gian mẫu</b> Ω (tập mọi kết quả có thể).</li></ul>
<div class="cong-thuc">Xác suất của biến cố A (các kết quả đồng khả năng): P(A) = số kết quả thuận lợi cho A / số phần tử của Ω</div>
<details><summary>Ví dụ: gieo hai đồng xu</summary>Ω = {SS, SN, NS, NN} có 4 kết quả. P(có đúng một mặt sấp) = 2/4 = 1/2.</details>` }
  ]
});

/* ============================ NGỮ VĂN ============================ */
MON.push({
  id: 'van', ten: 'Ngữ văn', bieu: '📖',
  moTa: 'Truyện truyền kỳ, thơ song thất lục bát, Truyện Kiều, nghị luận xã hội & văn học, tiếng Việt.',
  bai: [
    { id: 'the-loai', ten: 'Các thể loại trọng tâm lớp 9', noi: `
<div class="cuon"><table><tr><th>Thể loại</th><th>Đặc điểm cần nhớ</th><th>Văn bản tiêu biểu</th></tr>
<tr><td>Truyện truyền kỳ</td><td>Kết hợp yếu tố thực và kì ảo; nhân vật thường gặp số phận oan trái; phản ánh hiện thực, đề cao nhân nghĩa.</td><td><i>Chuyện người con gái Nam Xương</i> (Nguyễn Dữ – <i>Truyền kỳ mạn lục</i>)</td></tr>
<tr><td>Truyện thơ Nôm</td><td>Tự sự bằng thơ lục bát, chữ Nôm; có cốt truyện, nhân vật, lời kể; nghệ thuật ước lệ tượng trưng.</td><td><i>Truyện Kiều</i> (Nguyễn Du): Chị em Thuý Kiều, Kiều ở lầu Ngưng Bích…</td></tr>
<tr><td>Thơ song thất lục bát</td><td>Cặp câu 7–7 rồi cặp 6–8 nối tiếp; vần lưng và vần chân; giàu nhạc điệu, hợp diễn tả nỗi buồn, nhớ thương.</td><td><i>Chinh phụ ngâm</i> (Đặng Trần Côn, bản diễn Nôm)</td></tr>
<tr><td>Thơ hiện đại / tự do</td><td>Hình ảnh, nhịp điệu, giọng điệu, cảm xúc của chủ thể trữ tình.</td><td>Các bài thơ trong SGK</td></tr>
<tr><td>Truyện trinh thám</td><td>Có vụ án, thám tử, quá trình điều tra suy luận, tình huống bất ngờ.</td><td>Truyện Sherlock Holmes (Conan Doyle)…</td></tr>
<tr><td>Bi kịch</td><td>Xung đột gay gắt, nhân vật bi kịch, lời thoại, chỉ dẫn sân khấu.</td><td>Trích đoạn kịch trong SGK</td></tr>
<tr><td>Tùy bút, tản văn</td><td>Cái tôi tác giả đậm nét, kết hợp tự sự – miêu tả – biểu cảm – nghị luận.</td><td></td></tr></table></div>
<div class="meo">💡 Sách giáo khoa mỗi bộ (Kết nối tri thức, Chân trời sáng tạo, Cánh diều) chọn văn bản khác nhau. Đề thi vào 10 thường cho <b>văn bản ngoài SGK</b>, nên điều quan trọng là nắm <b>đặc điểm thể loại</b> và <b>cách phân tích</b>.</div>` },

    { id: 'truyen-kieu', ten: 'Nguyễn Du và Truyện Kiều', noi: `
<ul><li><b>Nguyễn Du</b> (1765–1820), hiệu Tố Như, danh nhân văn hoá thế giới.</li>
<li><b>Truyện Kiều</b> (<i>Đoạn trường tân thanh</i>): 3254 câu lục bát, dựa trên cốt truyện <i>Kim Vân Kiều truyện</i> (Thanh Tâm Tài Nhân, Trung Quốc) nhưng sáng tạo lớn về nghệ thuật.</li>
<li>Bố cục ba phần: Gặp gỡ và đính ước – Gia biến và lưu lạc – Đoàn tụ.</li>
<li><b>Giá trị hiện thực:</b> phơi bày xã hội phong kiến bất công, sức mạnh đồng tiền chà đạp con người.</li>
<li><b>Giá trị nhân đạo:</b> cảm thương số phận con người, đặc biệt người phụ nữ; đề cao tài, sắc, tình yêu tự do và khát vọng công lí.</li>
<li><b>Nghệ thuật:</b> bút pháp ước lệ tượng trưng, tả cảnh ngụ tình, miêu tả nội tâm, ngôn ngữ dân tộc đạt đỉnh cao.</li></ul>` },

    { id: 'nlxh', ten: 'Viết bài nghị luận xã hội', noi: `
<h3>Dàn ý chung</h3>
<ol><li><b>Mở bài:</b> giới thiệu vấn đề cần bàn.</li>
<li><b>Thân bài:</b>
<ul><li>Giải thích vấn đề (từ khoá, ý nghĩa).</li>
<li>Bàn luận: biểu hiện, nguyên nhân, tác động / ý nghĩa — mỗi luận điểm có <b>lí lẽ + dẫn chứng</b> cụ thể, xác thực.</li>
<li>Phản đề: nêu và bác bỏ quan điểm trái chiều.</li>
<li>Bài học nhận thức và hành động.</li></ul></li>
<li><b>Kết bài:</b> khẳng định lại vấn đề, liên hệ bản thân.</li></ol>
<div class="meo">💡 Đoạn văn nghị luận khoảng 200 chữ: một câu chủ đề – giải thích ngắn – 2–3 lí lẽ có dẫn chứng – phản đề – bài học. Chuẩn bị sẵn một "kho dẫn chứng" về người thật việc thật (vận động viên, nhà khoa học, tấm gương thanh niên…).</div>` },

    { id: 'nlvh', ten: 'Viết bài nghị luận văn học', noi: `
<h3>Phân tích một đoạn thơ / bài thơ</h3>
<ol><li>Mở bài: tác giả, tác phẩm, vị trí đoạn thơ, nhận định khái quát.</li>
<li>Thân bài: phân tích theo luận điểm (nội dung) kết hợp <b>nghệ thuật</b>: từ ngữ, hình ảnh, biện pháp tu từ, nhịp điệu, vần. Trích dẫn thơ chính xác.</li>
<li>Đánh giá: đặc sắc nội dung – nghệ thuật, đóng góp của tác giả.</li>
<li>Kết bài: khẳng định giá trị, cảm nghĩ.</li></ol>
<h3>Phân tích truyện</h3>
<p>Tập trung vào: tình huống truyện, nhân vật (ngoại hình, hành động, lời nói, nội tâm), chi tiết đặc sắc, ngôi kể, chủ đề – thông điệp.</p>
<div class="meo">💡 Công thức một đoạn phân tích: <b>Trích dẫn → Chỉ ra nghệ thuật → Tác dụng / ý nghĩa → Liên hệ, đánh giá.</b></div>` },

    { id: 'tieng-viet', ten: 'Tiếng Việt trọng tâm', noi: `
<ul>
<li><b>Điển tích, điển cố:</b> câu chuyện, sự việc trong sách xưa được dẫn ngắn gọn để nói điều tương tự. Ví dụ: "mắt xanh", "nàng Ban, ả Tạ".</li>
<li><b>Từ Hán Việt:</b> sắc thái trang trọng, cổ kính; phân biệt yếu tố Hán Việt đồng âm (ví dụ "thiên": trời / nghìn / dời).</li>
<li><b>Câu đơn, câu ghép:</b> câu ghép có từ hai cụm chủ – vị không bao nhau trở lên; nối bằng quan hệ từ (vì – nên, tuy – nhưng, nếu – thì…) hoặc dấu câu.</li>
<li><b>Câu rút gọn, câu đặc biệt.</b></li>
<li><b>Lời dẫn trực tiếp</b> (giữ nguyên, đặt trong ngoặc kép) và <b>gián tiếp</b> (thuật lại có điều chỉnh, không ngoặc kép).</li>
<li><b>Biện pháp tu từ:</b> so sánh, ẩn dụ, hoán dụ, nhân hoá, điệp ngữ, liệt kê, nói quá, nói giảm nói tránh, chơi chữ, đảo ngữ, câu hỏi tu từ.</li>
<li><b>Nghĩa của từ, sự phát triển nghĩa</b> (nghĩa gốc – nghĩa chuyển), từ ngữ địa phương, biệt ngữ xã hội.</li>
</ul>
<div class="meo">💡 Câu hỏi "nêu tác dụng của biện pháp tu từ" trả lời đủ 3 ý: <b>(1)</b> làm câu thơ/văn sinh động, gợi hình gợi cảm; <b>(2)</b> nhấn mạnh nội dung cụ thể nào; <b>(3)</b> thể hiện tình cảm, thái độ của tác giả.</div>` }
  ]
});

/* ============================ TIẾNG ANH ============================ */
MON.push({
  id: 'anh', ten: 'Tiếng Anh', bieu: '🇬🇧',
  moTa: 'Ngữ pháp trọng tâm: thì, câu bị động, câu tường thuật, câu điều kiện, wish, mệnh đề quan hệ; từ vựng 12 Unit.',
  bai: [
    { id: 'unit', ten: 'Các chủ đề (Global Success 9)', noi: `
<ol><li>Local Community</li><li>City Life</li><li>Healthy Living for Teens</li><li>Remembering the Past</li><li>Our Experiences</li><li>Vietnamese Lifestyle: Then and Now</li>
<li>Natural Wonders of the World</li><li>Tourism</li><li>World Englishes</li><li>Planet Earth</li><li>Electronic Devices</li><li>Career Choices</li></ol>
<div class="meo">💡 Học từ vựng theo chủ đề + ví dụ câu; mỗi ngày 10 từ, ôn lại sau 1 – 3 – 7 ngày (lặp lại ngắt quãng).</div>` },

    { id: 'thi', ten: 'Các thì thường gặp', noi: `
<div class="cuon"><table><tr><th>Thì</th><th>Công thức (khẳng định)</th><th>Dấu hiệu</th></tr>
<tr><td>Hiện tại đơn</td><td>S + V(s/es)</td><td>always, usually, every day</td></tr>
<tr><td>Hiện tại tiếp diễn</td><td>S + am/is/are + V-ing</td><td>now, at the moment, Look!</td></tr>
<tr><td>Hiện tại hoàn thành</td><td>S + have/has + V3/ed</td><td>since, for, already, yet, ever, never, so far</td></tr>
<tr><td>Quá khứ đơn</td><td>S + V2/ed</td><td>yesterday, ago, last…, in 2020</td></tr>
<tr><td>Quá khứ tiếp diễn</td><td>S + was/were + V-ing</td><td>at 8 p.m. yesterday, while, when</td></tr>
<tr><td>Quá khứ hoàn thành</td><td>S + had + V3/ed</td><td>before, after, by the time (hành động xảy ra trước một hành động quá khứ)</td></tr>
<tr><td>Tương lai đơn</td><td>S + will + V</td><td>tomorrow, next…, I think</td></tr>
<tr><td>Tương lai gần</td><td>S + am/is/are going to + V</td><td>dự định, có dấu hiệu chắc chắn</td></tr></table></div>
<p><b>used to + V</b>: thói quen trong quá khứ nay không còn. <i>I used to play marbles.</i></p>` },

    { id: 'bi-dong', ten: 'Câu bị động (Passive voice)', noi: `
<div class="cong-thuc">S + be (chia theo thì) + V3/ed (+ by O)</div>
<div class="cuon"><table><tr><th>Thì</th><th>Chủ động</th><th>Bị động</th></tr>
<tr><td>Hiện tại đơn</td><td>They clean the room.</td><td>The room <b>is cleaned</b>.</td></tr>
<tr><td>Quá khứ đơn</td><td>He wrote the letter.</td><td>The letter <b>was written</b>.</td></tr>
<tr><td>Hiện tại hoàn thành</td><td>She has finished it.</td><td>It <b>has been finished</b>.</td></tr>
<tr><td>Động từ khuyết thiếu</td><td>We must do it.</td><td>It <b>must be done</b>.</td></tr></table></div>` },

    { id: 'tuong-thuat', ten: 'Câu tường thuật (Reported speech)', noi: `
<p>Lùi thì: hiện tại đơn → quá khứ đơn; hiện tại tiếp diễn → quá khứ tiếp diễn; hiện tại hoàn thành/quá khứ đơn → quá khứ hoàn thành; will → would; can → could.</p>
<p>Đổi trạng từ: now → then; today → that day; tomorrow → the next day; yesterday → the day before; here → there; this → that; ago → before.</p>
<ul><li>Câu hỏi Yes/No: <i>He asked me <b>if/whether</b> I liked music.</i></li>
<li>Câu hỏi Wh-: <i>She asked me <b>where I lived</b>.</i> (không đảo trợ động từ)</li>
<li>Câu mệnh lệnh: <i>He told me <b>(not) to</b> open the door.</i></li></ul>` },

    { id: 'dieu-kien', ten: 'Câu điều kiện & câu ước (wish)', noi: `
<div class="cuon"><table><tr><th>Loại</th><th>Mệnh đề If</th><th>Mệnh đề chính</th><th>Dùng khi</th></tr>
<tr><td>1</td><td>If + S + V (hiện tại đơn)</td><td>S + will + V</td><td>có thể xảy ra ở hiện tại/tương lai</td></tr>
<tr><td>2</td><td>If + S + V2/ed (be → were)</td><td>S + would + V</td><td>không có thật ở hiện tại</td></tr></table></div>
<p><b>Wish (ở hiện tại):</b> S + wish + S + V2/ed (be → were). <i>I wish I <b>were</b> taller.</i><br>
Mong muốn cho tương lai: S + wish + S + could/would + V.</p>
<p><b>Unless</b> = If … not.</p>` },

    { id: 'quan-he', ten: 'Mệnh đề quan hệ & cấu trúc khác', noi: `
<ul><li><b>who</b> (người, làm chủ ngữ), <b>whom</b> (người, làm tân ngữ), <b>which</b> (vật), <b>that</b> (người/vật, dùng trong mệnh đề xác định), <b>whose</b> (sở hữu), <b>where</b> (nơi chốn), <b>when</b> (thời gian).</li>
<li>Mệnh đề <b>không xác định</b> có dấu phẩy, không dùng <i>that</i>: <i>Hanoi, which is the capital, …</i></li>
<li><b>suggest</b> + V-ing / suggest that + S + (should) + V.</li>
<li>Từ để hỏi + to-infinitive: <i>I don't know <b>what to do</b>.</i></li>
<li>It is + adj + to V; S + be + adj + that…</li>
<li>Câu hỏi đuôi (tag questions): khẳng định → đuôi phủ định và ngược lại.</li></ul>` },

    { id: 'phat-am', ten: 'Phát âm & trọng âm', noi: `
<ul><li>Đuôi <b>-ed</b>: /ɪd/ sau t, d; /t/ sau p, k, f, s, ʃ, tʃ; /d/ các trường hợp còn lại.</li>
<li>Đuôi <b>-s/es</b>: /ɪz/ sau s, z, ʃ, tʃ, dʒ; /s/ sau p, t, k, f, θ; /z/ còn lại.</li>
<li>Trọng âm: đa số danh từ/tính từ 2 âm tiết nhấn âm 1; động từ 2 âm tiết nhấn âm 2. Từ tận cùng -tion, -sion, -ic, -ity: nhấn âm ngay trước đuôi.</li></ul>` }
  ]
});

/* ============================ KHTN ============================ */
MON.push({
  id: 'khtn', ten: 'Khoa học tự nhiên', bieu: '🔬',
  moTa: 'Vật lí (năng lượng, ánh sáng, điện, điện từ) · Hoá học (kim loại, hợp chất hữu cơ) · Sinh học (di truyền, tiến hoá).',
  bai: [
    { id: 'co-nang', ten: 'Vật lí: Năng lượng cơ học, công, công suất', noi: `
<div class="cong-thuc">
Động năng: W<sub>đ</sub> = ½·m·v² &nbsp;·&nbsp; Thế năng trọng trường: W<sub>t</sub> = P·h = 10·m·h<br>
Cơ năng: W = W<sub>đ</sub> + W<sub>t</sub> (bảo toàn nếu bỏ qua ma sát)<br>
Công: A = F·s &nbsp;·&nbsp; Công suất: 𝒫 = A / t (đơn vị W; 1 kW = 1000 W)
</div>
<p>Đơn vị: m (kg), v (m/s), h (m), F (N), s (m), A (J), t (s).</p>` },

    { id: 'anh-sang', ten: 'Vật lí: Ánh sáng — khúc xạ, lăng kính, thấu kính', noi: `
<ul><li><b>Khúc xạ ánh sáng:</b> tia sáng bị gãy khúc tại mặt phân cách hai môi trường. Chiết suất n = c/v.</li>
<li><b>Phản xạ toàn phần:</b> ánh sáng đi từ môi trường chiết quang hơn sang kém hơn, góc tới ≥ góc giới hạn. Ứng dụng: cáp quang.</li>
<li><b>Lăng kính</b> tán sắc ánh sáng trắng thành dải màu đỏ → tím.</li>
<li><b>Thấu kính hội tụ</b> (rìa mỏng): vật ngoài tiêu cự cho ảnh thật, ngược chiều; vật trong tiêu cự cho ảnh ảo, cùng chiều, lớn hơn vật (kính lúp).</li>
<li><b>Thấu kính phân kì</b> (rìa dày): luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật.</li></ul>
<p>Ba tia đặc biệt: tia qua quang tâm truyền thẳng; tia song song trục chính → ló qua (hoặc có đường kéo dài qua) tiêu điểm F'; tia qua tiêu điểm F → ló song song trục chính.</p>
<div class="cong-thuc">Công thức thấu kính (hội tụ, ảnh thật): 1/f = 1/d + 1/d' &nbsp;·&nbsp; Độ phóng đại h'/h = d'/d<br>Kính lúp: số bội giác G = 25/f (f tính bằng cm)</div>` },

    { id: 'dien', ten: 'Vật lí: Điện — định luật Ohm, đoạn mạch', noi: `
<div class="cong-thuc">
Định luật Ohm: I = U / R &nbsp;·&nbsp; Điện trở dây dẫn: R = ρ·l / S<br>
Nối tiếp: I = I₁ = I₂ ; U = U₁ + U₂ ; R<sub>tđ</sub> = R₁ + R₂<br>
Song song: U = U₁ = U₂ ; I = I₁ + I₂ ; 1/R<sub>tđ</sub> = 1/R₁ + 1/R₂<br>
Năng lượng điện: W = U·I·t &nbsp;·&nbsp; Công suất điện: 𝒫 = U·I = I²R = U²/R
</div>
<p>1 kWh = 3 600 000 J. Số đếm công tơ điện tính bằng kWh ("số điện").</p>
<details><summary>Ví dụ: R₁ = 6 Ω song song R₂ = 3 Ω</summary>1/R = 1/6 + 1/3 = 1/2 ⇒ R<sub>tđ</sub> = 2 Ω.</details>` },

    { id: 'dien-tu', ten: 'Vật lí: Cảm ứng điện từ, dòng điện xoay chiều', noi: `
<ul><li>Khi số đường sức từ xuyên qua tiết diện cuộn dây kín <b>biến thiên</b> thì trong cuộn dây xuất hiện <b>dòng điện cảm ứng</b>.</li>
<li><b>Dòng điện xoay chiều</b>: chiều luân phiên thay đổi. Tạo ra bằng máy phát điện xoay chiều (nam châm quay hoặc cuộn dây quay).</li>
<li>Tác dụng của dòng điện xoay chiều: nhiệt, quang, từ, sinh lí.</li>
<li>Năng lượng tái tạo: mặt trời, gió, nước, sinh khối, địa nhiệt; năng lượng hoá thạch gây ô nhiễm, phát thải khí nhà kính.</li></ul>` },

    { id: 'kim-loai', ten: 'Hoá học: Kim loại & phi kim', noi: `
<p><b>Dãy hoạt động hoá học:</b> K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au</p>
<div class="meo">💡 Mẹo nhớ: "<b>Khi Nào Cần May Áo Záp Sắt Phải Hỏi Cửa Hàng Á Âu</b>" (K Na Ca Mg Al Zn Fe Pb H Cu Ag Au).</div>
<ul><li>Kim loại đứng trước H tác dụng với acid (HCl, H₂SO₄ loãng) giải phóng H₂: <code>Zn + 2HCl → ZnCl₂ + H₂↑</code></li>
<li>Kim loại mạnh hơn (từ Mg trở đi) đẩy kim loại yếu hơn ra khỏi dung dịch muối: <code>Fe + CuSO₄ → FeSO₄ + Cu</code></li>
<li>K, Na, Ca tác dụng với nước ở nhiệt độ thường: <code>2Na + 2H₂O → 2NaOH + H₂↑</code></li>
<li>Kim loại + oxygen → oxide: <code>3Fe + 2O₂ → Fe₃O₄</code> (t°)</li>
<li>Tách kim loại: điện phân nóng chảy (kim loại mạnh như Na, Al), dùng chất khử C, CO, H₂ (kim loại trung bình như Fe), hợp kim: gang, thép, duralumin.</li>
<li>Phi kim: không dẫn điện (trừ than chì), tạo oxide acid (CO₂, SO₂…).</li></ul>` },

    { id: 'huu-co', ten: 'Hoá học: Hợp chất hữu cơ', noi: `
<p>Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂, H₂CO₃, muối carbonate, carbide…).</p>
<div class="cuon"><table><tr><th>Chất</th><th>Công thức</th><th>Tính chất / ứng dụng chính</th></tr>
<tr><td>Methane (alkane)</td><td>CH₄</td><td>Chỉ có liên kết đơn; phản ứng thế với Cl₂ (ánh sáng); cháy: CH₄ + 2O₂ → CO₂ + 2H₂O. Khí thiên nhiên, khí biogas.</td></tr>
<tr><td>Ethylene (alkene)</td><td>C₂H₄</td><td>Có một liên kết đôi; làm mất màu nước bromine; phản ứng trùng hợp tạo polyethylene (PE); kích thích quả chín.</td></tr>
<tr><td>Ethylic alcohol</td><td>C₂H₅OH</td><td>Tan vô hạn trong nước; tác dụng với Na giải phóng H₂; cháy; độ cồn = số mL rượu nguyên chất trong 100 mL hỗn hợp.</td></tr>
<tr><td>Acetic acid</td><td>CH₃COOH</td><td>Có tính acid (đổi quỳ tím → đỏ, tác dụng kim loại, base, muối carbonate); giấm ăn 2–5 %; phản ứng ester hoá với ethylic alcohol.</td></tr>
<tr><td>Lipid (chất béo)</td><td>(RCOO)₃C₃H₅</td><td>Không tan trong nước; thuỷ phân trong kiềm → xà phòng (phản ứng xà phòng hoá).</td></tr>
<tr><td>Glucose, saccharose</td><td>C₆H₁₂O₆, C₁₂H₂₂O₁₁</td><td>Glucose có phản ứng tráng bạc; saccharose (đường mía) thuỷ phân → glucose + fructose.</td></tr>
<tr><td>Tinh bột, cellulose</td><td>(C₆H₁₀O₅)ₙ</td><td>Tinh bột + iodine → màu xanh tím; thuỷ phân → glucose.</td></tr>
<tr><td>Protein</td><td>—</td><td>Bị đông tụ khi đun nóng; thuỷ phân → amino acid.</td></tr>
<tr><td>Polymer</td><td>—</td><td>Phân tử rất lớn do nhiều mắt xích; chất dẻo, tơ, cao su. Hạn chế rác thải nhựa.</td></tr></table></div>` },

    { id: 'di-truyen', ten: 'Sinh học: Di truyền học', noi: `
<h3>Mendel</h3>
<ul><li>Phương pháp phân tích các thế hệ lai; dùng chữ in hoa (A) cho gen trội, chữ thường (a) cho gen lặn.</li>
<li><b>Quy luật phân li:</b> P thuần chủng AA × aa → F₁ 100 % Aa → F₂ tỉ lệ kiểu gen 1AA : 2Aa : 1aa, kiểu hình 3 trội : 1 lặn.</li>
<li><b>Lai phân tích:</b> lai với cá thể lặn (aa) để biết cá thể trội là AA hay Aa.</li>
<li><b>Phân li độc lập:</b> AaBb × AaBb → F₂ tỉ lệ kiểu hình 9 : 3 : 3 : 1.</li></ul>
<h3>Từ gen đến tính trạng</h3>
<ul><li><b>DNA</b> (ADN): chuỗi xoắn kép, 4 loại nucleotide A, T, G, C; nguyên tắc bổ sung A–T, G–C. Tự nhân đôi theo nguyên tắc bổ sung và bán bảo toàn.</li>
<li><b>Phiên mã</b>: DNA → mRNA (A–U, T–A, G–C, C–G). <b>Dịch mã</b>: mRNA → chuỗi amino acid (protein) tại ribosome. Sơ đồ: Gen → mRNA → Protein → Tính trạng.</li>
<li><b>Đột biến gen</b>: mất, thêm, thay thế cặp nucleotide.</li></ul>
<h3>Nhiễm sắc thể (NST)</h3>
<ul><li>Bộ NST lưỡng bội 2n (người: 2n = 46). <b>Nguyên phân</b>: 1 tế bào → 2 tế bào con có bộ NST 2n giống mẹ. <b>Giảm phân</b>: 1 tế bào 2n → 4 tế bào n (giao tử).</li>
<li>Xác định giới tính ở người: XX (nữ), XY (nam) — tỉ lệ con trai : con gái ≈ 1 : 1.</li>
<li>Đột biến NST: cấu trúc (mất, lặp, đảo, chuyển đoạn) và số lượng (thể dị bội như Down — 3 NST số 21; thể đa bội).</li>
<li>Ứng dụng: công nghệ di truyền, chọn giống, chẩn đoán bệnh di truyền; tư vấn hôn nhân (không kết hôn cận huyết).</li></ul>
<div class="cong-thuc">Một gen có N nucleotide: chiều dài L = N/2 × 3,4 Å; A = T, G = C, N = 2A + 2G</div>` },

    { id: 'tien-hoa', ten: 'Sinh học: Tiến hoá', noi: `
<ul><li><b>Tiến hoá</b>: sự thay đổi đặc điểm di truyền của quần thể qua các thế hệ.</li>
<li><b>Chọn lọc tự nhiên</b> (Darwin): cá thể mang biến dị có lợi sống sót và sinh sản nhiều hơn.</li>
<li><b>Chọn lọc nhân tạo</b>: con người chọn giữ những biến dị có lợi cho mình → tạo giống vật nuôi, cây trồng.</li>
<li>Sự sống phát triển từ đơn giản đến phức tạp; loài người tiến hoá qua các dạng vượn người hoá thạch → người cổ → người hiện đại (<i>Homo sapiens</i>).</li></ul>` }
  ]
});

/* ============================ LỊCH SỬ & ĐỊA LÍ ============================ */
MON.push({
  id: 'su-dia', ten: 'Lịch sử và Địa lí', bieu: '🌏',
  moTa: 'Lịch sử thế giới & Việt Nam 1918 đến nay; địa lí dân cư, kinh tế và các vùng của Việt Nam.',
  bai: [
    { id: 'tg-1918', ten: 'Lịch sử thế giới 1918–1945', noi: `
<ul><li>Nước Nga Xô viết, Liên Xô thành lập (12/1922), công cuộc xây dựng chủ nghĩa xã hội.</li>
<li>Khủng hoảng kinh tế 1929–1933; chủ nghĩa phát xít lên cầm quyền ở Đức, I-ta-li-a, Nhật Bản. Mỹ thực hiện Chính sách mới của Ru-dơ-ven.</li>
<li><b>Chiến tranh thế giới thứ hai (1939–1945)</b>: bắt đầu 1/9/1939 (Đức tấn công Ba Lan); Liên Xô thắng trận Xta-lin-grát; phát xít Đức đầu hàng 9/5/1945; Mỹ ném bom nguyên tử xuống Hi-rô-si-ma, Na-ga-xa-ki; Nhật đầu hàng 15/8/1945.</li></ul>` },

    { id: 'vn-1918', ten: 'Việt Nam 1918–1945', noi: `
<div class="cuon"><table><tr><th>Thời gian</th><th>Sự kiện</th></tr>
<tr><td>5/6/1911</td><td>Nguyễn Tất Thành rời bến Nhà Rồng ra đi tìm đường cứu nước.</td></tr>
<tr><td>7/1920</td><td>Nguyễn Ái Quốc đọc Sơ thảo Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa.</td></tr>
<tr><td>6/1925</td><td>Thành lập Hội Việt Nam Cách mạng Thanh niên.</td></tr>
<tr><td>3/2/1930</td><td>Thành lập Đảng Cộng sản Việt Nam (hội nghị hợp nhất tại Hương Cảng).</td></tr>
<tr><td>1930–1931</td><td>Phong trào cách mạng, đỉnh cao Xô viết Nghệ – Tĩnh.</td></tr>
<tr><td>1936–1939</td><td>Phong trào dân chủ.</td></tr>
<tr><td>5/1941</td><td>Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh.</td></tr>
<tr><td>22/12/1944</td><td>Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.</td></tr>
<tr><td>9/3/1945</td><td>Nhật đảo chính Pháp; chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta".</td></tr>
<tr><td>8/1945</td><td>Tổng khởi nghĩa giành chính quyền (Hà Nội 19/8, Huế 23/8, Sài Gòn 25/8).</td></tr>
<tr><td>2/9/1945</td><td>Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hoà.</td></tr></table></div>` },

    { id: 'tg-1945', ten: 'Thế giới từ 1945 đến nay', noi: `
<ul><li>Trật tự hai cực I-an-ta; Liên hợp quốc thành lập (10/1945).</li>
<li><b>Chiến tranh lạnh</b> (1947–1989) giữa Mỹ và Liên Xô; kết thúc tại gặp gỡ Man-ta (12/1989).</li>
<li>Liên Xô tan rã (12/1991); trật tự đa cực hình thành.</li>
<li>Phong trào giải phóng dân tộc ở châu Á, châu Phi, Mỹ La-tinh; ASEAN thành lập 8/8/1967 (Việt Nam gia nhập 28/7/1995).</li>
<li>Cách mạng khoa học – kĩ thuật, xu thế toàn cầu hoá.</li></ul>` },

    { id: 'vn-1945', ten: 'Việt Nam từ 1945 đến nay', noi: `
<div class="cuon"><table><tr><th>Thời gian</th><th>Sự kiện</th></tr>
<tr><td>6/1/1946</td><td>Tổng tuyển cử bầu Quốc hội đầu tiên.</td></tr>
<tr><td>19/12/1946</td><td>Toàn quốc kháng chiến chống thực dân Pháp.</td></tr>
<tr><td>1947, 1950</td><td>Chiến thắng Việt Bắc thu – đông 1947, chiến dịch Biên giới 1950.</td></tr>
<tr><td>7/5/1954</td><td>Chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu".</td></tr>
<tr><td>21/7/1954</td><td>Hiệp định Giơ-ne-vơ, miền Bắc hoàn toàn giải phóng.</td></tr>
<tr><td>1959–1960</td><td>Phong trào Đồng khởi ở miền Nam.</td></tr>
<tr><td>1968</td><td>Tổng tiến công và nổi dậy Tết Mậu Thân.</td></tr>
<tr><td>12/1972</td><td>"Hà Nội – Điện Biên Phủ trên không".</td></tr>
<tr><td>27/1/1973</td><td>Hiệp định Pa-ri về chấm dứt chiến tranh ở Việt Nam.</td></tr>
<tr><td>30/4/1975</td><td>Chiến dịch Hồ Chí Minh toàn thắng, thống nhất đất nước.</td></tr>
<tr><td>12/1986</td><td>Đại hội VI của Đảng mở đầu công cuộc Đổi mới.</td></tr>
<tr><td>1995, 2007</td><td>Gia nhập ASEAN (1995), WTO (2007).</td></tr></table></div>` },

    { id: 'dia-dan-cu', ten: 'Địa lí: Dân cư và các ngành kinh tế', noi: `
<ul><li>Việt Nam có 54 dân tộc, dân số đông (hơn 100 triệu người), mật độ cao, phân bố không đều (tập trung ở đồng bằng, ven biển).</li>
<li>Cơ cấu dân số đang trong thời kì "dân số vàng", có xu hướng già hoá.</li>
<li>Nông nghiệp: lúa gạo (ĐBSCL, ĐBSH), cây công nghiệp (Tây Nguyên, Đông Nam Bộ), thuỷ sản.</li>
<li>Công nghiệp: khai khoáng, năng lượng, chế biến, điện tử. Dịch vụ: giao thông, thương mại, du lịch, bưu chính viễn thông.</li></ul>` },

    { id: 'dia-vung', ten: 'Địa lí: Các vùng kinh tế', noi: `
<div class="cuon"><table><tr><th>Vùng</th><th>Thế mạnh nổi bật</th></tr>
<tr><td>Trung du và miền núi Bắc Bộ</td><td>Khoáng sản, thuỷ điện (Hoà Bình, Sơn La), cây chè, chăn nuôi trâu bò.</td></tr>
<tr><td>Đồng bằng sông Hồng</td><td>Dân cư đông, thâm canh lúa, công nghiệp và dịch vụ phát triển (Hà Nội, Hải Phòng).</td></tr>
<tr><td>Bắc Trung Bộ & Duyên hải Nam Trung Bộ</td><td>Kinh tế biển, du lịch (Huế, Hội An, Nha Trang), nghề cá, cảng biển.</td></tr>
<tr><td>Tây Nguyên</td><td>Đất badan, cây cà phê, hồ tiêu, cao su; thuỷ điện; bô-xít.</td></tr>
<tr><td>Đông Nam Bộ</td><td>Kinh tế phát triển nhất, TP. Hồ Chí Minh; dầu khí, công nghiệp, cây công nghiệp lâu năm.</td></tr>
<tr><td>Đồng bằng sông Cửu Long</td><td>Vựa lúa lớn nhất cả nước, thuỷ sản, trái cây; thách thức xâm nhập mặn, biến đổi khí hậu.</td></tr></table></div>
<p><b>Biển đảo Việt Nam:</b> bảo vệ chủ quyền Hoàng Sa, Trường Sa; phát triển tổng hợp kinh tế biển: khai thác hải sản, khoáng sản, du lịch, giao thông vận tải biển.</p>
<div class="meo">💡 Luyện kĩ năng: đọc Atlat/biểu đồ, nhận xét bảng số liệu (tăng/giảm bao nhiêu lần, bao nhiêu %).</div>` }
  ]
});

/* ============================ GDCD ============================ */
MON.push({
  id: 'gdcd', ten: 'Giáo dục công dân', bieu: '⚖️',
  moTa: 'Lí tưởng sống, khoan dung, khách quan công bằng, hoà bình, quản lí thời gian, pháp luật và lao động.',
  bai: [
    { id: 'dao-duc', ten: 'Giáo dục đạo đức & kĩ năng sống', noi: `
<ul><li><b>Sống có lí tưởng</b>: xác định mục đích sống tốt đẹp, phấn đấu học tập vì bản thân và đất nước.</li>
<li><b>Khoan dung</b>: tôn trọng, thông cảm, sẵn sàng tha thứ khi người khác biết hối hận.</li>
<li><b>Tích cực tham gia hoạt động cộng đồng</b>: tình nguyện, bảo vệ môi trường, giúp đỡ người khó khăn.</li>
<li><b>Khách quan và công bằng</b>: nhìn nhận đúng sự thật, đối xử bình đẳng, không thiên vị.</li>
<li><b>Bảo vệ hoà bình</b>: giải quyết mâu thuẫn bằng thương lượng, không bạo lực.</li>
<li><b>Quản lí thời gian hiệu quả</b>: lập kế hoạch, xác định việc quan trọng – khẩn cấp (ma trận Eisenhower), tránh trì hoãn.</li>
<li><b>Thích ứng với thay đổi</b>: bình tĩnh, tìm hiểu, điều chỉnh suy nghĩ và hành động.</li></ul>` },
    { id: 'phap-luat', ten: 'Kinh tế & pháp luật', noi: `
<ul><li><b>Tiêu dùng thông minh</b>: lập kế hoạch chi tiêu, so sánh giá, chất lượng, đọc nhãn mác; tránh bị lừa đảo khi mua hàng trực tuyến.</li>
<li><b>Vi phạm pháp luật</b>: hành vi trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lí thực hiện.</li>
<li><b>Bốn loại trách nhiệm pháp lí</b>: hình sự, hành chính, dân sự, kỉ luật.</li>
<li>Người từ đủ 14 đến dưới 16 tuổi chịu trách nhiệm hình sự về tội rất nghiêm trọng, đặc biệt nghiêm trọng (theo quy định của Bộ luật Hình sự).</li>
<li><b>Quyền và nghĩa vụ lao động</b>: mọi công dân có quyền làm việc, tự do chọn nghề; cấm sử dụng lao động chưa thành niên làm công việc nặng nhọc, độc hại.</li></ul>` }
  ]
});

/* ============================ TIN HỌC ============================ */
MON.push({
  id: 'tin', ten: 'Tin học', bieu: '🖥️',
  moTa: 'Máy tính và cộng đồng, thông tin số, đạo đức số, bảng tính (COUNTIF, SUMIF, IF), giải quyết vấn đề với máy tính.',
  bai: [
    { id: 'thong-tin', ten: 'Máy tính, thông tin số và đạo đức số', noi: `
<ul><li>Máy tính có mặt ở mọi lĩnh vực: y tế, giao thông, giáo dục, ngân hàng…; các thiết bị gắn bộ xử lí thông tin (máy giặt, ô tô…).</li>
<li><b>Đánh giá độ tin cậy thông tin</b>: kiểm tra nguồn, tác giả, thời gian, đối chiếu nhiều nguồn; cảnh giác tin giả.</li>
<li><b>Đạo đức – pháp luật</b>: tôn trọng bản quyền, không chia sẻ thông tin cá nhân của người khác, không bắt nạt trên mạng.</li>
<li>Bảo vệ bản thân: mật khẩu mạnh, xác thực hai lớp, không bấm liên kết lạ.</li></ul>` },
    { id: 'bang-tinh', ten: 'Bảng tính điện tử nâng cao', noi: `
<div class="cuon"><table><tr><th>Hàm</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td>SUM, AVERAGE, MAX, MIN, COUNT</td><td>Tổng, trung bình, lớn nhất, nhỏ nhất, đếm ô số</td><td><code>=AVERAGE(C2:C30)</code></td></tr>
<tr><td>COUNTIF(vùng, điều kiện)</td><td>Đếm ô thoả điều kiện</td><td><code>=COUNTIF(D2:D30,"&gt;=8")</code></td></tr>
<tr><td>SUMIF(vùng, điều kiện, vùng tính tổng)</td><td>Tính tổng có điều kiện</td><td><code>=SUMIF(B2:B10,"Bút",C2:C10)</code></td></tr>
<tr><td>IF(điều kiện, đúng, sai)</td><td>Chọn giá trị theo điều kiện</td><td><code>=IF(E2&gt;=5,"Đạt","Chưa đạt")</code></td></tr></table></div>
<p>Địa chỉ tương đối (A1) thay đổi khi sao chép công thức; địa chỉ tuyệt đối ($A$1) giữ nguyên. Xác thực dữ liệu (Data Validation) giúp hạn chế nhập sai.</p>` },
    { id: 'giai-quyet', ten: 'Giải quyết vấn đề với máy tính', noi: `
<ul><li>Các bước: xác định bài toán (đầu vào – đầu ra) → tìm thuật toán → viết chương trình → chạy thử, sửa lỗi.</li>
<li><b>Thuật toán</b> mô tả bằng ngôn ngữ tự nhiên, sơ đồ khối; ba cấu trúc cơ bản: tuần tự, rẽ nhánh, lặp.</li>
<li>Chia bài toán lớn thành bài toán nhỏ (chương trình con / hàm).</li></ul>
<p>👉 Xem trang <a href="lap-trinh.html">Học lập trình</a> để thực hành Python.</p>` }
  ]
});

/* ============================ CÔNG NGHỆ ============================ */
MON.push({
  id: 'cong-nghe', ten: 'Công nghệ', bieu: '🛠️',
  moTa: 'Định hướng nghề nghiệp và các mô đun lựa chọn: lắp đặt mạng điện trong nhà, trồng cây ăn quả, chế biến thực phẩm…',
  bai: [
    { id: 'nghe', ten: 'Định hướng nghề nghiệp', noi: `
<ul><li>Nghề nghiệp có vai trò với bản thân (thu nhập, phát triển) và xã hội.</li>
<li>Các ngành nghề trong lĩnh vực kĩ thuật, công nghệ; thị trường lao động thay đổi theo chuyển đổi số.</li>
<li>Sau lớp 9: học THPT, học giáo dục nghề nghiệp (trung cấp, GDTX kết hợp học nghề).</li>
<li>Chọn nghề dựa trên: <b>sở thích – năng lực – nhu cầu xã hội</b>. Có thể làm các trắc nghiệm sở thích nghề (ví dụ mô hình Holland) để tham khảo.</li></ul>` },
    { id: 'dien-nha', ten: 'Mô đun: Lắp đặt mạng điện trong nhà', noi: `
<ul><li>Thiết bị: aptomat (cầu dao tự động), công tắc, ổ cắm, cầu chì; dây dẫn, ống luồn dây.</li>
<li>Dụng cụ: kìm, tua vít, bút thử điện, đồng hồ vạn năng.</li>
<li>Vẽ sơ đồ nguyên lí → sơ đồ lắp đặt → lắp đặt → kiểm tra.</li>
<li><b>An toàn điện</b>: ngắt nguồn trước khi làm, dùng dụng cụ cách điện, kiểm tra bằng bút thử điện.</li></ul>` }
  ]
});
