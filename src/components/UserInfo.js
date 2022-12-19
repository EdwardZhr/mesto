export default class UserInfo {
    constructor({nameSelector, vocationSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._vocation = document.querySelector(vocationSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent, 
            about: this._vocation.textContent,
            avatar: this._avatar.src
        };
        return this._userInfo;
    }

    setUserInfo({name, about, avatar}) {
        if (avatar) {
            this._avatar.src = avatar;
        }
        if (name) {
            this._name.textContent = name;
        }
        if (about) {
            this._vocation.textContent = about;
        }
    }
}