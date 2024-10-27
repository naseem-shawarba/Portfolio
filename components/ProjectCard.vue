<template>
	<div>
		<v-hover v-slot="{ isHovering, props }" close-delay="150">
			<v-card :href="project.deployedWebsite" target="_blank" style="border-radius: 13px" class="position-relative"  :class="['ma-3', { 'on-hover': isHovering }]"
				:elevation="isHovering ? 16 : 2" v-bind="props">

				<div v-if="project.screenshot">
					<div>
						<v-img @load="isImageLoaded = true" :src="project.screenshot" />
					</div>
					<div v-if="!isImageLoaded" style="height: 27vh;">
						<div class="d-flex align-center justify-center fill-height">
							<v-progress-circular
								align-self-center
								color="grey-lighten-5"
								indeterminate
							/>
						</div>
					</div>
				</div>
				<div v-if="project.companyName" class="position-absolute top-0 right-0">
					<CompanyBadge :companyName="project.companyName" :companyLogoUrl="project.companyLogoUrl"/>
				</div>
				<v-card-title class="pt-3 text-wrap">
					{{ project.title }}
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
	},
	data(){
		return {
			isImageLoaded:false
		}
	}
};
</script>

<style scoped>
.v-card {
	transition: transform 0.3s ease;
}

.v-card:hover {
	transform: scale(1.02);
}
.Company-Bagde{
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent */
    color: #fff; /* White text for contrast */
	border-radius: 0 0 0 5px;
	
	
}


</style>
