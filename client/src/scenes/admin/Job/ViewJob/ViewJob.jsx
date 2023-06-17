import React from 'react'
import './viewjob.css'
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios'
import uuid from "react-uuid"

function ViewJob() {

  const [rows, setRows] = React.useState({});
  async function setRow() {
    await axios
      .get(`http://localhost:2000/job/getJOB`)
      .then((res) => {
        setRows(res.data.result);
        console.log(res.data.result);

      })
      .catch((err) => {
        console.error(err);
      });
  }
  React.useEffect(() => {
    setRow();
  }, []);


  const columns = [
    { field: "_id", headerName: "Id", width: 300, hideable: false, hide: true },
    { field: "jobTitle", headerName: "jobTitle", width: 300 },
    { field: "companyName", headerName: "companyName", width: 350 },
    { field: "jobRequirements", headerName: "jobRequirements", width: 300 },
  ]


  return (
    <div className='admin-viewjob'>
      <div className="admin-table">
        <DataGrid rows={rows} columns={columns} getRowId={(row: any) => uuid()} />
      </div>
    </div>
  )
}

export default ViewJob