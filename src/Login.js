import React from "react";


function Login() {
    return(
        <form>

            <div>
                <input type="text" placeholder="Login ID"/>
            </div>
            <div>
                <input type="password" placeholder="Password"/>
            </div>
            <div>
                <button className="btn" type="button">Login</button>
            </div>
        </form>
    )
}
export default Login