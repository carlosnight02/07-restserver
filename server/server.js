const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

 
app.get('/usuario', function (req, res) {
  res.json('getUsuario')
});
 
app.post('/usuario', function (req, res) {

    let body= req.body
    
    res.json({
        persona:body
    });
});

app.put('/usuario/:id', function (req, res) {

    let id= req.params.id;
    res.json({
        id
    });

});

app.put('/usuario', function (req, res) {
    res.json('deletUsuario')
});


app.listen(3000, ()=>{
    console.log('Escuchando puerto 3000')
})