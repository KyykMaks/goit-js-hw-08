
const feedBack = document.querySelector('.feedback-form');


const saveForm = {};


feedBack.addEventListener('input', (event) => {


    localStorage.setItem("feedback-form-state", JSON.stringify(event.currentTarget.email.value));
    const saveEmail = event .currentTarget.email.value;
    saveForm.email = saveEmail

    localStorage.setItem("feedback-form-message", JSON.stringify(event.currentTarget.email.value));
    const saveMessage = event .currentTarget.email.value;
    saveForm.message = saveMessage
});

feedBack.email.value = JSON.parse(localStorage.getItem('feedback-form-state'));
feedBack.message.value = JSON.parse(localStorage.getItem('feedback-form-message'));

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(saveForm);
    feedBack.reset();
localStorage.removeItem("feedback-form-state")
localStorage.removeItem("feedback-form-message")
}
feedBack.addEventListener('submit', handleSubmit);