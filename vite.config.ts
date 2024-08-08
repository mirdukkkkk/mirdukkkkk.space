import {defineConfig} from 'vite';
import replace from '@rollup/plugin-replace';
import preact from '@preact/preset-vite';

import {resolve} from 'path';
import {readFileSync} from 'fs';

import variables from './src/styles/variables';
import config from './src/config';

function getVersion() {
    return JSON.parse(readFileSync('package.json').toString()).version;
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact({
            devToolsEnabled: true,
            devtoolsInProd: false
        }),
        replace({
            __NICKNAME__: config.nickname,
            __APP_VERSION__: getVersion(),
            preventAssignment: true
        })
    ],
    build: {
        rollupOptions: {
            treeshake: 'recommended',
            input: {
                home: resolve(__dirname, "index.html"),
                niko: resolve(__dirname, "niko.html"),
                skills: resolve(__dirname, "skills.html"),
                clicker: resolve(__dirname, "clicker.html"),
                404: resolve(__dirname, "404.html")
            },
            output: {
                manualChunks(id) {
                    if(/node_modules\/.*preact.*/.test(id)) {
                        return 'lib';
                    }
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_debugger: true,
                ecma: 2020,
                module: true,
                passes: 3,
                toplevel: true,
                unsafe: true,
                unsafe_arrows: true,
                unsafe_comps: true,
                unsafe_Function: true,
                unsafe_math: true,
                unsafe_symbols: true,
                unsafe_methods: true,
                unsafe_proto: true,
                unsafe_regexp: true,
                unsafe_undefined: true
            },
            format: {
                comments: false
            }
        },
        cssCodeSplit: true,
        modulePreload: true,
        sourcemap: true
    },
    css: {
        preprocessorOptions: {
            styl: {
                compress: true,
                additionalData: variables.map(([name, value]) =>
                    `$${name} = ${value}`
                ).join('\n')
            }
        }
    }
});