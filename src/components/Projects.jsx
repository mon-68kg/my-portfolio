import qrcode from '../images/projects/qr-code.png';
import blogcard from '../images/projects/blog-card.png';
import accordion from '../images/projects/accordion.png';
import internshipProj from '../images/projects/internship-project.png';
import { LuExternalLink } from "react-icons/lu";

function Projects() {
    return (
        <div id="projects" className="d-flex flex-column align-items-center border-top pt-5 occupier">
            <h2 className="text-primary mt-5 fw-bold">Projects</h2>
            <div className="indicator"></div>
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex p-5">

                <div className="col p-0">
                    <div className="p-2 h-100">
                        <div className="card h-100 overflow-hidden shadow">
                            <a href="#">
                                <img src={internshipProj} className="card-img projects rounded-0" alt="internship project" />
                            </a>
                            <div className="card-body d-flex flex-column h-100 z-3">
                                <h5 className="card-title fw-semibold">Intership Project</h5>
                                <div className="mt-auto">
                                    <a href="#" className="btn btn-primary fw-semibold rounded-pill me-1">Live<LuExternalLink className="ms-1 "/></a>
                                    <a href="#" className="btn btn-dark fw-semibold rounded-pill">Code<LuExternalLink className="ms-1 "/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="p-2 h-100">
                        <div className="card h-100 overflow-hidden shadow">
                            <a href="#">
                                <img src={blogcard} className="card-img projects rounded-0" alt="blog card project" />
                            </a>
                            <div className="card-body d-flex flex-column h-100 z-3">
                                <h5 className="card-title fw-semibold">Blog Preview Card</h5>
                                <div className="mt-auto">
                                    <a href="#" className="btn btn-primary fw-semibold rounded-pill me-1">Live<LuExternalLink className="ms-1 "/></a>
                                    <a href="#" className="btn btn-dark fw-semibold rounded-pill">Code<LuExternalLink className="ms-1 "/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="p-2 h-100">
                        <div className="card h-100 overflow-hidden shadow">
                            <a href="#">
                                <img src={accordion} className="card-img projects rounded-0" alt="accordion project" />
                            </a>
                            <div className="card-body d-flex flex-column h-100 z-3">
                                <h5 className="card-title fw-semibold">Accordion</h5>
                                <div className="mt-auto">
                                    <a href="#" className="btn btn-primary fw-semibold rounded-pill me-1">Live<LuExternalLink className="ms-1 "/></a>
                                    <a href="#" className="btn btn-dark fw-semibold rounded-pill">Code<LuExternalLink className="ms-1 "/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;