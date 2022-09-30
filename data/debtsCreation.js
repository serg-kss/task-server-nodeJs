
const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


let debtCreation = (id)=>{
   return[
      {
         id: id
      },
      {
         debt: 'Электроэнергия',
         debt_sum: random(1,3000),
         debt_date: '21.05.2022',
         informed: 'yes'
      },     
      {
         debt: 'Газ',
         debt_sum: random(1,2000),
         debt_date: '22.05.2022',
         informed: 'yes'
      },     
      {
         debt: 'Вода',
         debt_sum: random(1,2000),
         debt_date: '23.05.2022',
         informed: 'no'
      }
   ]
}
module.exports = debtCreation