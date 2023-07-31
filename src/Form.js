import React,{useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Form.css"

function Form() {
    const[state,setState]=useState(true)

    return(
    <div className="parent">
        <div className="button">
        <button className="btn1" onClick={
            function name(params) {
                setState(true)
            }
        }
        >Login</button>
        <button className="btn2" onClick={
            function name(params) {
                setState(false)
            }
        }
        >Signup</button>
        </div>
        {state? <Login/> : <Signup/>}
    </div>
    )
}
export default Form