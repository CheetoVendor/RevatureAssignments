import { useState } from "react";

const SharedValueComponent = () => {
    const [text, setText] = useState("Super cool default text")

    return (
        <div>
            <p>{text}</p>
            <input onChange={(e) => setText(e.target.value)} />
        </div>

    );
}

export default SharedValueComponent;