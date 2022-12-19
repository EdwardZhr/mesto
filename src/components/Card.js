export default class Card {
    constructor(data, cardPicture, templateSelector, handleCardClick, handleTrashClick, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;        
        this._ownerId = data.ownerId;
        this._pictureSelector = cardPicture;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._handleLikeClick = handleLikeClick;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
        
        return cardElement;
      }
    
    _like () {
        this._likeIcon.classList.add('element__like_active');
    }

    _dislike () {
        this._likeIcon.classList.remove('element__like_active');
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeIcon = this._element.querySelector('.element__like');
        this._trashIcon = this._element.querySelector('.element__delete');
        const photo = this._element.querySelector('.element__mask');

        this._likeIcon.addEventListener('click', () => {
            this._handleLikeClick(this._id);
        });

        this._trashIcon.addEventListener('click', () => {
            this._handleTrashClick(this._id);
        });

        photo.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
      }

    isLiked() {
        const hasLiked = this._likes.find(user => user._id === this._userId);
        return hasLiked;
    }
      
    setLikes(likes) {
        this._likes = likes;
        const likeCount = this._element.querySelector('.element__like-count');
        likeCount.textContent = this._likes.length;
        if (this.isLiked()) {
            this._like();
        } else {
            this._dislike();
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._picture = this._element.querySelector(this._pictureSelector);
        this._setEventListeners();
        this._picture.src = this._link;
        this._picture.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        this.setLikes(this._likes);

        if (this._userId !== this._ownerId) {
            this._trashIcon.style.display = 'none';
        }

        return this._element;
      }
}

    