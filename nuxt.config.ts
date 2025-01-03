// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	css: [
		"vuetify/lib/styles/main.sass",
		"@mdi/font/css/materialdesignicons.min.css"
	],
	devtools: { enabled: true },
	//...
	build: {
		transpile: ["vuetify"]
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		"nuxt-particles"
		//...
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls
			}
		}
	},
	router: {
		options: {
			scrollBehaviorType: "smooth"
		}
	},
	components: [
		{
			path: "~/components",
			pathPrefix: false
		}
	]
});
