let users = require('../data/users')
let services = require('../data/services')
const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


function debtCreation (){

   let array = [];

   for (let i = 0; i<users.length; i++){
      let inner_arr = [];
      for (let a = 0; a< services.length;a++){
         inner_arr[a]={
            debt_sum: random(1,3000),
            debt_date: '21.05.2022',
            informed: 'yes'};
      };
      array[i] = inner_arr;
   }
   return array;
}
module.exports = debtCreation