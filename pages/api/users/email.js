// 회원가입 API
// 이름, 나이, 이메일, 비밀번호

import userModel from "../models/User";
import init from "../init";
import responseMessage from "../../../config/response-message"

init();

export default function handler(req, res) {
    const apiMethod = req.method;
    const reqBody = req.body;

    if (apiMethod == "POST") {
        const newUser = new userModel(reqBody);
        newUser.save(function(error, data){
            if(error){
                console.log(error);
                res.status(200).json({ 
                    isSuccess : false,
                    code: 4000,
                    message: error
                })
            }else{
                console.log('Saved!')
                res.status(200).json({ 
                    isSuccess : true,
                    code: 1000,
                    message: responseMessage[1000] ,
                    result : data
                })
            }
        });
    } else {
        res.status(200).json({ 
            isSuccess : false,
            code: 2000,
            message: responseMessage[2000]
        })
    }
}