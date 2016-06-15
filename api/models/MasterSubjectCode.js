/**
 * MasterSubjectCode.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    subjectCode : { type: 'integer' },

    subjectName : { type: 'string' },

     code : {
        model:'masterBook',
        // via:'masterSubjectCodes'

    // owner : {
    // 	model:'masterAccountHolder'
    // },
    // masterBooks:{
    // 	model:'masterBook'
    // }
  }


  //    code : {
  //       model:'masterAccountHolder'
       
  // }
}
};

