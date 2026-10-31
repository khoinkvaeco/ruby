// Ngan hang cau hoi trac nghiem theo mon (khoa = id mon trong du-lieu.js).
// Moi cau: h = cau hoi, c = cac lua chon, d = chi so dap an dung (tinh tu 0), g = giai thich.
window.TRAC_NGHIEM = {
  toan: [
    { h: 'Điều kiện xác định của √(x − 3) là:', c: ['x > 3', 'x ≥ 3', 'x ≤ 3', 'x ≠ 3'], d: 1, g: 'Biểu thức dưới căn phải không âm: x − 3 ≥ 0 ⇔ x ≥ 3.' },
    { h: 'Rút gọn √50 − 3√8 + √18 được:', c: ['2√2', '4√2', '√2', '14√2'], d: 0, g: '5√2 − 6√2 + 3√2 = 2√2.' },
    { h: 'Nghiệm của hệ x + y = 5 và 2x − y = 1 là:', c: ['(3; 2)', '(2; 3)', '(1; 4)', '(4; 1)'], d: 1, g: 'Cộng vế: 3x = 6 ⇒ x = 2, y = 3.' },
    { h: 'Phương trình x² − 5x + 6 = 0 có hai nghiệm là:', c: ['1 và 6', '−2 và −3', '2 và 3', '−1 và 6'], d: 2, g: 'Δ = 1, x₁ = 3, x₂ = 2 (tổng 5, tích 6).' },
    { h: 'Phương trình 2x² + 3x − 5 = 0 có một nghiệm x = 1. Nghiệm còn lại là:', c: ['5/2', '−5/2', '−3/2', '5'], d: 1, g: 'a + b + c = 0 ⇒ x₂ = c/a = −5/2.' },
    { h: 'Nếu x₁, x₂ là nghiệm của x² − 4x + 1 = 0 thì x₁² + x₂² bằng:', c: ['14', '16', '18', '12'], d: 0, g: 'S = 4, P = 1 ⇒ x₁² + x₂² = S² − 2P = 16 − 2 = 14.' },
    { h: 'sin 30° bằng:', c: ['√3/2', '1/2', '√2/2', '1'], d: 1, g: 'Bảng giá trị đặc biệt: sin 30° = 1/2.' },
    { h: 'Trong tam giác vuông, cos của một góc nhọn bằng:', c: ['cạnh đối / cạnh huyền', 'cạnh kề / cạnh huyền', 'cạnh đối / cạnh kề', 'cạnh kề / cạnh đối'], d: 1, g: '"Cos không hư": cos = kề / huyền.' },
    { h: 'Góc nội tiếp chắn nửa đường tròn có số đo:', c: ['45°', '60°', '90°', '180°'], d: 2, g: 'Góc nội tiếp bằng nửa cung bị chắn: 180° / 2 = 90°.' },
    { h: 'Tứ giác nội tiếp có tổng hai góc đối bằng:', c: ['90°', '180°', '270°', '360°'], d: 1, g: 'Dấu hiệu quan trọng nhất của tứ giác nội tiếp.' },
    { h: 'Đồ thị hàm số y = −2x² nằm:', c: ['phía trên trục hoành', 'phía dưới trục hoành (đỉnh O)', 'bên phải trục tung', 'là một đường thẳng'], d: 1, g: 'a = −2 < 0: parabol quay bề lõm xuống, y ≤ 0.' },
    { h: 'Thể tích hình trụ bán kính r, chiều cao h là:', c: ['2πrh', 'πr²h', '⅓πr²h', '4/3·πr³'], d: 1, g: 'V = diện tích đáy × chiều cao = πr²h.' },
    { h: 'Gieo một con xúc xắc cân đối. Xác suất ra mặt chẵn là:', c: ['1/6', '1/3', '1/2', '2/3'], d: 2, g: 'Có 3 mặt chẵn (2, 4, 6) trên 6 mặt ⇒ 3/6 = 1/2.' },
    { h: 'Giải −2x + 6 > 0 được:', c: ['x > 3', 'x < 3', 'x > −3', 'x < −3'], d: 1, g: 'Chia hai vế cho −2 (số âm) phải đổi chiều: x < 3.' }
  ],
  van: [
    { h: '"Chuyện người con gái Nam Xương" thuộc thể loại:', c: ['Truyện thơ Nôm', 'Truyện truyền kỳ', 'Truyện ngắn hiện đại', 'Tiểu thuyết chương hồi'], d: 1, g: 'Trích "Truyền kỳ mạn lục" của Nguyễn Dữ.' },
    { h: 'Truyện Kiều được viết bằng thể thơ:', c: ['Song thất lục bát', 'Thất ngôn bát cú', 'Lục bát', 'Tự do'], d: 2, g: 'Truyện Kiều gồm 3254 câu thơ lục bát.' },
    { h: 'Tên chữ Hán khác của Truyện Kiều là:', c: ['Đoạn trường tân thanh', 'Truyền kỳ mạn lục', 'Chinh phụ ngâm', 'Hoàng Lê nhất thống chí'], d: 0, g: '"Đoạn trường tân thanh" — tiếng kêu mới đứt ruột.' },
    { h: 'Thể thơ song thất lục bát gồm:', c: ['hai câu 6 – 8 nối tiếp', 'cặp câu 7 – 7 rồi cặp 6 – 8', 'các câu 7 chữ', 'các câu 5 chữ'], d: 1, g: 'Hai câu bảy chữ (song thất) + một cặp lục bát.' },
    { h: 'Bút pháp nghệ thuật nổi bật khi Nguyễn Du tả chân dung chị em Thuý Kiều là:', c: ['Tả thực', 'Ước lệ tượng trưng', 'Hiện thực phê phán', 'Lãng mạn cách mạng'], d: 1, g: 'Lấy vẻ đẹp thiên nhiên (hoa, ngọc, trăng…) làm chuẩn mực tả người.' },
    { h: 'Lời dẫn trực tiếp được:', c: ['thuật lại có điều chỉnh, không dùng ngoặc kép', 'giữ nguyên lời, đặt trong dấu ngoặc kép', 'luôn đặt sau dấu chấm phẩy', 'chỉ dùng trong thơ'], d: 1, g: 'Lời dẫn gián tiếp mới là thuật lại có điều chỉnh, không ngoặc kép.' },
    { h: '"Áo chàm đưa buổi phân li" (Tố Hữu) — "áo chàm" là biện pháp:', c: ['Ẩn dụ', 'Hoán dụ', 'Nhân hoá', 'So sánh'], d: 1, g: 'Lấy trang phục (áo chàm) để chỉ người dân Việt Bắc — quan hệ gần gũi, là hoán dụ.' },
    { h: 'Trong bài nghị luận xã hội, phần "phản đề" dùng để:', c: ['nhắc lại mở bài', 'nêu và bác bỏ quan điểm trái chiều', 'kể một câu chuyện', 'liệt kê dẫn chứng'], d: 1, g: 'Phản đề giúp lập luận toàn diện, thuyết phục hơn.' },
    { h: 'Câu "Vì trời mưa to nên đường ngập nước" là:', c: ['Câu đơn', 'Câu ghép chỉ quan hệ nguyên nhân – kết quả', 'Câu đặc biệt', 'Câu rút gọn'], d: 1, g: 'Hai cụm chủ – vị nối bằng cặp quan hệ từ "vì … nên".' },
    { h: 'Truyện trinh thám thường có:', c: ['nhân vật thần tiên', 'vụ án, thám tử và quá trình suy luận', 'xung đột bi kịch trên sân khấu', 'vần lưng, vần chân'], d: 1, g: 'Đặc trưng: vụ án, điều tra, suy luận logic, kết thúc bất ngờ.' }
  ],
  anh: [
    { h: 'I ___ in Ha Noi since 2015.', c: ['live', 'lived', 'have lived', 'am living'], d: 2, g: '"since" → thì hiện tại hoàn thành: have lived.' },
    { h: 'If I ___ a bird, I would fly to you.', c: ['am', 'were', 'will be', 'have been'], d: 1, g: 'Câu điều kiện loại 2, động từ be dùng "were" với mọi ngôi.' },
    { h: 'I wish I ___ speak French.', c: ['can', 'could', 'will', 'am'], d: 1, g: 'Wish ở hiện tại: lùi một thì, can → could.' },
    { h: 'This bridge ___ in 1990.', c: ['built', 'was built', 'is built', 'has built'], d: 1, g: 'Bị động quá khứ đơn: was/were + V3.' },
    { h: 'He said, "I am tired." → He said that he ___ tired.', c: ['is', 'was', 'has been', 'will be'], d: 1, g: 'Câu tường thuật lùi thì: am → was.' },
    { h: 'The man ___ lives next door is a doctor.', c: ['which', 'who', 'whose', 'where'], d: 1, g: '"who" thay cho người, làm chủ ngữ.' },
    { h: 'My grandfather ___ go fishing every Sunday, but now he doesn\'t.', c: ['use to', 'used to', 'is used to', 'uses to'], d: 1, g: '"used to + V": thói quen trong quá khứ nay không còn.' },
    { h: 'She suggested ___ to the museum.', c: ['go', 'to go', 'going', 'went'], d: 2, g: 'suggest + V-ing.' },
    { h: 'Phần gạch chân phát âm khác: "wanted, needed, played, decided"', c: ['wanted', 'needed', 'played', 'decided'], d: 2, g: '"played" đọc /d/; ba từ kia đọc /ɪd/ (sau t, d).' },
    { h: 'You will miss the bus ___ you hurry.', c: ['if', 'unless', 'when', 'because'], d: 1, g: 'Unless = If … not: bạn sẽ lỡ xe buýt nếu không nhanh lên.' },
    { h: 'I don\'t know what ___ next.', c: ['do', 'doing', 'to do', 'did'], d: 2, g: 'Từ để hỏi + to-infinitive.' },
    { h: 'By the time we arrived, the film ___.', c: ['started', 'has started', 'had started', 'starts'], d: 2, g: 'Hành động xảy ra trước một hành động quá khứ → quá khứ hoàn thành.' }
  ],
  khtn: [
    { h: 'Vật khối lượng 2 kg chuyển động với vận tốc 3 m/s có động năng:', c: ['6 J', '9 J', '18 J', '3 J'], d: 1, g: 'Wđ = ½·m·v² = ½·2·9 = 9 J.' },
    { h: 'Công thức định luật Ohm là:', c: ['I = U·R', 'I = U / R', 'U = I / R', 'R = U·I'], d: 1, g: 'Cường độ dòng điện tỉ lệ thuận với U, tỉ lệ nghịch với R.' },
    { h: 'Hai điện trở 6 Ω và 3 Ω mắc song song có điện trở tương đương:', c: ['9 Ω', '2 Ω', '4,5 Ω', '18 Ω'], d: 1, g: '1/R = 1/6 + 1/3 = 1/2 ⇒ R = 2 Ω.' },
    { h: 'Bóng đèn 220 V – 100 W dùng đúng định mức trong 10 giờ tiêu thụ:', c: ['1 kWh', '10 kWh', '0,1 kWh', '22 kWh'], d: 0, g: 'W = 𝒫·t = 0,1 kW × 10 h = 1 kWh.' },
    { h: 'Thấu kính phân kì luôn cho ảnh:', c: ['thật, ngược chiều', 'ảo, cùng chiều, nhỏ hơn vật', 'ảo, lớn hơn vật', 'thật, lớn hơn vật'], d: 1, g: 'Với mọi vị trí của vật, thấu kính phân kì cho ảnh ảo, cùng chiều, nhỏ hơn vật.' },
    { h: 'Hiện tượng được ứng dụng trong cáp quang là:', c: ['tán sắc ánh sáng', 'phản xạ toàn phần', 'khúc xạ thông thường', 'nhiễu xạ'], d: 1, g: 'Ánh sáng phản xạ toàn phần liên tiếp trong lõi sợi quang.' },
    { h: 'Dòng điện cảm ứng xuất hiện khi:', c: ['đặt nam châm đứng yên cạnh cuộn dây', 'số đường sức từ qua cuộn dây kín biến thiên', 'cuộn dây hở mạch', 'cuộn dây làm bằng đồng'], d: 1, g: 'Điều kiện xuất hiện dòng điện cảm ứng.' },
    { h: 'Kim loại nào KHÔNG tác dụng với dung dịch HCl?', c: ['Zn', 'Fe', 'Mg', 'Cu'], d: 3, g: 'Cu đứng sau H trong dãy hoạt động hoá học.' },
    { h: 'Ngâm đinh sắt trong dung dịch CuSO₄, hiện tượng là:', c: ['không có gì xảy ra', 'có lớp kim loại đỏ bám ngoài đinh sắt', 'có khí thoát ra', 'dung dịch chuyển màu đỏ'], d: 1, g: 'Fe + CuSO₄ → FeSO₄ + Cu (đỏ); màu xanh của dung dịch nhạt dần.' },
    { h: 'Chất làm mất màu nước bromine là:', c: ['CH₄', 'C₂H₄', 'CO₂', 'C₂H₅OH'], d: 1, g: 'Ethylene có liên kết đôi nên phản ứng cộng với bromine.' },
    { h: 'Giấm ăn là dung dịch loãng của:', c: ['Ethylic alcohol', 'Acetic acid', 'Glucose', 'Sodium chloride'], d: 1, g: 'Giấm ăn chứa 2 – 5 % acetic acid (CH₃COOH).' },
    { h: 'Tinh bột tác dụng với iodine cho màu:', c: ['đỏ', 'vàng', 'xanh tím', 'trắng'], d: 2, g: 'Dùng iodine để nhận biết tinh bột.' },
    { h: 'P thuần chủng AA × aa, F₂ có tỉ lệ kiểu hình:', c: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'], d: 1, g: 'Quy luật phân li: F₂ 3 trội : 1 lặn.' },
    { h: 'Theo nguyên tắc bổ sung trong DNA, A liên kết với:', c: ['G', 'C', 'T', 'U'], d: 2, g: 'A – T, G – C. (Trong RNA: A – U.)' },
    { h: 'Ở người, bộ NST lưỡng bội 2n bằng:', c: ['23', '44', '46', '48'], d: 2, g: '2n = 46, gồm 22 cặp NST thường và 1 cặp NST giới tính.' },
    { h: 'Giảm phân từ một tế bào 2n tạo ra:', c: ['2 tế bào 2n', '4 tế bào n', '2 tế bào n', '4 tế bào 2n'], d: 1, g: 'Giảm phân hình thành giao tử mang bộ NST đơn bội n.' }
  ],
  'su-dia': [
    { h: 'Đảng Cộng sản Việt Nam được thành lập ngày:', c: ['19/5/1890', '3/2/1930', '2/9/1945', '19/8/1945'], d: 1, g: 'Hội nghị hợp nhất tại Hương Cảng (Trung Quốc) do Nguyễn Ái Quốc chủ trì.' },
    { h: 'Nguyễn Tất Thành ra đi tìm đường cứu nước năm:', c: ['1911', '1920', '1925', '1930'], d: 0, g: 'Ngày 5/6/1911 tại bến Nhà Rồng.' },
    { h: 'Mặt trận Việt Minh được thành lập năm:', c: ['1930', '1936', '1941', '1945'], d: 2, g: 'Hội nghị Trung ương 8 (5/1941).' },
    { h: 'Chiến tranh thế giới thứ hai bắt đầu khi:', c: ['Nhật tấn công Trân Châu Cảng', 'Đức tấn công Ba Lan (1/9/1939)', 'Đức tấn công Liên Xô', 'Mỹ ném bom nguyên tử'], d: 1, g: 'Sau đó Anh, Pháp tuyên chiến với Đức.' },
    { h: 'Chiến thắng Điện Biên Phủ diễn ra ngày:', c: ['7/5/1954', '21/7/1954', '30/4/1975', '19/12/1946'], d: 0, g: 'Buộc Pháp kí Hiệp định Giơ-ne-vơ (21/7/1954).' },
    { h: 'Hiệp định Pa-ri về chấm dứt chiến tranh ở Việt Nam được kí năm:', c: ['1968', '1972', '1973', '1975'], d: 2, g: 'Ngày 27/1/1973.' },
    { h: 'Công cuộc Đổi mới ở Việt Nam bắt đầu từ:', c: ['Đại hội IV (1976)', 'Đại hội V (1982)', 'Đại hội VI (1986)', 'Đại hội VII (1991)'], d: 2, g: 'Đại hội VI của Đảng, tháng 12/1986.' },
    { h: 'Việt Nam gia nhập ASEAN năm:', c: ['1967', '1986', '1995', '2007'], d: 2, g: 'Ngày 28/7/1995. (2007 là năm gia nhập WTO.)' },
    { h: 'Khu vực trồng cà phê lớn nhất nước ta là:', c: ['Đồng bằng sông Hồng', 'Tây Nguyên', 'Đồng bằng sông Cửu Long', 'Bắc Trung Bộ'], d: 1, g: 'Nhờ đất badan màu mỡ và khí hậu cận xích đạo. Từ 2025, Tây Nguyên thuộc vùng Duyên hải Nam Trung Bộ và Tây Nguyên.' },
    { h: 'Vùng sản xuất lúa gạo lớn nhất nước ta là:', c: ['Đồng bằng sông Hồng', 'Đông Nam Bộ', 'Đồng bằng sông Cửu Long', 'Bắc Trung Bộ'], d: 2, g: 'Đồng bằng sông Cửu Long là vựa lúa lớn nhất cả nước.' },
    { h: 'Vùng có kinh tế phát triển năng động nhất, có ngành dầu khí là:', c: ['Đông Nam Bộ', 'Duyên hải Nam Trung Bộ và Tây Nguyên', 'Trung du và miền núi phía Bắc', 'Bắc Trung Bộ'], d: 0, g: 'Trung tâm là TP. Hồ Chí Minh; dầu khí ở thềm lục địa.' },
    { h: 'Từ ngày 1/7/2025, Việt Nam có bao nhiêu tỉnh, thành phố trực thuộc Trung ương?', c: ['63', '34', '28', '6'], d: 1, g: '34 đơn vị: 28 tỉnh và 6 thành phố (Hà Nội, Huế, Hải Phòng, Đà Nẵng, TP. Hồ Chí Minh, Cần Thơ).' },
    { h: 'Theo cách chia từ năm 2025, khu vực Tây Nguyên thuộc vùng kinh tế – xã hội nào?', c: ['Tây Nguyên', 'Bắc Trung Bộ', 'Duyên hải Nam Trung Bộ và Tây Nguyên', 'Đông Nam Bộ'], d: 2, g: 'Nghị quyết 252/2025/QH15 tổ chức 6 vùng; vùng Duyên hải Nam Trung Bộ và Tây Nguyên gồm Đà Nẵng, Quảng Ngãi, Gia Lai, Đắk Lắk, Khánh Hoà, Lâm Đồng.' }
  ],
  gdcd: [
    { h: 'Khoan dung là:', c: ['bỏ qua mọi sai lầm của người khác', 'tôn trọng, thông cảm và sẵn sàng tha thứ khi người khác biết hối hận', 'không quan tâm đến người khác', 'luôn nhường nhịn để tránh va chạm'], d: 1, g: 'Khoan dung không phải là dung túng cho cái sai.' },
    { h: 'Đâu là biểu hiện của khách quan, công bằng?', c: ['Bênh bạn thân dù bạn sai', 'Đánh giá sự việc dựa trên sự thật', 'Chỉ nghe một phía', 'Đối xử theo cảm tính'], d: 1, g: 'Khách quan: tôn trọng sự thật; công bằng: không thiên vị.' },
    { h: 'Theo ma trận Eisenhower, việc nên làm NGAY là việc:', c: ['không quan trọng, không khẩn cấp', 'quan trọng và khẩn cấp', 'khẩn cấp nhưng không quan trọng', 'quan trọng nhưng không khẩn cấp'], d: 1, g: 'Quan trọng + khẩn cấp: làm ngay; quan trọng không khẩn cấp: lên kế hoạch.' },
    { h: 'Bốn loại trách nhiệm pháp lí gồm hình sự, hành chính, dân sự và:', c: ['đạo đức', 'kỉ luật', 'xã hội', 'gia đình'], d: 1, g: 'Trách nhiệm kỉ luật áp dụng với cán bộ, công chức, người lao động.' },
    { h: 'Hành vi nào thể hiện tiêu dùng thông minh?', c: ['Mua theo quảng cáo', 'Lập kế hoạch chi tiêu, so sánh giá và chất lượng', 'Mua thật nhiều khi giảm giá', 'Mua hàng không rõ nguồn gốc vì rẻ'], d: 1, g: 'Đọc nhãn mác, so sánh, chi tiêu theo nhu cầu thực sự.' },
    { h: 'Cách giải quyết mâu thuẫn thể hiện tinh thần bảo vệ hoà bình là:', c: ['dùng vũ lực', 'thương lượng, đối thoại', 'nói xấu sau lưng', 'cô lập người kia'], d: 1, g: 'Giải quyết mâu thuẫn bằng biện pháp hoà bình.' }
  ],
  tin: [
    { h: 'Hàm dùng để đếm số ô thoả mãn một điều kiện là:', c: ['SUM', 'COUNT', 'COUNTIF', 'SUMIF'], d: 2, g: 'COUNTIF(vùng, điều kiện).' },
    { h: 'Công thức =IF(E2>=5,"Đạt","Chưa đạt") cho kết quả gì khi E2 = 4,5?', c: ['Đạt', 'Chưa đạt', '4,5', 'Báo lỗi'], d: 1, g: '4,5 < 5 nên điều kiện sai, trả về giá trị thứ ba.' },
    { h: 'Địa chỉ ô nào là địa chỉ tuyệt đối?', c: ['A1', '$A$1', 'A$1', '$A1'], d: 1, g: '$A$1 cố định cả cột và hàng khi sao chép công thức.' },
    { h: 'Ba cấu trúc điều khiển cơ bản của thuật toán là:', c: ['tuần tự, rẽ nhánh, lặp', 'nhập, xử lí, xuất', 'biến, hằng, hàm', 'đọc, ghi, xoá'], d: 0, g: 'Mọi thuật toán đều xây dựng từ ba cấu trúc này.' },
    { h: 'Cách tốt nhất để kiểm tra độ tin cậy của một tin tức trên mạng là:', c: ['xem có nhiều lượt thích không', 'đối chiếu với nhiều nguồn chính thống', 'tin vì bạn bè chia sẻ', 'xem tiêu đề có giật gân không'], d: 1, g: 'Kiểm tra nguồn, tác giả, thời gian và đối chiếu nhiều nguồn.' },
    { h: 'Trong Python, kết quả của 17 % 5 là:', c: ['3', '2', '3.4', '85'], d: 1, g: '% là phép chia lấy dư: 17 = 5 × 3 + 2.' }
  ],
  'cong-nghe': [
    { h: 'Khi chọn nghề cần dựa vào ba yếu tố:', c: ['sở thích – năng lực – nhu cầu xã hội', 'lương – bạn bè – gần nhà', 'bố mẹ chọn – dễ – nhàn', 'nổi tiếng – thời trang – xu hướng'], d: 0, g: 'Ba yếu tố cốt lõi trong định hướng nghề nghiệp.' },
    { h: 'Thiết bị tự động ngắt điện khi quá tải hoặc ngắn mạch là:', c: ['công tắc', 'ổ cắm', 'aptomat', 'phích cắm'], d: 2, g: 'Aptomat (cầu dao tự động) bảo vệ mạch điện.' },
    { h: 'Việc đầu tiên cần làm trước khi sửa chữa mạng điện là:', c: ['kiểm tra bóng đèn', 'ngắt nguồn điện', 'thay dây mới', 'đo điện trở'], d: 1, g: 'An toàn điện: luôn ngắt nguồn và kiểm tra bằng bút thử điện.' },
    { h: 'Dụng cụ dùng để kiểm tra dây dẫn có điện hay không là:', c: ['kìm', 'tua vít', 'bút thử điện', 'thước'], d: 2, g: 'Đèn trong bút thử điện sáng khi chạm vào dây có điện.' }
  ]
};
