// 定义 interface 接口
interface itemConfig {
    prod: string
    price: number
    img: string
    // 设置 test 属性是可有可无属性
    test?: string

}

interface dataConfig {
    a: string;
    // 设置b属性为只读属性。
    readonly b: number;
    list: itemConfig[];
    // 属性名不确定，赋值类型不确定
    [propName: string]: any;

}


// 使用interface 接口
let arr: dataConfig[] = [
    {
        a: '',
        b: 123,
        list: [
            {
                prod: '', price: 123, img: '',
            }
        ],
        codefasdf: 1,
    }
]

// arr[0].b = 234; // bug 因为只读属性

// interface 与 type 区别
// 规则：能使用interface 绝不使用type