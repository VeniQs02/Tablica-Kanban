import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import UserAccount from "./pages/UserAccount";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes >
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/home"} element={<Homepage/>}/>
                    <Route path={"/register"} element={<Registration/>}/>
                    <Route path={"/login"} element={<LogIn/>}/>
                    <Route path={"/userAccount"} element={<UserAccount/>}/>
                    <Route path={"/info"} element={<Info/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"*"} element={<NoPage/>} />
                    {/*to powyżej to jest strona 404*/}
                </Route>
            </Routes>
        </BrowserRouter>
      </>
);
}

export default App;
