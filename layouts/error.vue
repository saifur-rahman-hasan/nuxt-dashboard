<template>
	<v-app dark>
		<v-container fill-height fluid>
			<v-row
				align="center"
				justify="center">
				<v-col class="text-center">

					<v-icon size="120" class="mb-10" color="error">mdi-alert-circle</v-icon>

					<v-sheet class="mb-15">
						<h1 v-if="error.statusCode === 404" class="display-3 font-weight-thin">
							{{ pageNotFound }}
						</h1>

						<h1 v-else>
							{{ otherError }}
						</h1>
					</v-sheet>

					<v-sheet class="">
						<v-btn to="/" color="primary" class="px-10" large>
							<v-icon class="mr-3">mdi-transfer-left</v-icon>
							Back to Home page
						</v-btn>
					</v-sheet>


				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
export default {
	name: 'EmptyLayout',
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred',
		}
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError
		return {
			title,
		}
	},
}
</script>

<style scoped>
h1 {
	font-size: 20px;
}
</style>
