;(function() {
  window.HackReactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.extend({}, Backbone.Events),
  initialize: function() {
      var websitesCollection = new HackReactor.Collections.Websites();
      new HackReactor.Views.Index({collection: websitesCollection});
      websitesCollection.fetch();
      window.debug = websitesCollection;

      console.log('Hello with love from Backbone!');
      new HackReactor.Routers.Websites();
      Backbone.history.start();
    }
  };
  $(function() {
    HackReactor.initialize();
  });
}());
