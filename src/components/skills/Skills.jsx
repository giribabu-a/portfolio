import "./Skills.css";
import Education from "../education/Education";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Skills(){
    return (
        <>
            <div className="container pt-5" id="skills">
                <div className="row">
                    <div className="col">
                        <h2 className="section_heading">Skills</h2>
                    </div>
                </div>
                <div className="row row-gap-4">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card skills_card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Web Design</h2>
                                <p className="card-text">
                                    I love designs and it's the first step before creating any website. I excel in translating ideas into functional, 
                                    aesthetic layouts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card skills_card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Web Development</h2>
                                <p className="card-text">
                                    I am a Full Stack Web Developer (MERN) with practical experience in building dynamic, responsive websites and 
                                    applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card skills_card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Problem Solving</h2>
                                <p className="card-text">
                                    I thrive on solving problems, whether in programming or real-life scenarios, bringing innovative solutions to the 
                                    table.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-4">
                    <div className="col-12 text-center tech_skills_heading">Tech I am Familiar with</div>
                </div>
                <div className="row text-center tech_skills_list row-gap-5">
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaHtml5 style={{color: '#e34c26'}} className="fs-2" /> HTML5
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <IoLogoCss3 style={{color: '#264de4'}} className="fs-2" /> CSS3
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <IoLogoJavascript className="fs-2" style={{color: '#f0db4f'}} /> JavaScript
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaBootstrap className="fs-2" style={{color: '#563d7c'}} /> Bootstrap
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaReact className="fs-2" style={{color: '#61DBFB'}} /> React JS
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaGitSquare className="fs-2" style={{color: '#F1502F'}} /> GIT
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaGithub className="fs-2" style={{color: '#171515'}} /> GitHub
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <FaNodeJs className="fs-2" style={{color: '#3c873a'}} /> Node JS
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <SiExpress className="fs-2" /> Express JS
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <SiMongodb className="fs-2" style={{color: '#3fa037'}} />MongoDB
                    </div>
                </div>
            </div>
            <Education />
        </>
    )
}

export default Skills;