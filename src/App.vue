<template>
	<v-container id="app">
		<home-page />
		<router-view></router-view>
	</v-container>
</template>

<script>
	import HomePage from "@/components/HomePage.vue";

	export default {
		name: "App",
		components: {
			HomePage
		}
	};
</script>
<style>
	@import "assets/style.css";
</style>