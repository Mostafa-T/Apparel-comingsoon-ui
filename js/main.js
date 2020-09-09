
// Setup 

const formGroup = document.querySelector('.form-group');

const formBtn = document.querySelector('.form-btn');
const errorMsg = document.querySelector('.error-msg ');

// Validation Function

formBtn.addEventListener('click', (e) => {
  const formInput = document.querySelector('.form-input').value;
  e.preventDefault()
  if (formInput == '') {

    formGroup.classList.add('isinvalid');
    formGroup.firstElementChild.classList.add('isinvalid');
    errorMsg.style.display = 'block';
  } else {

    formGroup.classList.remove('isinvalid');
    formGroup.firstElementChild.classList.remove('isinvalid');
    errorMsg.style.display = 'none';

  }
});