<template>
	<v-hover v-slot="{ hover }">
		<v-card
			flat
			height="200"
			width="200"
			class="mb-1"
			:elevation="hover ? 5 : 0"
			:class="{ 'on-hover': hover }"
		>
			<v-card-text class="text-center">
				<v-avatar rounded="0" size="100">
					<v-img :src="app.icon" eager></v-img>
				</v-avatar>
			</v-card-text>

			<v-card-actions class="justify-center">
				<v-badge v-if="app.notificationCount" color="red" inline class="mr-1" :content="app.notificationCount"></v-badge>
				<div class="font-weight-bold">{{ app.name }}</div>
			</v-card-actions>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	name: 'AppItem',
	props: {
		app: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.v-card {
	cursor: pointer;
}
.v-card:not(.on-hover) {
	transition: all 0.2s ease-in-out;
	cursor: pointer;
}
</style>
