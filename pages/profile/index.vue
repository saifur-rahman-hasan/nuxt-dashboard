<template>
	<div>
		<h1 class="display-1 font-weight-light">
			{{ $auth.user.name.split(' ')[0] }}'s Profile
		</h1>
	</div>
</template>

<script>
export default {
	name: 'ProfileIndex',
	layout: 'dashboard',
	head: () => ({
		titleTemplate() {
			return `${this.$auth.user.name}'s profile`
		},
	}),
}
</script>

<style scoped></style>
