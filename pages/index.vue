<template>
	<div>
		<v-alert
			v-show="false"
			id="message"
			class="mb-2"
			color="orange"
			icon="mdi-hammer"
			theme="dark"
			title="Website Still Under Construction..."
			closable
		/>
		<HeroSection />
		<div
			:style="{
				width: $vuetify.display.smAndDown ? '100%' : '80%',
				margin: '0 auto'
			}"
			fluid
		>
			<AboutMeSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		// ensures that the Vue instance has finished updating the DOM before you try to find and scroll to the section.
		this.$nextTick(() => {
			const hash = this.$route.hash;
			if (hash) {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView();
				}
			}
		});
	}
};
</script>
