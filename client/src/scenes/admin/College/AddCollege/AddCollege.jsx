import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function AddCollege() {

    const navigate = useNavigate()
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/AddCollege/addCOLLEGE", form)
            .then((response) => {
                console.log(response.data);
                setForm({});
                navigate('/admin/viewCollege')
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {/* <!-- register form --> */}
            <div className="container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Add a College</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">College Name</label>
                                    <input type="text" className="form-control" name="collegeName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Place</label>
                                    <input type="text" className="form-control" name="place" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <input type="textarea" className="form-control" name="address" onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Contact Number</label>
                                    <input type="Number" className="form-control" name="contactNumber" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name='email' onChange={onChangeHandler} />

                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddCollege;