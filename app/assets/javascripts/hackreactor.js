;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.extend({}, Backbone.Events, {
    connect: function() {
      HackReactor.Vent.io = io.connect('http://localhost:5001');
      HackReactor.Vent.io.on('website.change', function(message) {
          console.log('================-Website-Change!-================');
        HackReactor.Vent.trigger('website:change', message);
        HackReactor.Vent.io.on('website.update:'+message.action+'.'+message.id, function(data) {
          console.log('================-Image-'+message.id+'-changed!-================');
          HackReactor.Vent.trigger('website.update:'+data.id, data);
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
      this.Vent.connect();

      console.log('Hello with love from Hack Reactor!');
    }
  };
  $(function() {
    HackReactor.initialize();
  });
}());
