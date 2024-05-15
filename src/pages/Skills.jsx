import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiGithub } from "react-icons/si";


function Skills() {
    return (
        <div id="skills" className=" d-flex flex-column align-items-center border-top pt-5 occupier">
            <h2 className="text-primary mt-5 fw-bold">Skills</h2>
            <div className="indicator"></div>

            <div id="skills-con" className="row row-cols-2 row-cols-lg-3 mt-5 w-75">
                <div className="col  p-0">
                    <div id="html-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiHtml5 id="html" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">HTML</h5>
                    </div>
                </div>
                <div className="col  p-0">
                    <div id="css-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiCss3 id="css" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">CSS</h5>
                    </div> 
                </div>
                <div className="col  p-0">
                    <div id="javascript-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiJavascript id="javascript" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">JavaScript</h5>
                    </div>
                </div>
                <div className="col  p-0">
                    <div id="bootstrap-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiBootstrap id="bootstrap" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">Bootstrap</h5>
                    </div>
                </div>
                <div className="col  p-0">
                    <div id="react-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiReact id="react" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">React</h5>
                    </div>
                </div>
                <div className="col  p-0">
                    <div id="github-div" className="d-flex flex-column align-items-center rounded py-5 m-2 shadow skill">
                        <SiGithub id="github" className="w-25 h-auto pb-4 skills-icon"/>
                        <h5 className="fw-semibold">GitHub</h5>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;