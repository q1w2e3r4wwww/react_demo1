/*
* auhor:wangtao
* time:2019-1-4
* 关于nodejs服务，安装了nodemon插件，使用nodemon server.js启动服务后，每次更新内容
* 会自动刷新，不再需要通过ctrl + c 终止服务，再次使用 node server.js启动
*  */

const express = require('express');
const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
    console.log('mongo connect success')
})

// mongo里类似与mysql表有文档，字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
}))
// 在mongo里面创建数据
User.create({
    user:'wangtao',
    age:24
},function (err, doc) {
    if (!err) {
        console.log(doc)
    }else {
        console.log(err)
    }
})

// 新建app
const app = express();
// 访问根路径
app.get('/', function (req, res) {
    res.send('<h1>hello node express</h1>')
});

app.get('/data',function(req, res){
    User.findOne({user:'wangtao'},function(err,doc){
        res.json(doc)
    })
})

// 修改数据
User.update({'user':'wagntao'},{'$set':{age:22}},function (err, doc) {
    console.log(doc)
})

app.get('/find',function (req,res) {
    // 修改数据
    User.find({'user':'wangtao'},function (err, doc) {
        res.json(doc)
    })
})

// 监听端口
app.listen(8089,function () {
    console.log('node app start at 8089')
})