
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import {data} from '../utils/data.js';
import '../pages/index.css';
import Api from '../components/Api.js';

let userId;

const cardsContainer = '.elements';
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const avatar = document.querySelector('.profile__avatar-wrapper');

// Создаем экземпляр класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: '8ade5112-01a1-4e6d-a5ab-052aeef1aded',
    'Content-Type': 'application/json'
  }
});

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res);
    userId = res._id;
  });

api.getInitialCards()
  .then(res => {
    res.forEach(data => {
      const cardElement = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        ownerId: data.owner._id,
        userId: userId
      });
      cardsList.addItem(cardElement);
    });
  });

// Валидация редактирования профиля
const profileFormValidator = new FormValidator(data, '.popup__container_type_profile');
profileFormValidator.enableValidation();

// Валидация добавления карточки
const addFormValidator = new FormValidator(data, '.popup__container_type_add');
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  vocationSelector:'.profile__vocation',
  avatarSelector: '.profile__avatar'
});

// Создание попапа с картинкой
const popupWidthImage = new PopupWithImage('.image-popup');
popupWidthImage.setEventListeners();

// Функция отрытия попапа с картинкой
const handleCardClick = function(name, link) {
  popupWidthImage.open(name, link);
};

// Функция сабмита формы профиля
const handleProfileFormSubmit = function(formData) {
  popupWithProfileForm.loading();
  api.editProfile(formData)
  .then(() => {
    userInfo.setUserInfo(formData);
    popupWithProfileForm.close();
  })
  .catch((err)=> {
    console.log(err);
  });
};

// Создание попапа с формой профиля
const popupWithProfileForm = new PopupWithForm('.profile-popup', handleProfileFormSubmit);
popupWithProfileForm.setEventListeners();

// Функция открытия попапа с формой профиля
const handleProfileClick = function() {
  const infoData = userInfo.getUserInfo();
  popupWithProfileForm.setInputValues(infoData);
  popupWithProfileForm.open();
};

// Слушатель открытия формы профиля
editButton.addEventListener('click', handleProfileClick);

// Создание карточки
const createCard = function(formData) {
  const card = new Card(formData, '.element__picture', '.element-template', handleCardClick, 
    (id) => {
      popupDelete.open();
      popupDelete.submitHandler(() => {
        api.deleteCard(id)
        .then((res)=>{
          card.deleteCard();
          popupDelete.close();
        });
      });
    }, 
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
        .then(res=>{
          card.setLikes(res.likes);
      });
      } else {
        api.addLike(id)
        .then(res=>{
          card.setLikes(res.likes);
      });
      }
    });
  const cardElement = card.generateCard();
  return cardElement;
};

// // Функция сабмита формы добавления карточки и ее добавление
const handleCardFormSubmit = function(formData) {
  popupWithCardForm.loading();
  api.addCard(formData)
  .then(res => {
    const cardElement = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res.id,
      ownerId: userId,
      userId: res.userId
    });
    cardsList.addItem(cardElement);
    popupWithCardForm.close();
  })
  .catch((err)=> {
    console.log(err);
  });
};

// // Функция открытия попапа с формой добавления карточки
const handleCardFormClick = function() {
  popupWithCardForm.open();
  addFormValidator.blockSubmit();
};

// // Создание попапа с формой добавления карточки
const popupWithCardForm = new PopupWithForm('.card-popup', handleCardFormSubmit);
popupWithCardForm .setEventListeners();

// // Слушатель открытия формы добавления карточки
addButton.addEventListener('click', handleCardFormClick);

const popupDelete = new PopupWithForm('.delete-popup'); 
popupDelete.setEventListeners();

const handleAvatarFormSubmit = function(formData) {
  popupWithAvatarForm.loading();
  api.changeAvatar(formData.avatar)
    .then(()=>{
      userInfo.setUserInfo(formData);
      popupWithAvatarForm.close();
    })
    .catch((err)=>{
      console.log(err);
    });
};

const popupWithAvatarForm = new PopupWithForm('.avatar-popup', handleAvatarFormSubmit);
popupWithAvatarForm .setEventListeners();

const handleAvatarFormClick = function() {
  const infoData = userInfo.getUserInfo();
  popupWithAvatarForm.setInputValues(infoData);
  popupWithAvatarForm.open();
};

avatar.addEventListener('click', handleAvatarFormClick);

const cardsList = new Section({
  items: [],
  renderer: (data) => {
    const cardElement = createCard(data); 
    cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardsList.renderItems();
