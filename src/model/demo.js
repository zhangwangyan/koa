import  User from './test'

//增

const user={
    name:'desperado',
    age:30,
    email:'1780000000@163.com'
}

const insertMethods=async ()=>{
    const data=new User(user)
    const  result=await data.save()
    console.log(result);
}

//查

const findMethods=async ()=>{
    const  result=await User.find()
    console.log(result);
}


//改

const updateMethods=async ()=>{
    const  result=await User.updateOne({name:'desperado'},{email:'qq.com'})
    console.log(result);
}

updateMethods()


//删
const deleteMethods=async ()=>{
    const  result=await User.deleteOne({name:'desperado'})
    console.log(result);
}

deleteMethods()
