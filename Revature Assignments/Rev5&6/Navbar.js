<<<<<<< HEAD
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>The React Demos</h2>
            <div className="links">
                <Link to="./hello">Hello</Link>
                <Link to="./sdc">State Demo</Link>
                <Link to="./posts">Get Posts</Link>
                <Link to="./postview">PostView</Link>
                <Link to="./todolist">To Do's</Link>
                <Link to="./addPost">Axios Assignment</Link>
            </div>
        </div>
    );
}

=======
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>The React Demos</h2>
            <div className="links">
                <Link to="./hello">Hello</Link>
                <Link to="./sdc">State Demo</Link>
                <Link to="./posts">Get Posts</Link>
                <Link to="./postview">PostView</Link>
                <Link to="./todolist">To Do's</Link>
            </div>
        </div>
    );
}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default Navbar;