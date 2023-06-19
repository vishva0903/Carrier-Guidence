import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// main
import LandingPage from "./scenes/main/LandingPage/LandingPage"
import Login from "./scenes/main/Login/Login"
import Register from "./scenes/main/Register/Register"

// admin
import AdminHome from "./scenes/admin/Home/Admin"
import AddJob from "./scenes/admin/Job/AddJob/AddJob"
import ViewJob from "./scenes/admin/Job/ViewJob/ViewJob"
import AddCourse from "./scenes/admin/Course/AddCourse/AddCourse"
import ViewCourse from "./scenes/admin/Course/ViewCourse/ViewCourse"
import AddCollege from "./scenes/admin/College/AddCollege/AddCollege"
import ViewCollege from "./scenes/admin/College/ViewCollege/ViewCollege"


// user
import College from "./scenes/user/Colleges/Colleges"
import AddFeedback from "./scenes/user/Feedback/AddFeedback/AddFeedback"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* main */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* admin */}
          <Route path="/admin">
            <Route index element={<AdminHome />} />
            <Route path="AddJob" element={<AddJob />} />
            <Route path="ViewJob" element={<ViewJob />} />
            <Route path="AddCourse" element={<AddCourse />} />
            <Route path="ViewCourse" element={<ViewCourse />} />
            <Route path="AddCollege" element={<AddCollege />} />
            <Route path="viewCollege" element={<ViewCollege />} />
          </Route>

          {/* user */}
          <Route path="/user">
            <Route index element={<College />} />
            <Route path="AddFeedback" element={<AddFeedback />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App