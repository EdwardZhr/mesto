export default class UserInfo {
    constructor({nameSelector, vocationSelector}) {
        this._name = document.querySelector(nameSelector);
        this._vocation = document.querySelector(vocationSelector);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent, 
            vocation: this._vocation.textContent
        };
        return this._userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._vocation.textContent = data.vocation;
    }
}