const showInputError = (formElement, inputElement, errorMessage, data) => {
    const params = Object.assign({}, data);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${params.inputErrorClass}`);
    errorElement.textContent = errorMessage;
  };

const hideInputError = (formElement, inputElement, data) => {
    const params = Object.assign({}, data);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${params.inputErrorClass}`);
    errorElement.textContent = '';
  };

  const checkInputValidity = (formElement, inputElement, data) => {
    const params = Object.assign({}, data);
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
      hideInputError(formElement, inputElement, params);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  }); 
  }
  
  const toggleButtonState = (inputList, buttonElement, data) => {
    const params = Object.assign({}, data);
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${params.inactiveButtonClass}`);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(`${params.inactiveButtonClass}`);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  }
  
  const setEventListeners = (formElement, data) => {
    const params = Object.assign({}, data);
    const inputList = Array.from(formElement.querySelectorAll(`${params.inputSelector}`));
    const buttonElement = formElement.querySelector(`${params.submitButtonSelector}`);
    
    toggleButtonState(inputList, buttonElement, params);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, params);
        toggleButtonState(inputList, buttonElement, params);
      });
    });
  };
  
  const enableValidation = (data) => {
    const params = Object.assign({}, data);
    const formList = Array.from(document.querySelectorAll(`${params.formSelector}`));

    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
      fieldsetList.forEach((item) => {
        setEventListeners(item, params);
        }); 
    });
  };
  
  enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
  }); 
