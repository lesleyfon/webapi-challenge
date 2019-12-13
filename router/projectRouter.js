const express = require('express');
router = express.Router();
const db = require('./../data/helpers//projectModel');
const { validateProjectBody , validateProjectId} = require('./../middleware/projectmiddleware')


router.get('/', async (req, res)=>{
    try {
        res.status(200).send(await db.get())
    } catch (err){
        res.status(404).json({
            message: 'Error', 
            error: err
        })
    }
})
router.post('/', validateProjectBody(), async (req, res)=>{

    try {
        res.status(200).send(await db.insert(req.project));
    } catch (err){
        res.status(404).json({
            message: 'Error', 
            error: err
        })
    }
})
router.put('/:id', validateProjectId(), validateProjectBody(), async (req, res)=>{
    const {name, description} = req.body;
    const id = req.id;
 
    try {
        res.status(200).send(await db.update(id, {name, description}));
    } catch (err){
        res.status(404).json({
            message: 'Error', 
            error: err
        })
    }
})






module.exports= router