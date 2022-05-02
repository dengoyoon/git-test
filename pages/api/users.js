// 유저 정보를 모두 조회하는 API

import init from "./init";
import responseMessage from "../../config/response-message"
import userModel from "./models/User";

init();

export default function handler(req, res) {
    userModel.find( function(error, data){
        if(error){
            console.log(error);
        }else{
            if (data.length == 0) {
                res.status(200).json({ 
                    isSuccess : false,
                    code: 4000,
                    message: responseMessage[4000]                })
            } else {
                res.status(200).json({ 
                    isSuccess : true,
                    code: 1000,
                    message: responseMessage[1000] ,
                    result : data
                })
            }
        }
    })
}