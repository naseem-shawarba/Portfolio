<template>
	<div>
		<masonry-wall
			:items="projects"
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
	</div>
</template>

<script>
export default {
	props: {
		projects: Array
	}
};
</script>

<style></style>
