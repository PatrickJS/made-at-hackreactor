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






Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

