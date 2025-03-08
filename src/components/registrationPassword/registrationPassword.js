import "./registrationPassword.css"
import { store } from "../../store";

export class RegistrationPassword {
    #parent;
    #submitBtn;
    #nextCallback;
    #prevCallback;
    #password;
    #repeatPassword;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent, nextCallback, prevCallback) {
        this.#parent = parent;
        this.#nextCallback = nextCallback;
        this.#prevCallback = prevCallback;
    }

    /**
     * Получение объекта. Это ленивая переменная - значение вычисляется при вызове
     * @returns {HTMLElement}
     */
    get self() {
        return document.forms["registration_password"]
    }

    /**
     * Рендер почты. Вызывается при переходе из формы ввода почты
     */
    #formEmailRender = () => {
        const email = this.self.querySelector(".form__email")
        email.textContent = store.auth.email
    }
    
    /**
     * Проверяет пароль на соответсвие английским символам и цифрам
     * @param {string} str - пароль для валидации 
     * @returns {boolean}
     */
    #checkPassword(str) {
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            if (!((48 <= char && char <= 57) ||
                (65 <= char && char <= 90) ||
                (97 <= char && char <= 122))) {
                return false;
            }
        }
        return true;
    }
    
    /**
     * Валидация введенных данных
     * @returns {boolean}
     */
    #passwordValidate = () => {
        const error = this.self.querySelector(".form__error")
        if (this.#password.validity.valid === false) {
            this.#password.classList.add("form__input_error")
            error.hidden = false
            error.textContent = "Пароль должен содержать минимум 10 символов"
            return false
        }
        if (this.#checkPassword(this.#password.value) === false) {
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

    /**
     * Кнопка глазика в поле ввода пароля
     */
    #togglePasswordVisibility = () => {
        const showPasswordIcons = this.self.querySelectorAll(".form__toggle-password--show");
        const hidePasswordIcons = this.self.querySelectorAll(".form__toggle-password--hide");
        const password = this.self.elements["password"];
        const repeatPassword = this.self.elements["repeat_password"];

        showPasswordIcons.forEach((showPasswordIcon, i) => {
            const hidePasswordIcon = hidePasswordIcons[i];

            if (showPasswordIcon.classList.contains("active")) {
                password.type = "text";
                repeatPassword.type = "text";

                showPasswordIcon.classList.remove("active");
                hidePasswordIcon.classList.add("active");

                showPasswordIcon.classList.add("hidden");
                hidePasswordIcon.classList.remove("hidden");
            } else if (hidePasswordIcon.classList.contains("active")) {
                password.type = "password";
                repeatPassword.type = "password";

                hidePasswordIcon.classList.remove("active");
                showPasswordIcon.classList.add("active");

                hidePasswordIcon.classList.add("hidden");
                showPasswordIcon.classList.remove("hidden");
            }
        });
    }


    /**
     * Навешивание обработчиков событий формы
     */
    #addEventListeners = () => {
        const form = this.self
        this.#password = form.elements["password"]
        this.#repeatPassword = form.elements["repeat_password"]
        this.#submitBtn = form.elements["submit"]

        form.querySelector(".form__back").addEventListener("click", this.#prevCallback)

        this.#password.addEventListener("input", this.#passwordValidate)
        this.#repeatPassword.addEventListener("input", this.#passwordValidate)
        const togglePasswordIcons = this.self.querySelectorAll(".form__toggle-password");
        togglePasswordIcons.forEach((icon) => {
            icon.addEventListener("click", this.#togglePasswordVisibility);
        });

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
        console.log("registrationPassword form render");
        console.log(store)
        // eslint-disable-next-line no-undef
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

        this.#password.focus();
    }
}