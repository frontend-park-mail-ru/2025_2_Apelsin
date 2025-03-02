import { registrationEmail } from "../registrationEmail/registrationEmail";
import store from "../../store";
import { registrationPassword } from "../registrationPassword/registrationPassword";

export class auth {
    #parent;
    #regEmail;
    #regPassword;
    #regUser;
    #regCompany;
    #login;

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

    #nextCallback = () => {
        if (store.page === "regEmail") {
            //Сделать запрос на сервер проверку существования почты
            this.#regEmail.hide()
            store.page = "regPassword"
            this.render()
            return
        }
        if (store.page === "regPassword") {
            this.#regPassword.hide()
            if (store.auth.type === "company") {
                store.page === "regCompany"
            } else {
                store.page === "regUser"
            }
            this.render()
            return
        }
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
        if (this.#regEmail === undefined) {
            this.#regEmail = new registrationEmail(this.self, this.#nextCallback, this.#prevCallback)
            this.#regEmail.render();
            this.#regEmail.hide();
            this.#regPassword = new registrationPassword(this.self, this.#nextCallback, this.#prevCallback)
            this.#regPassword.render();
            this.#regPassword.hide();
        }
        if (store.page === "regEmail") {
            this.#regEmail.show();
        }
        if (store.page === "regPassword") {
            this.#regPassword.show();
        }
    }
}