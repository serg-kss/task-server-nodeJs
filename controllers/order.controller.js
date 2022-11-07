const Model = require("../models/orders")


class OrderController{

  async getOrders(rec, res){
      try{
         const all_orders = await Model.find({});
         res.json(all_orders);
      }catch(e){
         res.json({'error':'error'});
      }     
   }

   async  createOrder(rec, res){
      const data = rec.body.name;
      try{
         const new_order = new Model({
            name: data,
         })
         await new_order.save()
         res.json({createOrder: 'Ok'});
      }catch(e){
         res.json({createOrder: 'Not Ok'});
      }
   }
   
}

module.exports = new OrderController()

