const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'messages'}],
})

const users  = mongoose.model('users',user_schema);
module.exports = users;