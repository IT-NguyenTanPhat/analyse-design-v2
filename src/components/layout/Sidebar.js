import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./Sidebar.css";
import { AiFillDashboard } from "react-icons/ai";
import { MdPointOfSale, MdProductionQuantityLimits } from "react-icons/md";
import { TbReport } from "react-icons/tb";

export default function Sidebar() {
    return (
        <>
            <Nav vertical className="sb-nav">
                <NavItem className="sb-item">
                    <NavLink to="/">
                        <h1>Drug Store</h1>
                    </NavLink>
                </NavItem>
                <NavItem className="sb-item">
                    <NavLink to="/">
                        <AiFillDashboard className="mb-1" /> Dashboard
                    </NavLink>
                </NavItem>
                <NavItem className="sb-item">
                    <NavLink to="/order">
                        <MdPointOfSale className="mb-1" /> Order
                    </NavLink>
                </NavItem>
                <NavItem className="sb-item">
                    <NavLink to="/product">
                        <MdProductionQuantityLimits className="mb-1" /> Product
                    </NavLink>
                </NavItem>
                <NavItem className="sb-item">
                    <NavLink to="/report">
                        <TbReport className="mb-1" /> Reporting
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    );
}
