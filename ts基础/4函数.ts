
// 1:形参类型
// 2:返回值
// 2.1 有无
// 2.2 有 返回什么类型

// 默认:
// 形参为任意类型
// 返回值可有可恶

// function foo(a,b){}
// foo(1,3);
// foo('1','3')

// 形参: a 为number类型  b 为number类型
// 返回值:必须有,类型为 number
function foo(a: number, b: number): number {
    return a + b
}
// foo('110',1) // bug

console.log(foo(1, 2));

// void 设置函数没有返回值
// b?:number 设置 b 参数是可有可无的
// ... 剩余参数。 es6中rest参数一样
function bar(a: string, b?: number, ...rest: string[]): void {
    // return '' // bug 
}


// 如何实则变量赋值为函数
let add: (a: number, b: number) => number
    = function (a: number, b: number): number {
        return a + b
    }

// 如何标记函数不能执行到最后
// :never 函数不会执行到最一行
function hellow3(): never {
    //    throw new Error(); // 场景1 有错误了；所以不可能执行完毕
    while (true) { }        //  场景2 一直为true 所以下面一直不可能执行完毕

    if (true) {
        console.log('123');

    }
}


// 2 函数形参为对象
interface itemConfig {
    name:string
    age:number
    img:string
}
interface dataConfig{
    code:number,
    list:itemConfig[]
}
interface ajaxConfig{
    url:string;
    method:string;
    success:(data:dataConfig)=>void;
    fail():void;
}
function ajax(options:ajaxConfig) {
    
}


// let zyfoo:(option:ajaxConfig)=>void=()=>{
//     return {
//         a:1,
//         b:'123+'
//     }
// }

// 形参为回调函数的设置

function bar1(calback:()=>string,caback2:(a:string)=>void){
    calback()
    caback2('1232')
}

bar1(function(){
    return ''
},function(){

})


// 函数重新