<template>
	<div>
		<v-footer :absolute="false" app>
			<!-- <div style="width:100%" >
				<v-btn v-for="account in accounts" :key="account.title" :icon="account.icon" :href="account.link"
					target="_blank" class="mx-4" color="white" />
			</div>
			<div style="border: 2px solid black;  width: 100%;" class="text-center">Copyright &copy; {{ new Date().getFullYear() }} Naseem Shawarba
			</div> -->
			<v-card width="100%" class="text-center" :elevation="0">
				<v-card-text>
					Copyright &copy; {{ new Date().getFullYear() }} Naseem Shawarba
				</v-card-text>
			</v-card>
		</v-footer>
	</div>
</template>
