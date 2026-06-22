const button = document.querySelector('.gallery-section__button');
const hiddenItems = document.querySelectorAll('.gallery-section__nails-foto.gallery-section__hidden, .gallery-section__nails-foto.shown');

let isExpanded = false;

const currentLink = window.location.href;
let buttonOpenText
let buttonCloseText

if (currentLink.includes('/ru/')) {
  buttonOpenText = 'Смотреть больше';
  buttonCloseText = 'Свернуть';
} else if (currentLink.includes('/en/')) {
  buttonOpenText = 'View more';
  buttonCloseText = 'Hide';
} else {
  buttonOpenText = 'Дивитись більше';
  buttonCloseText = 'Згорнути';
}

button.addEventListener('click', () => {
  if (!isExpanded) {
    hiddenItems.forEach(item => {
      item.classList.remove('gallery-section__hidden');
      item.classList.add('shown');
    });
    button.textContent = buttonCloseText;
    isExpanded = true;
  } else {
    hiddenItems.forEach(item => {
      item.classList.remove('shown');
      item.classList.add('gallery-section__hidden');
    });
    button.textContent = buttonOpenText;
    isExpanded = false;
  }
});
