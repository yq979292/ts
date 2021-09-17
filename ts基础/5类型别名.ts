// 类型别名
type prodtion = {
    prod:string,
    price:number
    img:string
}

type dh = {
    a:string
    b:number
    // 引用prodtion的配置
    list:prodtion[]
}

// 引用dh类型别名配置
let arr:dh[] = [
    {
        a:'',
        b:123,
        list:[
            {prod:'',price:123,img:''}
        ]
    }
]