import axios from "axios";
import { useState } from "react";
const AxiosUpdate = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
        setValue("");
        const id = Number(value)
        axios.patch("http://localhost:8000/posts/" + id, {
            title: "UPDATED / PATCHED UWU"
        }).then((res) => {
            console.log(res);
        })


    }

    const [value, setValue] = useState("");

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>update</button>
            </form>
        </div>

    );
}

export default AxiosUpdate;