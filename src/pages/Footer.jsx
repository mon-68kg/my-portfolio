import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";


function Footer() {
    return (
        <div id="footer" className="d-flex flex-column justify-content-center align-items-center text-white bg-dark p-3">
            <div>
                <div className="d-flex justify-content-center align-items-center py-3">
                    <SiGmail className="me-5 footer-icons"/>
                    <SiLinkedin className="me-5 footer-icons"/>
                    <SiGithub className="footer-icons"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    © 2024 Monico
                </div>
            </div>
        </div>
    );
}

export default Footer;