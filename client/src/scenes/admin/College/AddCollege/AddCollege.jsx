import React, { useState } from 'react';
import './addCollege.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function AddCollege() {
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
        await axios.post("http://localhost:3000/Collegeform", form)
            .then((response) => {
                console.log(response.data);
                navigate("/Collegeform");
            })
            .catch((err) => console.log(err));
    };
    const navigateToSignup = () => {
        navigate("/UserLogin");
    };
    return (
        <>
            <div class="loginbody">
                <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

                    <h1>College Form</h1>
                    <label>
                        <div class="logcollegeName">
                            <div class="collegeName">College Name</div>
                            <div class="collegeName1"><input type="text" name="collegeName" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logplace">
                            <div class="place">Place</div>
                            <div class="place1"><input type="text" name="place" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logaddress">
                            <div class="address">Address</div>
                            <div class="address1"><input type="textarea" name="address" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logcontactNumber">
                            <div class="contactNumber">Contact Number</div>
                            <div className="contactNumber1"><input type="Number" name="contactNumber" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div class="logemail">
                            <div class="email">Email</div>
                            <div className="email1"><input type="text" name="email" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <button class="but1" type='submit' onClick={navigateToSignup}>Submit</button><br /><br />
                </form>
            </div>
        </>
    );
}
export default AddCollege;