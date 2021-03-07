import React from 'react'
function CompC(props) {
    return (
        <div>
            <hr/>
            <h2>welcome to component C:</h2>
            <span>{JSON.stringify(props.userInfo)}</span>
        </div>
    )
}

export default CompC;
