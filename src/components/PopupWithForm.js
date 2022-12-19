import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__container_form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._btn = this._popup.querySelector('.popup__save-btn');
        this._btnText = this._btn.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    loading() {
        this._btn.textContent = 'Сохранение...';
    }

    close() {
        super.close();
        this._formElement.reset();
        this._btn.textContent = this._btnText;
      }

    submitHandler(submit) {
        this._handleFormSubmit = submit;
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