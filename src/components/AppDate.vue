<template>
	<span :title="humanFriendlyDate(timestamp)">
		{{ diffForHumans(timestamp) }}
	</span>
</template>

<script>
	import dayjs from "dayjs";
	import relativeTime from "dayjs/plugin/relativeTime";
	import localizedDate from "dayjs/plugin/localizedFormat";
	require("dayjs/locale/pt");

	dayjs.extend(relativeTime);
	dayjs.extend(localizedDate);

	export default {
		props: {
			timestamp: {
				required: true,
				type: Number
			}
		},
		methods: {
			diffForHumans() {
				return dayjs
					.unix(this.timestamp)
					.locale("pt")
					.fromNow();
			},
			humanFriendlyDate() {
				return dayjs
					.unix(this.timestamp)
					.locale("pt")
					.format("llll");
			}
		}
	};
</script>