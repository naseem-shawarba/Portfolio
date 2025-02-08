<template>
	<div class="badge pb-2 pl-3 pr-2 d-flex">
		<div class="curved-corner-topleft"></div>
		<div class="align-self-end">
			<v-img
				v-if="logoUrl"
				class="mr-n2"
				style="margin-top: 5px; margin-bottom: -1px"
				:src="logoUrl"
				width="35"
				height="20"
			></v-img>
			<div v-else>
				<v-icon
					v-if="type === 'work'"
					class="Mdi-Logo"
					icon="mdi-domain"
					:size="22"
				/>
				<v-icon
					v-else-if="type === 'personal'"
					class="Mdi-Logo"
					icon="mdi-account"
					:size="22"
				/>
				<v-icon v-else class="Mdi-Logo" icon="mdi-help" :size="22" />
			</div>
		</div>
		<div class="ml-1 name align-self-end">{{ contactName }}</div>
		<div class="curved-corner-bottomright"></div>
	</div>
</template>

<script>
export default {
	props: {
		type: String,
		contactName: String,
		logoUrl: String
	}
};
</script>

<style scoped>
.badge {
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	border-radius: 0 0 0 10px;
	position: relative;
}

.curved-corner-topleft {
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-100%, 0);
	height: 20px;
	width: 20px;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		border-top-right-radius: 50%;
		box-shadow: 10px 0 0 0 rgba(0, 0, 0, 0.5);
	}
}

.curved-corner-bottomright {
	overflow: hidden;
	position: absolute;
	bottom: 0;
	right: 0;
	transform: translate(0, 100%);
	height: 20px;
	width: 20px;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		border-top-right-radius: 50%;
		box-shadow: 10px 0 0 0 rgba(0, 0, 0, 0.5);
	}
}

.name {
	line-height: 24px;
	height: 18px;
}
.Mdi-Logo {
	padding-top: 5px;
}
</style>
