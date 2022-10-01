let users = require('../data/users')
let debts = require('../data/debts')
const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


function debtCreation1 (){
  
   for (let i = 0; i< users.length;i++){
      debts[i].push({
         debt_sum: random(1,3000),
         debt_date: '21.05.2022',
         informed: 'да'})
   }
}
module.exports = debtCreation1