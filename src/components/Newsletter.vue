<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline text-center">
            Newsletter Signup - Coming Soon!
          </v-card-title>
          <v-card-text class="text-center">
            Stay up-to-date with the latest resources for learning Generative AI by subscribing to our newsletter!
          </v-card-text>
            <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="Email"
                    required
                    :rules="emailRules"
                    v-model="email"
                    full-width
                  ></v-text-field>
                  <v-btn :loading="isLoading" :disabled="!valid && submitStatus !== 'success'" @click="submitForm" block class="mt-2 submit-btn" >
                    {{ buttonText }}
                  </v-btn>
            </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import config from "../../config";

export default {

  // ... rest of your component
  data: () => ({
    submitStatus: null, // null = initial state, 'success' = successful submission, 'error' = failed submission
    isLoading: false,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    showSnackbar: false,
  }),
  computed: {
    buttonText() {
      if (this.submitStatus === 'success') {
        return 'Thanks for subscribing!!';
      } else if (this.submitStatus === 'error') {
        return 'Unfortunately, there was an error :(';
      } else {
        return 'Subscribe';
      }
    },
  },

  methods: {
    async submitForm() {
      const isValid = await this.$refs.form.validate(); // Call and await the result of validate()

      if (isValid) {
        try {
          this.isLoading = true;
          const response = await fetch(config.googleFunctionPath, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.email, timestamp: new Date() })
          });

          if (!response.ok) {
            throw new Error('There was a problem submitting the form');
          }

          // console.log(response)

          this.$refs.form.reset();
          this.email = '';
          this.isLoading = false;
          this.submitStatus = 'success';
          // Show success message
        } catch (err) {
          console.error(err);
          this.submitStatus = 'error';
          // Show error message
        }
      }
    }
  }
};
</script>

<style scoped>
.submit-btn {
  /* add your custom styles here */
  /* background-color: #358e35; */
  background-image: linear-gradient(to right, #4eec88, #00e3ae);
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
}
</style>
