import combineRoutes  from 'koa-combine-routers'


import demoRouter  from './DemoRouter'


module.exports=combineRoutes(
    demoRouter
)
