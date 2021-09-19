import { showErrorMessege } from './shared/regexp/error-messege';

import './styles/index.scss';

const formOfComment = document.querySelector('.comments__form');
const checkBtn = document.querySelector('.comments__form-btn');
const emailInput = document.querySelector('.comments__form-email');
const phoneInput = document.querySelector('.comments__form-phone');

const checkEmailInput = () => {

  formOfComment.addEventListener('submit', event => {
    event.preventDefault();
  });

  checkBtn.onclick = () => {
    emailInput.value == '' || emailInput.value == ' ' ?
      emailInput.value = 'Mushpakov.Vitaliy@gmail.com' :
      emailInput.value;

    if (showErrorMessege(phoneInput.value) && phoneInput.value) {
      alert('Correct phone number');
    } else if (!showErrorMessege(phoneInput.value) && phoneInput.value) {
      alert('Incorrect phone number');
    }
  }

}

checkEmailInput();