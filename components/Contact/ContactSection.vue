<template>
	<section id="contact">
		<SectionTitle icon="📭" title="Contact" />
		<v-container>
			<v-row align="center" justify="center" no-gutters>
				<v-col xs="12" md="12" lg="5" xl="5" xxl="5">
					<v-card :elevation="0">
						<v-card-title class="font-weight-bold"
							>Dont be a stranger!👋</v-card-title
						>
						<v-card-text class="">Connect with me online</v-card-text>
						<v-card-actions class="pl-0">
							<div class="d-flex flex-wrap">
								<v-btn
									v-for="account in accounts"
									:key="account.title"
									:prepend-icon="account.icon"
									:href="account.link"
									target="_blank"
									class="mx-2"
									:text="account.title"
								/>
							</div>
						</v-card-actions>
					</v-card>
				</v-col>
				<v-col xs="12" md="12" lg="5" xl="5" xxl="5">
					<v-card class="ml-4" :elevation="0">
						<p class="mb-4 font-weight-light text-blue-grey-darken-3">
							Thanks for stopping by! I'm looking to join a new team of creative
							designers and developers. If you think we'd be a great fit, send
							me an email.
						</p>
						<ContactForm />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
<script>
export default {
	data() {
		return {
			accounts: [
				{
					title: "LinkedIn",
					icon: "mdi-linkedin",
					link: "https://www.linkedin.com/in/naseem-shawarba/"
				},
				{
					title: "GitHub",
					icon: "mdi-github",
					link: "https://github.com/naseem-shawarba"
				},
				{
					title: "E-Mail",
					icon: "mdi-email",
					link: "mailto:naseem.shawarba@gmail.com"
				}
			]
		};
	}
};
</script>
<style scoped>
a {
	text-decoration: none;
	color: black;
}
</style>
