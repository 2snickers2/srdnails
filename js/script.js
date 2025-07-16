  const text = "Nails Daria Nails Daria Nails Daria Nails Daria Nails Daria ";
  const container = document.getElementById('circleText');
  const radius = 130;
  const deg = 360 / text.length;

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerText = text[i];
    span.style.transform = `rotate(${i * deg}deg) translate(${radius}px) rotate(${90}deg)`;
    container.appendChild(span);
  }
  