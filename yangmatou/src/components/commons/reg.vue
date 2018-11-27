<template>
	<div class="reg">
		<transition 
			appear
			enter-active-class="animated slideInDown"
			mode="out-in"
			>
			<div><h1>{{msg}}</h1><router-link to="/login">登录</router-link></div>
			</transition>
			<transition 
			appear
			enter-active-class="animated slideInUp"
			mode="out-in"
			>
			<div class="contain">
				<span :class="{'msg':true,'red':color,'green':!color}">{{tip1}}</span>
				<p><input type="text" @blur="checkname" v-model="us" name="user"  value=""placeholder="请输入邮箱或者手机号" /></p>
				<span :class="{'msg':true,'red':color,'green':!color}">{{tip2}}</span>
				<p><input type="text" name="code"  value=""placeholder="验证码" /><img src="../../img/create.jpg"/><i @click="rotate" :class="icon"></i></p>
				<span :class="{'msg':true,'red':color,'green':!color}">{{tip3}}</span>
				<p><input type="text" name="code" v-model="code" placeholder="获取验证码"/><input type="button" @click="getcode" value="获取验证码" /></p>
				<span :class="{'msg':true,'red':color,'green':!color}">{{tip4}}</span>
				<p><input v-model="pass" type="password" name="user" value=""placeholder="请输入登录密码" /></p>
				<p><span>密码强度条</span></p>
				<p><input type="checkbox"  value="" />我已经阅读并同意<a>《金融界网站服务协议》</a></p>
				<p @click="register">立即注册</p>
			</div>
			</transition>
	</div>
</template>

<script>
	export default{
		name:'Reg',
		data(){
			return{
				msg:'注册',
				icon:'fa fa-refresh',
				state:true,
				us:'',
				code:'',
				reg:false,
				tip1:'',
				tip2:'',
				tip3:'',
				tip4:'',
				color:false,
				pass:''
			}
		},
		methods:{
			register(){
				switch(''){
					case this.us:
					this.tip1='请输入用户名';
					this.color=true;
					break;
					case this.code:
					this.tip3='请输入验证码';
					this.color=true;
					break;
					case this.pass:
					this.tip4='请输入密码';
					this.color=true;
					break;
					default:
					this.$axios.post('http://127.0.0.1:3000/api/user/reg',{
						us:this.us,
						pass:this.pass,
						code:this.code
					}).then((res)=>{
						console.log(res);
					    window.localStorage.setItem('user',this.us);
						this.$router.replace({path:'/home',query:{
							user:this.us
						}})
					}).catch((err)=>{
						console.log(err)
					})
				}
			},
			getcode(){
				if(this.us!=''&&/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(this.us)){
				this.$axios.post('http://127.0.0.1:3000/api/user/getcode',{
					email:this.us
				})
				}else{
					this.tip1='请输入正确的用户名';
					this.color=true;
				}
			},
			checkname(){
				if(this.us!=''){
				this.$axios.post('http://127.0.0.1:3000/api/user/checkname',{
					us:this.us
				}).then((res)=>{
					this.tip1=res.data;
					this.color=res.data=='ok'?false:true;
				}).catch((err)=>{
					console.log(err)
				})}else{
					this.tip1='用户名不能为空';
					this.color=true;
				}
			},
			rotate(){
				this.state=!this.state;
				var that=this;
				this.icon=this.state?'fa fa-refresh':'fa fa-refresh fa-spin';
				setTimeout(function(){
						that.state=true;
						that.icon='fa fa-refresh';
						console.log(that.icon)
					},2000);
			}
		},
		created(){
		}
	}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
@import "../../styles/common/animate.css";
.reg{
div:nth-child(1){
			display: flex;
			align-items:center;
			border-bottom:0.02rem solid grey;
			h1{
				display:inline-block;
				flex: 5;
				.fs(23);
				text-align:center;
				.h(40);
				.lh(40);
				color:#666;
			}
			a{
				flex: 1;
				display:inline-block;
				text-align:center;
				.fs(15);
				.w(40);
				.h(30);
				border:0.02rem solid grey;
				box-sizing:border-box;
				.pre(border-radius,5);
				.lh(30);
				.margin(0,10,0,0);
			}
		}	
    .contain{
    	.padding(0,10,0,10);
    	 span{
    	 	.fs(15);
    	 }
    	 .msg{
    	 	display:block;
    	 	.fs(15);
    	 	.h(20);
    	 	.lh(20);
    	 }
    	 .red{
    	 	color: red;
    	 }
    	 .green{
    	 	color: green;
    	 }
    	p{
    		.fs(30);
    		input[name='user']{
    			.h(35);
    			.fs(18);
    			width:100%;
    			border:0.02rem solid gray;
    			box-sizing:border-box;
    		}
    		input[name='code']{
    			.h(35);
    			.fs(18);
    			width:50%;
    			border:0.02rem solid gray;
    			box-sizing:border-box;
    		}
    		input[type='button']{
    			width: 50%;
    			.h(35);
    			.bg-color(skyblue);
    			text-align:center;
    			color:white;
    			.fs(18);
    			box-sizing:border-box;
    			.pre(border-radius,5)
    		}
    		
    	}
    	p:nth-of-type(2){
    		img{
    				.h(35);
    				.margin(0,10,0,10);
    			}
    			i{
    				color: skyblue;
    				.fs(20);
    			}
    	}
    	p:nth-of-type(6){
    		.fs(15);
    		a{
    			color: deepskyblue;
    		}
    		margin-bottom:10px;
    	}
    	p:nth-of-type(7){
    		.bg-color(#e4393c);
    		color: white;text-align: center;
    		.fs(25);
    		.h(40);
    		.pre(border-radius,5);
    		.lh(40);
    	}
    }		
}
</style>