const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');
const amountEl = document.querySelector('input[type="number"]')
destroyBtnEl.disabled = true;
// ф-ція генерації кольорів
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// ф-ція додавання боксів
function createBoxes(amount) {
  const sizes = Array.from({ length: amount }, (_, idx) => 30 + idx * 10);
  // console.log(sizes)
  const boxes = sizes.map((size) => {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    return div;
  });

  containerEl.append(...boxes);
}
// ф-ція знищення боксів
function destroyBoxes() {
  if (containerEl.children.length > 0) {
    containerEl.innerHTML = '';
    createBtnEl.disabled = false;
    amountEl.disabled = false;
    destroyBtnEl.disabled = true;
  }
}
// Виклик
createBtnEl.addEventListener('click', () => {
  const amount = Number(amountEl.value); 
  // console.log(amount)
  if (!!amount) {    
    createBoxes(amount);
    amountEl.value = '';
    createBtnEl.disabled = true;
    amountEl.disabled = true;
    destroyBtnEl.disabled = false;
    
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

destroyBtnEl.addEventListener('click', destroyBoxes);