import mongoose from 'mongoose'
import  config from './index'

//创建连接
mongoose.connect(config.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

//连接成功
mongoose.connection.on('connected',()=>{
    console.log("Moogoose 连接成功")
})
//连接异常
mongoose.connection.on('error',()=>{
    console.log("Moogoose 连接异常")
})
//断开连接
mongoose.connection.on('disconnected',()=>{
    console.log("Moogoose 断开连接")
})

export default mongoose
