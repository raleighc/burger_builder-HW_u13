// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(column, value, cb) {
    orm.insertOne("burgers", column, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(column, objColVals, condition, cb) {
    orm.updateOne("burgers", column, objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(value, cb) {
    orm.deleteOne("burgers", value, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
