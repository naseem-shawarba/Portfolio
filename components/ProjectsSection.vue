<template>
	<section id="projects" style="min-height: 1200px;">
		<SectionTitle title="🚀 Projects">
			<a :href="githubProfile" target="_blank" class="ml-4 titleAnchor">Visit Github</a>
		</SectionTitle>
		<p class="position-absolute font-weight-thin font-italic text-medium-emphasis" style="margin-top: -4px; margin-left: 38px;"> Total: {{ projects.length }}</p>
		<v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
			<v-tab v-for="value in tabValues" :key="value" :value="value">{{ value }}</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab" >
			<v-tabs-window-item class="mx-6 mt-3" v-for="value in tabValues" :key="value" :value="value">
				<ProjectsView :projects="categorizedProjects[value]"/>
			</v-tabs-window-item>
		</v-tabs-window>
	</section>
</template>
<script>
import projectsList from '~/data/projectsList.js';
export default {

	data: () => {
		return {
			tabValues: ['personal', 'work'],
			tab: null,
			githubProfile: "https://github.com/naseem-shawarba",
			projects: projectsList,
		};
	},
	computed: {
		categorizedProjects() {
			const personalProjects = this.projects.filter((project) => project.type === "personal")
			const workProjects = this.projects.filter((project) => project.type === "work")
			return {
				"personal": personalProjects,
				"work": workProjects
			}
		},
	},
	mounted() {
		if (this.$route.query?.tab) {
			this.tab = this.$route.query.tab
		}
	}
};
</script>

<style scoped>
.titleAnchor {
	text-decoration: none;
	color: black;
	font-size: 15px;
}

.titleAnchor:hover {
	color: blue
}
</style>