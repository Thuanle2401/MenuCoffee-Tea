// Lắng nghe sự kiện click trên nút "Đặt hàng"
document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-btn');
  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Cảm ơn bạn đã đặt hàng! Sản phẩm của bạn sẽ được xử lý.');
    });
  });
});
  