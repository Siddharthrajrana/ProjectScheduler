import mongoose from 'mongoose';
import express from 'express';

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  teacherId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Teacher = mongoose.model('teacher-detail', teacherSchema);

const router = express.Router();

// Get all teachers
router.get('/', async (req, res, next) => {
  try {
    const teachers = await Teacher.find().exec();
    res.json(teachers); // Send the teacher details as JSON response
  } catch (error) {
    console.log('Failed to retrieve Teacher Details:', error);
    res.status(500).json({ error: 'Failed to retrieve Teacher Details' });
  }
});

// Delete a teacher by ID
router.delete('/:id', async (req, res, next) => {
  const teacherId = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId).exec();
    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.log('Failed to delete Teacher:', error);
    res.status(500).json({ error: 'Failed to delete Teacher' });
  }
});

export default router;
