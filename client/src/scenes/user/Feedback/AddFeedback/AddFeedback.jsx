import React, { useState } from 'react';
import './addFeedback.css';
import axios from 'axios';
function Feedback() {
    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:2000/job/addFeedback", form)
            .then((response) => {
                console.log(response.data);
                setForm('');
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div class="loginbody">
                <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

                    <h1>Add Job</h1>
                    <label>
                        <div className="logfeedback">
                            <div className="feedback">Name</div>
                            <div className="feedback1"><input type="text" name="name" onChange={onChangeHandler} /><br></br></div>
                        </div>
                        <div className="logdescription">
                            <div className="description">Description</div>
                            <div className="description1"><input type="textarea" name="description" onChange={onChangeHandler} /><br /></div>
                        </div>
                    </label><br />
                    <button class="but1" type='submit' onClick={() => onSubmitHandler}>Submit</button><br /><br />
                </form>
            </div>
        </>
    );
}
export default Feedback;