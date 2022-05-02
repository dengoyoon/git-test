// 테스트 용 API
import mongoose from "mongoose";
import studentModel from "./models/Student";

import init from "./init";

init();

// var newStudent = new studentModel({name:'윤두현', address:'경기도 고양시 행신동', age:'10'});

// newStudent.save(function(error, data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Saved!')
//     }
// });

export default function handler(req, res) {
    console.log(req.method);

    studentModel.find(function(error, students){
        console.log('--- GET STUDENTS ---');
        if(error){
            console.log(error);
        }else{
            console.log(students);
            res.status(200).json({ students })
        }
    })
}