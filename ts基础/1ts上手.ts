// ts 的变量声明分为
// 1: 声明变量
// 2: 指定变量赋值的静态静态类型
// ----> 变量赋值为非指定的类型 报错

let a:number = 123;
a = 232;
// a = true;  // bug 提示信息
console.log(a);

// any b 变量为任意类型数据
let b:any ;
b = 123;
b = '123'