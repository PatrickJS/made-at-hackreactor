HackReactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index',
      '/websites/:id': 'all'
    },
    index: function() {
      HackReactor.Vent.trigger('index');
    },
    all: function(id) {
      console.log(id);
      HackReactor.Vent.trigger('all', id);
    }
});
