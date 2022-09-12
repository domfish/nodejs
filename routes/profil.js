const express = require('express');
const passport = require('passport');
const user = require('../models/user');
const router = express.Router();

router.get('/profil', passport.authenticate('bearer', { session: false }),async (req,res)=>{
  const data = await user.findById(req.params.id)
    res.status(200).json({ message : 'welcome to dashboard',data})
})
module.exports = router;

