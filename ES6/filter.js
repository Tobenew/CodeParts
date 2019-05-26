var products = [{
        name: 'cacumber',
        type: 'vegetable'
    },
    {
        name: 'banana',
        type: 'fruit'
    },
    {
        name: 'celery',
        type: 'vegetable'
    },
    {
        name: 'orange',
        type: 'fruit'
    },
];

var filteredProducts = [];
filteredProducts = products.filter(product => {
    return product.type === 'fruit'
})
// console.log(filteredProducts);

var products = [{
        name: 'cacumber',
        type: 'vegetable',
        quantity: 3,
        price: 1
    },
    {
        name: 'banana',
        type: 'fruit',
        quantity: 0,
        price: 1
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 0,
        price: 10
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 0,
        price: 1
    },
];
var productChoose = products.filter((product) => {
    return product.type === 'vegetable' &&
        product.quantity > 0 &&
        product.price < 10
})
// console.log(productChoose);

// 假定有两个数组A B, 根据A中的id值， 过滤掉B数组中不符合的数据
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