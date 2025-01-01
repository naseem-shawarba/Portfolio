<template>
	<div>
		<v-card
			:href="project.deployedWebsite"
			target="_blank"
			style="border-radius: 13px"
			class="position-relative"
			:class="['ma-3', { 'on-hover': isHovering }]"
			:elevation="isHovering ? 16 : 2"
			v-bind="props"
		>
			<div v-if="project.screenshot">
				<div>
					<img
						v-show="isImageLoaded"
						class="project-image"
						@load="isImageLoaded = true"
						:src="project.screenshot"
					/>
					<div v-if="!isImageLoaded" class="project-image">
						<div class="d-flex align-center justify-center fill-height">
							<v-progress-circular
								align-self-center
								color="grey-lighten-5"
								indeterminate
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="position-absolute top-0 right-0">
				<ProjectContactBadge
					:type="project.type"
					:contactName="project.contactName"
					:logoUrl="project.logoUrl"
				/>
			</div>
			<v-card-title class="pt-3 text-wrap">
				{{ project.title }}
			</v-card-title>
			<v-card-subtitle class="pb-0 text-wrap mb-2">
				{{ project.description }}
			</v-card-subtitle>
			<div class="d-flex flex-wrap mb-1">
				<v-chip
					v-for="technologie in project.technologies"
					:key="technologie"
					outlined
					class="ml-2 mb-2"
				>
					{{ technologie }}
				</v-chip>
				<span class="ml-auto mt-1">
					<v-btn
						v-if="project.deployedWebsite"
						class="ml-4 mr-2"
						flat
						density="compact"
						icon="mdi-open-in-new"
						:href="project.deployedWebsite"
						target="_blank"
					></v-btn>
					<v-btn
						v-if="project.DeployedAndroidApp"
						class="align-self-end mr-1"
						flat
						density="compact"
						icon="mdi-google-play"
						:href="project.DeployedAndroidApp"
						target="_blank"
					></v-btn>
					<v-btn
						v-if="project.githubLink"
						class="align-self-end mr-1"
						flat
						density="compact"
						icon="mdi-github"
						:href="project.githubLink"
						target="_blank"
					></v-btn>
				</span>
			</div>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		project: Object
	},
	data() {
		return {
			isImageLoaded: false
		};
	}
};
</script>

<style scoped>
.v-card {
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	box-shadow: none;
}

.v-card:hover {
	transform: scale(1.028);
	box-shadow: 0 0 7px 7px rgba(0, 0, 0, 0.12) !important;
}
.Company-Bagde {
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent */
	color: #fff; /* White text for contrast */
	border-radius: 0 0 0 5px;
}

.project-image {
	width: 100%;
	aspect-ratio: 2.13 / 1; /* Equivalent to height being 40% of the width */
}
</style>
