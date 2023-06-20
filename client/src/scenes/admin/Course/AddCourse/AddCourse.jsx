import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function AddCourse() {

    const navigate = useNavigate()
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = async (e, postId) => {
        e.preventDefault();
        // const postId = '64916788e6bfdeb9a7018a0a';

        await axios.post(`http://localhost:5000/course/addCourse/${postId}`, form)
          .then((response) => {
            console.log(response.data);
            setForm({});
            navigate('/admin/viewCourse');
          })
          .catch((err) => console.log(err));
      };
    

    return (
        <>
            {/* <!-- register form --> */}
            <div className="container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Add a Course</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Course Name</label>
                                    <input type="text" className="form-control" name="courseName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Duration</label>
                                    <input type="text" className="form-control" name="duration" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">Course Fee</label>
                                        <input type="text" className="form-control" name="courseFee" onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Subjects</label>
                                    <input type="text" className="form-control" name="subjects" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onSubmitHandler} Link to="/viewCourse">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddCourse;