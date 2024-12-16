const PostInput = ({ addPost }) => {
    return (
        <div>
            <form onSubmit={addPost}>
                <button>Add Post</button>
            </form>
        </div>
    );
}

export default PostInput;