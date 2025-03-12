import { store } from '../../store';
import { logger } from '../../utils/logger.js';
import { validateString } from '../../utils/inputValidation.js';

export class RegistrationCompany {
    #parent;
    #companyName;
    #companyAddress;
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
        return document.forms['registration_company'];
    }

    /**
     * Проверяет корректность названия компании
     * @param {string} name
     * @returns {boolean}
     */
    #isValidCompanyName = (name) => {
        const allowedChars = new Set(
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + // Латиница
                'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' + // Кириллица
                ' -', // Пробел и дефис
        );

        return validateString(name, { minLength: 2, allowedChars: allowedChars });
    };

    /**
     * Проверяет корректность адреса компании
     * @param {string} address
     * @returns {boolean}
     */
    #isValidCompanyAddress = (address) => {
        const allowedChars = new Set(
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + // Латиница
                'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' + // Кириллица
                '0123456789., -', // Цифры, запятые, точки, пробелы и дефис
        );

        return validateString(address, { minLength: 10, allowedChars: allowedChars });
    };

    /**
     * Валидация введенных данных
     * @returns {boolean}
     */
    #companyValidate = () => {
        return this.#companyNameValidate() && this.#companyAddressValidate();
    };

    /**
     * Валидация имени компании
     * @returns {boolean}
     */
    #companyNameValidate = () => {
        const error = this.self.querySelector('.form__error');
        if (!this.#isValidCompanyName(this.#companyName.value)) {
            error.hidden = false;
            error.textContent = 'Минимальная длина названия компании 2 символа';
            this.#companyName.classList.add('form__input_error');
            return false;
        } else {
            this.#companyName.classList.remove('form__input_error');
            this.#companyName.classList.add('form__valid');
            error.hidden = true;
        }
        return true;
    };

    /**
     * Валидация адреса компании
     * @returns {boolean}
     */
    #companyAddressValidate = () => {
        const error = this.self.querySelector('.form__error');
        if (!this.#isValidCompanyAddress(this.#companyAddress.value)) {
            error.hidden = false;
            error.textContent = 'Минимальная длина адреса компании 10 символов';
            this.#companyAddress.classList.add('form__input_error');
            return false;
        } else {
            this.#companyAddress.classList.remove('form__input_error');
            this.#companyAddress.classList.add('form__valid');
            error.hidden = true;
        }
        return true;
    };

    /**
     * Навешивание обработчиков событий
     */
    #addEventListeners = () => {
        const form = this.self;
        this.#companyAddress = form.elements['company_address'];
        this.#companyName = form.elements['company_name'];
        this.#submitBtn = form.elements['submit'];

        form.querySelector('.form__back').addEventListener('click', this.#prevCallback);
        this.#companyName.addEventListener('input', this.#companyNameValidate);
        this.#companyAddress.addEventListener('input', this.#companyAddressValidate);
        this.#submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.#companyValidate() === true) {
                store.auth.companyName = this.#companyName.value;
                store.auth.companyAddress = this.#companyAddress.value;
                this.#nextCallback();
            }
        });
    };

    /**
     * Очистка
     */
    remove = () => {
        logger.info('RegistrationCompany remove method called');
        this.self.remove();
    };

    /**
     * Рендеринг формы
     */
    render = () => {
        logger.info('RegistrationCompany render method called');
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates['registrationCompany/registrationCompany'];
        this.#parent.insertAdjacentHTML(
            'beforeend',
            template({
                companyName: store.auth.companyName,
                companyAddress: store.auth.companyAddress,
            }),
        );
        this.#addEventListeners();

        this.#companyName.focus();
    };
}
