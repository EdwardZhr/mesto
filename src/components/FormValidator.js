export default class FormValidator {
    constructor (data, formElement) {
        this._data = data;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(`${data.inputSelector}`));
        this._buttonElement = this._formElement.querySelector(`${data.submitButtonSelector}`);
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._errorClass = data.errorClass;
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
    
    blockSubmit = () => {
      this._buttonElement.classList.add(`${this._inactiveButtonClass}`);
      this._buttonElement.setAttribute("disabled", "disabled");
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
    };
      
    _toggleButtonState = (inputList, buttonElement, data) => {
        if (this._hasInvalidInput(inputList)) {
          this.blockSubmit();
        } else {
          buttonElement.classList.remove(`${data.inactiveButtonClass}`);
          buttonElement.removeAttribute("disabled", "disabled");
        }
    };
      
    _setEventListeners = (data) => {
        this._toggleButtonState(this._inputList, this._buttonElement, data);
      
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(this._formElement, inputElement, data);
            this._toggleButtonState(this._inputList, this._buttonElement, data);
          });
        });
    };

    enableValidation = () => {
      this._setEventListeners(this._data);
  };
}
