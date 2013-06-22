;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Socket: _.extend({}, Backbone.Events, {
    connect: function() {
      HackReactor.Socket.io = io.connect('http://10.0.1.66:5001');
      HackReactor.Socket.io.on('rt-change', function(message) {
        console.log('================-RT-Change!-================');
        HackReactor.Socket.trigger('website:change', message);
        HackReactor.Socket.io.on('update_image_'+message.id, function(data) {
          console.log('================-listenToimage-================');
          HackReactor.Socket.trigger('update_image_'+data.id, data);
        });
      });
    }
  }),
  initialize: function() {
      var websitesCollection = new this.Collections.Websites();
      new this.Views.Index({collection: websitesCollection});
      websitesCollection.fetch();
      new this.Routers.Websites();
      Backbone.history.start({pushState: true});
      this.Socket.connect();

      console.log('Hello with love from Hack Reactor!');
    }
  };
  $(function() {
    HackReactor.initialize();
  });
}());
