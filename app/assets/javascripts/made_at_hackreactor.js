window.MadeAtHackreactor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.extend({}, Backbone.Events),
  initialize: function() {
    MadeAtHackreactor.Vent.on('yolo', function() {
      console.log('inside vent yo');
    });
    console.log('Hello from Backbone!');
    new MadeAtHackreactor.Routers.Websites();
    Backbone.history.start();
  }
};

