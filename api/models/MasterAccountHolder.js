/**
 * MasterAccountHolder.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    accountHolderId : { type: 'integer' },

    email : { type: 'email' },

    phone : { type: 'integer' },

    masterBooks:{
    	collection:'masterBook',
        
    	via:'owner',
        
        dominant: true 
        // many to many
        // through: 'masterSubjectCode'
    }

    //  masterSubjectCodes : {
    //     collection:'masterSubjectCode',
    //     via:'code',
    //     dominant: true 
        
    // }
  }
};

