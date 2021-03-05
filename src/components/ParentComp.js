import React from "react";
import ChildComp from "./ChildComp"
class ParentComp extends React.Component{
    empName = "Priyanka";
    receiving
    render(){
        return(
            <>
            <h2>Parent Component</h2>
            <hr/>
            <ChildComp one={this.empName}/>
            </>
        )
    }
}
export default ParentComp;