import { NavbarPlugin } from "bootstrap-vue";
import axios from "axios";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Deep State Defender VPN",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The ultimate combination of security tools. Keep your online activity anonymous and encrypted."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href:
      //     "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",       
      // }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/styles/custom.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "./plugins/vue-paginate.js", ssr: true }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-173896946-1"
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["bootstrap-vue/nuxt", { icons: true }],
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/wordpress",
        Allow: "/",
        Sitemap: "https://dsdefender.com/sitemap.xml"
      }
    ],
    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://dsdefender.com",
        sitemap: [{ path: "/sitemap.xml", routes: [] }]
      }
    ]
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  build: {
    babel: {
      compact: true
    },
    //debugging nuxt with VS
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    }
  },
  generate: {
    routes() {
      return axios
      .get("https://wp.dsdefender.com/wp-json/wp/v2/posts",{
        params: {
          context: "view",
          _embed: true,
          per_page: "50"
        }
      })
        .then(res => {
          return res.data.map(post => {
            return "/articles/" + post.slug;
          });
        });
    }
  }
};
