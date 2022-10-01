let users = require('../data/users')
let debts = require('../data/debts')
let newUserDebts = require('../data/debtsCreation')

class UserController {

   createUser(rec, res){
      let newUserID = users[users.length-1].id + 1;
      const newUser = {
         id: newUserID,
         name: rec.body.name, 
         surname: rec.body.surname,
         email: rec.body.email,
         password: rec.body.password
      }
      const newUserDept = newUserDebts();
      users.push(newUser);
      debts.push(newUserDept);
      res.json({createUser: 'Ok'});
   }
   getUsers(rec, res){
      res.json(users)
   }

   getOneUser(rec, res){
      const user_id = rec.params.id;
      if(user_id <= 0 || user_id > users.length){
         res.json({error: 'error: wrong id'})          
      } else {
         for(let i = 0; i<users.length; i++){
            if(users[i].id == user_id){
               res.json(users[i])
            }         
         }
      }
   }
   updateUser(rec, res){
      const user_id = rec.params.id;     
      if(user_id <= 0 || user_id > users.length){
         res.json({error: 'error: wrong id'})          
      } else {
         for(let i = 0; i<users.length; i++){
            if(users[i].id == user_id){
               users[i]={
                  id: user_id,
                  name: rec.body.name, 
                  surname: rec.body.surname,
                  email: rec.body.email,
                  password: rec.body.password
               }
               res.json(users[i])
               break;
            }         
         }
      }
   }
   deleteUser(rec, res){
      const index = rec.params.id;
      if(index < 0 || index > users.length){
         res.json({error: 'error: wrong id'})          
      } else {
         users.pop(users[index])
         debts.pop(debts[index])
         res.json(users)
      }
   }
}

module.exports = new UserController()