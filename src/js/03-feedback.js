
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');
const localStorageKey = 'feedback-form-state';

let data = {
  email: '',
  message: '',
};

form.addEventListener(
  'input',
  throttle(function (event) {
    data = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }),
  500
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (emailInput.value.trim() !== '' || messageInput.value.trim() !== ''){
  console.log(data);
  form.reset();
  localStorage.removeItem(localStorageKey);
  } else {
console.log("Заповніть поля");
  }
});

function toShow() {
  const saved = JSON.parse(localStorage.getItem(localStorageKey));

  if (saved && saved.email) {
    emailInput.value = saved.email;
  }

  if (saved && saved.message) {
    messageInput.value = saved.message;
  }
}
toShow();
