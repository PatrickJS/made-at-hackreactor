var io = require('socket.io').listen(5001),
    redis = require('redis').createClient(),
    fs = require('fs'),
    http = require("http"),
    url = require("url");

// var trackingGif = fs.readFileSync("./github.gif");
// http.Server(function (req, res) {
//   console.log('yolo');
//   var params = url.parse(req.url, true).query;
//   res.writeHead(200);
//   res.end(trackingGif, "binary");
// });

redis.subscribe('rt-change');

io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    socket.emit('rt-change', JSON.parse(message));
  });
});
