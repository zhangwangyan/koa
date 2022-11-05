import  Router from 'koa-router'
import  demoController from '../api/publicController'

const router=new Router()

router.get('/demo',demoController.getCaptcha)

module.exports=router
