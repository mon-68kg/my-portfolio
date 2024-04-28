import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";






function Contact() {
    return (
        <div id="contact" className="d-flex flex-column align-items-center pt-5 pb-5 border-top occupier">
            <h2 className="text-primary mt-5 fw-bold">Contact Me</h2>
            <div className="indicator"></div>
            <div className="">
                
                <form name="contact" action="" method="post">
                    <input type="hidden" name="form-name" value="contact" />

                    <input required type="text" name="name" placeholder="Full Name" />
                    <input required type="email" name="email" placeholder="Email" />
                    <input required type="text" name="subject" placeholder="Subject" />
                    <textarea required name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;