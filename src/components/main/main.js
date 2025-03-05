import { JobCard } from "../jobCard/jobCard";
import jobsMock from "./jobsMock";
import "./jobsCatalog.css"

export class Main {
    #parent;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     */
    constructor(parent) {
        this.#parent = parent;
    }

    get self() {
        return document.getElementById("job_catalog_page")
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
        const template = Handlebars.templates["main/main"]
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