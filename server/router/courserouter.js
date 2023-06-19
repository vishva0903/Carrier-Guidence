const express = require("express");
const router = express.Router()

const CourseController = require('../controller/courseController')

router.post('/addCourse/:id', CourseController.addCourse)
router.get('/getCourse', CourseController.getAllCourses)
router.get('/getCourseByCollege/:id', CourseController.getCourseByCollege)
// router.put('/putCOLLEGE/:id',Collegecontroller.updatecollege)
// router.delete('/deleteCOLLEGE/:id',Collegecontroller.deletecollege)

module.exports = router; 