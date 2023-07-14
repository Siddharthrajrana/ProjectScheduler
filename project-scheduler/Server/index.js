import express from 'express';
import cors from 'cors';
import registerTeacher from './teacherdetail.js';
import registerStudent from './studentdetail.js';
import mongoose from 'mongoose';
import teacherRouter from './readTeacherDetail.js';
import studentRouter from './readStudentDetails.js';

mongoose.connect('mongodb://127.0.0.1:27017/ProjectScheduler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
})
  .then(() => {
    console.log('Connected to the ProjectScheduler database');
  })
  .catch((error) => {
    console.log('Error connecting to the database:', error);
  });











const app = express();
const port = 9001;

app.use(express.json());
app.use(cors());

app.use('/dis-teacher', teacherRouter); 
app.use('/dis-student', studentRouter);
app.use('/delete-teacher', teacherRouter);


app.post("/register", async (req, resp) => {
  try {
    const result = await registerTeacher(req.body);
    resp.send(result);
  } catch (e) {
    resp.send("Something went wrong");
  }
});


app.post("/registerstudent", async(req,resp)=>{
  try{
    const result = await registerStudent(req.body);
    resp.send(result);
  }catch(e){
    resp.send("Something went Wrong ");
  }

});


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});




