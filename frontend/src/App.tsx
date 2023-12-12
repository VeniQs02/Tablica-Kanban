import NavBarComponent from "./components/NavBarComponent";
import Homepage from "./components/Homepage";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import UserAccount from "./components/UserAccount";
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
