import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__container_form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        document.removeEventListener('keydown', super._handleEscClose); 
        this._popup.classList.remove('popup_opened');
        this._formElement.reset();
      }

    setInputValues(data) {
    this._inputList.forEach((input) => {
        input.value = data[input.name];
    });
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input =>  this._formValues[input.name] = input.value);
        return this._formValues;
    }
}