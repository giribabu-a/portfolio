import "./Achievements.css";

function Achievements() {
    return (
        <div className="container pt-5" id="achievements">
            <div className="row">
                <div className="col">
                    <h2 className="section_heading">Achievements:</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul type="square">
                        <li>
                            <h5>JavaScript (Basic) Certification - HackerRank</h5>
                            <div>
                                Demonstrated proficiency in JavaScript fundamentals including variables, functions, objects, arrays and loops through
                                hands-on coding challenges.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Achievements;