const users = require('../models/users');
const messages = require('../models/messages');
const {create_response} = require('../util');

const actions = {
    send_message: async (req,res,next)=>{
        let {message,title} = req.body;
        try {
             let message_doc = await messages.create({message, title,date: new Date().valueOf()});
            users.updateMany({}, {$push: { messages: message_doc._id}})
            .exec()
            .then((data)=>{
                req.data = create_response({status: 'success', message: 'Messages sent sucesfully'});
                next();
            })
            .catch((err)=>{
                req.data = create_response({status: 'failed', message: 'An error occured while sending messsage',res})
            })

        }catch(err){
            create_response({status: 'failed', message: 'An error occured while creating messsage',res});
        }

    },
    edit_message: (req,res,next)=>{
        let {message_id, message, title} = req.body;
        messages.findOne({_id: message_id}).update({message, title}).exec()
        .then((data)=>{
            req.data = create_response({status: 'success', message: 'Message updated'})
            next()
        })
        .catch((err)=>{
            req.data = create_response({status: 'failed', message: 'An error occured while editing messsage',res});
            
        })
    },
    create_user: (req,res,next)=>{
        let {first_name,last_name} = req.body;
        try{
            let user =  users.create({first_name,last_name});
           req.data =  create_response({status: 'success', message: 'User created succesfully'})
            next()
        }catch(err){
            create_response({status: 'failed', message: err,res})
        }

    }

}

module.exports = actions