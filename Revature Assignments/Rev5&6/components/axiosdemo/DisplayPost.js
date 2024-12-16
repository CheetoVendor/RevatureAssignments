<<<<<<< HEAD
const DisplayPost = ({ posts }) => {
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>{post.id}</p>
                    </div>
                ))
            }
        </>
    )
}

=======
const DisplayPost = ({ posts }) => {
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </>
    )
}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default DisplayPost;