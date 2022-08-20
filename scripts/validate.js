const showInputError = (formElement, inputElement, errorMessage, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${data.inputErrorClass}`);
    errorElement.textContent = errorMessage;
  };

const hideInputError = (formElement, inputElement, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${data.inputErrorClass}`);
    errorElement.textContent = '';
  };

  const checkInputValidity = (formElement, inputElement, data) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, data);
    } else {
      hideInputError(formElement, inputElement, data);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  }); 
  }
  
  const toggleButtonState = (inputList, buttonElement, data) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${data.inactiveButtonClass}`);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(`${data.inactiveButtonClass}`);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  }
  
  const setEventListeners = (formElement, data) => {
    const inputList = Array.from(formElement.querySelectorAll(`${data.inputSelector}`));
    const buttonElement = formElement.querySelector(`${data.submitButtonSelector}`);
    
    toggleButtonState(inputList, buttonElement, data);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, data);
        toggleButtonState(inputList, buttonElement, data);
      });
    });
  };
  
  const enableValidation = (data) => {
    const formList = Array.from(document.querySelectorAll(`${data.formSelector}`));

    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement, data);
    });
  };
  
  enableValidation({
    formSelector: '.popup__container_form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
  }); 
