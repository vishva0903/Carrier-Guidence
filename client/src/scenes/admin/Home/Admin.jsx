import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Admin() {


    const navigate = useNavigate();
    axios.post("http://localhost:3000/Admin")
        .then((response) => {
            console.log(response.data);
            console.log(response.data);
            navigate("/Admin");
        })
        .catch((err) => console.log(err));

    const navigateToCollege = () => {
        navigate('/Collegeform');
    };
    const navigateToJob = () => {
        navigate('/Jobform');
    };
    const navigateTofeedback = () => {
        navigate('/ViewFeedback');
    };
    const navigateTofCourse = () => {
        navigate('/Course');
    };
    return (
        <>
            <div class="loginbody">
                <form>

                    <h1>Admin</h1>
                    <button className="btn btn-primary" onClick={navigateToCollege}>College</button>
                    <button className="btn btn-primary" onClick={navigateToJob}>Job</button>
                    <button className="btn btn-primary" onClick={navigateTofeedback}>View Feedback</button>
                    <button className="btn btn-primary" onClick={navigateTofCourse}>Course</button>
                </form>
            </div>
        </>
    )
}

export default Admin