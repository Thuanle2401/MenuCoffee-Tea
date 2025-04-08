  // Khi người dùng nhấn nút "Thêm vào giỏ", hiển thị một thông báo nhỏ (toast) để xác nhận.
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
      const toast = document.getElementById('toast');
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 3000); // Ẩn thông báo sau 3 giây
    });
  });
  // Thêm hiệu ứng khi người dùng di chuột qua các thẻ sản phẩm.
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  });
  // Kiểm tra xem người dùng đã nhập đầy đủ thông tin trước khi gửi form.
  document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Vui lòng điền đầy đủ thông tin trước khi gửi!');
    }
  });
  // Thêm tooltip để hiển thị thông tin khi người dùng di chuột qua các nút.
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.setAttribute('title', 'Nhấn để xem thêm thông tin');
  });


