<template>
	<v-layout>
		<v-main>
			<v-container style="width:80%" fluid>
				<slot />
			</v-container>
		</v-main>

		<LayoutFooter />
	</v-layout>
</template>