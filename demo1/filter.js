var post = { id: 4, title: 'javascript' }

var comments = [
    { postId: 4, content: 'Angular4' },
    { postId: 3, content: 'Vue.js' },
    { postId: 2, content: 'Node.js' },
    { postId: 4, content: 'React.js' },
]

function commentsForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id
    })
}
console.log(commentsForPost(post, comments));