import React from "react";
class ChildComp extends React.Component{
    childData = "500000";
    render(){
        return(
            <>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Child Component</h2>
            <h3>data from Parent-empName : {this.props.one}</h3>
            <button onClick={this.send2Parent}>send2Parent</button>
            </>
        )
    }
}
export default ChildComp;