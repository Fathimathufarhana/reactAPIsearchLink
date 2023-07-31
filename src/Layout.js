import React from "react";
import "./Layout.css"
import { Link, Outlet } from "react-router-dom";
function Layout() {
    return (
      
            <div style={{ display: "flex" }}>

                <div className="main">
                <button className="btn"> <Link to='/account' className="lnk">ACCOUNT</Link></button><br /><br />
                <button className="btn"><Link to="/application" className="lnk">APPLICATION</Link></button><br /><br />
                <button className="btn"> <Link to='/Password' className="lnk">PASSWORD</Link></button><br /><br />
                <button className="btn"><Link to='/security' className="lnk">SECURITY</Link></button><br /><br />
                <button className="btn"><Link to='/notification' className="lnk">NOTIFICATION</Link></button><br /><br />
                </div>
                <div style={{width:'180%'}}>
                <Outlet />
                </div>
            </div>

           

            )
}

            export default Layout