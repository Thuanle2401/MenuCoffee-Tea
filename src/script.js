// Khi người dùng nhấn nút "Thêm vào giỏ", hiển thị thông báo alert
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
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
document.getElementById('back-to-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  });
});
// Theme toggler functionality
document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo theme
  const initTheme = () => {
    // Kiểm tra theme đã lưu trong localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    } else if (prefersDark) {
      document.body.setAttribute('data-theme', 'dark');
      updateThemeIcon('dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      updateThemeIcon('light');
    }
  };

  // Cập nhật icon
  const updateThemeIcon = (theme) => {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  };

  // Xử lý sự kiện click nút toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Thêm animation khi chuyển theme
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.querySelectorAll('.card').forEach(card => {
      card.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
  });

  // Khởi tạo theme khi trang load
  initTheme();
});

// Thêm hiệu ứng scroll cho navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


