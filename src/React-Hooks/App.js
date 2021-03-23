import React from "react";
import Navbar from "./React-Hooks/Hookswith-Api/Navbar";
import User from "./React-Hooks/Hookswith-Api/User";
import Login from "./React-Hooks/Hookswith-Api/Login";
import Time from "./React-Hooks/Hookswith-Api/Time";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
let App =()=>{
    return(<>
    <Router>
    <Navbar/>
    <Switch>
        <Route exact path="/User" component={User}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Time" component={Time}></Route>
    </Switch>
    </Router>
    </>);
}
export default App;