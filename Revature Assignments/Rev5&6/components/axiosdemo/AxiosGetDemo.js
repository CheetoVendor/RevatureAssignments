<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then(res => {
                setPost(res.data)
            })
    }, [])
    return (
        <>
            <h2>Axios Demo</h2>
            {
                <DisplayPost posts={posts} />
            }
        </>
    );
}

=======
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then(res => {
                setPost(res.data)
            })
    }, [])
    return (
        <>
            <h2>Axios Demo</h2>
            {
                <DisplayPost posts={posts} />
            }
        </>
    );
}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default AxiosGetDemo;