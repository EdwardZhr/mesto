const content = document.querySelector('.content');
const popups = document.querySelectorAll('.popup');
const popupForms = document.querySelectorAll('.popup__container');
const editButton = content.querySelector('.profile__edit-btn');
const addButton = content.querySelector('.profile__add-btn');
const closeButtons = document.querySelectorAll('.popup__close-btn');
const saveButton = document.querySelector('.popup__save-btn');
const nameInput = document.querySelector('.popup__input_type_name');
const vocationInput = document.querySelector('.popup__input_type_vocation');
const name = content.querySelector('.profile__name');
const vocation = content.querySelector('.profile__vocation');
const elements = content.querySelector('.elements');
const elementTemplate= document.querySelector('.element-template').content;
const locationName = document.querySelector('.popup__input_type_location-name');
const photoLink = document.querySelector('.popup__input_type_link');

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

function openPopup (evt) {
  if (evt.target.classList[0] === 'profile__add-btn') {
    Array.from(popups)[1].classList.add('popup_opened');
  } else if (evt.target.classList[0] === 'element__mask') {
    Array.from(popups)[2].classList.add('popup_opened')
    document.querySelector('.popup__img').src = evt.target.previousElementSibling.src;
    document.querySelector('.popup__img').alt = evt.target.previousElementSibling.alt;
    document.querySelector('.popup__image-name').textContent = evt.target.previousElementSibling.alt;
  } else {
    Array.from(popups)[0].classList.add('popup_opened');
  }
}

function addCard(element) {
    const cardsElement = elementTemplate.cloneNode('true');
    cardsElement.querySelector('.element__picture').src = element.link;
    cardsElement.querySelector('.element__title').textContent = element.name;
    cardsElement.querySelector('.element__picture').alt = element.name;
    elements.append(cardsElement);
    let likes = document.querySelectorAll('.element__like');
    let trash = document.querySelectorAll('.element__delete');
    let photos = document.querySelectorAll('.element__mask');
    Array.from(likes).forEach(item => item.addEventListener('click', like));
    Array.from(trash).forEach(item => item.addEventListener('click', deleteCard));
    Array.from(photos).forEach(item => item.addEventListener('click', openPopup));
}

initialCards.forEach(addCard)



editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopup);

function closePopup (evt) {
    evt.preventDefault();
    Array.from(popups).forEach(item => item.classList.remove('popup_opened'));
    nameInput.value = name.textContent;
    vocationInput.value = vocation.textContent;
}

Array.from(closeButtons).forEach(item => item.addEventListener('click', closePopup));

function formSubmitHandler (evt) {
    evt.preventDefault();
    if (evt.target.classList[1]) {
      let card = {
        name: locationName.value,
        link: photoLink.value
      }
      addCard(card);
      locationName.value = '';
      photoLink.value = ''
    } else {
      name.textContent = `${nameInput.value}`;
      vocation.textContent = `${vocationInput.value}`;
    }
    Array.from(popups).forEach(item => item.classList.remove('popup_opened'));
}

Array.from(popupForms).forEach(item => item.addEventListener('submit', formSubmitHandler));


