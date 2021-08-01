import express from 'express';
import mongoose from 'mongoose';
import route from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json({extended:true})); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors());
app.use('/users', route);

const URL = 'mongodb+srv://Abhi:******@crud-with-mern-stack.wrggx.mongodb.net/CRUD-With-MERN-Stack?retryWrites=true&w=majority';
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then(() => {
    app.listen(PORT, () =>{
        console.log(`Server is running on ${PORT}`);
    });
}).catch(error => {
    console.log('Erroe' , error.message);
});



