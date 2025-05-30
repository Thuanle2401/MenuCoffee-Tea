# Memo Cup ☕ - Trang Web Cà Phê và Trà

Memo Cup là một trang web giới thiệu và cung cấp thông tin về các sản phẩm cà phê và trà chất lượng cao. Trang web được thiết kế với giao diện hiện đại, thân thiện với người dùng và tích hợp nhiều tính năng tương tác.

## 🌟 Tính năng chính

- **Giới thiệu sản phẩm**: Hiển thị danh sách các sản phẩm cà phê và trà với hình ảnh, mô tả, và giá cả.
- **Hiệu ứng động**: 
  - Hiệu ứng phóng to khi di chuột qua các thẻ sản phẩm.
  - Hiệu ứng chuyển đổi giao diện (light mode/dark mode).
- **Chuyển đổi giao diện (Theme Toggler)**:
  - Người dùng có thể chuyển đổi giữa giao diện sáng (light) và tối (dark).
  - Giao diện được lưu trữ trong `localStorage` để duy trì trạng thái khi tải lại trang.
- **Form liên hệ**:
  - Người dùng có thể gửi thông tin liên hệ qua form.
  - Kiểm tra dữ liệu đầu vào trước khi gửi.
- **Nút "Back to Top"**:
  - Nút giúp người dùng nhanh chóng cuộn lên đầu trang với hiệu ứng mượt mà.
- **Thanh điều hướng (Navbar)**:
  - Thanh điều hướng thay đổi giao diện khi người dùng cuộn trang.
  - Menu tự động đóng khi nhấn vào liên kết trong chế độ di động.
- **Footer**:
  - Hiển thị thông tin liên hệ, các liên kết mạng xã hội và menu điều hướng.

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc nội dung trang web.
- **CSS3**: 
  - Sử dụng Flexbox và Media Queries để tạo giao diện responsive.
  - Hiệu ứng động với `@keyframes` và `transition`.
- **JavaScript**:
  - Tương tác người dùng như chuyển đổi theme, hiệu ứng hover, và xử lý sự kiện.
  - Lưu trạng thái theme vào `localStorage`.
- **Bootstrap 4**: 
  - Hệ thống lưới (Grid System) để bố cục trang.
  - Các thành phần giao diện như navbar, card, và button.
- **Font Awesome**: Sử dụng các biểu tượng (icons) trong giao diện.
- **Docker**: Đóng gói và triển khai ứng dụng dễ dàng.

## 🚀 Cách sử dụng

1. Clone dự án về máy:
   ```bash
   git clone https://github.com/Thuanle2401/MenuCoffee-Tea.git

### 2. Chạy ứng dụng bằng Docker:
   - **Bước 1**: Đảm bảo bạn đã cài đặt Docker và Docker Compose trên máy.
   - **Bước 2**: Xây dựng và chạy container bằng Docker Compose:
     ```bash
     docker-compose up --build
     ```
   - **Bước 3**: Mở trình duyệt và truy cập:
     ```
     http://localhost:9090
     ```
   - **Bước 4**: Để dừng container, nhấn `Ctrl + C` trong terminal hoặc chạy:
     ```bash
     docker-compose down
     ```
   
### 3. Chạy ứng dụng thủ công:
   - Mở tệp `index.html` trong trình duyệt để xem trang web.

## 📞 Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ qua form trên trang web hoặc qua các kênh mạng xã hội được liệt kê trong footer.

---

Cảm ơn bạn đã ghé thăm Memo Cup! Chúc bạn có những trải nghiệm tuyệt vời với trang web. ❤️
