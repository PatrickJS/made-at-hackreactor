HackReactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index',
      'websites': 'websites',
      'news': 'news',
      'blogs': 'blogs'
    },
    index: function() {
      HackReactor.Vent.trigger('index');
    },
    websites: function() {
      HackReactor.Vent.trigger('websites');
    },
    blogs: function() {
      HackReactor.Vent.trigger('blogs');
    }
});
