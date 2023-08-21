const express = require('express');
const Model = require('../models/model');
const Character = require('../models/character');
const Spell = require('../models/spells');

const router = express.Router()

module.exports = router;

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Create a new character Method
router.post('/createCharacter', async (req, res) => {
    const data = new Character({
        name: req.body.name,
        spellList: req.body.spellList
    })
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get all Spells
router.get('/getAllSpells', async (req, res) => {
    try{
        const data = await Spell.find({}, null, {limit: 20});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get all Characters
router.get('/getAllCharacters', async (req, res) => {
    try{
        const data = await Character.find({}, null, {limit: 20});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Spell.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Add spell to character list by ID Method
router.patch('/addSpell/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await Character.findByIdAndUpdate(
            id, updatedData
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Character.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
