document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
});

function toggleMenu() {
  const menu = document.querySelector('.menu-mobile');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('click', function (event) {
  const menu = document.querySelector('.menu-mobile');
  const burger = document.querySelector('.burger');

  if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.style.display = 'none';
  }
});

document.querySelectorAll('.menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.menu-mobile').style.display = 'none';
  });
});