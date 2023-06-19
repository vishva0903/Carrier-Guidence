import React from 'react'
import './viewCollege.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




function ViewCollege() {

    // const [rows, setRows] = React.useState({});
    // async function setRow() {
    //   await axios
    //     .get(`http://localhost:2000/job/getJOB`)
    //     .then((res) => {
    //       setRows(res.data.result);
    //       console.log(res.data.result);

    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
    // React.useEffect(() => {
    //   setRow();
    // }, []);





    return (
        <div className="container mt-5 p-1">
            <div className="row mb-4 justify-content-between">
                <h3 className="col-md-6">My Listed Ads</h3>
                <button type="button" className="col-md-2 btn btn-primary btn-sm" onclick="navigateToPage()">Add a College</button>
            </div>
            <table className="table table-striped">
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>Rate</th>
                    <th>Area</th>
                    <th>Action</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Nedumangad</td>
                    <td>1 Core</td>
                    <td>10 cent</td>
                    <td>
                        <div className="btn-group" role="group">

                            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" className="btn btn-danger  btn-sm"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Nedumangad</td>
                    <td>2 Core</td>
                    <td>20 cent</td>
                    <td>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" className="btn btn-danger  btn-sm"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Trivandrum</td>
                    <td>5 Core</td>
                    <td>5 cent</td>
                    <td>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" className="btn btn-danger  btn-sm"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Palayam</td>
                    <td>1 Core</td>
                    <td>10 cent</td>
                    <td>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" className="btn btn-danger  btn-sm"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default ViewCollege