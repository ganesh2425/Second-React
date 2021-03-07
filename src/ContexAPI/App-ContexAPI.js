import React from "react";
import Contex1 from "./ContexAPI/Contex1";
import UserContex from "./ContexAPI/UserContex";
let App =()=>{
    let userInfo = {
        name: "Samsung",
        email: "samsung001@yaahoo.com",
    }
    
    return(
        <>
        <h1>App Component</h1>
       <pre>{JSON.stringify(userInfo)}</pre>
       <hr/>
       <UserContex.Provider value={userInfo}>
       <Contex1/>
       </UserContex.Provider>
    
        </>
    )
}
export default App;