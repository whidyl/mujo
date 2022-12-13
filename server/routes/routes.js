const express = require('express');
const Model = require('../models/model');
var bodyParser = require('body-parser')

const router = express.Router()

var jsonParser = bodyParser.json()

router.get('/test', (req, res) => {
    res.send('hello world')
})

router.post('/postTest', jsonParser, async (req, res) => {
    const data = new Model({
        name: req.body.name,
        done: req.body.done
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
})

module.exports = router;