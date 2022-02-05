import throttle from 'lodash/throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');

email.addEventListener('input', onEmailInput);
message.addEventListener('textarea', onMessageTextarea);
form.addEventListener('submit', onFormSubmit);

emailInputSaved();

function onEmailInput(evt) {
    const emailText = evt.currentTarget.value;
    console.log(emailText);
    localStorage.setItem('feedback-form-state', emailText);
}
function emailInputSaved(evt) {
   const savedEmail = localStorage.getItem('feedback-form-state');
    if (savedEmail) {
        console.log(savedEmail);
        email.value = savedEmail;
    }
}
function onMessageTextarea(evt) {
    const messageText = evt.currentTarget.value;
    console.log(messageText);
    localStorage.setItem('feedback-form-state', messageText);
};
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log('submited');   
}

