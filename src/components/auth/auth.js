import { registrationEmail } from "../registrationEmail/registrationEmail";
import { store } from "../../store";
import { registrationPassword } from "../registrationPassword/registrationPassword";
import { registrationCompany } from "../registrationCompany/registrationCompany";
import { registrationUser } from "../registrationUser/registrationUser";
import { login } from "../login/login";
import {router} from "../../router.js";

export class auth {
    #parent;
    #regEmail;
    #regPassword;
    #regUser;
    #regCompany;
    #login;
    #history;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#history = []
        this.#parent = parent;
    }

    get self() {
        return document.getElementById("auth")
    }

    #nextCallback = () => {
        this.#history.push(store.page);
        if (store.page === "regEmail") {
            this.#regEmail.remove()
            store.page = "regPassword"
            this.render()
            return
        }
        if (store.page === "regPassword") {
            this.#regPassword.remove()
            if (store.auth.isEmployer) {
                store.page = "regCompany"
            } else {
                store.page = "regUser"
            }
            this.render()
            return
        }
        if (store.page === "regCompany") {
            this.#regCompany.remove()
            store.page = "login"
            this.render()
            return
        }
        if (store.page === "regUser") {
            this.#regUser.remove()
            store.page = "login"
            this.render()
            return
        }

        if (store.page === "login") {
            this.#login.remove()
            store.page = "catalog"
            console.log("Перед переходом на catalog:", store);
            router("catalog")
        }
    }

    #prevCallback = () => {
        console.log(store.page)
        if (store.page === "regEmail") {
            this.#regEmail.remove();
            router("catalog");
            return
        }
        if (store.page === "regPassword") {
            this.#regPassword.remove();
        }
        if (store.page === "regCompany") {
            this.#regCompany.remove();
        }
        if (store.page === "regUser") {
            this.#regUser.remove();
        }
        if (store.page === "login") {
            this.#login.remove();
        }
        store.page = this.#history.pop()

        this.render()
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
        if (this.self === null) {
            // eslint-disable-next-line no-undef
            const template = Handlebars.templates["auth/auth"]
            this.#parent.insertAdjacentHTML(
                "beforeend",
                template()
            );
        }
        if (store.page === "regEmail") {
            this.#regEmail = new registrationEmail(this.self, this.#nextCallback, this.#prevCallback)
            this.#regEmail.render();
        }
        if (store.page === "regPassword") {
            this.#regPassword = new registrationPassword(this.self, this.#nextCallback, this.#prevCallback)
            this.#regPassword.render();
        }
        if (store.page === "regCompany") {
            this.#regCompany = new registrationCompany(this.self, this.#nextCallback, this.#prevCallback)
            this.#regCompany.render();
        }
        if (store.page === "regUser") {
            this.#regUser = new registrationUser(this.self, this.#nextCallback, this.#prevCallback)
            this.#regUser.render();
        }
        if (store.page === "login") {
            this.#login = new login(this.self, this.#nextCallback, this.#prevCallback)
            this.#login.render()
        }
    }
}