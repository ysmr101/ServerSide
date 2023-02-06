const mongoose = require('mongoose')


const URL ="mongodb+srv://ysmr:Atfl1234@cluster0.vymb8lv.mongodb.net/ProjectDB";

mongoose.connect(URL)


let connectionObj = mongoose.connection;

connectionObj.on('connected', () => {
    console.log('Mongo DB Connection Successfull');
})

connectionObj.on('error', () => {
    console.log('Mongo DB Connection Failed')
})
