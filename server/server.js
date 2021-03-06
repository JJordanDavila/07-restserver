require('./config/config');
const express = require('express')
const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let port = process.env.PORT;

app.get('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "error"
        })
    } else {
        res.json({
            persona: body
        });

    }
})

app.put('/usuario', function(req, res) {
    res.json('put usuario')
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});