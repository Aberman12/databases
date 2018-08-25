var db = require('../db');

db.connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});




module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      // console.log(req, res);
    }, 
    // a function which can be used to insert a message into the database
    post: function (object, cb) {


      // check if roomname is in table, if not then insert roomname 
      var param = `SELECT room_id from rooms where roomname = '${object.roomname}'`;
      db.connection.query(param, function (err, result) {
        console.log(result.length);

        if (result.length === 0) { 
          console.log('Roomname not found! Inserting new roomname now.');
          var param = `INSERT INTO rooms (roomname) VALUES ('${object.roomname}')`;
          db.connection.query(param, function (err, result) {
            if (err) { throw err; } else {
              console.log('New Roomname inserted', 'ID:', result.insertId);
              var roomnameID = result.insertId;
            }
          });
        } else {
          console.log('found roomname', 'ID: ', typeof result[0]);
          var roomnameID = result;
        }
      });

        
        
      //   // send roomname id into messages
      //   // send username ID into messages

      //   db.connection.query('delete from users');
        
        
        
        
      //   db.connection.query('delete from users');
      //   sql = `INSERT INTO messages, users, rooms (messages, username, roomname) VALUES ('${object.messages}', '${object.username}', '${object.roomname}')`;
      //   db.connection.query(sql, function (err, result) {
      //     if (err) { throw err; } else {
      //       console.log('1 record inserted');
      //       cb('Sucess: 1 Record Inserted!');
      //     }
      //   });
      // });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      // console.log(req, res);
    },
    post: function (userName, cb) {
      db.connection.query('delete from users');
      var sql = `INSERT INTO users (username) VALUES ('${userName}')`;
      db.connection.query(sql, function (err, result) {
        if (err) { throw err; } else {
          console.log('1 record inserted');
          cb('Sucess: 1 Record Inserted!');
        }
      });
      
    }
  }
};

