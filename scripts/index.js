
import Card from './Card.js'
import FormValidator from './FormValidator.js'

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

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
  hideError (profilePopup);
};

function blockSubmit (popup) {
  const btn = popup.querySelector('.popup__save-btn')
  btn.classList.add('popup__save-btn_inactive');
  btn.setAttribute("disabled", "disabled");
}

function openCardPopup (evt) {
  openPopup(cardPopup);
};

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openCardPopup);

function closePopup (popup) {
  document.removeEventListener('keydown', handleEscUp); 
  popup.classList.remove('popup_opened');
}

function hideError (popup) {
  const inputErrors = Array.from(popup.querySelectorAll('.popup__input-error'));
  const fields = Array.from(popup.querySelectorAll('.popup__input'));
  inputErrors.forEach((error)=> {
    error.textContent = ''
  })
  fields.forEach((field)=> {
    field.classList.remove('popup__input_type_error');
  })
}

function handleProfileFormSubmit (evt) {
  name.textContent = `${nameInput.value}`;
  vocation.textContent = `${vocationInput.value}`;
  closePopup(evt.target.closest('.popup'));
  evt.preventDefault();
}

function addCard(element) {
  const card = new Card(element, '.element-template');
  const cardElement = card.generateCard();
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
  blockSubmit(cardPopup);
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

const data = {
  formSelector: '.popup__container_form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

const profileFormValidator = new FormValidator(data, '.popup__container_type_profile')

const addFormValidator = new FormValidator(data, '.popup__container_type_add')

profileFormValidator.enableValidation(data, '.popup__container_type_profile'); 
addFormValidator.enableValidation(data, '.popup__container_type_add'); 

