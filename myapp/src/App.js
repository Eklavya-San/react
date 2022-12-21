import { Container, Navbar, Row, Col, Nav } from "react-bootstrap";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";

import EditStudent from "./components/edit-student.component";

import StudentList from "./components/student-list.component";
import StudentForm from "./components/StudentForm";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React MERN stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" exact element={<StudentForm />} />
                  <Route
                    exact
                    path="/create-student"
                    element={<CreateStudent />}
                  />
                  <Route exact path="/edit-student" element={<EditStudent />} />
                  <Route exact path="/student-list" element={<StudentList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
