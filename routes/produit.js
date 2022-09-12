const express = require('express')
const router = express.Router()

const {all,one,createOne,updateOne,deleteOne , affect, desaffect } = require('../controllers/produitControllers')



router.get('/ShowAll',all)
router.get('/ShowOne/:id',one)
router.post('/create',createOne)
router.put('/update/:id',updateOne)
router.delete('/delete/:id',deleteOne)

router.put('/affect/:idUser/:idProduit',affect)
router.put('/affect/:idUser/:idProduit',desaffect)

module.exports = router;