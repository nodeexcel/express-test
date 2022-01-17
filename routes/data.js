const express = require('express')
const {sequalize} = require('../Database/connection')
const Data = require('../Models/data')

const router = express.Router()

router.get('/values/', async(req,res)=>{
    try{
        const data = await Data.findAll()
        
        res.status(200).send(data)
    }catch(err){
        res.status(400).send(err.message)
    }   
})

router.post("/values/", async(req, res) => {
  try {
    const {checkBox, radioButton, id} = req.body
    let data
    if(id){
        data = await Data.findOne({where:{id: id}})
        data.checkBox= checkBox
        data.radioButton = radioButton
        data.save()
    }else{
        data = await Data.create({
          checkBox,
          radioButton,
        });
    }
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router