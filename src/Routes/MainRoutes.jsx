import { Routes,Route } from "react-router-dom";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}