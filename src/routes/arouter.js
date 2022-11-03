const Router=require('koa-router')

const router=new Router()

const a=require('../api/A')

router.get('/a',a)

module.exports=router
