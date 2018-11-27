<template>
   <div class="login">
   	<transition
   		appear
   		enter-active-class="animated slideInDown"
		mode="out-in"
		>
   	<div><h1>登录</h1><a@click='linkto'>{{msg}}</a></div>
   	</transition>
   	<transition
   		appear
   		enter-active-class="animated slideInUp"
		mode="out-in"
   		>
   	<div>
   		<input autocomplete="on" v-model="us" type="text" name="" placeholder="qq邮箱/手机号"/>
   		<input v-model="pass" type="password" name="" placeholder="密码" />
   		<p class="top" @click="logIn">登录</p>
   		<p>忘记密码可使用 <a>短信验证码登录</a>或<a>找回密码</a></p>
   		<div class="bot">
   				<div><p><span>其他登录方式</span></p><div></div></div>
   			<ul>
   				<li ><span class="fa fa-qq"></span></li>
   				<li ><span class="fa fa-weibo"></span></li>
   			</ul>
   		</div>
   	</div>
   	</transition>
  </div>
</template>

<script>
	export default{
	  name:'Login',
	  data(){
	    return	{
	    	msg:'注册',
	    	us:'',
	    	pass:'',
	    	isshow:true
	    }
	  },
	  methods:{
	  	logIn(){
	  		this.$axios.post('http://127.0.0.1:3000/api/user/checkname',{
	  			us:this.us,
	  			pass:this.pass
	  		}).then((res)=>{
	  		    window.localStorage.setItem('user',this.us);
						this.$router.replace({path:'/home',query:{
							user:this.us
						}})
	  			
	  		}).catch((err)=>{
	  			console.log(err);
	  		})
	  	},
	  	linkto(){
	  		this.$router.push({name:"Reg",params:{msg:this.msg}});
	  	}
	  },
	  created(){
	  }
	}
</script>

<style lang="less"scoped>
	@import url("../../styles/main.less");
	@import "../../styles/common/animate.css";
	.login{
		height:100%;
		div:nth-child(1){
			display: flex;
			align-items:center;
			height:100%;
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
		div:nth-child(2){
			.padding(15,10,10,10);
			input{
				.h(35);
				.w(355);
				.fs(20);
				border:0.03rem solid gray;
			}
			.top{
				.fs(20);color:#666;text-align:center;
				.margin(15,0,15,0);
				.pre(border-radius,5);
				.bg-color(#e4393c);
				color:white;
				.h(40);
				.lh(40);
			}
			p:nth-of-type(2){
				.fs(15);text-align:center;
				a{
					color: blue;
				}
			}
		}
		.bot{
			position:relative;
			.padding(20,10,30,10);
			bottom: 0px;
			left: 0px;
			right:0px;
			.h(200);
			div{
				.fs(25);
				border:none;
				position:relative;
				p:nth-of-type(1){
					color:#666;
					text-align:center;
					width: 100%;z-index: 2;
					span{
			         .padding(0,5,0,5);
			         display: inline-block;
			         .bg-color(#fff);
					}
				}
				div:nth-of-type(1){
				position: absolute;
				width:100%;
				top: 50%;
                padding:0;
				height: 1px;
				.bg-color(#dbdbdb);
			}
			}
			ul{
				display: flex;
				li{
					flex: 1;
					text-align: center;
					.h(100);
					.lh(100);
					span{
						display: inline-block;
						.w(50);
						.h(50);
						color: #fff;
						.fs(30);
						text-align: center;
						.pre(border-radius,50%);
						.lh(50);

					}
					span{
						.bg-color(skyblue)
					}
				}
				li:nth-child(2){
					span{
						.bg-color(#e4393c)
					}
				}
			}
				
			}
			
	}
</style>