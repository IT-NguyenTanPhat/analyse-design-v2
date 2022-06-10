import Navbar from "./Navbar";
import "./Layout.css";
import Sidebar from "./Sidebar";

function Layout(props) {
    return (
        <>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="content">
                <Navbar />
                <main>{props.children}</main>
            </div>
        </>
    );
}

export default Layout;
