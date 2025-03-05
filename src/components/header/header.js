import store from "../../store";

export class Header {
    #parent;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
    }

    get self() {
        return document.querySelector(".header")
    }

    /**
     * Очистка
     */
    remove = () => {
        this.self.remove();
    }

    /**
     * Рендеринг формы
     */
    render = () => {
        console.log("register form render");
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates["header/header"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template(store)
        );
    }
}