import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";






function Contact() {
    return (
        <div id="contact" className="d-flex flex-column align-items-center pt-5 pb-5 border-top occupier">
            <h2 className="text-primary mt-5 fw-bold">Contact Me</h2>
            <div className="indicator"></div>
            <div className="">
                <form name="contact-v1"
                method="post"
                data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact-v1" />

                    <div>
                        <input type="text" name="name" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;