var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // console.log('messages get',req.body);
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, (response)=>{
        // console.log(response);
        res.send(response);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('users get',req.body);
    },
    post: function (req, res) {
      models.users.post(req.body.username, (response)=>{
        console.log(response);
        res.send(response);
      });
    }
  }
};

