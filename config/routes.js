/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  // masterAccountHolder

  'get /masterAccounts':{
    controller:'masterAccountHolder',
    action:'index'
  },

  'get /masterAccounts/new':{
    controller:'masterAccountHolder',
    action:'new'
  },

  'post /masterAccounts':{
    controller:'masterAccountHolder',
    action:'create'
  },

  'get /masterAccounts/:id':{
    controller:'masterAccountHolder',
    action:'show'
  },

  'get /masterAccounts/:id/edit':{
    controller:'masterAccountHolder',
    action:'edit'
  },

  'post /masterAccounts/:id':{
    controller:'masterAccountHolder',
    action:'update'
  },

  'get /masterAccounts/:id/delete':{
    controller:'masterAccountHolder',
    action:'destroy'
  },

  // masterBook

   'get /masterBooks':{
    controller:'masterBook',
    action:'index'
  },

  'get /masterBooks/new':{
    controller:'masterBook',
    action:'new'
  },

  'post /masterBooks':{
    controller:'masterBook',
    action:'create'
  },

  'get /masterBooks/:id':{
    controller:'masterBook',
    action:'show'
  },

  'get /masterBooks/:id/edit':{
    controller:'masterBook',
    action:'edit'
  },

  'post /masterBooks/:id':{
    controller:'masterBook',
    action:'update'
  },

  'get /masterBooks/:id/delete':{
    controller:'masterBook',
    action:'destroy'
  },

  // masterSubjectCode


   'get /masterSubjectCodes':{
    controller:'masterSubjectCode',
    action:'index'
  },

  'get /masterSubjectCodes/new':{
    controller:'masterSubjectCode',
    action:'new'
  },

  'post /masterSubjectCodes':{
    controller:'masterSubjectCode',
    action:'create'
  },

  'get /masterSubjectCodes/:id':{
    controller:'masterSubjectCode',
    action:'show'
  },

  'get /masterSubjectCodes/:id/edit':{
    controller:'masterSubjectCode',
    action:'edit'
  },

  'post /masterSubjectCodes/:id':{
    controller:'masterSubjectCode',
    action:'update'
  },

  'get /masterSubjectCodes/:id/delete':{
    controller:'masterSubjectCode',
    action:'destroy'
  },

  // transactionBookController


   'get /transactionBooks':{
    controller:'transactionBook',
    action:'index'
  },

  'get /transactionBooks/new':{
    controller:'transactionBook',
    action:'new'
  },

  'post /transactionBooks':{
    controller:'transactionBook',
    action:'create'
  },

  'get /transactionBooks/:id':{
    controller:'transactionBook',
    action:'show'
  },

  'get /transactionBooks/:id/edit':{
    controller:'transactionBook',
    action:'edit'
  },

  'post /transactionBooks/:id':{
    controller:'transactionBook',
    action:'update'
  },

  'get /transactionBooks/:id/delete':{
    controller:'transactionBook',
    action:'destroy'
  }

};
