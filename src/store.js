const store = {
    page: '',
    auth: {
        isEmployer: false,
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companyAddress: '',
    },
    user: {
        authenticated: false,
        firstName: '',
        lastName: '',
    },
};

// Начальное состояние store
const defaultStore = {
    page: 'regEmail',
    auth: {
        type: '',
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companyAddress: '',
    },
    user: {
        authenticated: false,
        email: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companyAddress: '',
    },
};

/**
 * Сбрасывает стор. Вызывается при выходе
 */
function resetStore() {
    Object.assign(store, defaultStore);
}

export { store, resetStore };
