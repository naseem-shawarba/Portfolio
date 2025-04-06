<template>
	<div class="mb-2">
		<div style="display: flex; align-items: center" class="w-100">
			<div class="text-subtitle-1 mr-2">{{ icon }}</div>
			<div class="container mr-5">
				<h2 class="text-h5 font-weight-bold">{{ title }}</h2>
				<div class="subTitle"><slot name="subTitle"></slot></div>
			</div>

			<div style="flex: 1; border-bottom: 1px solid #000"></div>
			<slot name="link" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		icon: String
	}
};
</script>

<style scoped>
.container {
	position: relative;
}
.subTitle {
	position: absolute;
	bottom: 0px;
	left: 0px;
	transform: translate(0, 100%);
}
</style>
