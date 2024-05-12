import { LuExternalLink } from "react-icons/lu";

function Projects() {
    return (
        <div id="projects" className="d-flex flex-column align-items-center border-top pt-5 occupier">
            <h2 className="text-primary mt-5 fw-bold">Projects</h2>
            <div className="indicator"></div>
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex p-5 h-100">

                <div className="col p-0">
                    <div className="p-2 h-100">
                        
                        <div id="proj-1" className="projs position-relative overflow-hidden rounded shadow">
                            <div className="proj-info-con d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 h-100 w-100">
                                <div className="proj-info d-flex flex-column justify-content-center align-items-center w-100 h-100 p-2">
                                    <div className="mb-2">
                                        <span className="text-white fs-5 bg-dark rounded px-2">Internship Project</span>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">HTML</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">CSS</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">JavaScript</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">Bootstrap</span>
                                    </div>
                                    <a href="https://mon-68kg.github.io/testsite-myfork/" target="_blank" className="position-absolute bottom-0 end-0 m-3"><LuExternalLink className="text-white proj-link-icon" /></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col p-0">
                    <div className="p-2 h-100">
                        
                        <div id="proj-2" className="projs position-relative overflow-hidden rounded shadow">
                            <div className="proj-info-con d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 h-100 w-100">
                                <div className="proj-info d-flex flex-column justify-content-center align-items-center w-100 h-100 p-2">
                                    <div className="mb-2">
                                        <span className="text-white fs-5 bg-dark rounded px-2">Blog preview card</span>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">HTML</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">CSS</span>
                                    </div>
                                    <a href="https://mon-blogpreviewcard-frontendmentor.netlify.app/" target="_blank" className="position-absolute bottom-0 end-0 m-3"><LuExternalLink className="text-white proj-link-icon" /></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col p-0">
                    <div className="p-2 h-100">
                        
                        <div id="proj-3" className="projs position-relative overflow-hidden rounded shadow">
                            <div className="proj-info-con d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 h-100 w-100">
                                <div className="proj-info d-flex flex-column justify-content-center align-items-center w-100 h-100 p-2">
                                    <div className="mb-2">
                                        <span className="text-white fs-5 bg-dark rounded px-2">FAQ accordion</span>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">HTML</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">CSS</span>
                                        <span className="text-white fw-semibold fs-5 bg-primary m-2 px-1">JavaScript</span>
                                    </div>
                                    <a href="https://mon-faqaccordion-frontendmentor.netlify.app/" target="_blank" className="position-absolute bottom-0 end-0 m-3"><LuExternalLink className="text-white proj-link-icon" /></a>
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