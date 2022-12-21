
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
const profilePopup = document.querySelector('.popup__container_type_profile');
const addPopup = document.querySelector('.popup__container_type_add');
const avatarPopup = document.querySelector('.popup__container_type_avatar');

// Создаем экземпляр класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: '8ade5112-01a1-4e6d-a5ab-052aeef1aded',
    'Content-Type': 'application/json'
  }
});

Promise.all([

    api.getProfile(),

    api.getInitialCards()

])
  .then((values)=>{ 
    const profileData =  values[0];
    const initialCards = values[1];

    userInfo.setUserInfo(profileData);

    userId = profileData._id;
    cardsList.renderItems(initialCards);
})
  .catch((err)=>{ 
    console.log(err);
});


// Валидация редактирования профиля
const profileFormValidator = new FormValidator(data, profilePopup);
profileFormValidator.enableValidation();

// Валидация добавления карточки
const addFormValidator = new FormValidator(data, addPopup);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(data, avatarPopup);
avatarFormValidator.enableValidation();

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
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch((err)=> {
    console.log(err);
  })
  .finally(()=>{    
    popupWithProfileForm.close();
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

      popupDelete.handleFormSubmit = () => {
        api.deleteCard(id)
        .then((res)=>{
          card.deleteCard();
          popupDelete.close();
        })
        .catch((err)=>{
          console.log(err);
        });
      };
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
      })
        .catch((err)=>{
          console.log(err);
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
      id: res._id,
      ownerId: res.owner._id,
      userId: userId
    });
    cardsList.addItem(cardElement);
  })
  .catch((err)=> {
    console.log(err);
  })
  .finally(()=>{
    popupWithCardForm.close();
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
    .then((res)=>{
      userInfo.setUserInfo(res);
    })
    .catch((err)=>{
      console.log(err);
    })
    .finally(()=>{
      popupWithAvatarForm.close();
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
  renderer: (data) => {
    const cardElement = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      ownerId: data.owner._id,
      userId: userId
    }); 
    cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);


