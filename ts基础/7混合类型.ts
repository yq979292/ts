// 问题：如何限制 对象中某个属性为函数？
// 例如：foo bar 为函数
interface dataItemConfig {
    name:string;
    age:number
}

interface objConfig {
    a:number;
    b:string;
    data:dataItemConfig[],
    // 函数名 foo
    // 形参a 为任意类型
    // 没有返回值
    foo(a:any):void;
    // bar属性为函数。形参str 为string类型 返回值为string 
    bar(str:string,b:number):string;
}


let obj:objConfig = {
    foo(a){},
    bar(a,b){
        return '123'
    },
    a:123,
    b:'234',
    data:[
        {
            name:'aaa',
            age:21
        }
    ]
}

console.log('===================混合类型',obj);
