import { JobCard } from "../jobCard/jobCard";
import "./jobCatalog.css"
import { store } from "../../store.js";
import { Api } from "../../api/api.js";

export class JobCatalog {
    #parent;
    #api;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
        this.#api = new Api()
    }

    /**
     * Получение объекта. Это ленивая переменная - значение вычисляется при вызове
     * @returns {HTMLElement}
     */
    get self() {
        return document.querySelector(".jobs_list")
    }

    /**
     * Очистка
     */
    remove = () => {
        this.self.remove();
    }

    /**
     * Рендеринг страницы
     */
    render = async () => {
        console.log("После перехода в catalog:", store);
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates["jobCatalog/jobCatalog"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template()
        );
        try {
            const jobs = await this.#api.getVacancies()
            for (const element of jobs) {
                const card = new JobCard(this.self, element)
                card.render()
            }
        } catch {
            this.self.textContent = "Ничего не найдено"
        }
    }
}