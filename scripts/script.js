let content = document.querySelector('.content');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container');
let editButton = content.querySelector('.profile__edit-btn');
let closeButton = popupForm.querySelector('.popup__close-btn');
let saveButton = popup.querySelector('.popup__save-btn');
let nameInput = popup.querySelector('.popup__input_type_name');
let vocationInput = popup.querySelector('.popup__input_type_vocation');
let name = content.querySelector('.profile__name');
let vocation = content.querySelector('.profile__vocation');

function openPopup () {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup () {
    event.preventDefault();
    popup.classList.remove('popup_opened');
    nameInput.value = name.textContent;
    vocationInput.value = vocation.textContent;
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = `${nameInput.value}`;
    vocation.textContent = `${vocationInput.value}`;
    popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', formSubmitHandler);