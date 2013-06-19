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
      websitesCollection.fetch({
        success: function(collection, response){
          console.log(arguments);
            collection.trigger('sync');
          }
      });
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
