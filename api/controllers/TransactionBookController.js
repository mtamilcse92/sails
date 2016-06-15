/**
 * TransactionBookController
 *
 * @description :: Server-side logic for managing transactionbooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TransactionBookController.index()`
   */
  index: function (req, res) {
    TransactionBook.find(function(err,allSubject){
    if (err) {
      return res.send(err,500);
    }
    res.json({subject:allSubject});
   });
  },


  /**
   * `TransactionBookController.new()`
   */
  new: function (req, res) {
     res.view();
  },


  /**
   * `TransactionBookController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `TransactionBookController.create()`
   */
  create: function (req, res) {
   var param = _.extend(req.query || {},req.params || {},req.body || {});
    TransactionBook.create(param,function (err,createSubject) {
      if (err) {
        return res.send(err,500);
      }
      console.log("created");
      res.json({subject:createSubject});
    });
  },


  /**
   * `TransactionBookController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `TransactionBookController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TransactionBookController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

