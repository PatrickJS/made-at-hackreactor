HackReactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    index: function() {
      HackReactor.Socket.trigger('index');
    }
});
