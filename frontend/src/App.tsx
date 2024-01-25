import Layout from "./components/otherPages/Layout";
import Homepage from "./components/home/Homepage";
import LogIn from "./components/login/LogIn";
import Registration from "./components/register/Registration";
import UserAccount from "./components/userAccount/UserAccount";
import Info from "./components/otherPages/Info";
import Contact from "./components/otherPages/Contact";
import NoPage from "./components/otherPages/NoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./pageStyles/AppStyle.css"
import ChangeEmail from "./components/userAccount/ChangeEmail";
import ChangePassword from "./components/userAccount/ChangePassword";

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
                    <Route path={"/changePassword"} element={<ChangePassword/>}/>
                    <Route path={"/changeEmail"} element={<ChangeEmail/>}/>
                    <Route path={"*"} element={<NoPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
);
}

export default App;
