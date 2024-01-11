import NavBarComponent from "../components/NavBarComponent";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <NavBarComponent loggedIn={true}/>
            <Outlet/>
        </>
    )
}

export default Layout;