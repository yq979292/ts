
// 如何给变量指定静态型?
//  变量名:静态类型
// 给变量指定静态类型的作用是什么?
// --> 限制了变量赋值的数据类型


// 基础静态类型: boolean string number any 数组

let bool: Boolean | string = true;
bool = '';
let str: string = '';
let num: number = 123;
// foo 变量的赋值为任意类型
let foo: any = 'fasdf'

// let arr:Array=[] // bug 

// 数组
// arr 赋值为数组 并且为空数组
// let arr:[]=[1,2,'33']  // bug

// 元组
// 对数组中每一个元素的类型惊醒了设置
// arr 赋值为数组,长度为3,数组中元素类型都有限制.
let arr: [number, number, string] = [1, 2, 'ddd'];

// 问题:如何设置数组中元素为 统一类型,长度不限制呢:
//  arr1赋值为数组,并且数组中所有元素都是number类型 ,长度不限
let arr1: number[] = [1, 2, 3, 4];

// 问题:如何指定数组中为任意类型长度不限制呢?
// arr2 赋值为数组,数组中元素为任意类型,数组长度不限
let arr2: any[] = [1, '', true];
console.log(arr2);


// 对象
// obj 赋值为对象类型,对象中key:value 键值对个数不受限制
let obj: {} = { a: 123 };
console.log(obj);


// 应用: 
// 1:服务器返回的json 数据,属性名 属性的赋值类型都是确定的.以及 键值对个数都是确定的

let data: {
    code: number | string, // code 赋值 number 类型或者 string
    data: [],   // 指定 data 赋值为空数组
    list: number[] // list 赋值为数组,数组长度不限,数组中元素为number
    prop:{a:number,b:any}[]
} = {
    code: '200',
    data: [],
    list: [1, 3, 4],
    prop:[
        {a:123,b:123}
    ]
    // a:''  // bug
}


// 实现:数组中对象 所有属性一致,赋值类型一致
let list:{
    production:string
    img:string
    price:number
}[] = [
    {
        production: '',
        img: "",
        price: 123,
        // a:'dfasf'  //bug
    }, {
        production: '',
        img: "",
        price: 123,
    }
]