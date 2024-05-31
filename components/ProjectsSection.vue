<template>
	<div>
		<SectionTitle title="🚀 Projects">
			<a :href="githubProfile" target="_blank" class="ml-4 titleAnchor">visit Github</a>
		</SectionTitle>

		<v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
			<v-tab v-for="value in tabValues" :key="value" :value="value">{{ value }}</v-tab>
		</v-tabs>

		<v-tabs-window v-model="tab">
			<v-tabs-window-item v-for="value in tabValues" :key="value" :value="value">
				<v-container fluid>
					<v-row no-gutters>
						<v-col v-for="project in categorizedProjects[value]" :key="project.title" xs="12" sm="12" md="6" lg="4">
							<ProjectCard :project="project" />
						</v-col>
					</v-row>
				</v-container>
			</v-tabs-window-item>
			
		</v-tabs-window>
	</div>
</template>
<script>
export default {
	data: () => {
		return {
			tabValues: ['personal', 'work'],
			tab: null,
			githubProfile: "https://github.com/naseem-shawarba",
			projects: [
				{
					title: "Random Recipe Generator",
					type: "personal",
					description:
						"Random Recipe Generator is a responsive web application that generates random recipes.",
					screenshot:
						"https://github.com/naseem-shawarba/Projects_Screenshots/blob/main/Random_Recipe_Generator_V2/Screenshot1.png?raw=true",
					technologies: [
						"Vue.js 3", "Vuetify.js 3", "Pinia", "Nuxt.js 3", "JavaScript"
					],
					githubLink: "https://github.com/naseem-shawarba/Random_Recipe_Generator_V2",
					deployedWebsite: "https://random-recipe-generator-v2.web.app/"
				},
				{
					title: "Movie Look Up",
					type: "personal",
					description:
						"Movie Look Up is a responsive web app that provides information about movies",
					screenshot:
						"https://github.com/naseem-shawarba/Projects_Screenshots/blob/main/Movie_Look_Up/Screenshot1.png?raw=true",
					technologies: [
						"Vue.js 2", "Vuetify.js 2", "Vuex", "Nuxt.js 2", "JavaScript"
					],
					githubLink: "https://github.com/naseem-shawarba/Movie_Look_Up",
					deployedWebsite: "https://movie-look-up-55990.web.app/"
				},
				{
					title: "Petri Mensa",
					type: "personal",
					description:
						"Petri Mensa Game is an educational game based on Petri nets",
					screenshot:
						"https://pr.mtv.tu-berlin.de/screenshots/2022sose/petrimensa.png",
					technologies: [
						"Phaser.js", "TypeScript"
					],
					githubLink: "https://github.com/naseem-shawarba/Petri_Mensa_Game",
					deployedWebsite: "https://petri-mensa.web.app/"
				},

				{
					title: "SMTP Server Lite",
					type: "personal",
					description:
						"SMTP Server Lite is a lightweight implementation of an SMTP server in Java using NIO (Non-blocking I/O).",
					screenshot:
						"",
					technologies: [
						"Java", "Java-nio"
					],
					githubLink: "https://github.com/naseem-shawarba/SMTP_Server_Lite",
					deployedWebsite: ""
				},
				{
					title: "Sorting Algorithms Implementations",
					type: "personal",
					description:
						"About Exploring famous sorting algorithms by implementing them from scratch",
					screenshot:
						"",
					technologies: [
						"C"
					],
					githubLink: "https://github.com/naseem-shawarba/Sorting_Algorithms_Implementation",
					deployedWebsite: ""
				},
				{
					title: "Data Structures Implementations",
					type: "personal",
					description:
						"About Exploring famous data structures by implementing them from scratch",
					screenshot:
						"",
					technologies: [
						"C"
					],
					githubLink: "https://github.com/naseem-shawarba/Data_Structures_Implementation",
					deployedWebsite: ""
				},
				{
					title: "Dive Surf Enterprise Integration",
					type: "personal",
					description:
						"Integrate systems at Dive-Surf Co., enabling seamless order processing, billing, and inventory management through Enterprise Application Integration patterns.",
					screenshot:
						"",
					technologies: [
						"Java", "Apache Camel", "Apache ActiveMQ"
					],
					githubLink: "https://github.com/naseem-shawarba/Dive_Surf_Enterprise_Integration",
					deployedWebsite: ""
				},


			],
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