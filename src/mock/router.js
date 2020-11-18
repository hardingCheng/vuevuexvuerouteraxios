const express = require('express');
const router = express();
const user = require('../mock/user.json')
var Mock = require('mockjs')


router.post('/login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    // res.send(user.filter((item) => {
    //     return item && item.username === username;
    // }))
    if(username == "iwen" && password == "123456"){
        res.send({
            code:200,
            msg:"success",
            username:"iwen",
            token:"21312312321312321weqweqwewqd"
        })
    }else{
        res.send({
            code:20001,
            msg:'error',
            tip:'用户名或密码错误'
        })
    }
})

router.get('/list',(req,res) => {
    //先判断token是否存在，并且token是正确的
    const token = req.headers.authorization;
    if(token == "21312312321312321weqweqwewqd") {
        res.send(Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        }))
    }else{
        res.send({
            msg:"token验证失败"
        })
    }
    
})


module.exports = router;