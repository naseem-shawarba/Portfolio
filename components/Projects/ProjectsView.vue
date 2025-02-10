<template>
	<div>
		<masonry-wall
			:items="projects.slice(0, visibleCount)"
			:ssr-columns="1"
			:gap="1"
			:min-columns="1"
			:max-columns="3"
		>
			<template #default="{ item }">
				<div>
					<ProjectCard :project="item" />
				</div>
			</template>
		</masonry-wall>

		<div class="d-flex flex-wrap justify-center">
			<div
				class="d-flex flex-column align-center justify-center text-center pa-4"
				style="width: 350px"
			>
				<div class="mb-2 text-body-1 font-weight-medium">
					<div v-if="type === 'all'">
						<p v-if="canShowMore">
							You have seen {{ visibleCount }} of all
							{{ projects.length }} projects
						</p>
						<p v-else>You have seen all {{ projects.length }} projects</p>
					</div>
					<div v-if="type === 'work' || type === 'personal'">
						<p v-if="canShowMore">
							You have seen {{ visibleCount }} of {{ projects.length }}
							{{ type }} projects
						</p>
						<p v-else>
							You have seen all {{ projects.length }} {{ type }} projects
						</p>
					</div>
				</div>

				<v-progress-linear
					class="mb-4"
					:model-value="progressValue"
					color="indigo-lighten-1"
					rounded
					:height="3"
				></v-progress-linear>
				<v-btn
					v-if="canShowMore"
					size="large"
					block
					color="indigo-lighten-1"
					variant="flat"
					@click="loadMore"
					>Show More</v-btn
				>
				<!-- <v-btn
        v-else-if="canShowLess"
					size="large"
					block
					color="primary"
					variant="flat"
					@click="loadLess"
					>Show Less</v-btn
				> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		projects: Array,
		type: String
	},
	data() {
		return {
			visibleCount: 3,
			incrementDecrementValue: 3
		};
	},
	created() {
		if (this.$vuetify.display.xsOnly) {
			this.visibleCount = 4;
			this.incrementDecrementValue = 4;
		} else {
			this.visibleCount = 6;
			this.incrementDecrementValue = 6;
		}
	},
	computed: {
		progressValue() {
			return (this.visibleCount / this.projects.length) * 100;
		},
		canShowMore() {
			return this.visibleCount < this.projects.length;
		},
		canShowLess() {
			return this.visibleCount > this.projects.length;
		}
	},
	methods: {
		loadMore() {
			this.visibleCount += this.incrementDecrementValue;
		},
		loadLess() {
			this.visibleCount -= this.incrementDecrementValue;
		}
	}
};
</script>

<style></style>
