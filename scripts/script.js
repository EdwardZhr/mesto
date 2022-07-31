const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');
const imagePopup = document.querySelector('.image-popup');
const popupForms = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const saveButton = document.querySelector('.popup__save-btn');
const nameInput = document.querySelector('.popup__input_type_name');
const vocationInput = document.querySelector('.popup__input_type_vocation');
const name = document.querySelector('.profile__name');
const vocation = document.querySelector('.profile__vocation');
const elements = document.querySelector('.elements');
const elementTemplate= document.querySelector('.element-template').content;
const locationName = document.querySelector('.popup__input_type_location-name');
const photoLink = document.querySelector('.popup__input_type_link');
const popupImg = document.querySelector('.popup__img');
const popupImgName = document.querySelector('.popup__image-name');
const profileContainer = document.querySelector('.popup__container_type_profile');
const cardContainer = document.querySelector('.popup__container_type_add');


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

function like (evt) {
  evt.target.classList.toggle('element__like_active');
}

function deleteCard (evt) {
  evt.target.closest('.element').remove();
}

function openPopup (item) {
  item.classList.add('popup_opened')
}

function openProfilePopup (evt) {
  openPopup(profilePopup);
  nameInput.value = name.textContent;
  vocationInput.value = vocation.textContent;
};

function openCardPopup (evt) {
  openPopup(cardPopup);
};

function openImagePopup (evt) {
  openPopup(imagePopup);
  popupImg.src = evt.target.previousElementSibling.src;
  popupImg.alt = evt.target.previousElementSibling.alt;
  popupImgName.textContent = evt.target.previousElementSibling.alt;
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function createCard(item) {
  const cardElement = elementTemplate.cloneNode('true');
  const elementPicture = cardElement.querySelector('.element__picture');
  const elementTitle = cardElement.querySelector('.element__title');
  const likeIcon = cardElement.querySelector('.element__like');
  const trash = cardElement.querySelector('.element__delete');
  const photo = cardElement.querySelector('.element__mask');
  elementPicture.src = item.link;
  elementPicture.alt = item.name;
  elementTitle.textContent = item.name;
  likeIcon.addEventListener('click', like);
  trash.addEventListener('click', deleteCard);
  photo.addEventListener('click', openImagePopup);
  return cardElement
}

function addCard(element) {
  const cardsElement = createCard(element)
  elements.prepend(cardsElement);
}

function handleCardFormSubmit  (evt) {
  let card = {
    name: locationName.value,
    link: photoLink.value
  }
  addCard(card);
  closePopup(evt.target.closest('.popup'));
  evt.target.reset();
}

function handleProfileFormSubmit (evt) {
  name.textContent = `${nameInput.value}`;
  vocation.textContent = `${vocationInput.value}`;
  closePopup(evt.target.closest('.popup'));
}

initialCards.forEach(addCard)

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openCardPopup);
Array.from(closeButtons).forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup(popup)
  });
});

profileContainer.addEventListener('submit', handleProfileFormSubmit);
cardContainer.addEventListener('submit', handleCardFormSubmit);


