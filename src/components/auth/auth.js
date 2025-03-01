import { registrationEmail } from "../registrationEmail/registrationEmail";

export class auth {
    #parent;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
    }

    get self() {
        return document.getElementById("auth")
    }

    #nextCallback() {
        console.log("NEXT")
    } 
    
    #prevCallback() {
        console.log("PREV")
    }

    /**
     * Очистка
     */
    remove() {
        this.self.remove();
    }

    /**
     * Рендеринг формы
     */
    render() {
        console.log("register form render");
        const template = Handlebars.templates["auth/auth"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template()
        );
        const regEmail = new registrationEmail(this.self, "user", this.#nextCallback, this.#prevCallback)
        regEmail.render();
        regEmail.show();
    }
}