<template>
	<div>
		<v-alert id="message" class="mb-2" color="orange" icon="mdi-hammer" theme="dark"
			title="Website Still Under Construction..." closable />
		<AboutMeSection v-show="false" id="about-me"/>
		<ProjectsSection id="projects"/>
		<ContactSection id="contact"/>
	</div>

</template>