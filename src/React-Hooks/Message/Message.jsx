import React from "react";
import {useState} from "react";
let Message =()=>{
    let [message, setMessage] = useState("Hello World!!!!");
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <di className="card">
                    <div className="card-header">{message}</div>
                    <div className="card-body">
                        <button className="btn btn-info mr-4" onClick={()=>{
                            setMessage("Hello This is Apple IOS");
                        }}>Higher</button>
                        <button className="btn btn-secondary mr-4" onClick={()=>{
                            setMessage("Hello This is Samsung Android");
                        }}>Medium</button>
                        <button className="btn btn-warning mr-4" onClick={()=>{
                            setMessage("Hai This is Nokia")
                        }}>Lower</button>
                    </div>
                </di>
            </div>
        </div>
    </div>
    </>);
}
export default Message;