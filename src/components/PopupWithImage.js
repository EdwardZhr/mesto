import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._name = this._popup.querySelector('.popup__image-name');
        this._img = this._popup.querySelector('.popup__img');
    }

    open(name, link) {
        super.open();
        this._name.textContent = name;
        this._img.alt = name;
        this._img.src = link;
    }
}

