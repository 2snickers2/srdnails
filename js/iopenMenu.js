const openBtn = document.getElementById('menuOpenBtn');
const closeBtn = document.getElementById('menuCloseBtn');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.header__nav-link');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  document.querySelector('body').classList.add('lock-scroll');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  document.querySelector('body').classList.remove('lock-scroll');
});
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    document.querySelector('body').classList.remove('lock-scroll');
  });
});
