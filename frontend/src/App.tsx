import NavBarComponent from "./components/nav/NavBarComponent";
import Homepage from "./components/home/Homepage";
import LogIn from "./components/login/LogIn";
import Registration from "./components/register/Registration";
import UserAccount from "./components/userAccount/UserAccount";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

function App() {
  const Layout = () => {
    return(
        <>
          <NavBarComponent loggedIn={true}/>
          <Outlet/>
        </>
    )
  }
  return (
      <>
        <BrowserRouter>
            <Routes >
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/home"} element={<Homepage/>}/>
                    <Route path={"/register"} element={<Registration/>}/>
                    <Route path={"/login"} element={<LogIn/>}/>
                    <Route path={"/userAccount"} element={<UserAccount/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
);
}

export default App;
