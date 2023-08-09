import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function UserLogin() {
    // form handler
    const [form, setForm] = useState({})
    const [followUp, setFollowUp] = useState([]);
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
        console.log(form)

        await axios.post("http://localhost:5000/signup", form)
            .then((response) => {
                toast.success("Account Created")
                console.log(response.data);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Register</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="firstName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={onChangeHandler} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Course studied in Higher Secondary</label>
                            <select class="form-select" id="inputGroupSelect01" name="courseStudied" onChange={onChangeHandler}>
                                <option selected>Choose...</option>
                                <option>Biology</option>
                                <option>Computer</option>
                                <option>Commerce</option>
                                <option>Humanities</option>
                            </select>
                        </div>

                        <button className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                        <br />
                        <Link to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default UserLogin;