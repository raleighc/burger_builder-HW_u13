// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(value, cb) {
    orm.insertOne("burgers", "burger_name", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, value, cb) {
    orm.updateOne("burgers", "devoured", objColVals, value, function(res) {
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
