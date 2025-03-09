import { router } from './router'
import './style.css'

const api = new Api()
api.auth().then((user) => {
    console.log(user)
    if (user.email !== undefined) {
        store.user = user
        store.user.authenticated = true
    }
}).catch(() => {
    store.user.authenticated = false
}).finally(() => {
    router()
})