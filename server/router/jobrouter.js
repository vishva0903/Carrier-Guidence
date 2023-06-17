const express=require("express");
const router=express.Router()

const Jobcontroller=require('../controller/jobcontroller')

router.post('/addJOB',Jobcontroller.addjob)
router.get('/getJOB',Jobcontroller.getjob)
router.get('/getJOB/:id',Jobcontroller.getjob)
router.put('/putJOB/:id',Jobcontroller.updatejob)
router.delete('/deleteJOB/:id',Jobcontroller.deletejob)

module.exports = router; 