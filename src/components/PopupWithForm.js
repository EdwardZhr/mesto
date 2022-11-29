import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__container_form');
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt)=> {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) {
              evt.preventDefault();
              this._formElement.reset();
              this.close();
              }
          });
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
    
            this._formElement.reset();
        });
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose.bind(this)); 
        this._popup.classList.remove('popup_opened');
        this._formElement.reset();
      }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input =>  this._formValues[input.name] = input.value);
        return this._formValues;
    }
}