// public 默认值，公共的可以继承
// private 设置类的私有属性，只有在类内部才能访问
// protected 设置类的私有属性，只有在类以及之类内部才能访问
class Parent {
    p:string;
    constructor(p:string){
        this.p = p
    }
    p1 = '实例对象中属性';
    public say(){
        console.log('parent say run ');
        console.log(this.p);
        this.foo();
    }
    private foo(){
        console.log('parent foo run');
        
    }
    protected bar(){
        console.log('parent bar run');
    }

}

class child extends Parent {

    constructor(p:string){
        super(p)
    }
    tast(){
        console.log('---------------------分界线---------------------');
        console.log('child tast');
        // 子类内部触发 Parent类中的方法。
        this.say();
        // this.foo(); // foo 为Parent私有属性
        this.bar()        
    }
}

let c = new child('123');
console.log(c);

// child 类外部触发 parent中函数
c.say()
// c.foo();  // bug
// c.bar(); // bug

c.tast()
