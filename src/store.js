const store = {
    page: 'regEmail',
    auth: {
        isEmployer: false,
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companyAddress: ''
    },
    user: {
        authenticated: false,
        firstName: '',
        lastName: '',
    }
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
        companyAddress: ''
    },
    user: {
        authenticated: false,
        firstName: '',
        lastName: '',
    }
};

function resetStore() {
    Object.assign(store, defaultStore);
}

export { store, resetStore };
