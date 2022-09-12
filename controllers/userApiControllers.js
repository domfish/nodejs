const user = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




exports.all = async (req, res) => {
    try {
      const user = await user.find(req.body)
      res.status(200).send(user)
  
    } catch (error) {
      res.status(500).send({ message: 'erreur serveur ' })
    }
  }
  
  exports.one = async (req, res) => {
    try {
      await user.findOne(req.params.id)
      res.status(200).send({ message: 'user trouvé', })
    } catch (error) {
      res.status(500).send({ message: 'erreur serveur' })
    }
  }
  exports.updateOne = async (req, res )=> {
    try {
      await userFound.findByIdAndUpdate(req.params.id , req.body )
      res.status(200).send({message : 'user modifié'})
    } catch (error) {
      res.status(500).send({message : 'erreur serveur'})
    }
  }
  exports.deleteOne = async (req,res)=> {
    try {
      await user.findByIdAndDelete(req.params.id)
      res.status(200).send({message : 'user supprimé'})
    } catch (error) {
      res.status(500).send({message : 'erreur serveur'})
    }
  }

exports.register = async (req,res) => {
    const userFound = await user.find({mail  : req.body.email})
    if (userFound) {
        const salt = bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.password , salt)
        req.body.password = hash    
        await user.create(req.body)
        res.status(200).send({message : 'utilisateur crée avec succés' })
    }else{
        res.status(400).send({message : 'adresse email déja existe'})
    }
}

exports.login = async (req,res)=>{
    const dataFound = await user.findOne({mail : req.body.email})
    if (dataFound){
        const validPassword = await bcrypt.compare(req.body.password , dataFound.password)
        if(validPassword){
            const data = {
                id : dataFound._id
            }
            const token = jwt.sign(data, 'nottoday')
            res.status(200).send({message : 'vous etes bien connécté', token: token})
        }else {

            res.status(400).send('mot de passe ou email incorrecte ')
        }
    }else {
        res.status(400).send('l\'utilisateur n\'existe pas ')

    }
}

