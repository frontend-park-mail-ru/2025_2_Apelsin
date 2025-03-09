import { JobCard } from '../jobCard/jobCard';
import './jobCatalog.css';
import { Api } from '../../api/api.js';
import { logger } from '../../utils/logger.js';

export class JobCatalog {
    #parent;
    #api;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
        this.#api = new Api();
    }

    /**
     * Получение объекта. Это ленивая переменная - значение вычисляется при вызове
     * @returns {HTMLElement}
     */
    get self() {
        return document.querySelector('.jobs_list');
    }

    /**
     * Очистка
     */
    remove = () => {
        logger.info('JobCatalog remove method called');
        this.self.remove();
    };

    /**
     * Рендеринг страницы
     */
    render = async () => {
        logger.info('JobCatalog render method called');
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates['jobCatalog/jobCatalog'];
        this.#parent.insertAdjacentHTML('beforeend', template());
        try {
            const jobs = await this.#api.getVacancies();
            for (const element of jobs) {
                const card = new JobCard(this.self, element);
                card.render();
            }
        } catch {
            this.self.textContent = 'Ничего не найдено';
        }
    };
}
