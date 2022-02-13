import throttle from 'lodash/throttle';

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInputSet, 500));

onFormInputGet();

function onFormInputSet(evt) {
    const formData = {
    message: message.value,
    email: email.value,
};
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
function onFormInputGet() {
    const savedElements = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedElements) {
        message.value = savedElements.message || "";
        email.value = savedElements.email || "";
    } 
    return;
}
function onFormSubmit(evt) {
    evt.preventDefault();

    const savedElements = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedElements);

     if (message.value === "" || email.value === "") {
     return alert('please fill the form');
     }
   
    console.log('submited:', savedElements);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

