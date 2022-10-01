let debts = require('../data/debts')
let services = require('../data/services')
let debtsCreator = require('../data/debtsCreation1')


class DebtsController{


   createService(rec, res){     
      const newService = {         
         debt: rec.body.debt,
      }
      services.push(newService);
      debtsCreator();
      res.json(services);
   }

   getServices(rec, res){
      res.json(services)
   }

   getDebts(rec, res){
      res.json(debts)
   }

}

module.exports = new DebtsController()