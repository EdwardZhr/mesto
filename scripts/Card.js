const imagePopup = document.querySelector('.image-popup');
const popupImg = document.querySelector('.popup__img');
const popupImgName = document.querySelector('.popup__image-name');

export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
        
        return cardElement;
      }
    
    _like (evt) {
        evt.target.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
    }
    
    _handleEscUp = (evt) => {
        if (evt.key === "Escape") {
          const activePopup = document.querySelector('.popup_opened');
          this._handleClosePopup(activePopup);
        };
    };

    _handleOpenPopup() {
        imagePopup.classList.add('popup_opened');
        popupImg.src = this._link;
        popupImg.alt = this._name;
        popupImgName.textContent = this._name;
        document.addEventListener('keydown', this._handleEscUp);
      }
    
    _handleClosePopup() {
        imagePopup.classList.remove('popup_opened');
      }

    _setEventListeners() {
        const likeIcon = this._element.querySelector('.element__like');
        const trashIcon = this._element.querySelector('.element__delete');
        const photo = this._element.querySelector('.element__mask');

        likeIcon.addEventListener('click', (evt) => {
            this._like(evt);
        });

        trashIcon.addEventListener('click', () => {
            this._deleteCard();
        });

        photo.addEventListener('click', () => {
            this._handleOpenPopup();
        })
      }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__picture').src = this._link;
        this._element.querySelector('.element__picture').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
    
        return this._element;
      }
}

    