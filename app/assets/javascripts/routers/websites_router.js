HackReactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index',
      '/websites/:id': 'all'
    },
    index: function() {
      HackReactor.Socket.trigger('index');
    },
    all: function(id) {
      console.log(id);
      HackReactor.Socket.trigger('all', id);
    }
});
