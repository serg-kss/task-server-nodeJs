let users = require('../data/users')

class AuthController {

   login(rec, res){

      const authentication = {
         email: rec.body.email,
         password: rec.body.password
      }

      for(let i = 0; i < users.length; i++){
         if(users[i].email == authentication.email && users[i].password == authentication.password){
            res.json([users[i], {auth: 'Ok'}])
         }       
      }    
      res.json([{auth: 'Wrong data, try again'}])                  
   }
}

module.exports = new AuthController()