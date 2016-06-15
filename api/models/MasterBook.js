/**
 * MasterBook.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    bookId : { type: 'integer' },

    bookName : { type: 'string' },

    autherName : { type: 'string' },

    numberOfCopys : { type: 'integer' },

    owner : {
    	model:'masterAccountHolder',
        via:'masterBooks',

        // 
        // through: 'masterSubjectCode'
    },

    masterSubjectCodes : {
        collection:'masterSubjectCode',
        via:'code',
        dominant: true 
        // many to man
        
        // dominant: true 
        // many to many
        
    }
  }
};

