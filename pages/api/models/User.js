import mongoose from "mongoose";

// student
const UserSchema = mongoose.Schema({
    name : {
        type: String
    },
    age : {
        type : Number
    },
    email : {
        type: String
    },
    password : {
        type: String
    }
});

// Student
mongoose.models = {};
const model = mongoose.model('User', UserSchema);

export default model;