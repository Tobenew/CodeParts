### ES6数组方法

#### forEach

##### 1.遍历输出

```js
var colors = ['red','blue','green']
colors.forEach(function(color){
    console.log(color);
})
```

##### 2.遍历数组的值,并计算总和

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

##### 1.将数组A的值的两倍放入B数组中

```js
var numbers = [1,2,3];
var doubledNumbers=[];
var doubled = numbers.map(function(number){
    return number*2;
})
console.log(doubled)
```

##### 2.有一个对象数组(A),将A数组对象的某个属性的值存储到B数组里面

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

##### 1.假定有一个对象数组A,获取数组中指定类型的对象放到B数组中

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

##### 2.假定有一个对象数组(A),过滤掉不满足以下条件的对象

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

##### 3.假定有两个数组A B,根据A中的id值，过滤掉B数组中不符合的数据

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

#### find

##### 1.假定有一个对象数组A,找到符合条件的对象

缺点是:找到一个就跳出了,不会接着找下去

```js
var users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
]
var user = users.find((item)=>{
    return item.name === Jill
})
console.log(user)
```

##### 2.假定有一个对象数组A,根据指定对象的条件找到数组中符合条件的对象

```js
var posts = [
   {id:1,title:'Node.js'},
   {id:2,title:'React.js'}
];
var comment = {postId:1,content:'hello world'};
function postForComment((posts,comment)=>{
    return posts.find((post)=>{
        return post.id === comment.postId
    })
})
console.log(postForComment(posts,comment))
```

#### every&some

every:一假即假,找到一个假的,后面的就不会去遍历

some:一真即真

##### 1.计算对象数组中每个电脑的操作系统是否可用,大于16位操作系统表示可用,否则不可用

```js
var computers ={
    {name:"Apple",ram:16},
    {name:"IBM",ram:4},
    {name:"HW",ram:32},
}
var computerEvery = computers.every((computer)=>{
    return computer.ram>16
})
console.log(computerEvery)
```

##### 2.假如有一个注册页面,判断所有的input内容的长度是否大于0

```js
function Field(value){
    this.value = value
}
Field.prototype.validate = ()=>{
    return this.value.length > 0 
}
var username = new Field('Tobenew');
console.log(username.validate());
```

#### reduce

##### 1.计算数组中所有值的总和

需要注意的是sum要给初始值

```js
var numbers = [10,20,30]
var sumValue = numbers.reduce((sum,number)=>{
   return sum +number; 
},0)
console.log(sumValue)
```

##### 2.将数组对象中的某个属性值抽离到另外一个数组中

```js
var primaryColor = [
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
]
var colors = primaryColors.reduce((previous,primaryColor)=>{
    previous.push(primaryColor.color)
    return previous
},[])
console.log(colors)

```

##### 3.判断字符串里面的括号是否对称

```js
function balanceParens(string){
    return !string.split("").reduce((previous,char)=>{
        if(previous<0){return previous}
        if(char == "("){return ++previous}
        if(char == ")"){return --previous}
        return previous;
    },0)
}
console.log(balanceParens(")((()))"))
console.log(balanceParens("((()))"))
```

