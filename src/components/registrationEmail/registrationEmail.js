import store from "../../store";

export class registrationEmail {
    #parent;
    #email;
    #submitBtn;
    #nextCallback;
    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     * @param type {string} - Тип регистрации
     * @param nextCallback {function} - Вызов следующей формы
     * @param prevCallback {function} - Вызов предыдущей формы
     */
    constructor(parent, nextCallback) {
        this.#parent = parent;
        this.#nextCallback = nextCallback;
    }

    get self() {
        return document.forms["registration_email"]
    }

    getEmail = () => {
        return this.#email
    }

    hide = () => {
        this.self.hidden = true
        document.querySelectorAll(".under_link").forEach(element => {
            element.hidden = true
        })
    }

    show = () => {
        this.self.hidden = false
        this.#under_link()
    }

    #switch = () => {
        if (store.auth.type === "company") {
            store.auth.type = "user"
        } else {
            store.auth.type = "company"
        }
        this.#under_link();
        this.#formNameRender();
    }

    #under_link = () => {
        const companyLink = document.getElementById("i_need_users")
        const userLink = document.getElementById("i_need_job")
        if (store.auth.type === "company") {
            companyLink.hidden = true
            userLink.hidden = false
        } else {
            companyLink.hidden = false
            userLink.hidden = true
        }
    }

    #formNameRender = () => {
        const formName = this.self.querySelector(".form__name")
        if (store.auth.type === "company") {
            formName.textContent = "Поиск сотрудников"
        } else {
            formName.textContent = "Поиск работы"

        }
    }

    /**
     * Валидация введенных данных
     */
    #emailValidate = () => {
        const error = this.self.querySelector(".form__error")
        if (this.#email.validity.valid === false) {
            error.hidden = false
            error.textContent = "Напишите валидный адрес почты"
            this.#email.classList.add("form__input_error")
            return false
        } 
        if (this.#email.value.split("").indexOf(".") === -1) {
            error.hidden = false
            error.textContent = "Напишите валидный адрес почты"
            this.#email.classList.add("form__input_error")
            return false
        }
        error.hidden = true
        this.#email.classList.remove("form__valid")
        return true
    }

    #addEventListeners = () => {
        const form = this.self
        this.#email = form.elements["email"]
        this.#submitBtn = form.elements["submit"]

        document.querySelectorAll(".under_link").forEach(element => {
            element.addEventListener("click", this.#switch);
        })
        this.#email.addEventListener("input", () => {
            this.#emailValidate()
        })
        this.#submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.#emailValidate() === true) {
                store.auth.email = this.#email.value
                this.#nextCallback()
            }
        })
    }

    /**
     * Очистка
     */
    remove = () => {
        this.self.remove();
        document.querySelectorAll("under_link").forEach((element) => {
            element.remove();
        })
    }

    /**
     * Рендеринг формы
     */
    render = () => {
        console.log("register form render");

        const template = Handlebars.templates["registrationEmail/registrationEmail"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template(
                {
                    "type": store.auth.type,
                }
            )
        );
        this.#formNameRender();
        this.#under_link();
        this.#addEventListeners();
    }
}