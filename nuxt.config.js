export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "musicPlayer",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        // <script defer src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" integrity="sha384-9/D4ECZvKMVEJ9Bhr3ZnUAF+Ahlagp1cyPC7h5yDlZdXs4DQ/vRftzfd+2uFUuqS" crossorigin="anonymous"></script>
        script: [
            { src: "https://kit.fontawesome.com/1c8fa09728.js" },
            // { src: "https://use.fontawesome.com/releases/v5.15.1/js/all.js"}
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            },
            {
                rel: "stylesheet",
                href:
                    "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
                integrity:
                    "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",
                crossorigin: "anonymous"
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["@/assets/styles/main.css"],
    // script: ["https://use.fontawesome.com/releases/v5.15.1/js/all.js"],
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    // buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/content
        "@nuxt/content"
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    buildModules: ["@nuxtjs/fontawesome"],

    fontawesome: {
        icons: {
            solid: true
        }
    }
}
