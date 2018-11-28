//初始化服务器
//通过postman 测试
//安装配件   post数据接受插件
//数据存入文件
//逻辑处理



const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const user=require('./router/user.js')
const db=require('./dbconnect.js')
const cors=require('cors')

//post参数解析
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//cors解决跨域
app.use(cors({
    origin:['http://localhost:8080'],  //指定接收的地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))
//router
app.use('/api/user',user) 

app.listen(3000,()=>{
	console.log('服务器启动')
})
