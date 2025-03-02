import store from "../../store";

export class registrationPassword {
    #parent;
    #submitBtn;
    #nextCallback;
    #prevCallback;
    #password;
    #repeatPassword;
    #checkboxPassword;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent, nextCallback, prevCallback) {
        this.#parent = parent;
        this.#nextCallback = nextCallback;
        this.#prevCallback = prevCallback;
    }

    get self() {
        return document.forms["registration_password"]
    }

    show = () => {
        this.self.hidden = false
        this.#formEmailRender()
    }

    hide = () => {
        this.self.hidden = true
    }

    #formEmailRender = () => {
        const email = this.self.querySelector(".form__email")
        console.log("EMAIL")
        console.log(email)
        email.textContent = store.auth.email
    }

    #checkpassword(str) {
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            if (!((48 <= char >= 48 && char <= 57) ||
                (char >= 65 && char <= 90) ||
                (char >= 97 && char <= 122))) {
                return false;
            }
        }
        return true;
    }
    /**
     * Валидация введенных данных
     */
    #passwordValidate = () => {
        const error = this.self.querySelector(".form__error")
        if (this.#password.validity.valid === false) {
            this.#password.classList.add("form__input_error")
            error.hidden = false
            error.textContent = "Пароль должен содержать минимум 10 символов"
            return false
        }
        if (this.#password.value.split("").filter(this.#checkpassword).lenght != this.#password.value.split("").lenght) {
            this.#password.classList.add("form__input_error")
            error.hidden = false
            error.textContent = "Пароль может содержать только латинские буквы и цифры"
            return false
        }
        if (this.#repeatPassword.value !== this.#password.value) {
            this.#repeatPassword.classList.add("form__input_error")
            error.hidden = false
            error.textContent = "Пароли не совпадают"
            return false
        } else {
            error.hidden = true
            this.#password.classList.remove("form__input_error")
            this.#repeatPassword.classList.remove("form__input_error")
            this.#password.classList.add("form__valid")
            this.#repeatPassword.classList.add("form__valid")
            return true
        }
    }

    #showPassword = () => {
        if (this.#checkboxPassword.checked) {
            this.#password.type = "text"
            this.#repeatPassword.type = "text"
        } else {
            this.#password.type = "password"
            this.#repeatPassword.type = "password"
        }
    }

    #addEventListeners = () => {
        const form = this.self
        this.#password = form.elements["password"]
        this.#repeatPassword = form.elements["repeat_password"]
        this.#checkboxPassword = form.elements["show_password"]
        this.#submitBtn = form.elements["submit"]

        form.querySelector(".form__back").addEventListener("click", this.#prevCallback())

        this.#password.addEventListener("input", this.#passwordValidate)
        this.#repeatPassword.addEventListener("input", this.#passwordValidate)
        this.#checkboxPassword.addEventListener("click", this.#showPassword)
        this.#submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.#passwordValidate() === true) {
                store.auth.password = this.#password.value
                store.auth.repeatPassword = this.#repeatPassword.value
                this.#nextCallback()
            }
        })
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
        const template = Handlebars.templates["registrationPassword/registrationPassword"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template(
                {
                    "email": store.auth.email,
                }
            )
        );
        this.#formEmailRender();
        this.#addEventListeners();
    }
}