;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.extend({}, Backbone.Events),
  initialize: function() {
      HackReactor.Vent.on('yolo', function() {
        console.log('inside vent yo');
      });
      var websitesCollection = new HackReactor.Collections.Websites();
      websitesCollection.fetch();
      new HackReactor.Views.WebsitesIndex({collection: websitesCollection});
      window.debug = websitesCollection;
      console.log('Hello from Backbone!');
      new HackReactor.Routers.Websites();
      Backbone.history.start();
    }
  };
  $(function() {
    HackReactor.initialize();
  });
}());
