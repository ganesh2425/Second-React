import React from "react";
let UserList=(props)=>{
    let userInfo=(data)=>{
        props.selectedUser(data)
    };
    return(<>
    <pre>{JSON.stringify(props.user)}</pre>
    <div className="container">
        <div className="row">
            <div className="col">
                <table className="table table-hover stripped">
                    <thead className="table-primary">
                        <tr>
                            <th>Todo Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-warning">
                        {props.user.length >0? (
                        <>
                        {props.user.map((data)=>{
                            return(
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.completed.toString()}</td>
                                    <td><button className="btn btn-success" onClick={userInfo.bind(this, data)}>User Info</button></td>
                                </tr>
                            )
                        })}
                        </>) :null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    </>);
}
export default UserList;