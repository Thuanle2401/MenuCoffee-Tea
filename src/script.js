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
//Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Basic form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Vui lòng nhập email hợp lệ!');
    return;
  }
  
  // If validation passes, you can send the form data to your server here
  alert('Cảm ơn bạn đã gửi phản hồi! Chúng tôi sẽ liên hệ lại sớm.');
  contactForm.reset();
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 0';
    navbar.style.backgroundColor = 'rgba(40, 167, 69, 0.95)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.backgroundColor = 'rgba(40, 167, 69, 0.95)';
  }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', function() {
    this.classList.add('loaded');
  });
});


