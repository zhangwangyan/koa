// const koa=require('koa')
// const helmet=require('koa-helmet')
// const router=require('./routes/routes')
// const statics=require('koa-static')
// const path=require('path')

import koa from 'koa'
import helmet  from 'koa-helmet'
import router from './routes/routes'
import statics from 'koa-static'
import path from 'path'
import koaBody from "koa-body";
import jsonnutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'


const app=new koa()
console.log("=====启动成功")
// app.use(helmet())
// console.log(__dirname)
// app.use(statics(path.join(__dirname,'../public')))
// app.use(router())
const middleware=compose([
    koaBody(),
    statics(path.join(__dirname,'../public')),
    cors(),
    jsonnutil({pretty:false,param:'pretty'}),
    helmet()

])
app.use(middleware)
app.use(router())
app.listen(3000)
