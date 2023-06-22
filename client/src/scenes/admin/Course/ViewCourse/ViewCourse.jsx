import React from 'react'
import './viewCourse.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function ViewCourse() {

    const [rows, setRows] = React.useState([]);
    async function setRow() {
        await axios
            .get(`http://localhost:5000/course/getCourse`)
            .then((res) => {
                setRows(res.data.courses);
                console.log(res.data);

            })
            .catch((err) => {
                console.error(err);
            });
    }

    // deleting
    async function Delete(id) {
        await axios
            .delete(`http://localhost:5000/college/deleteCOLLEGE/${id}`)
            .then((res) => {
                setRow()
                alert("Deleted")
            })
            .catch((err) => {
                console.error(err);
            });
    }

    React.useEffect(() => {
        setRow();
    }, []);

    return (
        <div className="container mt-5 p-1">
            <div className="row mb-4 justify-content-between">
                <h3 className="col-md-6">List of Courses</h3>
                {/* <button type="button" className="col-md-2 btn btn-primary btn-sm" onClick={() => navigateToPage('/admin/')}>Add a Course</button> */}
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>SI.No</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Course Fee</th>
                        <th>Subjects</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        rows.map((item, val) => {
                            return (
                                <tr key={val}>
                                    <td>
                                        {rows.indexOf(item) + 1}
                                    </td>
                                    <td>
                                        {item.courseName}
                                    </td>
                                    <td>
                                        {item.duration}
                                    </td>
                                    <td>
                                        {item.courseFee}
                                    </td>
                                    <td>
                                        {item.subjects}
                                    </td>
                                    
                                    <td>
                                        <div class="btn-group" role="group">
                                            {/* <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" */}
                                            {/* data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button> */}
                                            <button class="btn btn-danger  btn-sm" onClick={() => Delete(item._id)}><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ViewCourse



