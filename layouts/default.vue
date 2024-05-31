<template>
	<v-layout>
		<v-main>
			<v-container :style="{ width: $vuetify.display.smAndDown ? '100%' : '80%'}" fluid>
				<slot />
			</v-container>
		</v-main>


		<LayoutFooter />
	</v-layout>
</template>