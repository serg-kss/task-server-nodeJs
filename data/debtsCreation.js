let services = require('../data/services')
const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


function debtCreation (){
  
   let arr = [];
   for (let i = 0; i< services.length;i++){
      arr[i]={
         debt_sum: random(1,3000),
         debt_date: '21.05.2022',
         informed: 'да'};     
   }
   return arr;
}
module.exports = debtCreation