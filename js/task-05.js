const inputEL = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEL.addEventListener('input', (event) => {
    if (!inputEL.value) {
        outputEl.textContent = 'Anonymous';
        return;
    } 
     outputEl.textContent = event.currentTarget.value;
    
});