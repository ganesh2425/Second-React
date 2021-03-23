import React from "react";
import {useState, useEffect} from "react";
let Time =()=>{
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        let time = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
          clearInterval(time);
        };
      });
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Digital Clock</h4>
                    </div>
                    <div className="card-body">{currentTime}</div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Time;