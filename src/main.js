import { Api } from './api/api';
import { router } from './router';
import { store } from './store';
import './style.css';

const api = new Api();
api.auth()
    .then((user) => {
        if ('email' in user) {
            store.user = user;
        }
    })
    .catch(() => {
        store.user.authenticated = false;
    })
    .finally(() => {
        router();
    });
