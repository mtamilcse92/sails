/**
 * MasterBookController
 *
 * @description :: Server-side logic for managing masterbooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MasterBookController.index()`
   */
  index: function (req, res) {
   MasterBook.find(function(err,allAccount){
    if (err) {
      return res.send(err,500);
    }
    res.json({account:allAccount});
   });
  },


  /**
   * `MasterBookController.new()`
   */
  new: function (req, res) {
     var id = req.param('owner');
    MasterBook.findOne(id,function(err,booknew){
      if (err) {
        return res.send(err,500);
      }
      console.log(booknew);
      res.view({customer:booknew});
    });
  },


  /**
   * `MasterBookController.show()`
   */
  show: function (req, res) {

    MasterBook.find()
  .populate('owner')
  .populate('masterSubjectCodes')
  .exec(function(err, user) {
  if(err) {

  }
  // user.masterBooks.add(1);

  // user.save(function(err) {});

  res.json({model:user});

});
  },


  /**
   * `MasterBookController.create()`
   */
  create: function (req, res) {
     var param = _.extend(req.query || {},req.params || {},req.body || {});
    MasterBook.create(param,function (err,createBook) {
      if (err) {
        return res.send(err,500);
      }
      console.log("created");
      res.json({account:createBook});
    });
  },


  /**
   * `MasterBookController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `MasterBookController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `MasterBookController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

