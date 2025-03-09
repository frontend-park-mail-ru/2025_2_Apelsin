import { store } from '../../store';

export class RegistrationEmail {
    #parent;
    #email;
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
        return document.forms['registration_email'];
    }

    /**
     * Смена типа формы с поиска работы на поиск работника и наоборот
     */
    #switch = () => {
        store.auth.isEmployer = !store.auth.isEmployer;
        this.#under_link();
        this.#formNameRender();
    };

    /**
     * Рендер ссылки. Вызывается при смене типа формы
     */
    #under_link = () => {
        const companyLink = document.getElementById('i_need_users');
        const userLink = document.getElementById('i_need_job');
        if (store.auth.isEmployer) {
            companyLink.hidden = true;
            userLink.hidden = false;
        } else {
            companyLink.hidden = false;
            userLink.hidden = true;
        }
    };

    /**
     * Рендер имени формы. Вызывается при смене типа формы
     */
    #formNameRender = () => {
        const formName = this.self.querySelector('.form__name');
        if (store.auth.isEmployer) {
            formName.textContent = 'Поиск сотрудников';
        } else {
            formName.textContent = 'Поиск работы';
        }
    };

    /**
     * Валидация введенных данных
     * @returns {boolean}
     */
    #emailValidate = () => {
        const error = this.self.querySelector('.form__error');
        if (this.#email.validity.valid === false) {
            error.hidden = false;
            error.textContent = 'Напишите валидный адрес почты';
            this.#email.classList.add('form__input_error');
            return false;
        }
        if (this.#email.value.split('').indexOf('.') === -1) {
            error.hidden = false;
            error.textContent = 'Напишите валидный адрес почты';
            this.#email.classList.add('form__input_error');
            return false;
        }
        error.hidden = true;
        this.#email.classList.remove('form__input_error');
        return true;
    };

    /**
     * Навешивание обработчиков событий
     */
    #addEventListeners = () => {
        const form = this.self;
        this.#email = form.elements['email'];
        this.#submitBtn = form.elements['submit'];

        form.querySelector('.form__back').addEventListener('click', this.#prevCallback);

        document.querySelectorAll('.under_link').forEach((element) => {
            element.addEventListener('click', this.#switch);
        });
        this.#email.addEventListener('input', () => {
            this.#emailValidate();
        });
        this.#submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.#emailValidate() === true) {
                store.auth.email = this.#email.value;
                this.#nextCallback();
            }
        });
    };

    /**
     * Очистка
     */
    remove = () => {
        this.self.remove();
        document.querySelectorAll('.under_link').forEach((element) => {
            element.remove();
        });
    };

    /**
     * Рендеринг формы
     */
    render = () => {
        console.log('registrationEmail form render');
        console.log(store);
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates['registrationEmail/registrationEmail'];
        this.#parent.insertAdjacentHTML(
            'beforeend',
            template({
                email: store.auth.email,
            }),
        );
        this.#formNameRender();
        this.#under_link();
        this.#addEventListeners();

        this.#email.focus();
    };
}
