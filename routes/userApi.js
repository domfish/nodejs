const express = require('express')
const router = express.Router()
const {register , login,all,one,createOne,updateOne,deleteOne } = require('../controllers/userApiControllers')



router.get('/ShowAll',all)
router.get('/ShowOne/:id',one)
router.put('/update/:id',updateOne)
router.delete('/delete/:id',deleteOne)
router.post('/register',register)
router.post('/login',login)





module.exports  = router;



