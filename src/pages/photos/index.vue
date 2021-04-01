<template>
	<div class="page">
		<van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
		<van-button @click="pickImage">选择图片</van-button>
		<br />
		<br />
		<img v-if="img01" :src="img01" width="100px" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img01: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			
			// 获取图片
			pickImage() {
				if (!window.plus) return;

				plus.gallery.pick((url) => {
					this.img01 = url;
				}, (err) => {
					console.log(err);
				}, {
					filter: "image"
				});

			}
		},
		mounted() {
			
		}
	}
</script>

<style>
</style>
