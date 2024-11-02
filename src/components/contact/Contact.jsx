import { useState } from "react";

import "./Contact.css";

function Contact() {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        subject: ''
    });
    const [usersList, setUsersList] = useState([]);

    const handleUserInput = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleUserDetails = (event) => {
        event.preventDefault();
        setUsersList([...usersList, userData]);

        setUserData({
            name: '',
            email: '',
            subject: ''
        });
    };

    return (
        <div className="container py-5" id="contact">
            <div className="row">
                <div className="col">
                    <h2 className="section_heading">Contact</h2>
                </div>
            </div>
            <div className="row row-gap-3">
                <div className="col-12 col-md-6 col-lg-6">
                    <div>
                        <img src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148193433.jpg?t=st=1729232097~exp=1729235697~hmac=6c5b559b53d397f8acedca81ea77ebb03b32fab5abfbdd5b71a23a697fc70e4d&w=740"
                            className="rounded w-100" height={370} />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <form onSubmit={handleUserDetails}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter fullname"
                                onChange={handleUserInput} name="name" value={userData.name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                                onChange={handleUserInput} value={userData.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject:</label>
                            <textarea className="form-control" id="subject" rows="4" placeholder="write something here..."
                                name="subject" onChange={handleUserInput} value={userData.subject}>

                            </textarea>
                        </div>
                        <div className="submit_btn">
                            <button>Let's Collaborate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;