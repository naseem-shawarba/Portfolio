<template>
	<div>
		<SectionTitle title="📭 Contact" />
		<v-container fluid>
			<v-row no-gutters class="mb-4">
				<v-col xs="12" sm="12" md="8" lg="10">
					<v-card :elevation="0">
						<v-card-title class="font-weight-bold">Sold Yet?🤙</v-card-title>
						<v-card-text class="">Thanks for stopping by! I'm currently looking to join a new team of
							creative designers and developers. If you think we might be a good fit for one another, send
							me an <a class="font-weight-bold" href="mailto:naseem.shawarba@gmail.com">email
								📧</a>.</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-col xs="12" sm="12" md="8" lg="10">
					<v-card :elevation="0">
						<v-card-title class="font-weight-bold">Dont be a stranger!👋</v-card-title>
						<v-card-text class="">Connect with me online</v-card-text>
						<v-card-actions class="pl-0">
							<v-btn v-for="account in accounts" :key="account.title" :prepend-icon="account.icon"
								:href="account.link" target="_blank" class="mx-2" :text="account.title"/>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			accounts: [
				{ title: "LinkedIn", icon: "mdi-linkedin", link: "https://www.linkedin.com/in/naseem-shawarba/" },
				{ title: "GitHub", icon: "mdi-github", link: "https://github.com/naseem-shawarba" },
				{ title: "E-Mail", icon: "mdi-email", link: "mailto:naseem.shawarba@gmail.com" }
			]
		}
	}
}
</script>
<style scoped>
a {
	text-decoration: none;
	color: black;
}
</style>