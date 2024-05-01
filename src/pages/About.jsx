import monico from '../images/coder.png';
import { MdArrowForwardIos } from "react-icons/md";


function About() {
    return (
        <div id="about" className="d-flex flex-column align-items-center pt-5 border-top occupier">
            <h2 className="text-primary mt-5 fw-bold">About Me</h2>
            <div className="indicator"></div>
            <div className="container my-3">

                <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">

                    <div className="d-flex justify-content-center align-items-center w-100 w-md-50 p-4 p-md-0 p-lg-5">
                        <img src={monico} id="about-img" className="img-fluid rounded-4 w-75 shadow" alt="about me photo" />
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center  align-items-md-start w-100 w-md-50 p-3">
                        <h2 className="fw-bold mb-4">
                            I'm Monico
                        </h2>
                        <p id="about-p" className="">
                            Greetings! I'm Monico, a recent graduate in Information Technology with a passion for crafting innovative solutions in the digital realm. Welcome to my portfolio where I showcase my journey into the world of technology.
                        </p>
                        <a id="resume" href="#" className="btn btn-primary d-flex justify-content-center align-items-center mt-4 mt-md-5">Resume <MdArrowForwardIos /></a>
                    </div>

                </div>

            </div>
        </div>
        
    );
}

export default About;