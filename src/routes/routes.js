import combineRoutes  from 'koa-combine-routers'


import demoRouter  from './publicRouter'
import loginRouter from './loginRouter'


module.exports=combineRoutes(
    demoRouter,
    loginRouter
)
