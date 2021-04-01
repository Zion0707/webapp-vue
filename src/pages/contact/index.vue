<template>
	<div class="page">
		<van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
		Contact
		<div class="box">box123</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		},
		mounted() {

		}
	}
</script>

<style>
</style>
