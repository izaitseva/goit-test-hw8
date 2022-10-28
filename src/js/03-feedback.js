import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

console.log(123)

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]'),
    email: document.querySelector('[name=email]'),
}

const STORAGE_KEY = "feedback-form-state";
 
console.log(refs);

refs.form.addEventListener('submit', onFormSubmit);

refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

savedMessage();

function onFormSubmit(event) {
    event.preventDefault();
    
    console.log("Send form");
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
//  перевірка
function onEmailInput(event) {
    const email = event.target.value;
    const textarea = refs.textarea.value;
    saveForm(email, textarea);
}

function onTextareaInput(event) {
    const message = event.target.value;
    const email = refs.email.value;
    saveForm(email, message);
}

function savedMessage() {
    const formString = localStorage.getItem(STORAGE_KEY);
    const form = JSON.parse(formString);

    if (form) {
        refs.textarea.value = form.message;
        refs.email.value = form.email;
    }
    
}

function saveForm(email, message) {
    let form = {
        email: email,
        message: message,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
}
