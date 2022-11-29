import {delValue,getHValue,getValue,setValue} from "./RdisConfig";

setValue('imooc','张王岩真帅')

getValue('imooc').then((res)=>{
    console.log('getValue'+res)
})
setValue('zhangwangyan',{name:'brain',age:30 })
getHValue('zhangwangyan').then((res)=>{
    console.log(res)
})

delValue()
