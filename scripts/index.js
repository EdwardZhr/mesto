
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import {initialCards, data} from './Data.js'

const popups = document.querySelectorAll('.popup');
const elements = document.querySelector('.elements');
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');
const nameInput = document.querySelector('.popup__input_type_name');
const vocationInput = document.querySelector('.popup__input_type_vocation');
const name = document.querySelector('.profile__name');
const vocation = document.querySelector('.profile__vocation');
const profileContainer = document.querySelector('.popup__container_type_profile');
const cardContainer = document.querySelector('.popup__container_type_add');
const locationName = document.querySelector('.popup__input_type_location-name');
const photoLink = document.querySelector('.popup__input_type_link');
const imagePopup = document.querySelector('.image-popup');
const popupImg = document.querySelector('.popup__img');
const popupImgName = document.querySelector('.popup__image-name');

const handleEscUp = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

function openPopup (item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function openProfilePopup (evt) {
  openPopup(profilePopup);
  nameInput.value = name.textContent;
  vocationInput.value = vocation.textContent;

};

function openCardPopup (evt) {
  openPopup(cardPopup);
};

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openCardPopup);

function closePopup (popup) {
  document.removeEventListener('keydown', handleEscUp); 
  popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
  name.textContent = `${nameInput.value}`;
  vocation.textContent = `${vocationInput.value}`;
  closePopup(evt.target.closest('.popup'));
  evt.preventDefault();
}

function generateCard(element) {
  const card = new Card(element, '.element__picture', '.element-template');
  const cardElement = card.generateCard();
  return cardElement
}

function addCard(element) {
  const cardElement = generateCard(element);
  elements.prepend(cardElement);
}

function handleCardFormSubmit  (evt) {
  const card = {
    name: locationName.value,
    link: photoLink.value
  }
  addCard(card);
  closePopup(evt.target.closest('.popup'));
  evt.target.reset();
  evt.preventDefault();
}

Array.from(popups).forEach((popup) => {
  popup.addEventListener('mousedown', (evt)=> {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) {
      evt.preventDefault();
      closePopup(popup);
      }
  })
}) 

initialCards.forEach(addCard);
profileContainer.addEventListener('submit', handleProfileFormSubmit);
cardContainer.addEventListener('submit', handleCardFormSubmit);

const profileFormValidator = new FormValidator(data, '.popup__container_type_profile')

const addFormValidator = new FormValidator(data, '.popup__container_type_add')

profileFormValidator.enableValidation(); 
addFormValidator.enableValidation(); 

export { imagePopup, popupImg, popupImgName, openPopup}