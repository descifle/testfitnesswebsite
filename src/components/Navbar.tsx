import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { companyName, companyPhoneNumber, navPaths } from "../util/constants";
import logo from "../assets/imgs/logo_small.png";
// import starRating from "../assets/imgs/star_rating.png";
import LavaLampNav from "./LavaLampNav";

const Navbar = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 })
        const pathName = document.location.pathname.split("/")[1];

        if (pathName) {
            document.title = "ABC | " + pathName;
        } else {
            document.title = companyName;
        }
    })

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const toggleMobileNav = (currentState: boolean) => setMobileNavOpen(!currentState);

    const mobileMenu = (
        <>
            <div className="top-section flex-between">
                <NavLink onClick={() => mobileNavOpen ? toggleMobileNav(mobileNavOpen) : null} to="/">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </NavLink>
                {/* <button onClick={() => navigate("/contact")} className="cta-button">
                    CONTACT US
                </button> */}
                <div
                    className={mobileNavOpen ? "mobile-menu-button open" : "mobile-menu-button"}
                    role="button"
                    onClick={() => toggleMobileNav(mobileNavOpen)}>
                    <div className="menu-btn_burger"></div>
                </div>
            </div>
            <ul className={mobileNavOpen ? "mobile-menu mobile-toggle" : "mobile-menu"}>
                {navPaths.map((navPath, i) => (
                    <li key={i} className="link-item" onClick={() => toggleMobileNav(mobileNavOpen)}>
                        <NavLink
                            className=""
                            onClick={() => toggleMobileNav(mobileNavOpen)}
                            to={navPath.path}>
                            {navPath.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )

    const desktopMenu = (
        <>
            <div className="top-section flex-between">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                {/* <div className="cta">
                    <button onClick={() => handleCartOpen(cartOpen)} className="cta-button">View Cart</button>
                </div> */}
            </div>
            <LavaLampNav navPaths={navPaths} />
        </>
    )

    return (
        <nav className="main-nav">
            {isMobile ? mobileMenu : desktopMenu}
        </nav>
    )
}

export default Navbar