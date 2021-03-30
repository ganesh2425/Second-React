import React from "react";
import ContactApp from "./ContactApp-FunComp/ContactApp/ContactApp";
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">ContactApp-Functional Component</a>
    </nav>
    <ContactApp/>
    </>);
}
export default App;