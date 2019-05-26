### ES6数组方法

#### forEach

##### 遍历输出

```js
var colors = ['red','blue','green']
colors.forEach(function(color){
    console.log(color);
})
```

##### 遍历数组的值,并计算总和

方式一:

```js

var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach(function(number){
    sum+=number;
})
```

方式二:

```js
var numbers = [1,2,3,4,5];
var sum = 0;
function adder(number){
    sum+=number
}
numbers.forEach(adder);
console.log(sum)
```

#### map

map方法必须要return,不然返回undefined

##### 将数组A的值的两倍放入B数组中

```js
var numbers = [1,2,3];
var doubledNumbers=[];
var doubled = numbers.map(function(number){
    return number*2;
})
console.log(doubled)
```

##### 有一个对象数组(A),将A数组对象的某个属性的值存储到B数组里面

```js
var cars=[
    {module:'Buick',price:'Cheap'},
    {module:'Bmw',price:'Expensive'},
]
var prices = cars.map(function(car){
    return car.prices
})
console.log(prices)
```

#### filter

##### 假定有一个对象数组A,获取数组中指定类型的对象放到B数组中

```js
var products=[
{name:'cacumber',type:'vegetable'},
{name:'banana',type:'fruit'},
{name:'celery',type:'vegetable'},
{name:'orange',type:'fruit'},
];
var filteredProducts = [];
filteredProducts = products.filter(product => {
    return product.type === 'fruit'
})
console.log(filteredProducts);
//{name:'banana',type:'fruit'},{name:'orange',type:'fruit'},  
```

##### 假定有一个对象数组(A),过滤掉不满足以下条件的对象

条件:蔬菜   数量大于0,价格小于10

```js
var products=[
{name:'cacumber',type:'vegetable',quantity:3,price:1},
{name:'banana',type:'fruit',quantity:0,price:1},
{name:'celery',type:'vegetable',quantity:0,price:10},
{name:'orange',type:'fruit',quantity:0,price:1},
];
var productChoose = products.filter((product)=>{
    return products.type === 'vegetable'
    && products.quantity > 0
    && products.price < 10
})

```

##### 假定有两个数组A B,根据A中的id值，过滤掉B数组中不符合的数据

```js
var post = {
    id: 4,
    title: 'JavaScript'
};
var comments = [{
        postId: 4,
        content: 'Angular4'
    },
    {
        postId: 3,
        content: 'Vue.js'
    },

    {
        postId: 2,
        content: 'Node.js'
    },

    {
        postId: 4,
        content: 'React.js'
    },
]

function commentsForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id
    })
}
console.log(commentsForPost(post, comments));
```

