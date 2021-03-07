import React from 'react';
import Contex3 from "./Contex3";
import UserContex from "./UserContex"

function Contex2() {
    return (
        <>
        <h2>second contexAPI</h2>  
          <UserContex>
              {
                  (userInfo)=>(<>{JSON.stringify(userInfo)}</>)
              }
          </UserContex>
          <Contex3/>
        </>
    )
}

export default Contex2
