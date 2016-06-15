/**
 * TransactionBook.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    accountHolderId : { type: 'integer' },

    bookId : { type: 'integer' },

    startingDate : { type: 'date' },

    endingDate : { type: 'date' },

    actutalReturnDate : { type: 'date' }
  }
};

