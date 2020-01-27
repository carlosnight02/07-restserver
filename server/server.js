require('./config/config');

const express = require('express');
const app = express();
const mongoose= require('mongoose');

const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true}, (err, res) => {
    if(err) throw err;
    console.log("BD online")
});

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando puerto ${process.env.PORT}`)
})