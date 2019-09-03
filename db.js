const mongoose = require('mongoose');
const connect = ()=>{
    console.log(typeof(process.env.db_connection_string))
    const db = mongoose.connection
    mongoose.connect(
        process.env.db_connection_string,
        {useNewUrlParser: true,  useCreateIndex: true}
    )
    db.once('open',()=>{console.log('connected to the database')});
    db.on('error', ()=>{console.log('error connecting to the database.. connection lost')})
}

module.exports = connect