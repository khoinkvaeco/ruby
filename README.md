# 🌸 Góc học tập của Minh Khuê – Lớp 9

Trang web tĩnh (HTML/CSS/JS thuần, không cần cài đặt) tổng hợp kiến thức lớp 9 theo chương trình GDPT 2018.

| Trang | Nội dung |
|---|---|
| `index.html` | Trang chủ: thẻ các môn, ô tìm kiếm (gõ không dấu cũng được) |
| `mon.html?mon=<id>` | Kiến thức từng môn: Toán, Ngữ văn, Tiếng Anh, KHTN, Lịch sử & Địa lí, GDCD, Tin học, Công nghệ |
| `lap-trinh.html` | Học lập trình Python từ đầu: 11 bài, bài tập có lời giải, khung chạy thử code (Pyodide) |
| `trac-nghiem.html?mon=<id>` | Trắc nghiệm tự kiểm tra: 79 câu, mỗi lượt 10 câu ngẫu nhiên, đảo thứ tự lựa chọn, giải thích ngay, xem lại câu sai, lưu điểm cao nhất |
| `phien-ban.html` | Có gì mới: số phiên bản hiện tại và lịch sử các lần cập nhật |
| `on-thi.html` | Kế hoạch ôn thi vào 10, thời khoá biểu mẫu, mẹo làm bài, đếm ngược ngày thi |

## Chạy

Mở `index.html` bằng trình duyệt là xong. Khung chạy Python cần mạng ở lần chạy đầu (tải Pyodide từ jsDelivr).

Đưa lên mạng miễn phí: GitHub ▸ Settings ▸ Pages ▸ chọn nhánh, thư mục `/ (root)`.

## Thêm / sửa kiến thức

Toàn bộ nội dung các môn nằm trong `assets/du-lieu.js`. Mỗi môn có danh sách `bai`, mỗi bài gồm `id`, `ten`, `noi` (HTML).
Thêm một bài = thêm một đối tượng vào mảng `bai`; trang môn và ô tìm kiếm tự cập nhật.

Câu hỏi trắc nghiệm nằm trong `assets/trac-nghiem.js` (khoá = id môn): `h` câu hỏi, `c` các lựa chọn, `d` chỉ số đáp án đúng (từ 0), `g` giải thích.

## Bài học chi tiết và bài tập

Mỗi chủ đề có phần **lí thuyết mở rộng** (dạng bài, phương pháp, ví dụ mẫu, lỗi hay mắc) và **bài tập ôn luyện** ba mức
🟢 Cơ bản → 🟡 Vận dụng → 🔴 Nâng cao, có lời giải, ô "đã làm" và thanh tiến độ (lưu trên máy). Tổng 269 bài:
Toán 88 · KHTN 60 · Tiếng Anh 42 · Sử–Địa 27 · Ngữ văn 21 · Tin 14 · GDCD 10 · Công nghệ 7; trang Học lập trình thêm 12 bài.

Nội dung nằm trong `assets/bai-hoc/*.js`, khoá theo `MO_RONG[môn][chủ đề] = { ly: 'HTML', bt: [[mức, đề, lời giải], …] }`
(mức 1 = cơ bản, 2 = vận dụng, 3 = nâng cao). Tệp mới phải được nạp trong `mon.html` và `index.html` — `tools/kiem-tra.js` sẽ nhắc.

## Hình minh hoạ

52 hình vẽ bằng SVG trong `assets/hinh.js` (không dùng ảnh ngoài, tự đổi màu theo chế độ sáng/tối), có ở mọi môn,
trang Học lập trình và trang Ôn thi. Chèn hình vào bài: đặt `<figure class="hinh" data-hinh="ten-hinh"></figure>`
trong nội dung bài ở `du-lieu.js` (hoặc trong trang HTML có nạp `hinh.js`).

## Phiên bản

- Số phiên bản + ngày cập nhật hiện ở **chân mọi trang**; bấm vào để mở trang **Có gì mới** (`phien-ban.html`).
- Lần đầu mở sau khi trang được cập nhật → dải thông báo "Trang đã được cập nhật lên phiên bản …".
- Đang mở bản cũ (trình duyệt giữ bộ nhớ đệm) mà trên mạng đã có bản mới hơn → nút **🔄 Tải bản mới**
  (chỉ khi xem qua mạng, ví dụ GitHub Pages; mở thẳng tệp thì không hỏi được máy chủ).

**Khi cập nhật trang:** sửa `assets/phien-ban.js` (tăng `so`, đổi `ngay`, thêm mục vào đầu `lichSu`), đổi `?v=…`
trong các thẻ `<script>`/`<link>` của mọi trang HTML cho khớp, rồi chạy:

```bash
node tools/kiem-tra.js
```

Lệnh này soát: số phiên bản khớp ở mọi trang · mọi chỗ đặt hình đều có hình thật · đáp án trắc nghiệm hợp lệ.
