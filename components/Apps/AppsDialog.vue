<template>
	<v-dialog v-model="showAppsDialog" fullscreen hide-overlay>
		<template #activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on">
				<v-icon>mdi-apps</v-icon>
			</v-btn>
		</template>

		<v-card loading loader-height="2">
			<v-toolbar rounded="0">
				<v-spacer></v-spacer>

				<v-text-field
					v-model="searchQuery"
					rounded
					filled
					dense
					autofocus
					single-line
					hide-details
					placeholder="Search your apps"
					prepend-inner-icon="mdi-magnify"
				></v-text-field>

				<v-spacer></v-spacer>

				<v-btn icon class="mx-3" @click="showAppsDialog = false">
					<v-icon class="red--text darken-4">mdi-close</v-icon>
				</v-btn>
			</v-toolbar>

			<v-card-text>
				<v-container class="mt-10">
					<v-row justify="center">
						<v-col v-for="app in apps" :key="app.id" cols="auto">
							<AppItem :app="app" />
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import APPS from '~/data/appsData'
import AppItem from '~/components/Apps/AppItem'

export default {
	name: 'AppsDialog',
	components: { AppItem },
	data: () => ({
		showAppsDialog: false,
		searchQuery: '',
		apps: APPS,
	}),
}
</script>

<style scoped></style>
