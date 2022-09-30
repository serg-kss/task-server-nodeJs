let debts = require('../data/debts')
let services = require('../data/services')


class DebtsController{


   createService(rec, res){     
      const newService = {         
         service: rec.body.services,
      }
      services.push(newService);

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