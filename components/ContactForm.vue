<template>
  <div>
      <form @submit.prevent="submitForm">
          <v-text-field label="Full Name" type="text" name="name" v-model="name" rounded variant="outlined" required />
          <v-text-field label="Email" type="email" name="email" v-model="email" rounded variant="outlined" required />
          <v-textarea label="Message" name="message" v-model="message" rounded variant="outlined" required></v-textarea>
          <!-- this siteKey is public and can be found in the Web3Forms documentation -->
          <vue-hcaptcha
            class="mb-0 not-verified"
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            @verify="onVerify"
            :reCaptchaCompat="false"
            language="en"
          />
          <v-btn v-if="!messageSent" type="submit" color="green">Send Message</v-btn>
          <v-btn v-else color="green" prepend-icon="mdi-check-circle" disabled>Message Sent</v-btn>
      </form>
  </div>
</template>

<script>
// this is a public key
const WEB3FORMS_ACCESS_KEY =  "13381531-de02-4c84-a8e7-f357d22caf16"
export default {
  data() {
      return {
          name: "",
          email: "",
          message: "",
          messageSent:false,
          hCaptchaResponse:""
      };
  },
  methods: {
    async onVerify(token, ekey) {
      this.hCaptchaResponse = token;
    },
    async submitForm() {
      if(!this.hCaptchaResponse){
        alert("Please complete the hCaptcha verification.");
        return;
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
          title:"ttlelelea",
          "h-captcha-response":this.hCaptchaResponse
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message Sent")
        this.messageSent = true
      }else{
        alert("Please try again later")
      }
    },
  },
};
</script>