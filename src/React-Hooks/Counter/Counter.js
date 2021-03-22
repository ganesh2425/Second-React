import React from "react";
import {useState} from "react";
let Counter =()=>{
    let [counter, setCounter] = useState(1);
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>{counter}</h3>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-danger mr-4" onClick={()=>{
                            setCounter(counter - 1);
                        }}>Decr</button>
                        <button className="btn btn-success" onClick={()=>{
                            setCounter(counter + 1);
                        }}>Incr</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>);
}
export default Counter;