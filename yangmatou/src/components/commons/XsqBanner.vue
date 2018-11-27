<template>
	<div class="xsqbanner">
		<div class="xsq">
			<div class="bt-title">
				<span class="fa fa-clock-o">&nbsp;&nbsp;限时抢</span>
			</div>
			<div class="xsq-list">
				<a href="#" v-for="(item,index) in imgList" :key="index">
					<img :src="item.src" alt="" />
				</a>
			</div>
		</div>
		<!--===============================================================-->
		<div class="xsq">
			<div class="bt-title">
				<span class="fa fa-book">&nbsp;&nbsp;小编精选</span>
			</div>
			<div class="content goto-xbjx">
				<img src="http://pic1.ymatou.com/G02/M07/86/1B/CgvUBVvrzheAQTFDAAH0yCAeoYw144_15_8_w_o.jpg" alt="" />
				<div class="desc">
					<div class="text">
						<h2>CHANEL</h2>
						<a href="#">查看更多</a>
					</div>
				</div>
			</div>
		</div>
		<!--===================================================================-->
		<div class="xsq">
			<div class="bt-title">
				<span class="fa fa-shopping-bag">&nbsp;&nbsp;洋货集</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Xsqbanner',
		components:{},
		data(){
			return{
				imgList:[
				{
					src:'http://pic1.ymatou.com/G02/M04/9A/2C/CgvUBFvupWKAUEt3AAGKLsfeSaE33_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM0B%2f9C%2f1C%2fCgvUBVvupM6AVcZMAAGMf8hc_aw98_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M06/A3/7D/CgvUBVvvzTqAAzrhAAGGR2G5Qzk90_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM02%2fA1%2f7E%2fCgvUBFvvzc-AWW7HAAGIZAfZLEw17_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M02/95/9A/CgvUA1vupcCAZdPsAAGFVuOf1vw17_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM02%2f9C%2f1E%2fCgvUBVvupQ2AZR1OAAGHUWCBg3Q31_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M08/A1/76/CgvUBFvvzPiAA1kMAAEl99kny8002_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM0A%2f9C%2fFC%2fCgvUA1vvzReAfRaLAAEoILnkMCI63_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M00/98/3F/CgvUBFvuavSAXW0dAAFXrPxcR8477_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM02%2f93%2fAA%2fCgvUA1vuaxOAR3dKAAFZtLxf2k065_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M07/8D/4D/CgvUBFvtE66AHn8nAAHAkuqCLCI21_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM07%2f8F%2f4D%2fCgvUBVvtExqAIfvuAAHCWAh5C9E04_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M03/93/A4/CgvUA1vuapSAGXgEAAFLZSh9t8459_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM02%2f98%2f3A%2fCgvUBFvuanWAUgdWAAFNHUbUxG841_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M05/95/95/CgvUA1vupR6AWPPlAAEZ7QEBf9k37_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM05%2f95%2f95%2fCgvUA1vupR-ACsYQAAEf7qHZlQY52_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M04/95/92/CgvUA1vupO2AA9C9AAHaqQGTjg027_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM01%2f9C%2f15%2fCgvUBVvupDqAY7zrAAHcHjQIX5417_259_120_o.jpeg'
				},{
					src:'http://pic1.ymatou.com/G02/M01/9C/86/CgvUA1vvwGCAKRE8AAGJqaXdKME83_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG02%2fM07%2fA3%2f04%2fCgvUBVvvv62ANoCUAAGLvNKLgdY38_259_120_o.jpeg'
				}]
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.xsqbanner{
	width: 100%;
    overflow: hidden;
    background: #f5f5f5;
    .xsq{
    	width:100%;
    	.bt-title{
    	.w(375);
    	background:#eee;
    	span{
    		.fs(16);
    		display:block;
    		.padding(0,10,0,150);
    		.h(40);
    		.lh(40);
    		color: #646464;


    	}
    }
    .xsq-list{
    	width: 100%;
    	white-space: nowrap;
    	overflow: hidden;
    	overflow-x: auto;
        background: #fff;
        .padding(16,8,16,8);
        a{
        	.w(280);
        	.h(130);
        	display:inline-block;
        	position:relative;
        	.margin-right(8);
        	img{
        		width:100%;
        		height:100%;
				background-size: cover;
        	}
        }
        
    }
    .goto-xbjx{
    	width: 100%;
    	.padding(8,8,8,8);
    	background: #fff;
    	border:1px solid #fff;
    	position: relative;
    	overflow: hidden;
    	font-size: 0;

    	img{
    		display: inline-block;
    		.w(359);
    		.h(191);
    	}
    	.desc{
    		display: inline-block;
    		.w(359);
    		.h(191);
    		position: absolute;
		    .left(8);
		    .top(8);
		    background:rgba(0,0,0,0.6);
		    .text{
		    	width:80%;
		    	.h(50);
		    	position: absolute;
			    top: 50%;
			    left: 10%;
			    overflow: hidden;
			    transform: translate(0,-50%);
			    text-align: center;
     			color: #fff;
     			/*background: #42B983;*/
     			h2{
     				.fs(17);
     				box-sizing: border-box;
     			}
     			a{
     				.fs(13);
     				display: inline-block;
     				.padding(5,20,5,15);
     				color:#fff;
     				border:1px solid #fff;
     				border-radius: 15px;
     			}
     			::after{
     				content: '';
     				display: inline-block;
     				.w(6);
     				.h(6);
     				position: absolute;
     				top:75%;
     				border-width: 2px;
    				border-style: solid;
    				border-color: #fff #fff transparent transparent;
     				transform: translate(0,-50%) rotate(45deg);
     			}
		    }
    	}
    }
    
    
    
    }
}
	

</style>