const button = document.querySelector('.gallery-section__button');
const hiddenItems = document.querySelectorAll('.gallery-section__nails-foto.gallery-section__hidden, .gallery-section__nails-foto.shown');

let isExpanded = false;

button.addEventListener('click', () => {
  if (!isExpanded) {
    hiddenItems.forEach(item => {
      item.classList.remove('gallery-section__hidden');
      item.classList.add('shown');
    });
    button.textContent = 'Згорнути';
    isExpanded = true;
  } else {
    hiddenItems.forEach(item => {
      item.classList.remove('shown');
      item.classList.add('gallery-section__hidden');
    });
    button.textContent = 'Дивитись більше ';
    isExpanded = false;
  }
});
