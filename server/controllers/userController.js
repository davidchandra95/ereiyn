'use strict'

const User = require('../models/userModel');

exports.signUp = (req, res) => {
   let newUser = req.body;

   User.signUp(newUser, (err, user) => {
      if (err) {
         return res.send(err);
      }

      res.json(user);
   });
}

exports.signIn = (req, res) => {
   let user = req.body;

   User.signIn(user, (err, user) => {
      if (err) {
         return res.send(err);
      } 

      res.json(user);
   })
}