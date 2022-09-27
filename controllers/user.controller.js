
let users = require('../data/users')
let depts = require('../data/depts')

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
      const newUserDept = {
         id:newUserID,
         electricity: 'Електричество',
         electricity_sum: 4535,
         electricity_date: '21.05.2022',     
         apartment: 'ОСББ',
         apartment_sum: 567,
         apartment_date: '22.05.2022',     
         water: 'Вода',
         water_sum: 212,
         water_date: '23.05.2022' 
      }
      users.push(newUser) 
      depts.push(newUserDept)

      console.log(users)
      console.log(depts)

      res.json({createUser: 'Ok'})
   }

   getUsers(rec, res){
      res.json([users,depts])
   }

   getOneUser(rec, res){
      const user_id = rec.params.id;

      if(user_id <= 0 || user_id > users.length){
         res.json({error: 'error: wrong id'})          
      } else {
         for(let i = 0; i<users.length; i++){
            if(users[i].id == user_id){
               res.json([users[i], depts[i]])
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
      const user_id = rec.params.id;

      if(user_id <= 0 || user_id > users.length){
         res.json({error: 'error: wrong id'})          
      } else {
         for(let i = 0; i<users.length; i++){
            if(users[i].id == user_id){
               users.pop(users[i])
               depts.pop(depts[i])
               res.json(users)
               break;
            }         
         }
      }
   }

}

module.exports = new UserController()