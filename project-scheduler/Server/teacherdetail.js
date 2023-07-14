import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model('Teacher-Detail', UserSchema);

const registerTeacher = async (userData) => {
  try {
    const user = new User(userData);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      return userData;
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    throw new Error("Something went wrong");
  }
};

export default registerTeacher;
