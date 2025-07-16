
  const openBtn = document.getElementById('menuOpenBtn');
  const closeBtn = document.getElementById('menuCloseBtn');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.header__nav-link');


  openBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
