import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
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
        await axios.post("http://localhost:3000/UserLogin", form)
            .then((response) => {
                console.log(response.data);
                navigate("/UserLogin");
            })
            .catch((err) => console.log(err));
    };
    const navigateToLogin = () => {
        navigate('/Home');
    }
    return (
        <>
            <div class="loginbody">
                <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

                    <h1>Login</h1>
                    <label>
                        <div class="logemail">
                            <div class="Email">Email</div>
                            <div class="Email1"><input type="text" name="Email" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div class="logpassword">
                            <div class="password">Password</div>
                            <div className="password1"><input type="password" name="password" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <div class="forgot"><a href="http://localhost:3000/ForgotPassword">Forgot Password ?</a></div><br />
                    <button class="but1" type='submit' onClick={navigateToLogin}>Login</button><br /><br />
                </form>
            </div>
        </>
    );
}
export default Login;