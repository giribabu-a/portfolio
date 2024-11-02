import "./About.css";
import image from "../../assets/Giribabu.jpeg";

function About() {
    return (
        <div className="container pt-5" id="#about">
            <div className="row">
                <div className="col">
                    <h2 className="section_heading">About</h2>
                </div>
            </div>
            <div className="row row-gap-4">
                <div className="col-12 col-md-6 col-lg-7">
                    <div>
                        Hello! I'm Giribabu Annapareddi, a fresh and enthusiastic MERN Full Stack Developer with a solid foundation in creating 
                        static, dynamic and responsive web applications. My expertise lies in the MERN Stack - MongoDB, Express.js, React.js and 
                        Node.js - which I have used to build full stack projects that showcase my ability to handle both frontend development and 
                        backend development.
                    </div>
                    <div className="my-3">
                        As a fresher, I am eager to apply my knowledge in real-world projects, continously learning and growing in the field. I am 
                        passionate about coding, problem solving and bringing creative ideas to life through technology.
                    </div>
                    <div>
                        I am excited to contribute to innovative projects and collaborate with teams to build solutions that make a difference.
                    </div>
                    <div className="resume_btn">
                        <button>Resume</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
                    <div className="about_image">
                        <img src={image} alt="profile" className="w-100 h-100 rounded-circle" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;