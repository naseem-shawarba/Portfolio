<template>
	<div>
		<LayoutNotification ref="notification" />
		<form @submit.prevent="submitForm">
			<v-text-field
				label="Full Name"
				type="text"
				name="name"
				v-model="name"
				rounded
				variant="outlined"
				required
			/>
			<v-text-field
				label="Email"
				type="email"
				name="email"
				v-model="email"
				rounded
				variant="outlined"
				required
			/>
			<v-textarea
				label="Message"
				name="message"
				v-model="message"
				rounded
				variant="outlined"
				required
			></v-textarea>
			<!-- this siteKey is public and can be found in the Web3Forms documentation -->
			<vue-hcaptcha
				class="mb-0 not-verified"
				sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
				@verify="onVerify"
				:reCaptchaCompat="false"
				language="en"
			/>
			<v-btn
				type="submit"
				color="green"
				:disabled="isButtonDisabled"
				:append-icon="buttonIcon"
			>
				{{ buttonLabel }}
				<v-progress-circular
					v-if="showLoader"
					class="ml-3"
					color="grey-lighten-3"
					:size="25"
					indeterminate
				></v-progress-circular>
			</v-btn>
		</form>
	</div>
</template>

<script>
// this is a public key
const WEB3FORMS_ACCESS_KEY = "13381531-de02-4c84-a8e7-f357d22caf16";
export default {
	data() {
		return {
			name: "",
			email: "",
			message: "",
			sendingStatus: "idle", //states: idle, sending, sent, failed
			hCaptchaResponse: ""
		};
	},
	computed: {
		buttonLabel() {
			switch (this.sendingStatus) {
				case "idle":
					return "Send Message";
				case "sending":
					return "Sending";
				case "sent":
					return "Message Sent";
				case "failed":
					return "Failed to send";
			}
		},
		buttonIcon() {
			return this.sendingStatus === "sent" ? "mdi-check" : "";
		},
		isButtonDisabled() {
			return this.sendingStatus !== "idle";
		},
		showLoader() {
			return this.sendingStatus === "sending";
		}
	},
	methods: {
		async onVerify(token, ekey) {
			this.hCaptchaResponse = token;
		},
		async submitForm() {
			if (!this.hCaptchaResponse) {
				this.$refs.notification.showNotification(
					"Please complete the hCaptcha verification.",
					"orange"
				);
				return;
			}
			this.sendingStatus = "sending";
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					name: this.name,
					email: this.email,
					message: this.message,
					title: "ttlelelea",
					"h-captcha-response": this.hCaptchaResponse
				})
			});
			const result = await response.json();
			if (result.success) {
				this.$refs.notification.showNotification("Message sent.", "green");
				this.sendingStatus = "sent";
			} else {
				this.$refs.notification.showNotification(
					"Unable to send the message. Please try again later.",
					"orange"
				);
				this.sendingStatus = "failed";
			}
		}
	}
};
</script>
