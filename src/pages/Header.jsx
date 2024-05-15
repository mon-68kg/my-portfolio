import profile from '../images/img1.png';
import { FaGithub, FaArrowCircleDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Header() {
    return (
            <div id="header" className="d-flex justify-content-center ">
                <div className="container d-flex flex-column flex-md-row p-3 p-lg-5">
                    <div className="d-flex flex-column w-100 pb-md-5">
                        <div className="mt-4 mt-md-0 mt-lg-0 pt-md-5">
                            <h1 className="text-dark fw-bold display-3 ">
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
                            <a href="https://github.com/mon-68kg" className="me-5"><FaGithub className="header-social-icon" /></a>
                            <a href="monicocabungan08@gmail.com" className="me-5"><SiGmail className="header-social-icon" /></a>
                        </div>
                    </div>

                    <div className="w-100 d-flex  pb-5">
                        <div className="d-flex flex-column d-md-none mt-5">
                            <a href="https://github.com/mon-68kg" className="mb-4"><FaGithub className="header-social-icon" /></a>
                            <a href="monicocabungan08@gmail.com" className="mb-4"><SiGmail className="header-social-icon" /></a>
                        </div>
                        <div className="d-flex w-100 h-100 ms-auto">
                            <img src={profile} className="img-fluid w-xl-75 m-auto mt-md-0 m-lg-auto" alt="header photo" />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Header;