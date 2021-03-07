import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:"",
            isLoggedIn: false,
        }
    }
    login = () => {
        this.setState({
            isLoggedIn: true,
            message: "Welcome to Bangalore",
        })
    }
    logout = () => {
        this.setState({
            isLoggedIn: false,
            message: "Thank you visit again",
        })
    }
   
    render() {
        return (
        <React.Fragment>
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card"></div>
                    <div className="card-header">
                        <h3>Conditional Rendering</h3>
                    </div>
                    <div className="card-body">
                        {
                            !this.state.isLoggedIn ? <button className="btn btn-success mr-4" onClick={this.login}>
                            login</button> : ""
                        }
                        {
                            this.state.isLoggedIn ? <button className="btn btn-danger" onClick={this.logout}>
                            logout</button> : ""
                        }
                        <h4>...{this.state.message}</h4>
                    </div>
            </div>
            </div>    
        </div>        
        
        
        </React.Fragment>
        )
    }
}

export default Login;
