<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<v-col cols="12" lg="3">
				<BrandLogo class="text-center mb-8" />

				<v-form :disabled="form.loading" @submit.prevent="userLogin">
					<v-card flat>
						<v-card-title>Account Login</v-card-title>
						<v-card-subtitle
							>Get access to your account.</v-card-subtitle
						>

						<v-card-text>
							<v-alert
								v-if="form.errors.has('error')"
								type="error"
								dismissible
								>{{ form.errors.get('error') }}</v-alert
							>

							<!-- Field: Email -->
							<v-text-field
								v-model="form.data.email"
								:rules="form.rules.email"
								label="Email"
								outlined
							></v-text-field>

							<!-- Field: Password -->
							<v-text-field
								v-model="form.data.password"
								:append-icon="
									showPassword ? 'mdi-eye' : 'mdi-eye-off'
								"
								:type="showPassword ? 'text' : 'password'"
								:rules="form.rules.password"
								label="Password"
								outlined
								@click:append="showPassword = !showPassword"
							></v-text-field>

							<!-- Field: Remember -->
							<div class="d-flex justify-space-between">
								<v-checkbox
									v-model="form.data.remember"
									label="Remember Me"
									class="mt-0 pt-0"
								></v-checkbox>

								<nuxt-link to="/auth/register"
									>Forgot Password?</nuxt-link
								>
							</div>

							<!-- Button: Submit -->
							<v-btn
								type="submit"
								block
								:disabled="form.loading"
								:loading="form.loading"
								large
								color="primary"
								>Login</v-btn
							>
						</v-card-text>

						<v-card-actions
							class="d-flex flex-column justify-center"
						>
							<div class="mb-3 text--disabled">OR</div>
							<nuxt-link to="/auth/register"
								>Create new account</nuxt-link
							>
						</v-card-actions>
					</v-card>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Errors from '~/helpers/Errors'

export default {
	name: 'AuthLogin',
	auth: 'guest',

	data: () => {
		return {
			showPassword: false,
			form: {
				loading: false,
				errors: new Errors(),
				rules: {
					email: [(value) => !!value || 'This field is required.'],
					password: [(value) => !!value || 'This field is required.'],
				},
				data: {
					email: 'saifur.dohs@gmail.com',
					password: 'password',
					remember: false,
				},
			},
		}
	},

	head: () => {
		return {
			title: 'Log In',
		}
	},

	methods: {
		userLogin() {
			this.loadingStart()

			this.$auth
				.loginWith('laravelJWT', {
					data: this.form.data,
				})
				.catch((err) => {
					this.form.errors.record(err.response.data)
					this.loadingStop()
				})
		},

		loadingStart() {
			this.form.loading = true
		},

		loadingStop() {
			this.form.loading = false
		},
	},
}
</script>

<style scoped></style>
