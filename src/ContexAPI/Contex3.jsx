import React from 'react';
import UserContex from "./UserContex";

function Contex3() {
    return (
        <div>
            <h2>third contexAPI</h2>
            <UserContex.Consumer>
                {
                    (userInfo)=>(<span>{JSON.stringify(userInfo)}</span>)
                }
            </UserContex.Consumer>
        </div>
    )
}

export default Contex3
