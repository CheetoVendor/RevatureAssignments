import axios from "axios";
import { useState } from "react";

const AxiosDelete = () => {
    const [value, setValue] = useState(5);

    const deletePost = (e) => {
        e.preventDefault();
        const postId = Number(value)
        console.log(value);

        axios.delete("http://localhost:8000/posts/" + postId)
            .then((result) => {
                console.log(result);
                setValue("")
            });
    }

    return (
        <div>
            <h3>Enter post id to delete</h3>

            <form onSubmit={deletePost}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Delete Last</button>
            </form>
        </div>
    );
}

export default AxiosDelete;