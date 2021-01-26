'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    // uri : 'mongodb://zohaib:zobi12323@ds117681.mlab.com:17681/locumatch'
    'uri' : 'mongodb+srv://zobi12323:zobi12323@cluster0.a5ikg.mongodb.net/Locumatch?retryWrites=true&w=majority'
  },

  seedDB: true
};
