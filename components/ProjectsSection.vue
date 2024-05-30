<template>
	<div>
		<SectionTitle title="🚀 Projects">
			<a :href="githubProfile" target="_blank" class="ml-4 titleAnchor">visit Github</a>
		</SectionTitle>
		<v-container fluid>
			<v-row no-gutters>
				<v-col v-for="project in projects" :key="project.title" xs="12" sm="12" md="6" lg="4">
					<ProjectCard :project="project" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	data: () => {
		return {
			githubProfile: "https://github.com/naseem-shawarba",
			projects: [
				{
					title: "Random Recipe Generator",
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