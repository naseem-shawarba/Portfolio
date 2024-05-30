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
			projects: []
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