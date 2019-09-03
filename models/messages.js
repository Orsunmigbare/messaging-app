const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messages_schema = new Schema({
    message: String,
    date: Number,
    title: String
});

const messages = mongoose.model('messages',messages_schema);
module.exports = messages;