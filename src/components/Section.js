export default class Section {
    constructor( {items, renderer}, selector) {
        // Массив данных, которые нужно добавить на страницу при инициализации класса
        this._renderedItems = items;
        // Функция для создания и отрисовки элементов/данных 
        this._renderer = renderer;
        // Контейнер в который добавляем элементы
        this._container = document.querySelector(selector);
    }

    // Метод отрисовки всех элементов
    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item));
    }

    // Метод добавления элемента в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}

// Класс отвечает за отрисовку элементов на странице