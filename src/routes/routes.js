const combineRoutes=require('koa-combine-routers')


const aroutes=require('./arouter')
const brouter=require('./brouter')

module.exports=combineRoutes(
    aroutes,
    brouter
)
