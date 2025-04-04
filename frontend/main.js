document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtnIcon.className = navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-3-line";
  });

  navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.className = "ri-menu-3-line";
  });

  // Scroll Reveal Animations
  const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right", interval: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 2000 });
  ScrollReveal().reveal(".header__content form", { ...scrollRevealOption, delay: 2500 });

  ScrollReveal().reveal(".choose__image img", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".choose__list li", { ...scrollRevealOption, delay: 1500, interval: 500 });

  ScrollReveal().reveal(".explore__image img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".explore__grid div", { duration: 1000, delay: 2500, interval: 500 });

  ScrollReveal().reveal(".subscribe__container .section__header", { ...scrollRevealOption });
  ScrollReveal().reveal(".subscribe__container form", { ...scrollRevealOption, delay: 1000 });

  // Swiper Slider Initialization
  new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
  });

  // Client Testimonials Slider
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const clientCards = Array.from(document.querySelectorAll(".client__card"));

  next.addEventListener("click", () => {
      const activeIndex = clientCards.findIndex(card => card.classList.contains("active"));
      const nextIndex = (activeIndex + 1) % clientCards.length;
      clientCards[activeIndex].classList.remove("active");
      clientCards[nextIndex].classList.add("active");
  });

  prev.addEventListener("click", () => {
      const activeIndex = clientCards.findIndex(card => card.classList.contains("active"));
      const prevIndex = (activeIndex - 1 + clientCards.length) % clientCards.length;
      clientCards[activeIndex].classList.remove("active");
      clientCards[prevIndex].classList.add("active");
  });

  // Page Navigation
  const pages = document.querySelectorAll('.page');
  const navItems = document.querySelectorAll('nav a');

  navItems.forEach(link => {
      link.addEventListener('click', () => {
          const targetPage = link.getAttribute('data-page');
          pages.forEach(page => page.classList.add('hidden'));
          document.getElementById(targetPage).classList.remove('hidden');
      });
  });

  // Signup Functionality
  document.getElementById('signup-btn')?.addEventListener('click', () => {
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      if (name && email && password) {
          localStorage.setItem('user', JSON.stringify({ name, email, password }));
          alert('Sign Up Successful! Redirecting to Login page...');
          document.getElementById('signup').classList.add('hidden');
          document.getElementById('login').classList.remove('hidden');
      } else {
          alert('Please fill in all fields.');
      }
  });

  // Login Functionality
  document.getElementById('login-btn')?.addEventListener('click', () => {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
          alert(`Welcome back, ${user.name}!`);
      } else {
          alert('Invalid email or password. Please try again.');
      }
  });
});
