var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      // console.log(req, res);
    }, 
    // a function which can be used to insert a message into the database
    post: function () {
      // console.log(req, res);
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      // console.log(req, res);
    },
    post: function (userName, cb) {
      db.connection.connect(function(err) {
        if (err) { throw err; }
        console.log('Connected!');
        var sql = `INSERT INTO users (username) VALUES ('${userName}')`;
        db.connection.query('TRUNCATE messages', function (err, result) {
          if (err) { throw err; }
        });
        db.connection.query(sql, function (err, result) {
          if (err) { throw err; } else {
            console.log('1 record inserted');
            cb('Sucess: 1 Record Inserted!');
          }
        });
      });
    }
  }
};

