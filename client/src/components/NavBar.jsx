import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Carrier Guidance</Navbar.Brand>
          <Nav variant="" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin/addCOLLEGE">College</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin/addCourse">Course</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin/viewFeedback">Feedback</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin/addJOB">Job</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;