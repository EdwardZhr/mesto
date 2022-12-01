
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards, data} from '../utils/data.js';
import '../pages/index.css';

const cardsContainer = '.elements';
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const nameInput = document.querySelector('.popup__input_type_name');
const vocationInput = document.querySelector('.popup__input_type_vocation');

// Валидация редактирования профиля
const profileFormValidator = new FormValidator(data, '.popup__container_type_profile');
profileFormValidator.enableValidation();

// Валидация добавления карточки
const addFormValidator = new FormValidator(data, '.popup__container_type_add');
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  vocationSelector:'.profile__vocation'
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
  userInfo.setUserInfo(formData);
  popupWithProfileForm.close();
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
  const card = new Card(formData, '.element__picture', '.element-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

// // Функция сабмита формы добавления карточки и ее добавление
const handleCardFormSubmit = function(formData) {
  const cardElement = createCard(formData);
  cardsList.addItem(cardElement);
  popupWithCardForm.close();
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

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data); 
    cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardsList.renderItems();
