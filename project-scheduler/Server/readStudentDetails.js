import mongoose from 'mongoose';
import express from 'express';


const studetSchema = new mongoose.Schema({
    studentName :{
        type : String ,
        required : true ,
        unique:true ,
    },
    studentRoll:{
        type:String ,
        required:true ,
        unique : true ,
    },
})


const Student = mongoose.model('student-detail' , studetSchema);

/*Student.find().then(function(comments, error) {
  if (error) {
      console.log(error);
  } else {
      console.log(comments); 
    }
});*/

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
      const students = await Student.find().exec();
      res.json(students); // Send the teacher details as JSON response
    } catch (error) {
      console.log('Failed to retrieve Student Details:', error);
      res.status(500).json({ error: 'Failed to retrieve Student Details' });
    }
  });

export default router;



