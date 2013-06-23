# Made at Hack Reactor

bundle install
gem install foreman
rake db:migrate
foreman server -f Procfile.dev
localhost:5100
copy script at localhost:5100/script
paste in your website

website RESTful API
/api/websites/:id
$ curl -H 'Accept:application/vnd.hackreactor.v1' http://localhost:3000/api/websites

TODO:
fix Fonts
security


Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

