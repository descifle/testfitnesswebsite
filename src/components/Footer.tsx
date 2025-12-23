import { companyPhoneNumber, officialBusinessName } from "../util/constants";
// import logo from "../assets/imgs/logo_small.png";
import FacebookSVG from "./svgs/facebookSVG";
import InstagramSVG from "./svgs/instagramSVG";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-logo">
                {/* <h4><img src={logo} alt="logo" /></h4> */}
            </div>
            <div className="footer-navs">
                {/* <div className="footer-nav">
                    <h2>About Us</h2>
                    <ul>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                </div> */}
                <div className="footer-nav">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Telephone: <a href={`tel:${companyPhoneNumber}`}>{companyPhoneNumber}</a></li>
                    </ul>
                </div>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com"><FacebookSVG /></a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><InstagramSVG /></a>
                    </li>
                </ul>
            </div>
            <div className="copy flex-between">
                <small>&copy; {new Date().getFullYear()} {officialBusinessName}</small>
                <a href="https://www.descifle.com"><small> Developed for Sophia &copy; {new Date().getFullYear()}</small></a>
            </div>
        </footer>
    )
}

export default Footer;