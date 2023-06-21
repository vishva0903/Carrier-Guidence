import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
function JOBS() {
    const [colleges, setColleges] = useState([])
    function GetJobs() {
        axios.get("http://localhost:5000/job/ViewJobs")
            .then((res) => {
                setColleges(res.data.result2)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    

    useEffect(() => {
        GetJobs()
    }, [])

    return (
        <div className="container mt-5 p-1">
            <div className="row mb-4 justify-content-between">
                <h3 className="col-md-6">Colleges</h3>
                <p>Find Your Perfect Campus</p>
            </div>


            {/* cards */}
            <div className="row g-3">
                {
                    colleges.map((item, val) => {
                        return (
                            <div className="col-md-4" key={val}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{item.collegeName}</Card.Title>
                                        <Card.Text>{item.place}</Card.Text>
                                        <Card.Text>{item.address}</Card.Text>
                                        <Card.Text>{item.contactNumber}</Card.Text>
                                        <Card.Text>{item.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )    
}
export default JOBS