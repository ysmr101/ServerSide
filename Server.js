const express = require("express");
const dbConnect = require("./dbConnect");
const bodyParser = require('body-parser')

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(express.static('node_modules'));
app.set('view engine', 'ejs')
//const nameRoute = require('./routes/testRoute');
///app.use("/api/name", nameRoute);
//const path = require("path");

const port = 5000;
app.get("/", (req, res) => res.send("Hello World!"));


const events = require('./routes/event-routes')
app.use('/events', events)
// bring user routes
const users = require('./routes/userRoute')
app.use('/users', users)


app.listen(port, () => 

console.log(`Hello Node ${port} `)

);
