HackReactor.Views.Navbar = Backbone.View.extend({

  template: _.template('<header>'+
                        '<div class="sticky-nav">'+
                          '<a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>'+
                            '<div id="logo">'+
                              '<a id="goUp" href="#goUp" title="Hack Reactor">Hack Reactor</a>'+
                            '</div>'+
                            '<nav id="menu">'+
                              '<ul id="menu-nav">'+
                                '<li class="current"><a href="#home-slider">Home</a></li>'+
                                '<li><a href="#work">Websites</a></li>'+
                                '<li><a href="#students">Students</a></li>'+
                                '<li><a href="#alumni">Alumni</a></li>'+
                                '<li><a href="#submit">Submit</a></li>'+
                              '</ul>'+
                            '</nav>'+
                       ' </div>'+
                      '</header>'),
  initialize: function(){
    HackReactor.Socket.on('navbar', this.render, this);
  },
  render: function() {
    this.$el.empty();
    $('menu-nav').html(this.template());
    return this;
  },
  addOne: function() {
  },
  addAll: function() {
    $('#hackreactor-websites').html(_(this.collection.models).map(function(websiteModel) {
      return new HackReactor.Views.Website({model: websiteModel}).render().el;
    }));

  }
});
