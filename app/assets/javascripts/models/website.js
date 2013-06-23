HackReactor.Models.Website = Backbone.Model.extend({
    url: "/api/websites",
    initialize: function() {
      this.on('change:views', this.updatelogger, this);
    },
    updatelogger: function() {
      console.log('in update model');
    }
});
