<<<<<<< HEAD
import { useState } from "react"
import ListAdd from "./ListAdd";
import ListCount from "./ListCount";
import ListShow from "./ListShow";

const ToDoList = () => {
    const [list, setList] = useState([])
    return (
        <div>
            <h3>To Do List</h3>
            <ListShow list={list} />
            <ListAdd setList={setList} />
            <ListCount list={list} />
        </div>
    );
}

export default ToDoList;
// SPLIT THE ASSIGNMENT
// put state to the immediate and sister (lifting state)
=======
import { useState } from "react"
import ListAdd from "./ListAdd";
import ListCount from "./ListCount";
import ListShow from "./ListShow";

const ToDoList = () => {
    const [list, setList] = useState([])
    return (
        <div>
            <h3>To Do List</h3>
            <ListShow list={list} />
            <ListAdd setList={setList} />
            <ListCount list={list} />
        </div>
    );
}

export default ToDoList;
// SPLIT THE ASSIGNMENT
// put state to the immediate and sister (lifting state)
>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
// Lifting - remove state from both of them, up to the common parent, and shared between both via props