export default class Section {
    constructor( {renderer}, selector) {
        // Функция для создания и отрисовки элементов/данных 
        this._renderer = renderer;
        // Контейнер в который добавляем элементы
        this._container = document.querySelector(selector);
    }

    // Метод отрисовки всех элементов
    renderItems(items) {
        items.forEach(item => this._renderer(item));
    }

    // Метод добавления элемента в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}

// Класс отвечает за отрисовку элементов на странице