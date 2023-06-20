import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

function Colleges() {
  const [colleges, setColleges] = useState([])
  function GetColleges() {
    axios.get("http://localhost:5000/college/getCOLLEGE")
      .then((res) => {
        setColleges(res.data.result2)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  // handling modal
  const [show, setShow] = useState(false);
  const [accordionData, setAccordionData] = useState([]);

  const handleClose = () => setShow(false);


  function FetchCourse(item) {
    setShow(true)
    setAccordionData(item.courses)
    console.log(item.courses)
  }

  useEffect(() => {
    GetColleges()
  }, [])



  return (
    <div className="container mt-5 p-1">
      <div className="row mb-4 justify-content-between">
        <h3 className="col-md-6">Colleges</h3>
        <p>Find your perfect campus</p>
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
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <button onClick={() => FetchCourse(item)} className='btn btn-primary btn-sm w-100'>Available Courses</button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }


        {/* modal */}
        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Courses</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* accordion data */}

            <Accordion defaultActiveKey="0" flush>
              {
                (accordionData.length !== 0) ?
                  accordionData?.map((item, val) => {
                    return (
                      <>
                        <Accordion.Item eventKey={val}>
                          <Accordion.Header>{item.courseName}</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      </>
                    )
                  })
                  :
                  <h5>No courses are registered by the college</h5>

              }
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Colleges