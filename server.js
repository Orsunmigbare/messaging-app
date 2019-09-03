const express = require('express');
const dotenv  = require('dotenv');
const cors = require('cors');
const db = require('./db')
const app = express();
const body_parser = require('body-parser');
const api_router = require('./routes/api');
const path = require('path');
dotenv.config()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: "http://localhost:3001"}))
app.use(body_parser.urlencoded({extended: false}))
app.get('/', (req,res,next)=>{res.sendfile(path.join(__dirname, 'public', 'index.html'))})
app.use(body_parser.json());
app.use('/api', api_router)
db()
app.listen(port,()=>{console.log(`Server started at port : ${port}`)})