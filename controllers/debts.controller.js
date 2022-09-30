let debts = require('../data/debts')


class DebtsController{

   createDebt(rec, res){
      const userID = rec.body.id;
      const newDebt = {
         debt: rec.body.id,
         debt_sum: rec.body.debt_sum,
         debt_date: rec.body.debt_date,
         informed: rec.body.informed
      }
      debts[userID-1].push(newDebt);
      res.json({createDebt: 'Ok'});
   }

   getDebts(rec, res){
      res.json(debts)
   }

}

module.exports = new DebtsController()