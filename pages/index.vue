<template>
	<div>
		<v-alert v-show="false" id="message" class="mb-2" color="orange" icon="mdi-hammer" theme="dark"
			title="Website Still Under Construction..." closable />
		<HeroSection />
		<div :style="{ width: $vuetify.display.smAndDown ? '100%' : '80%', margin: '0 auto'}" fluid>
			<AboutMeSection />
			<ProjectsSection />
			<ContactSection />
		</div>

	</div>
</template>
