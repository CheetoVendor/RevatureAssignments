<<<<<<< HEAD

const CommentDisplayComponent = ({ comments, handleDelete }) => {

    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        <h3>{comment.commentUsername}</h3>
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </div>
                ))


            }
        </>
    );
}

=======

const CommentDisplayComponent = ({ comments, handleDelete }) => {

    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        <h3>{comment.commentUsername}</h3>
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </div>
                ))


            }
        </>
    );
}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default CommentDisplayComponent;