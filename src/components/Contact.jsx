import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";


function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('contact-form').reset();
    document.getElementById('test').innerText = "Sent!";
}


function Contact() {
    return (
        <div id="contact" className="d-flex flex-column align-items-center pt-5 pb-5 border-top occupier">
            <h2 className="text-primary mt-5 fw-bold">Contact Me</h2>
            <div className="indicator"></div>
            <div className="container d-flex flex-column flex-xxl-row px-4 px-md-5 mt-5 pt-5">
                    <span id="test"></span>
                    <div className="w-100 mb-4 mb-xxl-0 px-md-4 px-lg-5">
                        <form id="contact-form"
                        className="px-lg-5 mx-lg-5 mx-xxl-3 px-xxl-0" 
                        name="contact"
                        method="POST"
                        action="#projects"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        >
                        

                            <input type="text" className="form-control border border-secondary border-2 mb-3 pt-3 pt-md-4" id="name" placeholder="Full Name" name="name"/>
                            <input type="email" className="form-control border border-secondary border-2 mb-3 pt-3 pt-md-4" id="email" placeholder="E-Mail" name="email"/>
                            <input type="text" className="form-control border border-secondary border-2 mb-3 pt-3 pt-md-4" id="subject" placeholder="Subject" name="subject"/>
                            <textarea className="form-control no-resize border border-secondary border-2 mb-3 pt-2 pt-md-3 pt-lg-4 pb-5" id="message" placeholder="Message" name="message"/>
                            <button type="submit" className="btn btn-primary fs-5 fw-semibold px-3 px-md-4 px-lg-5 py-lg-2">Send</button>
                        </form>
                    </div>

                    <div id="div-2" className="d-flex w-100 px-md-4 px-lg-5">
                        <div className="d-flex flex-column px-lg-5 mx-lg-5 mx-xxl-3 px-xxl-0">
                            <a href="" className="d-flex align-items-center"><SiGmail className="contact-icons me-3 mb-3 text-dark"/>Email</a>
                            <a href="" className="d-flex align-items-center"><SiGithub className="contact-icons me-3 mb-3 text-dark"/>GitHub</a>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Contact;