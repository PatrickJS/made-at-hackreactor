# Made at Hack Reactor

##### Dependencies
- Foreman  
$ gem install foreman
- Redis  
$ brew install redis  
- MRI Ruby 2.0.0-p195  
$ \curl -L https://get.rvm.io | bash -s stable --ruby  
- Node  
$ brew install node  


### Initialize
 
$ bundle install  
$ npm install node/
$ rake db:migrate  
$ foreman server -f Procfile.dev  
$ localhost:5100  

### ScriptTag
localhost:5100/script  
```javascript    
var builtAtHackReactor = function(options) {
      options = options || {};
  var windowDomain = window.location.host.split('.'),
      titleDomain = document.querySelector('title').text,
      wwwDomain = windowDomain[0] === 'www' ? windowDomain[1] : windowDomain[0],
      name = titleDomain.length < wwwDomain.length ? titleDomain : wwwDomain,
      meta = document.querySelectorAll('meta'),
      url = options.overWriteUrl || "https://hackreactor.herokuapp.com/banner/";
  if (!options.description) {
    for (var i = 0; i < meta.length; i++) {
      if (meta[i].getAttribute('name') === 'description' || meta[i].getAttribute('property') === "og:description") {
        options.description =  meta[i].getAttribute('content');
        break;
      }
    }
  }
  options.banner = options.banner ? true : false;
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
    query +=  '&'+ key + '=' + options[key];
  }
  img.src = url+options.name+".png"+query+'';
  var linkwithimage = document.createElement('a');
  linkwithimage.setAttribute('href', 'https://hackreactor.herokuapp.com/');
  linkwithimage.appendChild(img);
  document.getElementsByTagName('body')[0].appendChild(linkwithimage);
};

builtAtHackReactor({
  overWriteUrl: 'http://localhost:5100/banner/',
  fullUrl:true,
  banner:false
});
```

website RESTful API  
/api/websites/:id  
$ curl -H 'Accept:application/vnd.hackreactor.v1' http://localhost:3000/api/websites

##### TODO:  
- fix social button loading  
- fix Font loading  
- security (whitelist)  
- posts  
- better banner  
- allow for users to login with github for comments

Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

