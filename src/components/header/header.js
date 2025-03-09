import { store, resetStore } from '../../store';
import './header.css';
import { router } from '../../router.js';
import { Api } from '../../api/api.js';
import { logger } from '../../utils/logger.js';

export class Header {
    #parent;
    #dropdownVisible = false;
    #loginButton;
    #logoutButton;
    #profileIcon;
    #dropdownItems;
    #logoLink;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
    }

    /**
     * Получение объекта. Это ленивая переменная - значение вычисляется при вызове
     * @returns {HTMLElement}
     */
    get self() {
        return document.querySelector('.header');
    }

    /**
     * Очистка
     */
    remove = () => {
        logger.info('Header remove method called');
        this.self.remove();
    };

    /**
     * Обработчик клика на документе для закрытия дропдауна
     */
    handleDocumentClick = (e) => {
        const profileElement = this.self.querySelector('.header__profile');
        if (profileElement && !profileElement.contains(e.target) && this.#dropdownVisible) {
            this.toggleDropdown(false);
        }
    };

    /**
     * Переключение видимости дропдауна
     * @param {boolean|undefined} state - принудительное состояние (true - показать, false - скрыть)
     */
    toggleDropdown = (state) => {
        const dropdown = this.self.querySelector('.header__dropdown');
        if (!dropdown) return;

        if (state !== undefined) {
            this.#dropdownVisible = state;
        } else {
            this.#dropdownVisible = !this.#dropdownVisible;
        }

        dropdown.style.display = this.#dropdownVisible ? 'block' : 'none';
    };

    /**
     * Обработчики кнопок
     */
    addEventListeners = () => {
        this.#loginButton = this.self.querySelector('.header__login');
        this.#logoutButton = this.self.querySelector('.header__logout');
        this.#profileIcon = this.self.querySelector('.header__profile-icon');
        this.#dropdownItems = this.self.querySelectorAll('.header__dropdown__item');
        this.#logoLink = this.self.querySelector('.header__name');

        this.#logoLink.addEventListener('click', () => {
            router('catalog');
        });

        if (this.#loginButton) {
            this.#loginButton.addEventListener('click', () => {
                router('auth');
            });
        }

        if (this.#logoutButton) {
            this.#logoutButton.addEventListener('click', () => {
                router('catalog');
            });
        }

        if (this.#profileIcon) {
            this.#profileIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
        }

        this.#dropdownItems.forEach((item) => {
            if (item.classList.contains('header__dropdown__item--logout')) {
                item.addEventListener('click', () => {
                    this.toggleDropdown(false);
                    const api = new Api();
                    api.logout()
                        .then(() => {
                            resetStore();
                            router('catalog');
                        })
                        .catch(() => {
                            logger.error('Error occured while logging out');
                        });
                });
            } else {
                item.addEventListener('click', () => {
                    // тут пока заглушка
                    logger.info(`Clicked profile dropdown item: ${item.textContent}`);
                    this.toggleDropdown(false);
                });
            }
        });
        if (store.page === '') {
            document.addEventListener('click', this.handleDocumentClick);
        }
    };

    /**
     * Рендеринг компонента
     */
    render = () => {
        logger.info('Header render method called');
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates['header/header'];
        this.#parent.insertAdjacentHTML('beforeend', template(store));
        this.addEventListeners();
    };
}
