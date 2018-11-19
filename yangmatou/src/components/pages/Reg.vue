<template>
	<div class="reg">
		<div class="reg-header">
			<router-link to="#"><i class="fa fa-angle-left " aria-hidden="true"></i></router-link>
			注册
		</div>
		<div class="reg-container">
			<input class="username" type="text" name="username" id="username" placeholder="输入邮箱">
			<div class="code">
				<div id="v_container""></div>
				<input type="text" id="code_input" value="" />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Reg',
		components: {},
		data() {
			return {
				name: 'page Reg'
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	body {
		height: 100%;
		.reg {
			background: #f1f1f1;
			.h(667);
			.reg-header {
				.h(44);
				background: #fff;
				.w(374.5);
				.fs(17);
				.lh(44);
				/*border-bottom: solid 1px red;*/
				color: #646464;
				text-align: center;
				position: relative;
				a {
					display: inline-block;
					position: absolute;
					.top(0);
					.left(13);
					.w(30);
					.h(44);
					i {
						color: #ccc;
						.w(20);
						.margin-top(10);
						.h(20);
						.fs(24);
						display: block;
					}
				}
			}
		}
	}
</style>