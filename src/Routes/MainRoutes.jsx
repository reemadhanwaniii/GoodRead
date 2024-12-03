import { Routes,Route } from "react-router-dom";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import Signup from "Pages/Auth/Signup";
import Signin from "Pages/Auth/Signin";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}