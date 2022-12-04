import svgCaptcha from 'svg-captcha'
import {getValue,setValue} from "../config/RdisConfig";

class PublicController {
    constructor() {
    }
    async getCaptcha(ctx){
        const body=ctx.request.query
        console.log(body.sid)
        const newCapcha=svgCaptcha.create({
            size: 6 ,
            ignoreChars: '0o1i' ,
            noise: Math.floor(Math.random()*5) ,  //4
            color: true ,
            background: '#e2e8e6' ,
            width:150,
            height:38
        })
        console.log(newCapcha)
        setValue(body.sid,newCapcha.text,10*60)
        getValue(body.sid).then((res)=>{
            console.log(res)
        })
        ctx.body={
            code:200,
            msg: newCapcha.data,
        }
    }
}

export  default  new PublicController()
