import { Typewriter } from 'react-simple-typewriter';

import "./Home.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

function Home() {
    return (
        <div className="home_container" id='home'>
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="welcome_heading">WELCOME</div>
                        <div className="iam_heading">I AM</div>
                        <div className="name_heading">Giribabu <br /> Annapareddi</div>
                        <div className="designation_heading">
                            <Typewriter
                                words={[
                                    'UI Developer',
                                    'React JS Developer',
                                    'Frontend Engineer',
                                    'MERN Stack Developer'
                                ]}
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={150}
                                deleteSpeed={150}
                                delaySpeed={1000}
                            />
                        </div>
                        <div className='social_menu'>
                            <div className='social_btn'>
                                <a href='https://www.linkedin.com/in/giribabu-annapareddi-135aa025b/' target='_blank'>
                                    <FaLinkedin className='linkedin' />
                                </a>
                            </div>
                            <div className='social_btn'>
                                <a href='https://github.com/giribabu-a' target='_blank'>
                                    <FaGithub className='github' />
                                </a>
                            </div>
                            <div className='social_btn'>
                                <a href='https://www.hackerrank.com/profile/giribabu83567' target='_blank'>
                                    <SiHackerrank className='hackerrank' />
                                </a>
                            </div>
                            <div className="social_btn">
                                <a href="https://leetcode.com/u/giribabu83567/" target='_blank'>
                                    <SiLeetcode className='leetcode' />
                                </a>
                            </div>
                            <div className='social_btn'>
                                <a href='https://www.codechef.com/users/giribabu_a' target='_blank'>
                                    <SiCodechef className='codechef' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;