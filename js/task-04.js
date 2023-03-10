let counterValue = 0;

const counterValueEl = document.querySelector('#value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', onBtnDecrementIncrement);
decrementBtn.addEventListener('click', onBtnDecrementIncrement);

function onBtnDecrementIncrement(event) {
    const target = event.target;
    const updatevalue = Number(target.textContent);
    counterValue += updatevalue;
       return counterValueEl.textContent = counterValue;
}