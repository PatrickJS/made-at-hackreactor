var io = require('socket.io').listen(5001),
    redis = require('redis').createClient(6379, '127.0.0.1'), //redis.createClient(port, host, options) // redis.auth(password, callback)
    fs = require('fs'),
    http = require("http"),
    url = require("url"),
    webshot = require('webshot');

redis.subscribe('rt-change');

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

var options = {};
options = {
  screenSize: {
    width: 1440,
    height: 960
  },
  shotSize: {
    width: 1440,
    height: 960//'all'
  },
  userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'+
    ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
  renderDelay: 0
};

io.on('connection', function(socket) {
  redis.on('message', function(channel, message) {
    message = JSON.parse(message);
    message.website.image = './assets/'+message.encoded_token+'.png';

    if (message.action === 'create') {

      socket.emit('rt-change', message);
      console.log('=============-inside-node-server-=============', message);
      webshot(message.website.url, './public/assets/'+message.encoded_token.toLowerCase()+'.png', options, function(err) {
        if (err) return console.log(err);
        console.log('=========-OK!-=========');
        console.log(message.encoded_token+'.png');
        socket.emit('update_image_'+message.id, message);
      });
    }


  });

});
