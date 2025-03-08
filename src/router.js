import { Auth } from "./components/auth/auth"
import { JobCatalog } from "./components/jobCatalog/jobCatalog"
import {Header} from "./components/header/header.js";
import { store } from "./store.js";

/**
 * Удаляет текущую страницу и рендерит указанную страницу.
 * @param {string} page - какую страницу рендерить
 */
export const router = async (page = 'catalog') => {
    const app = document.getElementById("app")
    console.log(store);
    app.innerHTML = ''

    const header = new Header(app);
    header.render();
    if (page === 'auth') {
        store.page = 'auth'
        const authPage = new Auth(app)
        authPage.render()
    }
    if (page === 'catalog') {
        store.page='catalog'
        const catalogPage = new JobCatalog(app)
        await catalogPage.render()
    }
}