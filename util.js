const util = {
    create_response: ({res,status,message,data})=>{
        let response;
        if(status=== 'failed'){
            res.status(500).json({status,message,data: ''})
            return
        }else{
            response = {status,message,data: data ?  data : '' }
        }
        return response;
    }
}

module.exports = util