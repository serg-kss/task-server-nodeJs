const Model = require("../models/orders")
const TelegramBot = require('node-telegram-bot-api')
const token = 'xxxxx:xxxxxxAxxAxxFxxixxxAx-xxxxxxxxxxxxx'
const bot = new TelegramBot(token, {polling: true});
const chatId = 1234567890123;


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
         bot.sendMessage(
            chatId,
            `New order was made №:${new_order.order_num}: 
            - Buyer:  ${new_order.name}; 
            - Phone:  ${new_order.phone}; 
            - Mehod:  ${new_order.method}; 
            - Post:  ${new_order.post_data}; 
            - Goods:  ${new_order.goods}; 
            - Total:  ${new_order.amount};`
         );
      }catch(e){
         res.json({createOrder: 'Not Ok'});
      }
   }
   
}

module.exports = new OrderController()

