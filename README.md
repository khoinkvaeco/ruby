# 🌸 Góc học tập của Minh Khuê – Lớp 9

Trang web tĩnh (HTML/CSS/JS thuần, không cần cài đặt) tổng hợp kiến thức lớp 9 theo chương trình GDPT 2018.

| Trang | Nội dung |
|---|---|
| `index.html` | Trang chủ: thẻ các môn, ô tìm kiếm (gõ không dấu cũng được) |
| `mon.html?mon=<id>` | Kiến thức từng môn: Toán, Ngữ văn, Tiếng Anh, KHTN, Lịch sử & Địa lí, GDCD, Tin học, Công nghệ |
| `lap-trinh.html` | Học lập trình Python từ đầu: 11 bài, bài tập có lời giải, khung chạy thử code (Pyodide) |
| `on-thi.html` | Kế hoạch ôn thi vào 10, thời khoá biểu mẫu, mẹo làm bài, đếm ngược ngày thi |

## Chạy

Mở `index.html` bằng trình duyệt là xong. Khung chạy Python cần mạng ở lần chạy đầu (tải Pyodide từ jsDelivr).

Đưa lên mạng miễn phí: GitHub ▸ Settings ▸ Pages ▸ chọn nhánh, thư mục `/ (root)`.

## Thêm / sửa kiến thức

Toàn bộ nội dung các môn nằm trong `assets/du-lieu.js`. Mỗi môn có danh sách `bai`, mỗi bài gồm `id`, `ten`, `noi` (HTML).
Thêm một bài = thêm một đối tượng vào mảng `bai`; trang môn và ô tìm kiếm tự cập nhật.
