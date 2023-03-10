const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', (event => {
    if (event.target.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        return;
    }
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
}))