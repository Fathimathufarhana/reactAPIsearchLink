import React from "react";

function Signup() {
    return(
        <form>
            <div>
                <input type="text" placeholder="New Login ID"/>
            </div>
            <div>
                <input type="password" placeholder="Password"/>
            </div>
            <div>
                <input type="Password" placeholder="Confirm Password"/>
            </div>
            <div>
                <button className="btn" type="button">Signup</button>
            </div>
        </form>
    )
}
export default Signup