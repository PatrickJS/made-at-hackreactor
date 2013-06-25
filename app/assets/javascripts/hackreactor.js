;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.extend({}, Backbone.Events),
  Realtime: {
    connect: function(ipAdress) {
      HackReactor.Realtime.io = io.connect(ipAdress);
      HackReactor.Realtime.io.on('website.change', function(message) {
        console.log('================-Website-Change!-================');
        HackReactor.Vent.trigger('website:change', message);
        HackReactor.Realtime.io.on('website.update:'+message.action+'.'+message.id, function(data) {
          console.log('================-Image-'+data.id+'-changed!-================');
          HackReactor.Vent.trigger('website.update:'+data.id, data);
        });
      });
    }
  },
  initialize: function() {
      new this.Views.Index({collection: new this.Collections.Websites()});
      new this.Routers.Websites();
      Backbone.history.start({pushState: true});
      this.Realtime.connect('http://10.0.1.66:5001');

      console.log('Hello with love from Hack Reactor!');
    }
  };

  $(function() {
    HackReactor.initialize();
  });

}());
