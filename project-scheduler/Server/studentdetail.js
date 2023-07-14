import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
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
    date:{
        type:Date ,
        default:Date.now,
    },
});

const User = mongoose.model('Student-detail' , UserSchema);

const registerStudent = async (userData)=>{
    try{
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

export default registerStudent;