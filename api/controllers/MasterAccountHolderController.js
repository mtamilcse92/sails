/**
 * MasterAccountHolderController
 *
 * @description :: Server-side logic for managing masteraccountholders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MasterAccountHolderController.index()`
   */
  index: function (req, res) {
   MasterAccountHolder.find(function(err,allAccount){
    if (err) {
      return res.send(err,500);
    }
    res.json({account:allAccount});
   });
  },


  /**
   * `MasterAccountHolderController.new()`
   */
  new: function (req, res) {
    console.log("new");
    res.view();
  },


  create: function (req, res) {
    var param = _.extend(req.query || {},req.params || {},req.body || {});
    MasterAccountHolder.create(param,function (err,createAccount) {
      if (err) {
        return res.send(err,500);
      }
      console.log("created");
      res.json({account:createAccount});
    });
  },


  /**
   * `MasterAccountHolderController.show()`
   */
  show: function (req, res) {

  MasterAccountHolder.find()
  .populate('masterBooks')
  // .populate('masterSubjectCodes')
  .exec(function(err, user) {
  if(err) {

  }
  // user.masterBooks.add(1);

  // user.save(function(err) {});

  res.json({model:user});

});
  },


  /**
   * `MasterAccountHolderController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
    MasterAccountHolder.findOne(id).exec(function(err,edit){
      if (err) {
        return res.send(err,500);
      }
      //next two lines are used to achive many to many
      // edit.masterBooks.add([1,2,3]);
      // edit.save(function(err){});
      console.log(edit);
      res.view({user:edit});
    });
  },


  /**
   * `MasterAccountHolderController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `MasterAccountHolderController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

