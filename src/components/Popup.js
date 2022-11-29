export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
    }

    // Логика закрытия попапа клавишей Esc.
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
          }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose.bind(this)); 
        this._popup.classList.remove('popup_opened');
      }

    //   Добавление слушателя клика иконке закрытия попапа
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt)=> {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) {
              evt.preventDefault();
              this.close();
              }
          });
    }
}

// Класс отвечает за открытие и закрытие попапа
