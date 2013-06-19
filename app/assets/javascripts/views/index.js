HackReactor.Views.Index = Backbone.View.extend({
  template: _.template('<div id="work" class="page">'+
                        '<div class="container">'+
                              '<div class="row">'+
                                  '<div class="span12">'+
                                      '<div class="title-page">'+
                                          '<h2 class="title">Web applications built by our Students</h2>'+
                                      '</div>'+
                                  '</div>'+
                              '</div>'+
                              '<div id="hackreactor-websites">'+
                              '</div>'+
                          '</div>'+
                      '</div>'),
  initialize: function(){
    HackReactor.Vent.on('index', this.render, this);
    this.collection.on('sync', this.addAll, this);
    console.log('inside HackReactor.Index');
  },
  render: function() {
    this.$el.empty();
    console.log('in Index render');
    $('#hackreactor-index').html(this.template());
    return this;
  },
  addOne: function() {
  },
  addAll: function() {
    console.log('inside addAll', this.collection.models);
    $('#hackreactor-websites').html(_(this.collection.models).map(function(websiteModel) {
      return new HackReactor.Views.Website({model: websiteModel}).render().el;
    }));

  }
});
