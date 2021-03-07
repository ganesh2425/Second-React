import React from 'react'
import CompB from "./CompB";

function CompA(props) {
    return (
        <>
        <div className="card">
            <div className="card-header">welcome to comp-A:</div>
            <div className="card-body"></div>
        </div>
        <CompB userInfo={props.userInfo}/> 
        </>
    )
}

export default CompA;
