import Popup from './Popup.js';

export default class PopupWithConfirmator extends Popup {
    constructor(selector) {
        super(selector);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        });
    }

    submitHandler(submit) { 
        this._handleFormSubmit = submit; 
    } 
}