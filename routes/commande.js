const express = require('express')
const router = express.Router()

const {affectProductToCommande,desaffectProductToCommande,desaffectCommandeFromUser,CreateCommande} = require('../controllers/commandeControllers')

router.post('/create',CreateCommande)
router.put('/affectProductToCommande/:idCommande/:idProduct',affectProductToCommande)
router.put('/desaffectProductToCommande/:idCommande/:idProduct',affectProductToCommande)
router.put('/affectProductToCommande/:idUser/:idCommende',desaffectProductToCommande)
router.put('/affectProductToCommande/:idUser/:idCommende',desaffectCommandeFromUser)



module.exports  = router;