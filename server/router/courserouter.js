const express = require("express");
const router = express.Router()

const CourseController = require('../controller/courseController')

router.post('/addCourse/:id', CourseController.addCourse)
// router.get('/getCOLLEGE',Collegecontroller.getcollege)
// router.get('/getcollegebyid/:id',Collegecontroller.getcollegebyid)
// router.put('/putCOLLEGE/:id',Collegecontroller.updatecollege)
// router.delete('/deleteCOLLEGE/:id',Collegecontroller.deletecollege)

module.exports = router; 