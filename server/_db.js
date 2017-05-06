var Sequelize = require('sequelize');
var databaseURI = 'postgres://localhost:5432/node-messaging-app';

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
