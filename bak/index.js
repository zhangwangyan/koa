const koa=require('koa')
const Router=require('koa-router')
const KoaBody=require('koa-body')
const cors=require('@koa/cors')
const json=require('koa-json')
const app=new koa();
const router=new Router();
//1、request method respond
//2、api url==>function router
//3、ctx,async;

router.prefix('/api')
router.get('/',ctx=>{
    const params=ctx.request.query
    //{
    //     "name": "desperado",
    //     "age": "28",
    //     "geneder": "保密",
    //     "email": "1780522776@163.om"
    // }


    ctx.body=params
})

router.get('/api',ctx=>{
    console.log(ctx)
    console.log("=====================================")
    console.log(ctx.request)
    ctx.body="软考准备"
})
router.get('/async',async(ctx)=>{
  let result=await new Promise((resolve => {
      setTimeout(function (){
          resolve('Hello world 2s laer')
      },2000)
  }))
    ctx.body=result
})

router.post('/post',async(ctx)=>{
     let {body} =ctx.request
    console.log(body)
    console.log(ctx.request)
    ctx.body={
         ...body
    }

})
app.use(KoaBody())
app.use(cors())
app.use(json({pretty:false,param:'pretty'}))
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
