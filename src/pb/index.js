import PocketBase from 'pocketbase';

export default {
    install: (app) => {
        app.config.globalProperties.$pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
    }
};