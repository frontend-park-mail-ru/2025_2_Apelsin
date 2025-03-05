import { auth } from "./components/auth/auth"
import { JobCatalog } from "./components/jobCatalog/jobCatalog"

const pages = [
    'auth',
    'catalog'
]

export const router = (page = 'catalog') => {
    const app = document.getElementById("app")
    app.innerHTML = ''
    if (page === 'auth') {
        const authPage = new auth(app)
        authPage.render()
    }
    if (page === 'catalog') {
        const catalogPage = new JobCatalog(app)
        catalogPage.render()
    }
}