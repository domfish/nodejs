const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require ('dotenv')



dotenv.config()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
require('./db/connect')

// routes 
const user = require('./routes/userApi')
const produit = require('./routes/produit')
const profil =require('./routes/profil')
const commande = require('./routes/commande')

// 

//use routes
app.use('/user',user)
app.use('/produit',produit)
app.use('/',profil)
app.use('/commande',commande)




app.get('/',(req,res)=>{
    res.status(200).send({message : 'le serveur est en marche' })
})

app.listen(process.env.PORT || 3000)