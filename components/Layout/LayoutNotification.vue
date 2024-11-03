<template>
	<div class="text-center">
		<v-snackbar
			v-model="snackbar"
			location="top"
			:timeout="-1"
			:color="`${color}-darken-1`"
		>
			{{ text }}
			<template v-slot:actions>
				<v-btn
					v-bind="attrs"
					@click="snackbar = false"
					icon="mdi-close"
					:color="`${color}-lighten-4`"
				/>
			</template>
			<v-progress-linear
				v-model="progressPercentage"
				:color="`${color}-lighten-2`"
			/>
		</v-snackbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			snackbar: false,
			text: "",
			color: "",
			timeout: 5000,
			progressPercentage: 100,
			interval: null,
			intervalDelay: 100
		};
	},
	methods: {
		/**
		 * Displays a notification with the specified text and color.
		 *
		 * @param {string} text - The message to display in the notification.
		 * @param {string} color - The base color of the notification.
		 */
		showNotification(text, color) {
			// Clear any existing interval to avoid multiple intervals running simultaneously.
			clearInterval(this.interval);

			// Initialize timeout and other properties.
			this.timeout = 0;
			this.text = text;
			this.color = color;

			// Set the duration of the notification based on the number of words in the text.
			// The duration is calculated as 2500 milliseconds per word.
			this.timeout = text.split(" ").length * 2500;

			// Set the initial value for the progress indicator.
			this.progressPercentage = 100;

			// Show the snackbar (notification).
			this.snackbar = true;

			// Set an interval to update the progress indicator and hide the notification when time runs out.
			this.interval = setInterval(() => {
				// If the progress indicator reaches 0, hide the notification and clear the interval.
				if (this.progressPercentage <= 0) {
					this.snackbar = false;
					clearInterval(this.interval);
				}

				// Decrease the progress indicator based on the interval delay and total timeout.
				this.progressPercentage -= (100 * this.intervalDelay) / this.timeout;
			}, this.intervalDelay);
		}
	}
};
</script>
