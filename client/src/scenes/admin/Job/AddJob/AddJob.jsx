import React, { useState } from 'react';
import './addjob.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Job() {

    const navigate = useNavigate()
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:2000/job/addJOB", form)
            .then((response) => {
                console.log(response.data);
                setForm({});
                navigate('/admin/viewjob')
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div class="loginbody">
                <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

                    <h1>Add Job</h1>
                    <label>
                        <div className="logjobTitle">
                            <div className="jobTitle">Job Title</div>
                            <div className="jobTitle1"><input type="text" name="jobTitle" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div className="logcompanyName">
                            <div className="companyName">Company Name</div>
                            <div className="companyName1"><input type="text" name="companyName" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div className="logjobRequirements">
                            <div className="jobRequirements">Job Requirements</div>
                            <div className="jobRequirements1"><input type="text" name="jobRequirements" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div className="logsalaryPackage">
                            <div className="salaryPackage">Salary Package</div>
                            <div className="salaryPackage1"><input type="text" name="salaryPackage" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div className="logjobType">
                            <div className="jobType">Job Type</div>
                            <div className="jobType1"><input type="text" name="jobType" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div className="logcontactNumber">
                            <div className="contactNumber">Contact Number</div>
                            <div className="contactNumber1"><input type="text" name="contactNumber" onChange={onChangeHandler} /><br /></div>
                        </div>
                        <div className="logemail">
                            <div className="email">Email</div>
                            <div className="email1"><input type="text" name="email" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <button class="but1" type='submit' onClick={() => onSubmitHandler}>Submit</button><br /><br />
                </form>
            </div>
        </>
    );
}
export default Job;