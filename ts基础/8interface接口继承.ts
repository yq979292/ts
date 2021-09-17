
interface a{
    c?:string
}

interface parent {
    b:number
}

// extends 继承
// children 中具有 parent,a 中所有的配置
// 一个接口继承了多个接口
interface children extends parent , a {
    a:string
}


let obj:children = {
    a:'123',
    b:123
}

// 只当obj2 静态类型为 children 
let obj2 = <children>{
    a:"123",
    b:123
}