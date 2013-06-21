# Made at Hack Reactor

bundle install
gem install foreman
rake db:migrate
foreman server -f Procfile.dev
localhost:5100

website RESTful API
/api/websites/:id
$ curl -H 'Accept:application/vnd.hackreactor.v1' http://localhost:3000/api/websites

Work in Progress scripttag.js

version 1
<pre>
(function() {
  var HackReactor = {};
  HackReactor['func'] = function(data) {
    window['yolo'] = data;
    this.html = document.createElement(data.create);
    this.html.src = data.html;
    document.getElementsByTagName('body')[0].appendChild(this.html);
  };
  HackReactor['jsonp'] = function(url, cb) {
    this.yolo = document.createElement('script');
    this.rand = 'yolo' + ~~(Math.random()*8888);
    this.yolo.src = url+'?callback='+this.rand;
    this.yolo.setAttribute('async', 'true');
    (document.getElementsByTagName('head') || document.getElementsByTagName('body'))[0].appendChild(this.yolo);
    window[this.rand] = cb;
  };
  HackReactor.jsonp('http://hackreactor.herokuapp.com/callback', HackReactor.func);
  console.log('Hello with love from Hack Reactor');
}());
</pre>
version 2
<pre>
var builtAtHackReactor = function(options) {
  var img = new Image();
  img.style.position = 'absolute';
  img.style[options.position[1]] = 0;
  img.style[options.position[0]] = 0;
  console.log(img);
  var query = '?';
  for (var key in options) {
    if (typeof options[key] === 'string') {
      query +=  '&'+ key + '=' + options[key];
    }
  }
  var url = options.overWriteUrl || "https://hackreactor.herokuapp.com/";
  console.log(query);
  img.src = url+options.name+".png"+query+'';
  document.getElementsByTagName('body')[0].appendChild(img);
}

builtAtHackReactor({
  position: ["top","right"],
  name: 'gdi2290',
  overWriteUrl: 'http://localhost:5100/banner/',
  description: 'an awesome website.',
  twitter: 'gdi2290',
  github: 'gdi2290',
  facebook: 'gdi2290'
});
</pre>





Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

