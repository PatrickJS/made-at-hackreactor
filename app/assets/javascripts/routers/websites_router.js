MadeAtHackreactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index',
      '/websites/:id': 'all'
    },
    index: function() {
      console.log('yoyo');
    },
    all: function(data) {
      console.log(data);
    }
});
