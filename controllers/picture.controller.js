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
}

module.exports = new PictureController()