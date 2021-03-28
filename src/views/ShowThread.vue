<template>
	<div v-if="thread" class="col-large push-top">
		<h1>{{ thread.title }}</h1>

		<post-list :posts="threadPosts" />
	</div>
	<div else class="col-full text-center">
		<h1>Tópico Não Encontrado</h1>
		<router-link :to="{ name: 'Home' }"
			>Ver alguns tópicos interessantes...</router-link
		>
	</div>
</template>

<script>
	import sourceData from "../data.json";
	import PostList from "../components/PostList.vue";

	export default {
		name: "ShowThread",
		components: {
			PostList
		},
		props: {
			id: {
				required: true,
				type: String
			}
		},
		data() {
			return {
				threads: sourceData.threads
			};
		},
		computed: {
			thread() {
				return this.threads.find(thread => thread.id === this.id);
			},
			threadPosts() {
				return this.posts.filter(post => post.threadId === this.id);
			}
		}
	};
</script>

