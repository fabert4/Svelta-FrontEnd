import {sveltekit} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    server: {
        proxy: {
            '*': 'http://localhost:8080',
        },
    },
};

export default config;
