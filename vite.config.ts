import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact({
            devToolsEnabled: true,
            devtoolsInProd: false
        })
    ],
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, "index.html"),
                clicker: resolve(__dirname, "clicker.html"),
                404: resolve(__dirname, "404.html"),
            }
        }
    }
});