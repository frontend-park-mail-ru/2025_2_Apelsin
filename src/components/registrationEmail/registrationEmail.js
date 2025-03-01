export class registrationEmail {
    #parent;
    #type;
    #email;
    #submitBtn;
    #nextCallback;
    #prevCallback;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     * @param type {string} - Тип регистрации
     * @param nextCallback {function} - Вызов следующей формы
     * @param prevCallback {function} - Вызов предыдущей формы
     */
    constructor(parent, type, nextCallback, prevCallback) {
        this.#parent = parent;
        this.#type = type;
        this.#nextCallback = nextCallback;
        this.#prevCallback = prevCallback;
    }

    get self() {
        return document.forms.registration_email
    }

    getType() {
        return this.#type
    }

    getEmail() {
        return this.#email
    }

    hide() {
        this.self.hidden = true
    }

    show() {
        this.self.hidden = false
    }

    #switch() {
        console.log("SWITCH")
        if (this.#type === "company") {
            this.#type = "user"
        } else {
            this.#type = "company"
        }
        this.#under_link();
    }

    #under_link() {
        const companyLink = document.getElementById("i_need_users")
        const userLink = document.getElementById("i_need_job")
        if (this.#type === "company") {
            companyLink.hidden = false
            userLink.hidden = true
        } else {
            companyLink.hidden = true
            userLink.hidden = false
        }
    }

    /**
     * Валидация введенных данных
     */
    #emailValidate() {
        console.log("EMAIL VALIDATE")
        const error = this.self.querySelector(".form__error")
        console.log(this.#email.value.split(""))
        if (this.#email.validity.valid === false) {
            error.hidden = false
            error.textContent = "Напишите валидный адрес почты"
            return false
        } 
        if (this.#email.value.split("").indexOf(".") === -1) {
            error.hidden = false
            error.textContent = "Напишите валидный адрес почты"
            return false
        }
        error.hidden = true
        this.#email.classList.add("form__valid")
        return true
    }

    #addEventListeners() {
        const form = this.self
        this.#email = form.elements["email"]
        this.#submitBtn = form.elements["submit"]

        console.log("EMAIL", this.#email)

        form.querySelector(".form__back").addEventListener("click", this.#prevCallback)
        document.querySelectorAll(".under_link").forEach(element => {
            element.addEventListener("click", this.#switch);
        })
        this.#email.addEventListener("input", () => {
            this.#emailValidate()
        })
        this.#submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.#emailValidate() === true) {
                this.#nextCallback()
            }
        })
    }

    /**
     * Очистка
     */
    remove() {
        this.self.remove();
        document.querySelectorAll("under_link").forEach(element, () => {
            element.remove();
        })
    }

    /**
     * Рендеринг формы
     */
    render() {
        console.log("register form render");

        const template = Handlebars.templates["registrationEmail/registrationEmail"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template(
                {
                    "type": this.#type,
                }
            )
        );
        this.#under_link();
        this.#addEventListeners();
    }
}