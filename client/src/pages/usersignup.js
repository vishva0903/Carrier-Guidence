import React, { useState } from 'react';
import '../Signup/usersignup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function UserLogin() {
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
        await axios.post("http://localhost:3000/SignUp", form)
            .then((response) => {
                console.log(response.data);
                navigate("/Signup");
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

                    <h1>Sign Up</h1>
                    <label>
                        <div class="logfirstname">
                            <div class="firstName">FirstName</div>
                            <div class="firstName1"><input type="text" name="firstName" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="loglastname">
                            <div class="lastName">LastName</div>
                            <div class="lastName1"><input type="text" name="lastName" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logemail">
                            <div class="Email">Email</div>
                            <div class="Email1"><input type="text" name="Email" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logpassword">
                            <div class="password">Password</div>
                            <div className="password1"><input type="password" name="password" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div class="coursestud">
                            <div class="coursestudied">Course Studied in 12th</div>
                            <div className="coursestudied1"><input type="text" name="coursestud" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <button class="but1" type='submit' onClick={navigateToSignup}>Sign Up</button><br /><br />
                    <div class="lhead">Are you already have an account ?</div>
                    <div class="signuplnk"><a href="http://localhost:3000/Signup">Sign up</a></div>

                </form>
            </div>
        </>
    );
}
export default UserLogin;