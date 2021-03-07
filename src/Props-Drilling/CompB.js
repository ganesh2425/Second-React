import React from 'react';
import CompC from "./CompC";
function CompB(props) {
    return (
        <>
        <h2>welcome to component B:</h2>
        <CompC userInfo={props.userInfo}/>
        </>
    )
}

export default CompB;
