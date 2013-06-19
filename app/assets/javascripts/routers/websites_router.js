MadeAtHackreactor.Routers.Websites = Backbone.Router.extend({
    routes: {
      '': 'index',
      '/websites/:id': 'all'
    },
    index: function() {
      MadeAtHackreactor.Vent.trigger('yolo');
      console.log('yoyo');
    },
    all: function(data) {
      console.log(data);
    }
});
