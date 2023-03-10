function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const chgColorBtnEl = document.querySelector('.change-color');
const colorNameEl = document.querySelector('.color');

const onChgColorBtn = () => {
  const generetedColor = getRandomHexColor();
  document.body.style.backgroundColor = generetedColor;
  colorNameEl.textContent = generetedColor;
}

chgColorBtnEl.addEventListener('click', onChgColorBtn);


