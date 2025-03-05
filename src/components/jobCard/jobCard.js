import "./jobCard.css"

export class JobCard {
    #parent;
    #props;

    /**
     * Конструктор класса
     * @param parent {HTMLElement} - родительский элемент
     * @param props {struct} - данные для рендера
     */
    constructor(parent, props) {
        this.#parent = parent;
        this.#props = props;
    }

    get self() {
        return document.getElementById(p.id)
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
        const template = Handlebars.templates["jobCard/jobCard"]
        this.#parent.insertAdjacentHTML(
            "beforeend",
            template({
                'p': this.#props
            })
        );
    }
}