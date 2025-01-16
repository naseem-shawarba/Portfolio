<template>
	<div>
		<v-footer :absolute="false" app>
			<div style="text-align: center; width: 100%">
				<p>Copyright &copy; {{ currentYear }} Naseem Shawarba</p>
				<p>
					Built with
					<a href="https://vuejs.org/" target="_blank">Vue</a>,
					<a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a> and
					<a href="https://nuxt.com/" target="_blank">Nuxt</a>.
				</p>
			</div>
		</v-footer>
	</div>
</template>

<script>
export default {
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
};
</script>

<style scoped>
a {
	color: #8a2be2;
	text-decoration: none;
	transition: color 0.3s ease;
}

a:hover {
	color: #551a8b;
	text-decoration: underline;
}
</style>
