export class Api {
    #baseUrl;

    /**
     * Конструктор класса api - взаимодействие с бекендом
     * @param {string} baseUrl - url бекенда
     */
    constructor(baseUrl = 'http://localhost:8000') {
        this.#baseUrl = baseUrl;
    }

    /**
     * Базовый метод отправки запроса
     * @param {string} endpoint
     * @param {string} method
     * @param {string|null} body
     * @returns
     */
    async request(endpoint, method = 'GET', body = null) {
        const url = this.#baseUrl + endpoint;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const init = {
            method,
            headers,
            mode: 'cors',
            credentials: 'include',
            body: body !== null ? JSON.stringify(body) : null,
        };
        console.log(url, init);
        try {
            const response = await fetch(url, init);
            if (!response.ok) {
                console.log('ERROR');
                //Получаем json ошибки если есть. Если тела нету то пишем заглушку
                const error = await response.json();
                throw new Error(error.message || 'Ошибка при выполнении запроса');
            }

            return response.json();
        } catch {
            console.log('NETWORK ERROR');
            throw new Error('Ошибка при выполнении запроса');
        }
    }

    /**
     * Возвращает список вакансий
     * @returns {Object}
     */
    async getVacancies() {
        return this.request('/vacancies', 'GET');
    }

    /**
     * Регистрация аккаунта
     * @param {Object} body
     * @returns {Object}
     */
    async register(body) {
        return this.request('/signup', 'POST', body);
    }

    /**
     * Проверка использования почты. Если почта занята, то возвращается 200, иначе 400
     * @param {string} email
     * @returns {null}
     */
    async getUser(email) {
        return this.request('/getUser', 'GET', { email });
    }

    /**
     * Авторзация аккаунта
     * @param {string} email
     * @param {string} password
     * @returns {Object}
     */
    async login(login, password) {
        return this.request('/signin', 'POST', { login, password });
    }

    /**
     * Проверка на авторизацию. Вызывается при загрузки страницы
     * @return {Object}
     */
    async auth() {
        return this.request('/auth', 'GET');
    }

    /**
     * Выход из аккаунта. Если нет ошибки значит успешно
     * @returns {null}
     */
    async logout() {
        return this.request('/logout', 'POST');
    }
}
