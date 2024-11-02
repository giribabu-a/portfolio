import {Link} from "react-router-dom";

import "./Projects.css";

import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <div className="container pt-5" id="projects">
            <div className="row">
                <div className="col">
                    <h2 className="section_heading">Projects</h2>
                </div>
            </div>
            <div className="row row-gap-4 text-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card h-100 project_card">
                        <div className="card-body">
                            <h5>Project Name</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio unde iusto repellendus aliquid, id blanditiis sequi consectetur aspernatur eos.
                            </p>
                            <div className="project_technologies">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="" className="text-dark">
                                    <FaGithub className="github_icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card h-100 project_card">
                        <div className="card-body">
                            <h5>Project Name</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio unde iusto repellendus aliquid, id blanditiis sequi consectetur aspernatur eos.
                            </p>
                            <div className="project_technologies">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                            </div>
                            <div className="text-center mt-3">
                                <Link to='' className="text-dark">
                                    <FaGithub className="github_icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card h-100 project_card">
                        <div className="card-body">
                            <h5>Project Name</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio unde iusto repellendus aliquid, id blanditiis sequi consectetur aspernatur eos.
                            </p>
                            <div className="project_technologies">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                            </div>
                            <div className="text-center mt-3">
                                <Link to='' className="text-dark">
                                    <FaGithub className="github_icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card h-100 project_card">
                        <div className="card-body">
                            <h5>QR Code Generator</h5>
                            <p>This tool generates customizable QR codes that can be scanned for easy access to URLs or text.</p>
                            <div className="project_technologies">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="" className="text-dark">
                                    <FaGithub className="github_icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;