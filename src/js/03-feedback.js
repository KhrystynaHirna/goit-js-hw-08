import throttle from 'lodash/throttle';

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

email.addEventListener('input', throttle(onFormInputSet, 500));
message.addEventListener('input', throttle(onFormInputSet, 500));
form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;  
    console.log(formData);
});

onFormInputGet();

function onFormInputSet() {
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormInputGet() {
    const savedElements = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedElements) {
        message.value = savedElements;
        email.value = savedElements;
    } 
       console.log(savedElements);
}
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log('submited');   
}

