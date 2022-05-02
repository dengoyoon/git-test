import mongoose from "mongoose";

// student
const StudentSchema = mongoose.Schema({
    name : {
        type: String,
    },
    address : {
        type: String,
    },
    age : {
        type: Number,
    }
});

// Student
mongoose.models = {};
const model = mongoose.model('Student', StudentSchema);

export default model;