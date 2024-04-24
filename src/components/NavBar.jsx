import { FaBars } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div className="container px-3 px-lg-5">
                <a className="navbar-brand fs-2 fw-bold rounded" href="#">Mon</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle navigation">
                    <span className=""><FaBars /></span>
                </button>
                <div className="collapse d-lg-flex justify-content-end navbar-collapse w-auto" id="navbarToggler">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-3 me-5">
                            <a id="nav-about" className="nav-link fw-bold fs-5" href="#about">About</a>
                        </li>
                        <li className="nav-item ms-3 me-5">
                            <a id="nav-skills" className="nav-link fw-bold fs-5" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item ms-3 me-5">
                            <a id="nav-projects" className="nav-link fw-bold fs-5" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a id="nav-contact" className="nav-link fw-bold fs-5" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;