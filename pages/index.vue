<template>
	<div>
		<v-alert v-show="false" id="message" class="mb-2" color="orange" icon="mdi-hammer" theme="dark"
			title="Website Still Under Construction..." closable />
		<AboutMeSection v-show="false"/>
		<ProjectsSection />
		<ContactSection/>
	</div>

</template>