const users = require('../models/users');
const messages = require('../models/messages');
let {create_response} = require('../util')

const actions = {
    get_all_messages : (req,res,next)=>{
        messages.find().exec((err,document)=>{
            if(err){
                create_response({status: 'failed',message: 'An error occured while trying getting messages'})
            }
            req.data = create_response({status: 'success',data: document})
            next()
        })
    },
    delete_message: async (req,res,next)=>{
        let {message_id} = req.params;
        messages.deleteOne({_id: message_id}).exec()
        .then((doc)=>{
            users.updateMany({},{$pull : {messages: message_id}}).exec()
            .then((doc)=>{
                req.data = create_response({status: 'success', message: 'Message deleted succcesfully'})
                next()
            })
            .catch((err)=>{
                create_response({status: 'failed', message: err.message})
            })
        })
        .catch((err)=>{
            req.data = create_response({status: 'failed', message: 'An error occured while deleting the message'})
        })
    },
}

module.exports = actions;