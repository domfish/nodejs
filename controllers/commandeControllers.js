const produit = require('../models/produit')
const user = require('../models/user')
const commande = require('../models/commande')

exports.CreateCommande =async(req,res)=>{
    try {

        await commande.create(req.body)
        res.status(200).send({message : 'commande crée'})
    }catch {
        res.status(500).send({message : "erreur serveur"})
    }
}
exports.affectProductToCommande = async(req,res)=>{
    try {
        await commande.findByIdAndUpdate(req.params.idcommande,{$pull : {produit : req.body.idProduit}},  {new:true} )
        res.status(200).send({message : 'produit affecté avec succés'})
      }catch{
        res.status(500).send({message : "erreur serveur"})        
      }
}

exports.desaffectProductToCommande = async(req,res)=>{
    try {
        await commande.findByIdAndUpdate(req.params.idcommande,{$push : {produit : req.body.idProduit}},  {new:true} )
        res.status(200).send({message : 'produit desaffecté avec succés'})
      }catch{
        res.status(500).send({message : "erreur serveur"})        
    
      }
}

exports.affectCommandeFromUser =async (req,res)=>{
    try {
        await user.findByIdAndUpdate(req.params.iduser,{$pull : {produit : req.body.idcommande}},  {new:true} )
        res.status(200).send({message : 'commande affecté avec succés'})
      }catch{
        res.status(500).send({message : "erreur serveur"})        
      }
}
exports.desaffectCommandeFromUser =async (req,res)=>{
    try {
        await user.findByIdAndUpdate(req.params.iduser,{$pull : {produit : req.body.idcommande}},  {new:true} )
        res.status(200).send({message : 'commande desaffecté avec succés'})
      }catch{
        res.status(500).send({message : "erreur serveur"})        
      }
}


