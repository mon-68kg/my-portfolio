import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";


function Footer() {
    return (
        <div id="footer" className="d-flex flex-column justify-content-center align-items-center text-white bg-dark p-3">
            <div>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <a href="https://github.com/mon-68kg" target="_blank" className=""><SiGithub className="me-5 footer-icons"/></a>
                    <a href="mailto:monicocabungan08@gmail.com" className=""><SiGmail className="footer-icons"/></a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    © 2024 Monico
                </div>
            </div>
        </div>
    );
}

export default Footer;