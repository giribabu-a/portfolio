import "./Education.css";

function Education(){
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col">
                    <h2 className="section_heading">Education</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 className="course_title">Bachelor of Technology</h4>
                    <h5 className="college_name">Sri Vasavi Institute of Engineering & Technology</h5>
                    <h5 className="marks">CGPA - 7.71</h5>
                    <div className="passedout">2018 - 2021</div>
                </div>
                <div className="col-12 my-4">
                    <h4 className="course_title">Diploma in Mechanical Engineering</h4>
                    <h5 className="college_name">Diviseema Polytechnic College</h5>
                    <h5 className="marks">Scored 90.92%</h5>
                    <div className="passedout">2015 - 2018</div>
                </div>
                <div className="col-12">
                    <h4 className="course_title">Secondary School Certificate (SSC)</h4>
                    <h5 className="college_name">Sri Chaitanya High School</h5>
                    <h5 className="marks">Scored 7.5 GPA</h5>
                    <div className="passedout">2015</div>
                </div>
            </div>
        </div>
    )
}

export default Education;