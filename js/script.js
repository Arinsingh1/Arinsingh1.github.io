// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('h2');
  let hue = 0;

  setInterval(() => {
    hue = (hue + 1) % 360;
    text.style.color = `hsl(${hue}, 100%, 50%)`;
  }, 100);
});

