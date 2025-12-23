import Footer from "./Footer";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";


const RootElement = () => {

    return (
        <>
            <Navbar /> 
            <Outlet />
            <Footer />
        </>
    )
}

export default RootElement;