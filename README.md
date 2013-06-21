# Made at Hack Reactor

bundle install  
gem install foreman  
rake db:migrate  
foreman server -f Procfile.dev  
localhost:5100  

website RESTful API  
/api/websites/:id  
$ curl -H 'Accept:application/vnd.hackreactor.v1' http://localhost:3000/api/websites  

Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

