<template>
	<div class="col-full">
		<form @submit.prevent="save">
			<div class="form-group">
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					v-model="text"
					class="form-input"
				></textarea>
			</div>
			<div class="form-actions">
				<button class="btn-blue">Submeter Artigo</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				text: ""
			};
		},
		methods: {
			save() {
				const postId = "gggg" + Math.random();
				const date = Math.floor(Date.now() / 1000);
				const post = {
					id: postId,
					text: this.text,
					publishedAt: date,
					userId: "rpbB8C6ifrYmNDufMERWfQUoa202"
				};
				this.$emit("save", { post });
				this.text = "";
			}
		}
	};
</script>