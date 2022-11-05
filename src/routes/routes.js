import combineRoutes  from 'koa-combine-routers'


import demoRouter  from './publicRouter'


module.exports=combineRoutes(
    demoRouter
)
