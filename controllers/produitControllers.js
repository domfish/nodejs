const produit = require('../models/produit')
const user = require('../models/user')




exports.all = async (req, res) => {
  try {
    const produits = await produit.find(req.body)
    res.status(200).send(produits)

  } catch (error) {
    res.status(500).send({ message: 'erreur serveur ' })
  }
}

exports.one = async (req, res) => {
  try {
    await produit.findOne(req.params.id)
    res.status(200).send({ message: 'produit trouvé', })
  } catch (error) {
    res.status(500).send({ message: 'erreur serveur' })
  }
}
exports.createOne = async (req,res)=>{
  try {
    await produit.create(req.body)
    res.status(200).send({message : 'produit cree'})
    
  } catch (error) {
    res.status(500).send({message : 'erreur serveur'})
  }
}
exports.updateOne = async (req, res )=> {
  try {
    await produit.findByIdAndUpdate(req.params.id , req.body )
    res.status(200).send({message : 'produit modifié'})
  } catch (error) {
    res.status(500).send({message : 'erreur serveur'})
  }
}
exports.deleteOne = async (req,res)=> {
  try {
    await produit.findByIdAndDelete(req.params.id)
    res.status(200).send({message : 'produit supprimé'})
  } catch (error) {
    res.status(500).send({message : 'erreur serveur'})
  }
}


exports.affect = async (req,res)=>{
  try {
    await user.findByIdAndUpdate(req.params.idUser,{$pull : {produit : req.body.idProduit}},  {new:true} )
    res.status(200).send({message : 'produit affecté avec succés'})

  }catch{
    res.status(500).send({message : "erreur serveur"})        
  }
}
exports.desaffect = async (req,res)=>{
  try {
    await user.findByIdAndUpdate(req.params.idUser,{$push : {produit : req.body.idProduit}},  {new:true} )
    res.status(200).send({message : 'produit desaffecté avec succés'})

  }catch{
    res.status(500).send({message : "erreur serveur"})        

  }
}


