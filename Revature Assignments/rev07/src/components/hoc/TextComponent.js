import { useContext } from "react";
import withFancyText from "./withFancyText";
import MyContext from "../contextDemo/MyContext";

const TextComponent = () => {
    const data = useContext(MyContext)
    return (
        <>
            <p>Hello Fancy Text.</p>
            <h3>Context Data :: {data}</h3>
        </>


    );
}

export default withFancyText(TextComponent);