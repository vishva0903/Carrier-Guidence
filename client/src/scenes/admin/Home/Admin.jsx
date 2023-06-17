import React from 'react';
import './admin.css';
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
                    <button class="but1" type='submit' onClick={navigateToCollege}>College</button>
                    <button class="but1" type='submit' onClick={navigateToJob}>Job</button>
                    <button class="but1" type='submit' onClick={navigateTofCourse}>Course</button>
                    <button class="but1" type='submit' onClick={navigateTofeedback}>View Feedback</button><br /><br /><br /><br />
                </form>
            </div>
        </>
    );
}
export default Admin;

//ready