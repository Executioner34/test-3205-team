class Http {
    controller: AbortController;
    baseURL: string;
    isPending: boolean;

    constructor() {
        this.controller = new AbortController();
        this.baseURL = import.meta.env.VITE_BASE_API_URL;
        this.isPending = false;
    }

    async get(path: string) {
        if (this.isPending) {
            this.controller.abort();
            this.controller = new AbortController();
        }

        this.isPending = true;

        try {
            const response = await fetch(this.baseURL + path, {
                method: 'GET',
                signal: this.controller.signal
            })
            this.isPending = false;
            return await response.json()
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}

export default new Http();
