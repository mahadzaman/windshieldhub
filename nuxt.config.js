import webpack from 'webpack';
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'wsvuetonuxt',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    rules: {
        'no-console': 'off',
    },

    // set env options
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css',
        '~/assets/css/global.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // {src: '~/plugins/jquery.js', ssr: false},
        // {src: '~/plugins/v-validate.js', ssr: false},
        // { src: '~/plugins/owl.carousel.js', mode: 'client' },
        { src: '~/plugins/maska.js', mode: 'client' },
        // { src: '~/plugins/vue-toaster.js' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    publicRuntimeConfig: {
        axios: {
            baseURL: 'http://dev.windshieldhub.com/order/vue',
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'nuxt-flatpickr',
        '@nuxtjs/toast',
    ],

    toast: {
        // https://github.com/shakee93/vue-toasted See options in this link <--Mahad
        position: 'top-center',
        /* register: [ // Register custom toasts
          {
            name: 'my-error',
            message: 'Oops...Something went wrong',
            options: {
              type: 'error'
            }
          }
        ] */
        duration: 10000,
        theme: 'bubble',
        singleton: true,
        action : {
            text : 'x',
            onClick : (e, toastObject) => {
                toastObject.goAway(0);
            }
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                // global modules
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ],
    },
};
