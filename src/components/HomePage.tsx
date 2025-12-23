import { NavLink, useNavigate } from "react-router-dom";
import { companyName, companyPhoneNumber, websiteName, whyChooseUsItems } from "../util/constants";
// import Carousel from "./Carousel/Carousel";
import ArrowSVG from "./svgs/ArrowSVG";
import ArrowDownSVG from "./svgs/ArrowDownSVG";
import CheckSVG from "./svgs/CheckSVG";

const HomePage = () => {

    const navigate = useNavigate();
    const currentHour = new Date().getHours()
    const shopIsOpen = currentHour > 8 && currentHour < 18;

    return (
        <main>
            <section className="">
                {/* client highlights */}
            </section>
            <section className="">
                <div>
                    {/* <img src={squareImage1} alt="excellent fabrication" /> */}
                </div>
                <div className="">
                    <div>
                        <h2>The best fitness gym in the country!</h2>
                        <p>
                            Welcome to {companyName} where your dream body is our dream too. Make any fitness journey possible with us!
                        </p>
                        <button onClick={() => navigate("/gallery")} className="cta-button">
                            More About Us
                        </button>
                    </div>
                </div>
            </section>
            {/* <section>
                <h2 className="text-center second-color">Why Choose Us</h2>
                <div className="choose-us">
                    {whyChooseUsItems.map((item, i) => (
                        <div key={i}>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <h3 className="second-color">Specailists In</h3>
                {[{ title: "Granite", text: "Beauty and durability for your kitchen or bathroom." },
                { title: "Marble", text: "Elegance that transforms your spaces." },
                { title: "Quartz", text: "Modernity with outstanding durability." }].map((item, i) => (
                    <div key={i} className="specailist">
                        <h4>  {item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-center second-color">Our Services Include</h2>
                <div className="services">
                    some services
                </div>
            </section>
            <section className="process text-center">
                <h2>Our Perks</h2>
                <ul className="flex-center column">
                    <li>set an appointment</li>
                    <ArrowDownSVG />
                    <li>pick out a color</li>
                    <ArrowDownSVG />
                    <li>make a contract</li>
                    <ArrowDownSVG />
                    <li>templating/fabricating</li>
                    <ArrowDownSVG />
                    <li>install</li>
                </ul>
            </section>
            <section className="outro flex-center column">
                <button onClick={() => navigate("/contact")} className="cta-button" style={{ margin: "auto" }}>Contact Us</button>
                <h2 className="text-center m-top-lg second-color">Take the First Step in Your Journey with {companyName}</h2>
                <p className="m-top-lg">Ready to get started?</p>
                <button onClick={() => navigate("/contact")} className="main-button m-top-lg">Let's Talk <ArrowSVG /></button>
            </section> */}
        </main>
    )
}

export default HomePage;