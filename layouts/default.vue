<template>
	<v-app dark>
		<v-main>
			<Nuxt />
		</v-main>

		<AppFooter :fixed="fixed" :brand-name="brandName" />
	</v-app>
</template>

<script>
import appConfig from '~~/config/appConfig'

export default {
	name: 'DefaultLayout',
	data() {
		return {
			fixed: false,
			brandName: appConfig.app.name,
		}
	},
}
</script>
