import NavBarComponent from "../nav/NavBarComponent";
import BotBarComponent from "../bottomBar/BottomBarComponent"
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <NavBarComponent loggedIn={true}/>
            <Outlet />
            <BotBarComponent/>
        </>
    )
}

export default Layout;