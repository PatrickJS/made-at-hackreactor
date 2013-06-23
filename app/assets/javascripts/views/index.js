HackReactor.Views.Index = Backbone.View.extend({
  el: $('#hackreactor-index'),
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
                      '</div>'
  ),
  initialize: function(){
    // HackReactor.Socket.on('index', this.render, this);
    this.collection.on('sync', this.addAll, this);
    this.collection.on('add', this.addOne, this);
    this.collection.on('remove', this.addAll, this);
  },
  render: function() {
    this.$el.empty();
    $('#hackreactor-index').html( this.template() );
    return this;
  },
  addOne: function(siteModel) {
    var website =  new HackReactor.Views.Website({model: siteModel});
    $('#hackreactor-websites').append(website.render().el);
  },
  addAll: function() {
    $('#hackreactor-websites').html( _( this.collection.models ).map(function(websiteModel) {
      return new HackReactor.Views.Website({model: websiteModel}).render().el;
    }) );
  }

});
