import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

export default defineNuxtPlugin(async (nuxtApp) => {
	nuxtApp.vueApp.component("vue-hcaptcha", VueHcaptcha);
});
