(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._pictureSelector=n,this._templateSelector=r,this._handleCardClick=o,this._handleTrashClick=i,this._handleLikeClick=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_like",value:function(){this._likeIcon.classList.add("element__like_active")}},{key:"_dislike",value:function(){this._likeIcon.classList.remove("element__like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeIcon=this._element.querySelector(".element__like"),this._trashIcon=this._element.querySelector(".element__delete");var t=this._element.querySelector(".element__mask");this._likeIcon.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._trashIcon.addEventListener("click",(function(){e._handleTrashClick(e._id)})),t.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._like():this._dislike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._picture=this._element.querySelector(this._pictureSelector),this._setEventListeners(),this._picture.src=this._link,this._picture.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this.setLikes(this._likes),this._userId!==this._ownerId&&(this._trashIcon.style.display="none"),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.nameSelector,r=t.vocationSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._vocation=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._name.textContent,about:this._vocation.textContent,avatar:this._avatar.src},this._userInfo}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;r&&(this._avatar.src=r),t&&(this._name.textContent=t),n&&(this._vocation.textContent=n)}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-btn"))&&(t.preventDefault(),e.close())}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._name=t._popup.querySelector(".popup__image-name"),t._img=t._popup.querySelector(".popup__img"),t}return t=a,(n=[{key:"open",value:function(e,t){l(d(a.prototype),"open",this).call(this),this._name.textContent=e,this._img.alt=e,this._img.src=t}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popup.querySelector(".popup__container_form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._btn=n._popup.querySelector(".popup__save-btn"),n._btnText=n._btn.textContent,n}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;m(w(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"loading",value:function(){this._btn.textContent="Сохранение..."}},{key:"close",value:function(){m(w(a.prototype),"close",this).call(this),this._formElement.reset(),this._btn.textContent=this._btnText}},{key:"submitHandler",value:function(e){this._handleFormSubmit=e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}}],n&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=C((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"_showInputError",(function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(r.inputErrorClass)),o.textContent=n})),j(this,"_hideInputError",(function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),r.textContent=""})),j(this,"blockSubmit",(function(){r._buttonElement.classList.add("".concat(r._inactiveButtonClass)),r._buttonElement.setAttribute("disabled","disabled")})),j(this,"_checkInputValidity",(function(e,t,n){t.validity.valid?r._hideInputError(e,t,n):r._showInputError(e,t,t.validationMessage,n)})),j(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),j(this,"_toggleButtonState",(function(e,t,n){r._hasInvalidInput(e)?r.blockSubmit():(t.classList.remove("".concat(n.inactiveButtonClass)),t.removeAttribute("disabled","disabled"))})),j(this,"_setEventListeners",(function(e){r._toggleButtonState(r._inputList,r._buttonElement,e),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(r._formElement,t,e),r._toggleButtonState(r._inputList,r._buttonElement,e)}))})),r._formElement.addEventListener("submit",(function(e){e.preventDefault()}))})),j(this,"enableValidation",(function(){r._setEventListeners(r._data)})),this._data=t,this._formElementSelector=n,this._formElement=document.querySelector("".concat(n)),this._inputList=Array.from(this._formElement.querySelectorAll("".concat(t.inputSelector))),this._buttonElement=this._formElement.querySelector("".concat(t.submitButtonSelector)),this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass})),O={formSelector:".popup__container_form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"};function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P,q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}var t,n;return t=e,n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){console.log(e)}))}}],n&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=document.querySelector(".profile__edit-btn"),U=document.querySelector(".profile__add-btn"),x=document.querySelector(".profile__avatar-wrapper"),R=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-55",headers:{authorization:"8ade5112-01a1-4e6d-a5ab-052aeef1aded","Content-Type":"application/json"}});R.getProfile().then((function(e){V.setUserInfo(e),P=e._id})),R.getInitialCards().then((function(e){e.forEach((function(e){var t=N({name:e.name,link:e.link,likes:e.likes,id:e._id,ownerId:e.owner._id,userId:P});M.addItem(t)}))})),new L(O,".popup__container_type_profile").enableValidation();var B=new L(O,".popup__container_type_add");B.enableValidation();var V=new i({nameSelector:".profile__name",vocationSelector:".profile__vocation",avatarSelector:".profile__avatar"}),A=new _(".image-popup");A.setEventListeners();var D=function(e,t){A.open(e,t)},H=new E(".profile-popup",(function(e){H.loading(),R.editProfile(e).then((function(){V.setUserInfo(e),H.close()})).catch((function(e){console.log(e)}))}));H.setEventListeners(),T.addEventListener("click",(function(){var e=V.getUserInfo();H.setInputValues(e),H.open()}));var N=function(e){var t=new r(e,".element__picture",".element-template",D,(function(e){J.open(),J.submitHandler((function(){R.deleteCard(e).then((function(e){t.deleteCard(),J.close()}))}))}),(function(e){t.isLiked()?R.deleteLike(e).then((function(e){t.setLikes(e.likes)})):R.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.generateCard()},F=new E(".card-popup",(function(e){F.loading(),R.addCard(e).then((function(e){var t=N({name:e.name,link:e.link,likes:e.likes,id:e.id,ownerId:P,userId:e.userId});M.addItem(t),F.close()})).catch((function(e){console.log(e)}))}));F.setEventListeners(),U.addEventListener("click",(function(){F.open(),B.blockSubmit()}));var J=new E(".delete-popup");J.setEventListeners();var z=new E(".avatar-popup",(function(e){z.loading(),R.changeAvatar(e.avatar).then((function(){V.setUserInfo(e),z.close()})).catch((function(e){console.log(e)}))}));z.setEventListeners(),x.addEventListener("click",(function(){var e=V.getUserInfo();z.setInputValues(e),z.open()}));var M=new t({items:[],renderer:function(e){var t=N(e);M.addItem(t)}},".elements");M.renderItems()})();