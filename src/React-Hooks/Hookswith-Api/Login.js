import React, { Component } from 'react'

class Login extends Component {
    componentDidMount(){
        console.log("component Did Mount executing");
    }
    componentWillUnmount(){
        console.log("component Will UnMount executing")
    }
    render() {
        return (
            <>
              <h3>Component Life Cycle Methods</h3> 
            </>
        )
    }
}

export default Login;
