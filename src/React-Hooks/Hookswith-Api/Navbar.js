import React from "react";
import {Link} from "react-router-dom";
let Navbar =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">Hooks with Api</a>
        <Link to="User">User</Link>
        <Link to="Login">Login</Link>
        <Link to="Time">Time</Link>
    </nav>
    </>);
}
export default Navbar;