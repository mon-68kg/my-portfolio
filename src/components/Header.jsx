import profile from '../images/img1.png';
import { FaGithub, FaLinkedinIn, FaFacebookMessenger, FaArrowCircleDown } from "react-icons/fa";
import { SiGmail, SiFrontendmentor } from "react-icons/si";

function Header() {
    return (
            <div id="header" className="d-flex justify-content-center ">
                <div className="container d-flex flex-column flex-md-row pb-5">
                    <div className="d-flex flex-column w-100 w-md-50 pb-md-5">
                        <div className="mt-4 mt-md-5 pt-md-5">
                            <h1 className="text-dark fw-bold display-2 ">
                                Hi,<br></br>
                                I'm <span className="text-primary">Monico</span><br></br>
                                Web Developer<br></br>
                            </h1>

                            <a id="about-me" href="#about" className="btn btn-primary rounded-pill d-flex justify-content-center align-items-center mt-4 mt-md-5 ">
                                <span className="me-3">About Me</span>
                                <FaArrowCircleDown/>
                            </a>
                        </div>
                        <div className="d-none d-md-flex mt-5 mt-lg-auto">
                            <a href="#" className="me-5"><FaGithub className="header-social-icon" /></a>
                            <a href="#" className="me-5"><FaLinkedinIn className="header-social-icon" /></a>
                            <a href="#" className="me-5"><SiFrontendmentor className="header-social-icon" /></a>
                        </div>
                    </div>

                    <div className="w-100 w-md-50 d-flex justify-content-center">
                        <div className="d-flex flex-column d-md-none mt-5">
                            <a href="#" className="mb-4"><FaGithub className="header-social-icon" /></a>
                            <a href="#" className="mb-4"><FaLinkedinIn className="header-social-icon" /></a>
                            <a href="#" className="mb-4"><SiFrontendmentor className="header-social-icon" /></a>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={profile} className="img-fluid" alt="header photo" />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Header;