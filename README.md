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
  var windowDomain = window.location.host.split('.'),
      titleDomain = document.querySelector('title').text,
      wwwDomain = windowDomain[0] === 'www' ? windowDomain[1] : windowDomain[0],
      name = titleDomain.length < wwwDomain.length ? titleDomain : wwwDomain,
      meta = document.querySelectorAll('meta'),
      url = options.overWriteUrl || "https://hackreactor.herokuapp.com/banner";
  if (!options.description) {
    for (var i = 0; i < meta.length; i++) {
      if (meta[i].getAttribute('name') === 'description' || meta[i].getAttribute('property') === "og:description") {
        options.description =  meta[i].getAttribute('content');
        break;
      }
    }
  }
  options.url = options.fullUrl ? location.href : options.url || window.location.origin;
  options.name = options.name || name;
  options.github = options.twitter || name;
  options.twitter = options.twitter || name;
  options.facebook = options.twitter || name;
  options.position = options.position || ["top", "right"];

  var img = new Image();
  img.style.position = 'absolute';
  img.style[options.position[1]] = 0;
  img.style[options.position[0]] = 0;
  img.style['z-index'] = 99999;
  var query = '?';
  for (var key in options) {
    if (typeof options[key] === 'string') {
      query +=  '&'+ key + '=' + options[key];
    }
  }
  img.src = url+options.name+".png"+query+'';
  document.getElementsByTagName('body')[0].appendChild(img);
};

builtAtHackReactor({
  overWriteUrl: 'http://localhost:5100/banner/',
  fullUrl:true
});
</pre>





Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

