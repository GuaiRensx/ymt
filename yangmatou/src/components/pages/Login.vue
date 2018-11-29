<template>
	<div class="login">
		<div class="login-header">
			<router-link to="#"><i class="fa fa-angle-left " aria-hidden="true"></i></router-link>
			登录
		</div>
		<div class="login-con">
			<input class="username k" type="text" ref="username" name="username" id="username" placeholder="输入邮箱">
			<input class="password k" type="password" ref="pass" name="password" id="password" placeholder="输入登录密码">
			<label class="free-pass">
                <input type="checkbox" value="true" checked="" class="check-box">
                <span class="switch"></span>
                <span class="text">两周内免登陆</span>
            </label>
			<input @click="login" type="submit" value="登录" class="submit" id="submit">
			<div class="other-select">
				<router-link to="/my/Reg" class="faster-log fl">快速注册</router-link>
				<router-link to="#" class="find-ps fr">下载app找回密码</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import $ from 'jquery';
	import axios from 'axios'
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
	import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
	//	Vue.prototype.axios = axios;
	//	Vue.prototype.qs = qs;
	export default {
		name: 'Login',
		components: {},
		data() {
			return {
				name: 'page login'
			}
		},
		methods: {
			login() {
				let pass = this.$refs.pass.value;
				let username = this.$refs.username.value;
				if(pass && username != '') {
					axios({
						method: "post",
						url: "list/api/user/login",
						data: qs.stringify({
							username: username,
							pass: pass
						})
					}).then(res => {
						console.log(res);
						if(res.err == -1) {
							Toast({
								message: '该账户不存在或密码错误',
								position: 'top',
								duration: 2000
							});
						}else{
							window.localStorage.setItem('login',true);
							this.$router.replace('/my/Info')
							Toast({
								message: '登录成功',
								position: 'top',
								duration: 2000
							});
							
						}
					}).catch((err) => {
						cosole.log(err)
					})
				} else {
					Toast({
						message: '用户名或密码不能为空',
						position: 'top',
						duration: 2000
					});
				}
			}
		}
		}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
	body {
		height: 100%;
		.login {
			background: #f1f1f1;
			.h(667);
			.login-header {
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
			.login-con {
				.w(274.5);
				.padding-top(30);
				margin: 0 auto;
				.username {
					.w(264.5);
					/*.h(40);*/
					.padding(10, 0, 10, 10);
					.fs(14);
					.margin-bottom(10);
				}
				.password {
					.w(264.5);
					.fs(14);
					.padding(10, 0, 10, 10);
				}
				input::-webkit-input-placeholder {
					color: #d7d7d7;
				}
				.free-pass {
					display: block;
					.padding-top(10);
					.fs(14);
					color: #646464;
					.margin-bottom(30);
				}
				.submit {
					.fs(16);
					display: block;
					width: 100%;
					.h(40);
					background: #c33;
					color: #fff;
				}
				.other-select {
					.margin-top(10);
					width: 100%;
					.fs(12);
					a {
						text-decoration: underline;
						color: #9b9b9b;
					}
				}
			}
		}
	}
</style>