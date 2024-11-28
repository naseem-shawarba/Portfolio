<template>
	<section id="projects" style="min-height: 1200px">
		<SectionTitle title="🚀 Projects">
			<a :href="githubProfile" target="_blank" class="ml-4 titleAnchor"
				>Visit Github</a
			>
		</SectionTitle>
		<p
			class="position-absolute font-weight-thin font-italic text-medium-emphasis"
			style="margin-top: -4px; margin-left: 30px"
		>
			Total: {{ projects.length }}
		</p>
		<v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
			<v-tab
				v-for="tabItem in tabItems"
				:key="tabItem.name"
				:value="tabItem.name"
			>
				<v-icon :icon="tabItem.icon" class="mr-1"></v-icon>
				{{ tabItem.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab">
			<v-tabs-window-item
				class="mx-6 mt-3"
				v-for="tabItem in tabItems"
				:key="tabItem.name"
				:value="tabItem.name"
			>
				<ProjectsView :projects="categorizedProjects[tabItem.name]" />
			</v-tabs-window-item>
		</v-tabs-window>
	</section>
</template>
<script>
import projectsList from "~/data/projectsList.js";
export default {
	data: () => {
		return {
			tabItems: [
				{ name: "all", icon: "mdi-hexagon-multiple" },
				{ name: "personal", icon: "mdi-account" },
				{ name: "work", icon: "mdi-domain" }
			],
			tab: null,
			githubProfile: "https://github.com/naseem-shawarba",
			projects: projectsList
		};
	},
	computed: {
		categorizedProjects() {
			const personalProjects = this.projects.filter(
				(project) => project.type === "personal"
			);
			const workProjects = this.projects.filter(
				(project) => project.type === "work"
			);
			return {
				all: this.projects,
				personal: personalProjects,
				work: workProjects
			};
		}
	},
	mounted() {
		if (this.$route.query?.tab) {
			this.tab = this.$route.query.tab;
		}
		console.log(!this.$route.query.debug);
		if (process.env.NODE_ENV !== "development" && !this.$route.query.debug) {
			fetch("https://test-5a605-default-rtdb.firebaseio.com/projects.json")
				.then((response) => response.json())
				// .then(data => this.projects = data) // to-do add projects to database
				.catch((error) => console.error("Error:", error));
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
	color: blue;
}

.v-tab {
	text-transform: capitalize !important;
}
</style>
