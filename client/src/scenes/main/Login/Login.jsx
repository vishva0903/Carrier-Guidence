import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { setUser, setAdmin } from '../../../store/auth';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";


function Login() {
    const dispatch = useDispatch()
    // form handler
    const [colleges, setColleges] = useState([])
    const [form, setForm] = useState({})
    const[id] = useState("")
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
        await axios.post("http://localhost:5000/signin", form)
            .then((response) => {
                console.log(response)
                toast.success("Login Succesfull")
                const userRole = response.data.data.role
                const token = response.data.token
                const id = response.data.data.courseStudied
                console.log(userRole);
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('id', JSON.stringify(id))
                console.log(id)
                switch (userRole) {
                    case 'user':{
                        dispatch(setUser(response.data.data.courseStudied))
                        navigate('/user')
                        break;
                    }    
                    case 'admin':{
                        dispatch(setAdmin())
                        navigate('/admin')
                        break;
                    }
                    default:{
                        console.log("No roles found")
                        navigate('/')
                    }
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>

            <div className="container-sm w-50 shadow p-3 mt-5 bg-body-tertiary rounded">
                <h1 className="display-6 mb-4">Login</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChangeHandler} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChangeHandler} />
                    </div>
                    <button className="btn btn-primary" onClick={onSubmitHandler}>Login</button>
                    <br />
                    <Link to="/register">Dont have an account yet ?</Link>
                </form>
            </div>
        </>
    );
}
export default Login;