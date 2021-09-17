// 注意：
// 哪些是构造函数的静态方法
//  哪些实例对象的静态属性
//  哪些是构造数的原型属性

// 实例对象静态属性以及 构造函数的原型属性，----> 通过实例对象直接访问
// 构造函数静态方法只有构造函数访问。

// 注意 this
// 1: 构造函数中this  ---> 实例对象
// 2：原型属性中this  --->  实例独享
// 3: 构造函数静态方法中this ---> 构造函数本身
//    ---> 可以在执行时候通过bind call apply 更改this
// 4: 实例属性中this  ---->实例对象
function Animal(name) {
    // 实例化对象静态属性 name a
    this.name = name;
    this.a = '余';
    // 实例对象中静态方法
    this.say = function () {
        console.log('哈哈哈');
    }
    // 构造函数中的静态方法
    Animal.say = function () {
        console.log(this);
        console.log('构造函数的静态方法', this.a);
    }
}
// eat 是原型上方法
Animal.prototype.eat = function () {
    console.log(this);
    // alert(this.a)
}

let dog = new Animal('狗');

dog.eat.bind(dog)();
console.log(dog.name);
dog.say();
Animal.say.bind(dog)();
// Animal.prototype.eat()

console.log('-----------------分割-------------------------');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.a = '哈哈'
        this.say = function () {
            console.log('我是', this.name, '我的年纪是', this.age);
        }
    }
    // Person 类的静态方法
    static foo() {
        console.log('Person 类中的静态方法');
        console.log(this);
    }
    test = '实例对象的静态属性';
    eat() {
        console.log('类型 原型静态属性');
        console.log(this.a);
        // foo()  bug
        // this.foo() bug
        Person.foo.bind(this)();
    }

}

let wjh = new Person('王记豪', 12);
wjh.say()
console.log(wjh);
wjh.eat();
console.log(wjh.test);
// wjh.foo()
// Person.foo()

class child extends Person{
    constructor(name,age){
        super(name,age) // 注意：触发父类Person 中的constructor 
        this.child = 'child属性'
    }
    bar(){
        console.log('child a');
        Person.foo()
    }
}

let dlj = new child('达罗家',12)
console.log(dlj);
dlj.bar()
console.log('------------------------------');
dlj.eat()