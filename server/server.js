const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const app= express();
dotenv.config()
const port=process.env.PORT;
const bodyParser = require('body-parser')
const CollegeRouter=require('./router/collegerouter')
const FeedbackRouter=require('./router/feebackrouter')
const JobRouter=require('./router/jobrouter');
const User = require('./router/user');
app.use(bodyParser.json())

app.use('/college',CollegeRouter)
app.use('/feedback',FeedbackRouter)
app.use('/job',JobRouter)
app.use('/',User)
app.listen(port,()=>{
    console.log(`app listening to port ${port}`)
})



mongoose.connect(process.env.MONGODB,{
})
.then(()=>console.log("mongoose connected"))
.catch((err)=>console.log("error"))


