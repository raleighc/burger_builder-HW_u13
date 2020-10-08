// MySQL connection.
var connection = require("../config/connection.js");

// ORM FUNCTIONS
var orm = {
  selectAll: function(table, cb) {
    var queryString = `SELECT * FROM ??;`;
    connection.query(queryString, [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, column, value, cb) {
    var queryString = `INSERT INTO ?? (??) VALUES (??)`;
    connection.query(queryString, [table, column, value], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, column, objColVals, condition, cb) {
    var queryString = `UPDATE ?? SET ?? = ? WHERE id = ?;`;
    connection.query(queryString, [table, column, objColVals, condition], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(table, value, cb) {
    var queryString = `DELETE FROM ?? WHERE id = ?;`;
    connection.query(queryString, [table, value], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
