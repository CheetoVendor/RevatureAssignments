import { useRef } from 'react'

const ButtonCounter = () => {
    const count = useRef(1);
    const counterHandler = () => {
        alert("clicked {count} times");
        count++;
    }
    return (
        <div>
            <button onClick={counterHandler}>Click me!</button>
        </div>

    );
}

export default ButtonCounter;