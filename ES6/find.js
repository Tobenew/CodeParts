var users = [{
        name: 'Jill',
        age: 18
    },
    {
        name: 'Alex',
        age: 19
    },
    {
        name: 'Bill',
        age: 20
    }, {
        name: 'Jack',
        age: 20
    }
]
var user = users.find((item) => {
    return item.age === 20
})
// console.log(user)

var posts = [{
        id: 1,
        title: 'Node.js'
    },
    {
        id: 2,
        title: 'React.js'
    }
];
var comment = {
    postId: 1,
    content: 'hello world'
};

function postForComment(posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId
    })
}
console.log(postForComment(posts, comment))