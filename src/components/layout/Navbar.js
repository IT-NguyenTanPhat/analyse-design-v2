import { BiUserCircle } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <span className="navbar-user">
                Admin <BiUserCircle className="mb-1"/>
            </span>
        </header>
    );
}

export default Navbar;
