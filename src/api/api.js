export class Api {
<<<<<<< Updated upstream
    #baseUrl;
=======
    #baseUrl
>>>>>>> Stashed changes

    /**
     * Конструктор класса api - взаимодействие с бекендом
     * @param {string} baseUrl - url бекенда
     */
    constructor(baseUrl = 'http://localhost:8000') {
        this.#baseUrl = baseUrl;
    }

    /**
     * Базовый метод отправки запроса
<<<<<<< Updated upstream
     * @param {string} endpoint
     * @param {string} method
     * @param {string|null} body
     * @returns
     */
    async request(endpoint, method = 'GET', body = null) {
        const url = this.#baseUrl + endpoint;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
=======
     * @param {string} endpoint 
     * @param {string} method 
     * @param {string|null} body 
     * @returns 
     */
    async request(endpoint, method = 'GET', body = null) {
        const url = this.#baseUrl + endpoint;
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
>>>>>>> Stashed changes

        const init = {
            method,
            headers,
            mode: 'cors',
            credentials: 'include',
            body: body !== null ? JSON.stringify(body) : null,
        };
<<<<<<< Updated upstream
        console.log(url, init);
        try {
            const response = await fetch(url, init);
            if (!response.ok) {
                console.log('ERROR');
=======
        console.log(url, init)
        try {
            const response = await fetch(url, init);
            if (!response.ok) {
                console.log("ERROR")
>>>>>>> Stashed changes
                //Получаем json ошибки если есть. Если тела нету то пишем заглушку
                const error = await response.json();
                throw new Error(error.message || 'Ошибка при выполнении запроса');
            }
<<<<<<< Updated upstream

            return response.json();
        } catch {
            console.log('NETWORK ERROR');
=======
    
            return response.json();
        } catch {
            console.log("NETWORK ERROR")
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
     * @param {Object} body
=======
     * @param {Object} body 
>>>>>>> Stashed changes
     * @returns {Object}
     */
    async register(body) {
        return this.request('/signup', 'POST', body);
    }

    /**
     * Проверка использования почты. Если почта занята, то возвращается 200, иначе 400
<<<<<<< Updated upstream
     * @param {string} email
     * @returns {null}
     */
    async getUser(email) {
        return this.request('/getUser', 'GET', { email });
=======
     * @param {string} email 
     * @returns {null}
     */
    async getUser(email) {
        return this.request('/check-email', 'POST', {email})
>>>>>>> Stashed changes
    }

    /**
     * Авторзация аккаунта
<<<<<<< Updated upstream
     * @param {string} email
     * @param {string} password
     * @returns {Object}
     */
    async login(login, password) {
        return this.request('/signin', 'POST', { login, password });
=======
     * @param {string} email 
     * @param {string} password 
     * @returns {Object}
     */
    async login(body) {
        return this.request('/signin', 'POST', body);
>>>>>>> Stashed changes
    }

    /**
     * Проверка на авторизацию. Вызывается при загрузки страницы
     * @return {Object}
     */
    async auth() {
<<<<<<< Updated upstream
        return this.request('/auth', 'GET');
=======
        return this.request('/auth', 'GET')
>>>>>>> Stashed changes
    }

    /**
     * Выход из аккаунта. Если нет ошибки значит успешно
     * @returns {null}
     */
    async logout() {
        return this.request('/logout', 'POST');
    }
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
