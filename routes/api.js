const express = require('express');
const Router = express.Router();
let {get_all_messages,delete_message} = require('../actions/get_actions');
let {send_message,edit_message,create_user} = require('../actions/post_actions');

Router.get('/get_messages', get_all_messages, (req,res,next)=>{
    res.json(req.data)
})
Router.post('/create_user', create_user, (req,res,next)=>{
    res.json(req.data)
})
Router.get('/delete_message/:message_id', delete_message, (req,res,next)=>{
    res.json(req.data)
})
Router.post('/edit_message', edit_message, (req,res,next)=>{
    res.json(req.data)
})
Router.post('/send_message', send_message, (req,res,next)=>{
    res.json(req.data)
})

 module.exports = Router;