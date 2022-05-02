// 로그인 API
// 이메일, 비밀번호
import userModel from "../models/User";
import init from "../init";
import responseMessage from "../../../config/response-message"

init();

export default function handler(req, res) {
    const apiMethod = req.method;
    const reqBody = req.body;

    if (apiMethod == "POST") {
        userModel.find(reqBody, function(error, data){
            if(error){
                console.log(error);
            }else{
                if (data.length == 0) {
                    res.status(200).json({ 
                        isSuccess : false,
                        code: 4000,
                        message: responseMessage[4000]                
                    })
                } else {
                    res.status(200).json({ 
                        isSuccess : true,
                        code: 1000,
                        message: responseMessage[1000],
                        result : data
                    })
                }
            }
        })
    } else {
        res.status(200).json({ 
            isSuccess : false,
            code: 2000,
            message: responseMessage[2000]
        })
    }
}