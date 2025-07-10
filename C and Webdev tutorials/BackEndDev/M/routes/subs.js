const express = require('express')
const router = express.Router()

//getting all
router.get('/', (req, res)=>{
    res.send('hello world')
})

///getting one
router.get('/:id',(req, res)=>{
    res.send(req.params.id)
})

//Creating one 
router.post('/', (req, res)=>{

})

//Updating One
router.patch('/:id', (req, res)=>{
    req.params.id
})

//put updates all the other information about the id,
// whereas patch only updates specific details

//deleting one
router.delete('/:id', (req, res)=>{
    req.params.id
})

module.exports = router