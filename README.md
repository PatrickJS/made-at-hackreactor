# Made at Hack Reactor


B a c k b o n e   o n   R a i l s

}=}=}=}=}=}=}=}=}=}=}=}=}=}=}=}=}


Features
--------

  * Vendors the latest Backbone.js + Underscore.js in the asset pipeline[1]

  * Provides an install generator to create a skeleton directory
    structure and manifest

  * Provides a scaffold generator to create files and boilerplate

  * Uses the naming conventions from
    thoughtbot's 'Backbone.js on Rails' http://bit.ly/pLsmzr

  * Generates CoffeeScript (default) or JavaScript


Usage
-----

  gem 'backbone-on-rails'

  bundle install

  rails generate backbone:install

  rails generate backbone:scaffold NAME

  Note:
    Remember to restart the server after installing

  See also:
    http://railscasts.com/episodes/323-backbone-on-rails-part-1
    http://railscasts.com/episodes/325-backbone-on-rails-part-2


Output
------

  Example output from backbone:scaffold planet --javascript

  app/assets/
  ├── javascripts
  │   ├── application.js
  │   ├── space_app.js
  │   ├── collections
  │   │   └── planets.js
  │   ├── models
  │   │   └── planet.js
  │   ├── routers
  │   │   └── planets_router.js
  │   └── views
  │       └── planets
  │           └── planets_index.js
  └── templates
      └── planets
          └── index.jst.eco


Tricks
------

  # Custom manifest
  rails generate backbone:install --manifest index.js

  # Generate JavaScript
  rails generate backbone:install --javascript

  # Remove generated files
  rails destroy backbone:scaffold planet


Alternatives
------------

  For other features check out:

  * https://github.com/codebrew/backbone-rails
  * https://github.com/aflatter/backbone-rails


[1] json2.js not included



Copyright 2013, [Hack Reactor, LLC](http://hackreactor.com). All rights reserved.

