import React, { useState } from 'react';
import './addCourse.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function AddCourse() {
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form);
    }

    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3000/Courseform", form)
            .then((response) => {
                console.log(response.data);
                navigate("/AddCourse");
            })
            .catch((err) => console.log(err));
    };
    const navigateToViewCourse = () => {
        navigate("/admin/ViewCourse");
    };
    return (
        <>
            <div class="loginbody">
                <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

                    <h1>Course Form</h1>
                    <label>
                        <div class="logcourseName">
                            <div class="courseName">Course Name</div>
                            <div class="courseName1"><input type="text" name="courseName" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logduration">
                            <div class="duration">Duration</div>
                            <div class="duration1"><input type="text" name="duration" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logcourseFee">
                            <div class="courseFee">Course Fee</div>
                            <div class="courseFee1"><input type="text" name="courseFee" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logsubjects">
                            <div class="subjects">Subjects</div>
                            <div className="subjects1"><input type="text" name="subjects" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <button class="but1" type='submit' onClick={navigateToViewCourse}>Submit</button><br /><br />
                </form>
            </div>
        </>
    );
}
export default AddCourse;