;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Socket: _.extend({
    connect: function() {
      this.io = io.connect('http://0.0.0.0:5001');
      this.io.on('rt-change', function(message) {
        console.log('yolo', message);

        return window.HackReactor.Socket.trigger('add', message);
      });
    }
  }, Backbone.Events),
  initialize: function() {
      this.Socket.connect();
      var websitesCollection = new this.Collections.Websites();
      new this.Views.Index({collection: websitesCollection});
      websitesCollection.fetch();

      console.log('Hello with love from Backbone!');
      new this.Routers.Websites();
      Backbone.history.start({pushState: true});
    }
  };
  $(function() {
    HackReactor.initialize();
  });
}());
