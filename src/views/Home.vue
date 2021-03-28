<template>
	<h1 class="push-top">Bem vindo/a ao Fórum da Agricultura</h1>
	<category-list :categories="categories" />
</template>

<script>
	import CategoryList from "../components/CategoryList.vue";
	export default {
		components: { CategoryList },
		computed: {
			categories() {
				return this.$store.state.categories;
			}
		}
	};
</script>

