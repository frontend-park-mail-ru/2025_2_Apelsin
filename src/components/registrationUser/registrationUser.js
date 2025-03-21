import { store } from '../../store';
import { logger } from '../../utils/logger.js';

export class RegistrationUser {
    #parent;
    #firstName;
    #lastName;
    #submitBtn;
    #nextCallback;
    #prevCallback;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     * @param nextCallback {function} - Вызов следующей формы
     * @param prevCallback {function} - Вызов предыдущей формы
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
        return document.forms['registration_user'];
    }

    /**
     * Валидация введенных данных
     * @returns {boolean}
     */
    #companyValidate = () => {
        return this.#firstNameValidate() && this.#lastNameValidate();
    };

    /**
     * Валидация имени
     * @returns {boolean}
     */
    #firstNameValidate = () => {
        const error = this.self.querySelector('.form__error');
        if (this.#firstName.validity.valid === false) {
            error.hidden = false;
            error.textContent = 'Введите имя';
            this.#firstName.classList.add('form__input_error');
            return false;
        } else {
            this.#firstName.classList.remove('form__input_error');
            this.#firstName.classList.add('form__valid');
            error.hidden = true;
        }
        return true;
    };

    /**
     * Валидация фамилии
     * @returns {boolean}
     */
    #lastNameValidate = () => {
        const error = this.self.querySelector('.form__error');
        if (this.#lastName.validity.valid === false) {
            error.hidden = false;
            error.textContent = 'Введите фамилию';
            this.#lastName.classList.add('form__input_error');
            return false;
        } else {
            this.#lastName.classList.remove('form__input_error');
            this.#lastName.classList.add('form__valid');
            error.hidden = true;
        }
        return true;
    };

    /**
     * Навешивание обработчиков событий
     */
    #addEventListeners = () => {
        const form = this.self;
        this.#firstName = form.elements['first_name'];
        this.#lastName = form.elements['last_name'];
        this.#submitBtn = form.elements['submit'];

        form.querySelector('.form__back').addEventListener('click', this.#prevCallback);
        this.#firstName.addEventListener('input', this.#firstNameValidate);
        this.#lastName.addEventListener('input', this.#lastNameValidate);
        this.#submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.#companyValidate() === true) {
                store.auth.firstName = this.#firstName.value;
                store.auth.lastName = this.#lastName.value;
                this.#nextCallback();
            }
        });
    };

    /**
     * Очистка
     */
    remove = () => {
        logger.info('RegistrationUser remove method called');
        this.self.remove();
    };

    /**
     * Рендеринг формы
     */
    render = () => {
        logger.info('RegistrationUser render method caller');
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates['registrationUser/registrationUser'];
        this.#parent.insertAdjacentHTML(
            'beforeend',
            template({
                firstName: store.auth.firstName,
                lastName: store.auth.lastName,
            }),
        );
        this.#addEventListeners();

        this.#firstName.focus();
    };
}
