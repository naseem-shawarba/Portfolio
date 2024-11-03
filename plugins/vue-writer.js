import VueWriter from "vue-writer";

// Vue.use(VueWriter);
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueWriter);
});
