import React from 'react'
import './viewjob.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import uuid from "react-uuid"

function ViewJob() {

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
    <div className='admin-viewjob'>
      <div className='center-jobtable'>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Job Title</th>
                <th>Company Name</th>
                <th>Job Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter12</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ViewJob