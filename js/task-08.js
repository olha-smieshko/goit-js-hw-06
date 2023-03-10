const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    
    if (!emailValue) {
        alert('Будь ласка, заповніть поле "email"');
    } else if (!passwordValue) {
        alert('Будь ласка, заповніть поле "password"');
    } else {
       const loginData = {
            email: emailValue,
            password: passwordValue
        };
    console.log(loginData);
    form.reset();
    }
    
}