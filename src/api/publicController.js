import svgCaptcha from 'svg-captcha'

class PublicController {
    constructor() {
    }
    async getCaptcha(ctx){
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
        ctx.body={
            code:200,
            msg: newCapcha.data,
        }
    }
}

export  default  new PublicController()
