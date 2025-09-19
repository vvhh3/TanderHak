import "./Header.css"
import logo from './image/logo2.svg';
import { Outlet } from "react-router-dom";
export function Header(){

    return(
        <> 
            <div className="header">
                <button className="imageLogo"><img src={logo}/></button>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Header;