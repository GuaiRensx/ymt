<template>
	<div class="My">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'My',
		components: {},
		data() {
			return {
				name: 'page My'
			}
		},
		components: {
			
		},
		created() {
			console.log(this.$store.state.login)
			if(this.$store.state.login) {
				this.$router.replace('/my/info')
			} else {
				this.$router.replace('/my/login')
			}

		}
	}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
</style>