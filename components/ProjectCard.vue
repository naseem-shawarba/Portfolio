<template>
	<div>
		<v-hover v-slot="{ isHovering, props }" close-delay="150">
			<v-card style="border-radius: 20px" :class="['ma-3', { 'on-hover': isHovering }]"
				:elevation="isHovering ? 16 : 2" v-bind="props">
				<v-img class="mt-0" :src="project.screenshot"></v-img>

				<v-card-title class="pt-3 text-wrap">
					{{ project.title }}
					<!-- <a class="ml-1" href="https://github.com/naseem-shawarba/Petri_Mensa_Game" target="_blank">view</a> -->
				</v-card-title>
				<v-card-subtitle class="pb-0 text-wrap mb-2">
					{{ project.description }}
				</v-card-subtitle>
				<div class="d-flex flex-wrap mb-1">
					<v-chip v-for="technologie in project.technologies" :key="technologie" outlined class="ml-2 mb-2">
						{{ technologie }}
					</v-chip>

					<span class="ml-auto mt-1">
						<v-btn v-if="project.deployedWebsite" class=" ml-4 mr-2" flat density="compact"
							icon="mdi-open-in-new" :href="project.deployedWebsite" target="_blank"></v-btn>
						<v-btn v-if="project.DeployedAndroidApp" class="align-self-end mr-1" flat density="compact"
							icon="mdi-google-play" :href="project.DeployedAndroidApp" target="_blank"></v-btn>
						<v-btn v-if="project.githubLink" class="align-self-end mr-1" flat density="compact"
							icon="mdi-github" :href="project.githubLink" target="_blank"></v-btn>
					</span>
				</div>
			</v-card>
		</v-hover>
	</div>
</template>

<script>
export default {
	props: {
		project: Object,
	}
};
</script>

<style scoped>

.full-screen-img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.v-card {
	transition: transform 0.3s ease;
}

.v-card:hover {
	transform: scale(1.02);
}
</style>
