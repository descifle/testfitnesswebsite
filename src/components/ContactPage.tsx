import { useState, createRef } from "react";
import { onItemBlur, onItemFocus, validateEmail } from "../util/utilFunctions";
import {  companyEmail, companyName, companyPhoneNumber } from "../util/constants";
// import { client } from "./client";
// import ReCAPTCHA from "react-google-recaptcha";
import ArrowSVG from "./svgs/ArrowSVG";
import CircularProgress from "./CircularProgress/CircularProgress";
// import axiosRetry from 'axios-retry';

export default () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({ name:"", phone:"", email:"", company:"", message:"" });
    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [messageSending, setMessageSending] = useState(false);
    const [recaptchaComplete, setRecaptchaComplete] = useState(false);

    const recaptchaRef = createRef<any>();
    
    // axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let success = false;

        let tempErrors = errors;

        const phoneTrimmed = phone.replace(/-|\s/, "");

        const recaptchaValue = recaptchaRef.current.getValue();
        if(!recaptchaValue) {
            const rc = document.querySelector(".my-recaptcha") as HTMLElement;
            rc.scrollTo({  });
            return;
        }

        if(phone.length !== 0 && phoneTrimmed.length !== 10) {
            tempErrors.phone = "Phone number is not valid";
            success = false;
        }
        else if(name.length === 0) {
            tempErrors.name = "Enter a name";
            success = false;
        }
        else if(!validateEmail(email)) {
            tempErrors.email = "Please enter a valid email";
            success = false;
        }
        else if(message.length === 0) {
            tempErrors.message = "Please add project details";
            success = false;
        }
        else success = true;

        setErrors({ ...tempErrors });

        if(success) {
            setMessageSending(true);


            // handle success post
        }
    }

    const contactInfo = [
        { title:"Phone", node: companyPhoneNumber },
        { title:"Email", node: companyEmail },
        { title:"Hours - Weekdays", node: "6am - 8pm" },
        { title:"Hours - Saturday", node: "8am - 6pm" },
        { title:"Hours - Sunday", node: "Closed" }
    ]

    const formFields = (
        <>
               <div className="multi-input">
                    <div className="input-container">
                        <label className="required">Name</label>
                        <input
                            required
                            className={errors.name ? "error-field" : ""}
                            type="text"
                            placeholder="Peter Johnson"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <small className={errors.name !== "" ? "error-info" : "hidden"}>{errors.name}</small>
                    </div>
                    <div className="input-container">
                        <label className="required">Email</label>
                        <input
                            required
                            type="email"
                            placeholder="peter@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={e => onItemFocus(e, setErrors, { ...errors, email: "" })}
                            onBlur={e => onItemBlur(e, setErrors, { ...errors, email: "" })}
                        />
                        <small className={errors.email !== "" ? "error-info" : "hidden"}>{errors.email}</small>
                    </div>
                </div>
                <div className="multi-input">
                    <div className="input-container">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}[0-9]{3}[0-9]{4}"
                            placeholder="XXX XXX XXXX"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            onFocus={e => onItemFocus(e, setErrors, { ...errors, phone: "" })}
                            onBlur={e => onItemBlur(e, setErrors, { ...errors, phone: "" })}
                        />
                        <small className={errors.phone !== "" ? "error-info" : "hidden"}>{errors.phone}</small>
                    </div>
                </div>
                <div className="input-container">
                    <label className="required">Message</label>
                    <textarea
                        cols={30}
                        rows={10}
                        required
                        placeholder="Project Details"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="main-button" type="submit"><ArrowSVG /> Send Message</button>
        </>
    )

    return (
        <main className="contact">
            <section  style={{ paddingBottom: 0 }}>
            <h1 className="text-center second-color">Contact Us</h1>
            <h2 className="text-center">GET IN TOUCH</h2>
            </section>
            <section className="map-container">
                <div>
                   {contactInfo.map((item, i) => {
                        if(item.title === "Phone") return (
                        <p key={i}>
                            <strong>{item.title} :</strong> <a href={`tel:${item.node}`}>{item.node}</a>
                        </p>
                        )
                        else return (
                            <p key={i}>
                            <strong>{item.title} :</strong> {item.node}
                        </p>
                        )
                    })}
                </div>
                <div className="mapouter">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55535.82840442008!2d-76.69228006117764!3d39.19063193051838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1733523853948!5m2!1sen!2sus" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    height="100%"
                    width="100%"
                    ></iframe>
                </div>
            </section>
            <section>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <h2 className="m-top-lg" style={{ textAlign:"left" }}>Send us a message</h2>
                            {
                messageSending ? <CircularProgress /> : messageSent ? <div>message has been sent</div> : formFields
            }
            </form>

            </section>
        <div className="m-top-lg"></div>
        </main>
    )
}