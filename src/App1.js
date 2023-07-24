import React, { useState } from "react";
import Form1 from "./Form1";
import Display from "./Display";


function App1() {
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()


    const getValue = (emails,passwords) =>{
        setEmail(emails)
        setPassword(passwords)
        console.log(`email-id : ${emails}  \n password: ${passwords} `);
    }

    return(
        <div>
        <Form1 myfun={getValue}/>
        <Display emailprop = {email} passwordprop = {password}/>
        </div>
    )
}
export default App1