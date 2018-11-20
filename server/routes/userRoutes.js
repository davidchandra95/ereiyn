'use strict'

module.exports = (app) => {
   var user = require('../controllers/userController');

   app.route('/api/v1/signup')
      .post(user.signUp)

   app.route('/api/v1/signin')
      .post(user.signIn)
};