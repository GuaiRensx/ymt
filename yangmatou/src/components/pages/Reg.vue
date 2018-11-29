<template>
	<div class="reg">
		<div class="reg-header">
			<router-link to="#"><i class="fa fa-angle-left " aria-hidden="true"></i></router-link>
			注册
		</div>
		<div class="reg-container">
			<fieldset id="">
				<input @keyup="checkname" ref="username" type="text" value="" placeholder="请输入邮箱" class="reg_input email" id="username">
				<input type="text" ref="code" value="" placeholder="请输入邮箱验证码" class=" reg_input code fl">
				<button @click="getcode()" :disabled="isDisable" class="fl btn_code" id="Time">{{content}}</button>
				<input type="password" value="" ref="pass" placeholder="请输入6位以上密码" class="reg_input pass">
				<div class="deal">注册即视为同意
					<a class="ymt-deal" href="script">《洋码头用户协议》</a>
				</div>
				<input @click="reg" type="button" value="注册" class="btn-reg">
			</fieldset>
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
		name: 'Reg',
		components: {},
		data() {
			return {
				us: true,
				content: '免费获取验证码',
				totalTime: 30,
				canClick: true,
				isDisable: false
			}
		},
		mounted() {
			//			this.getcode()
		},
		methods: {
			getcode() {
				if(this.us == false) {
					return console.log('错误')
				}
				this.isDisable = false;
				if(this.$refs.username.value != "" && /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(this.$refs.username.value)) {
					axios({
						method: "post",
						url: "list/api/user/getcode",
						data: qs.stringify({
							email: this.$refs.username.value
						})
					}).then(res => {
						if(res.err == 0) {
							if(!this.canClick) return //改动的是这两行代码
							this.canClick = false
							this.isDisable = false
							this.content = this.totalTime + 's后重新发送'
							let clock = window.setInterval(() => {
								this.totalTime--
									this.isDisable = true
								this.content = this.totalTime + 's后重新发送'
								if(this.totalTime < 0) {
									window.clearInterval(clock)
									this.content = '重新发送验证码'
									this.totalTime = 30
									this.canClick = true //这里重新开启
									this.isDisable = false
								}
							}, 1000)
						} else {
							Toast({
								message: '验证码发送错误',
								position: 'top',
								duration: 2000
							});
						}
					})
				} else {
					Toast({
						message: '该账户不合法',
						position: 'top',
						duration: 2000
					});
				}
			},
			checkname() {
				if(this.$refs.username.value != '') {
					axios({
						method: "post",
						url: "list/api/user/checkname",
						data: qs.stringify({
							username: this.$refs.username.value
						})
					}).then(res => {
						console.log(res);
						if(res.err == -1) {
//							console.log(res.data);
							Toast({
								message: '该账户已注册',
								position: 'top',
								duration: 2000
							});
						}
						this.us = res.err == -1 ? false : true;
					}).catch((err) => {
						console.log(err);
					})
				} else {
					Toast({
						message: '用户名不能为空',
						position: 'top',
						duration: 2000
					});
				}
			},
			reg() {
				console.log(111);
				let pass = this.$refs.pass.value;
				let username = this.$refs.username.value;
				let code = this.$refs.code.value;
				if(pass != '' && /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/.test(pass)) {
					axios({
						method: "post",
						url: "list/api/user/reg",
						data: qs.stringify({
							username: username,
							pass: pass,
							code: code
						})
					}).then(res => {
						console.log(res);
						if(res.err == -1) {
							Toast({
								message: '验证码错误',
								position: 'top',
								duration: 2000
							});
						} else {
							console.log(res)
							this.$router.replace('/my/Login')
							Toast({
								message: '注册成功',
								position: 'top',
								duration: 2000
							});
						}
					}).catch((err) => {
						console.log(res);
						if(res.err == -1) {
							Toast({
								message: '注册失败',
								position: 'top',
								duration: 2000
							});
						}
					})
				} else {
					Toast({
						message: '密码格式为：大于6位的字母+数字，字母+特殊字符，数字+特殊字符组合',
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
			.reg-container {
				.w(274.5);
				margin: 0 auto;
				.padding-top(20);
				/*border: 1px solid pink;*/
				.reg_input {
					.w(264.5);
					/*.h(40);*/
					.padding(10, 0, 10, 10);
					color: black;
					.fs(14);
					.margin-bottom(10);
				}
				input::-webkit-input-placeholder {
					color: #d7d7d7;
				}
				.code {
					.w(164.5);
				}
				.btn_code {
					.w(100);
					background: #c33;
					.h(36);
					text-align: center;
					color: #fff;
				}
				.btn-reg {
					.margin-top(20);
					width: 100%;
					.fs(16);
					.h(40);
					color: #fff;
					background: #c33;
				}
				.err {
					border: 1px red solid;
					color: red;
				}
				.deal {
					width: 100%;
					.fs(12);
					.h(30);
					.lh(30);
				}
			}
		}
	}
</style>