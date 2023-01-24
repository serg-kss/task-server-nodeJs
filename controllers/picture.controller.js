const Model = require("../models/picture")


class PictureController{
   async  uploadPic(rec, res){
      try{
         const new_pic = new Model({
            pic: rec.body.pic,
         })
         await new_pic.save()
         res.json({pic: 'Ok'});
      }catch(e){
         res.json({pic: 'Not Ok'});
      }
   }

   async getPictures(rec, res){
      try{
         const all_pic = await Model.find({});
         res.json(all_pic);
      }catch(e){
         res.json({pic:'error'});
      }     
   }


}

module.exports = new PictureController()