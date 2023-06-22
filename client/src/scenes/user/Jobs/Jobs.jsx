import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewJob() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get('http://localhost:5000/job/getJOB');
        setJobList(response.data.result);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchJob();
  }, []);

  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">View Jobs</h3>
      </div>

      {loading ? (
        <p>Loading Jobs...</p>
      ) : (
        jobList && jobList.length > 0 ? ( // Add null check for jobList
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Company Name</th>
                <th>Job Type</th>
                <th>Salary</th>
                <th>Email</th>
              </tr>
            </thead>
  
            <tbody>
              {jobList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.companyName}</td>
                  <td>{item.jobType}</td>
                  <td>{item.salaryPackage}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Jobs available.</p>
        )
      )}
    </div>
  );
}

export default ViewJob;
