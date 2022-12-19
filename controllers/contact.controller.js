const Model = require("../models/contact")



class ContactUsController{

  async getMessages(rec, res){
      try{
         const all_messages = await Model.find({});
         res.json(all_messages);
      }catch(e){
         res.json({'error':'error'});
      }     
   }

   async saveMessage(rec, res){
      const name = rec.body.name;
      const email = rec.body.email;
      const message = rec.body.message;
      try{
         const new_message = new Model({
            name: name,
            email: email,
            message: message
         })
         await new_message.save()
         res.json({new_message: 'Ok'});
      }catch(e){
         res.json({new_message: 'Not Ok'});
      }
   }
   
}

module.exports = new ContactUsController()

