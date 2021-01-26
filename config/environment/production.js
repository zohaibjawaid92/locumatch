'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.OPENSHIFT_MONGODB_DB_URL ||
            'mongodb+srv://zobi12323:zobi12323@cluster0.a5ikg.mongodb.net/Locumatch?retryWrites=true&w=majority'
  },

  seedDB: true
};
