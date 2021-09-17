// 1: 静态属性
// 2：三个关键字
//  public
//  
// 
// 3：继承


class Person {
    // constructor 中 this.xxx 静态类型的设置
    name:string;
    age:number;
    a:string;
    say:any;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
        this.a = '哈哈'
        this.say = function (str:string):void {
            console.log('我是', this.name, '我的年纪是', this.age);
        }
    }
    static foo() :void{
        console.log('Person 类中的静态方法');
        console.log(this);
    }
    test = '实例对象的静态属性';
    eat():void {
        console.log('类型 原型静态属性');
        console.log(this.a);

    }

}