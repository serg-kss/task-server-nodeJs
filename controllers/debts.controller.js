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

   deleteService(rec, res){
      const index = rec.params.id;
      if(index < 0 || index > services.length){
         res.json({error: 'error: wrong id'})          
      } else {
         services.pop(services[index])
         for(let i= 0; i<debts.length; i++){
            debts[i].pop(debts[index])
         }
         res.json(services)
      }
   }

   getServices(rec, res){
      res.json(services)
   }

   getDebts(rec, res){
      res.json(debts)
   }

}

module.exports = new DebtsController()