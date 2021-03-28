<template>
	<div class="forum-list">
		<h2 class="list-title">
			<routerLink v-if="categoryId" :to="{name: 'Category', params: {id: categoryId}}">{{ title }}</routerLink>
      <span v-else>Fóruns</span>
		</h2>
		<div class="forum-listing" v-for="forum in forums" :key="forum.id">
			<div class="forum-details">
				<routerLink
					:to="{ name: 'Forum', params: { id: forum.id } }"
					class="text-xlarge"
					>{{ forum.name }}</routerLink
				>
				<p>{{ forum.description }}</p>
			</div>
			<div class="threads-count">
				<p>
					<span class="count">{{ forum.threads?.length }}</span
					>{{ forumThreadsWord(forum) }}
				</p>
			</div>
			<div class="last-thread"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			forums: {
				required: true,
				type: Array
			},
      title: {
        type: String,
        default: 'Fóruns'
      },
      categoryId: {
        required: false,
        type: String 
      }
		},
		methods: {
			forumThreadsWord(forum) {
				if (forum.threads?.length) {
					return forum.threads?.length > 1 ? "tópicos." : "tópico.";
				} else {
					return "Sem tópicos.";
				}
			}
		}
	};
</script>