import React from "react";
import CompA from "./Props-Drilling/CompA";
let App = ()=> {
    let userInfo = {
        name: "Nokia",
        email: "nokia@gmail.com",
    }
    return(
        <>
        <h1>Hello World</h1>
        <pre>{JSON.stringify(userInfo)}</pre>
        <CompA userInfo={userInfo}/>
        </>
    )
}
export default App;