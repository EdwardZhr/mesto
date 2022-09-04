export default class FormValidator {
    constructor (data, formElement) {
        this._date = data;
        this._formElement = formElement;
    }

    _showInputError = (formElement, inputElement, errorMessage, data) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(`${data.inputErrorClass}`);
        errorElement.textContent = errorMessage;
    };
    
    _hideInputError = (formElement, inputElement, data) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(`${data.inputErrorClass}`);
        errorElement.textContent = '';
    };
    
    _checkInputValidity = (formElement, inputElement, data) => {
        if (!inputElement.validity.valid) {
          this._showInputError(formElement, inputElement, inputElement.validationMessage, data);
        } else {
          this._hideInputError(formElement, inputElement, data);
        }
    };
      
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
      }); 
    }
      
    _toggleButtonState = (inputList, buttonElement, data) => {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(`${data.inactiveButtonClass}`);
          buttonElement.setAttribute("disabled", "disabled");
        } else {
          buttonElement.classList.remove(`${data.inactiveButtonClass}`);
          buttonElement.removeAttribute("disabled", "disabled");
        }
    }
      
    _setEventListeners = (formElement, data) => {
        const inputList = Array.from(formElement.querySelectorAll(`${data.inputSelector}`));
        const buttonElement = formElement.querySelector(`${data.submitButtonSelector}`);
        
        this._toggleButtonState(inputList, buttonElement, data);
      
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(formElement, inputElement, data);
            this._toggleButtonState(inputList, buttonElement, data);
          });
        });
    };
      


    enableValidation = (data, formElement) => {
        const formList = Array.from(document.querySelectorAll(`${data.formSelector}`));
    
        formList.forEach((formElement) => {
          formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
          });
          this._setEventListeners(formElement, data);
        });
    };
}
