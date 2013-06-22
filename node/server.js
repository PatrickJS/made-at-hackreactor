var io = require('socket.io').listen(5001),
    redis = require('redis').createClient(),
    fs = require('fs'),
    http = require("http"),
    url = require("url"),
    webshot = require('webshot'),
    im = require('imagemagick');

// im.resize({
//   srcPath: __dirname + '/koala.jpg',
//   dstPath: __dirname + '/koala-small.jpg',
//   width:   '50%'
// }, function(err, stdout, stderr){
//   if (err) throw err
//   console.log('resized');
// });

redis.subscribe('rt-change');

var options = {};
io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    message = JSON.parse(message);
    message.website.image = './assets/'+message.encoded_token+'.png';

    if (message.action === 'create') {
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
        renderDelay: 20
      };

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
