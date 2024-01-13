import NavBarComponent from "../nav/NavBarComponent";
import BotBarComponent from "../bottomBar/BottomBarComponent"
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <NavBarComponent loggedIn={false}/>
            <Outlet />
            <BotBarComponent/>
        </>
    )
}

export default Layout;