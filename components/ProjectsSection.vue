<template>
	<div>
		<SectionTitle title="🚀 Projects">
			<a :href="githubProfile" target="_blank" class="ml-4 titleAnchor">Visit Github</a>
		</SectionTitle>

		<v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
			<v-tab v-for="value in tabValues" :key="value" :value="value">{{ value }}</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab">
			<v-tabs-window-item class="mx-6 mt-3" v-for="value in tabValues" :key="value" :value="value">
				<masonry-wall :items="categorizedProjects[value]" :ssr-columns="1" :gap="1" :max-columns="2">
					<template #default="{ item }">
						<div>
							<ProjectCard :project="item" />
						</div>
					</template>
				</masonry-wall>
			</v-tabs-window-item>

		</v-tabs-window>
	</div>
</template>
<script>
import projectsList from '~/data/projectsList.js';
export default {
	
	data: () => {
		return {
			tabValues: ['personal', 'work'],
			tab: null,
			githubProfile: "https://github.com/naseem-shawarba",
			projects: projectsList
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
		}
	},
	mounted() {
		if (this.$route.query?.tab) {
			this.tab = this.$route.query.tab
		}

	},
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