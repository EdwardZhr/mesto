import { imagePopup, popupImg, popupImgName, openPopup} from './index.js'

export default class Card {
    constructor(data, cardPicture, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._pictureSelector = cardPicture;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
        
        return cardElement
      }
    
    _like (evt) {
        evt.target.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null
    }
    
    _handleOpenPopup() {
        popupImg.src = this._link;
        popupImg.alt = this._name;
        popupImgName.textContent = this._name;
        openPopup(imagePopup);
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
        this._picture = this._element.querySelector(this._pictureSelector);
        this._setEventListeners();
        this._picture.src = this._link;
        this._picture.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
    
        return this._element;
      }
}

    