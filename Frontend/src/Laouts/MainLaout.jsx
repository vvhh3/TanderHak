import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from './logo2.svg';
import "./MainLaout.css";
const MainLaout = () => {
    return (
        <>
            <div className="header">
                <Link to='/'>
                    <img src={logo} className="imageLogo" alt="Logo" />
                </Link>
            </div>
            <div>
                <Outlet />
            </div>

        </>
    )
}
export default MainLaout