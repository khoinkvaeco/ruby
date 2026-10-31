// PHIEN BAN cua trang — nguon DUY NHAT. Moi lan cap nhat: tang `so`, sua `ngay`, them mot muc vao dau `lichSu`,
// roi doi ?v=... trong cac the <script>/<link> cua moi trang HTML cho khop (chay `node tools/kiem-tra.js` de soat).
// ?v= khien trinh duyet tai tep moi thay vi dung ban cu trong bo nho dem.
window.PHIEN_BAN = {
  so: '1.5.1',
  ngay: '31/10/2026',
  lichSu: [
    { so: '1.5.1', ngay: '31/10/2026', moi: [
      'Trang môn học: bỏ khung tên chủ đề dính trên đầu (trùng với mục lục, che 21 % màn hình) — nay chỉ thanh menu 60 px ở lại khi cuộn',
      'Cột nội dung rộng hơn (trang môn tối đa 1400 px, mục lục gọn lại, bỏ giới hạn độ dài dòng)',
      'Nút "⇤ Ẩn mục lục" để nội dung chiếm trọn chiều ngang; bấm "☰ Chủ đề" để hiện lại (nhớ lựa chọn trên máy)'
    ] },
    { so: '1.5.0', ngay: '31/10/2026', moi: [
      'Bố trí lại giao diện: thanh đầu trang gọn một hàng, luôn hiện khi cuộn; trên điện thoại menu gom vào nút ☰',
      'Trang môn học hiện MỖI LẦN MỘT CHỦ ĐỀ (trang Toán từ 26.600 px còn khoảng 1/10) với thanh chuyển nhanh Lí thuyết · Mở rộng · Bài tập, lọc bài tập theo mức, nút Chủ đề trước / tiếp theo',
      'Mục lục chủ đề có tiến độ bài tập từng chủ đề; trên điện thoại thay bằng ô chọn chủ đề dính trên đầu (không còn phải cuộn qua mục lục mới tới bài)',
      'Trang chủ: thẻ "Tiếp tục học" mở đúng chủ đề đang học dở, số liệu tổng, tiến độ trên từng thẻ môn',
      'Nút về đầu trang; trang lập trình có ô chọn bài trên điện thoại và nút nổi "▶ Chạy code"'
    ] },
    { so: '1.4.0', ngay: '31/10/2026', moi: [
      'Bổ sung chi tiết cho cả 43 chủ đề: các dạng bài, phương pháp giải, ví dụ mẫu giải chi tiết, lỗi hay mắc',
      '269 bài tập ôn luyện chia ba mức 🟢 Cơ bản → 🟡 Vận dụng → 🔴 Nâng cao, bài nào cũng có lời giải (Toán 88, KHTN 60, Tiếng Anh 42, Sử–Địa 27, Ngữ văn 21, Tin 14, GDCD 10, Công nghệ 7)',
      'Ô đánh dấu "đã làm" cho từng bài và thanh tiến độ mỗi môn (lưu trên máy)',
      'Học lập trình: thêm 12 bài luyện tập từ cơ bản đến nâng cao (BMI, Fibonacci, số nguyên tố, sắp xếp nổi bọt, tìm kiếm nhị phân)',
      'Ô tìm kiếm ở trang chủ tìm được cả trong phần mở rộng và đề bài tập'
    ] },
    { so: '1.3.0', ngay: '31/10/2026', moi: [
      'Bổ sung 35 hình minh hoạ (tổng cộng 52) — mọi môn đều có hình: Toán thêm vị trí hai đường thẳng, trục số, Δ và số nghiệm, hệ thức lượng, tứ giác nội tiếp, lục giác đều, sơ đồ cây xác suất',
      'KHTN thêm lăng kính tán sắc, thấu kính phân kì, cảm ứng điện từ, công thức cấu tạo chất hữu cơ, tiến hoá',
      'Ngữ văn, Tiếng Anh, Lịch sử & Địa lí, GDCD, Tin học, Công nghệ, trang Học lập trình và Ôn thi đều có hình',
      'Hiện số phiên bản ở chân trang, thêm trang "Có gì mới", tự báo khi trên mạng có phiên bản mới hơn'
    ] },
    { so: '1.2.0', ngay: '31/10/2026', moi: [
      '17 hình minh hoạ đầu tiên vẽ bằng SVG cho Toán, KHTN, Lịch sử, Tin học — tự đổi màu theo chế độ sáng/tối'
    ] },
    { so: '1.1.0', ngay: '31/10/2026', moi: [
      'Trang Trắc nghiệm tự kiểm tra: 79 câu có giải thích, mỗi lượt 10 câu ngẫu nhiên, lưu điểm cao nhất'
    ] },
    { so: '1.0.0', ngay: '31/10/2026', moi: [
      'Ra mắt: kiến thức 8 môn (43 chủ đề), Học lập trình Python có khung chạy code, Ôn thi vào 10'
    ] }
  ]
};
