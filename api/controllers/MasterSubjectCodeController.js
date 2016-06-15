/**
 * MasterSubjectCodeController
 *
 * @description :: Server-side logic for managing mastersubjectcodes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MasterSubjectCodeController.index()`
   */
  index: function (req, res) {
    MasterSubjectCode.find(function(err,allSubject){
    if (err) {
      return res.send(err,500);
    }
    res.json({subject:allSubject});
   });
  },


  /**
   * `MasterSubjectCodeController.new()`
   */
  new: function (req, res) {
    console.log("new");
   var id = req.param('code');
    MasterSubjectCode.findOne(id,function(err,booknew){
      if (err) {
        return res.send(err,500);
      }
      console.log(booknew);
      res.view({subject:booknew});
    });
  },


  /**
   * `MasterSubjectCodeController.show()`
   */
  show: function (req, res) {
    MasterSubjectCode.find()
  .populate('masterBooks')
  .populate('owner')
  .exec(function(err, user) {
  if(err) {

  }
  // user.masterBooks.add(1);

  // user.save(function(err) {});

  res.json({model:user});

});
  },


  /**
   * `MasterSubjectCodeController.create()`
   */
  create: function (req, res) {
    var param = _.extend(req.query || {},req.params || {},req.body || {});
    MasterSubjectCode.create(param,function (err,createSubject) {
      if (err) {
        return res.send(err,500);
      }
      console.log("created");
      res.json({subject:createSubject});
    });
  },


  /**
   * `MasterSubjectCodeController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `MasterSubjectCodeController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `MasterSubjectCodeController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

