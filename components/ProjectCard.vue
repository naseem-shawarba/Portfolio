<template>
	<div>
		<v-hover v-slot="{ isHovering, props }" close-delay="150">
			<v-card style="border-radius:20px;" :class="['ma-3', { 'on-hover': isHovering }]"
				:elevation="isHovering ? 16 : 2" v-bind="props">
				<v-img class="mt-0 zoom-cursor" @click="dialog = !dialog" :src="project.screenshot"></v-img>

				<v-card-title class="pt-3 text-wrap">
					{{ project.title }}
					<!-- <a class="ml-1" href="https://github.com/naseem-shawarba/Petri_Mensa_Game" target="_blank">view</a> -->
				</v-card-title>
				<v-card-subtitle class="pb-0 text-wrap mb-2">
					{{ project.description }}
				</v-card-subtitle>
				<div class="d-flex mb-1">
					<span>
						<v-chip v-for="technologie in project.technologies" :key="technologie" outlined
							class="ml-2 mb-2">
							{{ technologie }}
						</v-chip>
					</span>
					<v-spacer></v-spacer>
					<v-btn v-if="project.deployedWebsite" class="align-self-end mb-1 mr-2" flat density="compact"
						icon="mdi-open-in-new" :href="project.deployedWebsite" target="_blank"></v-btn>
					<v-btn v-if="project.githubLink" class="align-self-end mb-1 mr-1" flat density="compact"
						icon="mdi-github" :href="project.githubLink" target="_blank"></v-btn>
				</div>
			</v-card>
		</v-hover>
		<v-dialog v-model="dialog" max-width="80%">
			<v-card>
				<v-img :src="project.screenshot" class="full-screen-img"></v-img>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: {
		project: Object
	},
	data() {
		return {
			dialog: false,
		};
	},
};
</script>

<style scoped>
.zoom-cursor {
	cursor: zoom-in;
}

.full-screen-img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>