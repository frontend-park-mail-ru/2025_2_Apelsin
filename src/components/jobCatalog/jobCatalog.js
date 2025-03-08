import { JobCard } from "../jobCard/jobCard";
import jobsMock from "./jobsMock";
import "./jobCatalog.css"

export class JobCatalog {
    #parent;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
    }

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
     * Рендеринг формы
     */
    render = () => {
        console.log("register form render");
        // eslint-disable-next-line no-undef
        const template = Handlebars.templates["jobCatalog/jobCatalog"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template()
        );
        for (const element of jobsMock) {
            const card = new JobCard(this.self, element)
            card.render()
        }
    }
}