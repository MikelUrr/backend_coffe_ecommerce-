import mongoose from "mongoose";
import mongodb from "../config/mongodb.js";



const userSchema = new mongoose.Schema({
    fullname: {
      type: String,
      
    },
   
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    userActive: {
        type: Boolean,
        default: true,
    },
    userType:{
      type: String,
      default: "user"
    },
    createdAt: {
      type: Date,
      default: Date.now
  },
    
  });
  
  const userModel = mongoose.model('user', userSchema);
  
 export default userModel;