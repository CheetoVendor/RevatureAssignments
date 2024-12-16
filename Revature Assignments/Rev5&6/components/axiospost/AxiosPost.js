import { useState } from "react";
import axios from "axios";
import PostInput from "./PostInput";
import AxiosGetDemo from "../axiosdemo/AxiosGetDemo";
import AxiosDelete from "../axiosdelete/AxiosDelete";
import AxiosUpdate from "../axiosupdate/AxiosUpdate";
const AxiosPost = () => {
    const [post, setPost] = useState()

    const addPost = () => {
        axios.post("http://localhost:8000/posts", {
            userId: 5,
            id: 5,
            title: "HERRO",
            body: "HERRO PREASE!"
        }).then((response) => {
            console.log(response);

        })
    }
    return (
        <div>
            <AxiosGetDemo />
            <PostInput addPost={addPost} />
            <AxiosDelete />
            <AxiosUpdate />
        </div>
    );
}

export default AxiosPost;