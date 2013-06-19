HackReactor.Views.Website = Backbone.View.extend({
  template: _.template('<div class="row">'+
                        '<div class="span12">'+
                          '<div class="row">'+
                            '<section id="projects">'+
                              '<div class="row">'+
                                '<div id="thumbs">'+
                                    '<div class="item-thumbs span5 design">'+
                                      '<img src="" style: "max-height:240px;width:100%">'+
                                    '</div>'+
                                    '<div class="span7">'+
                                      '<div class="info-block">'+
                                        '<h3 class="spec"><%= team %>'+
                                          '<small class="pull-right" style="margin-top: 15px;">'+
                                            '<span class="color-text">Views:</span> <%= views %>'+
                                          '</small>'+
                                        '</h3>'+
                                        '<div class="info-text">'+
                                          '<a href="<%= url %>" target="_blank"><span class="color-text"><%= url %></span></a>'+
                                          '<p><%= content %></p>'+
                                          '<div class="like-tweet pull-right">'+
                                            '<a class="button" href="#">Like</a>'+
                                            '<a class="button" href="#">Tweet</a>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</section>'+
                          '</div>'+
                        '</div>'+
                      '</div>'),
  initialize: function(){
    HackReactor.Vent.on('website', this.render, this);
    this.model.on('change', this.render, this);
    console.log('inside HackReactor.Website');
  },
  render: function() {
    this.$el.empty();
    console.log('rendering website');
    this.el = this.template(this.model.attributes);
    return this;
  }
});
