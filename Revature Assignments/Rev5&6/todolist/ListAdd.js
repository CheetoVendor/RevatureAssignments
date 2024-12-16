<<<<<<< HEAD
import { useState } from "react";

const ListAdd = ({ setList }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
        setList((prevList) => { return [...prevList, value] });
        setValue("");
    }
    const [value, setValue] = useState("");

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Add</button>
            </form>

        </>);

}

=======
import { useState } from "react";

const ListAdd = ({ setList }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
        setList((prevList) => { return [...prevList, value] });
        setValue("");
    }
    const [value, setValue] = useState("");

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Add</button>
            </form>

        </>);

}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default ListAdd;