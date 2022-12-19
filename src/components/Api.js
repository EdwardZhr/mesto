export default class Api {
    constructor(options) {
      this._headers = options.headers;
      this._baseUrl = options.baseUrl;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }
  
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    editProfile({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
              })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    addCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
              })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    changeAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
              })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }
  }
  