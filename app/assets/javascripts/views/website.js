HackReactor.Views.Website = Backbone.View.extend({
  template: _.template('<div class="row">'+
                        '<div class="span12">'+
                          '<div class="row">'+
                            '<section id="projects">'+
                              '<div class="row">'+
                                '<div id="thumbs">'+
                                    '<div class="item-thumbs span5 design">'+
                                      '<img src="<%= image %>" style: "max-height:240px;max-width:100%;width:100% !important">'+
                                    '</div>'+
                                    '<div class="span7">'+
                                      '<div class="info-block">'+
                                        '<h3 class="spec"><%= name %>'+
                                          '<small class="pull-right" style="margin-top: 15px;margin-right: 10px;">'+
                                            '<span class="color-text">Likes:</span> <span id="Like">0</span> '+
                                            '<span class="color-text">Tweets:</span> <span id="Tweet">0</span> '+
                                            '<span class="color-text">Views:</span> <%= views %>'+
                                          '</small>'+
                                        '</h3>'+
                                        '<div class="info-text">'+
                                          '<a href="<%= url %>" target="_blank"><span class="color-text"><%= url %></span></a>'+
                                          '<p><%= content %></p>'+
                                          '<div class="like-tweet">'+
                                            '<a class="button" href="#Like">Like</a>'+
                                            '<a class="button" href="#Tweet">Tweet</a>'+
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
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.removeIt, this);
  },
  events: {
    'click a.button': 'vote'
  },
  destroyIt: function() {
    this.model.destroy();
  },
  removeIt: function(){
    this.$el.remove();
  },
  updateIt: function() {
    this.model.fetch();
  },
  vote: function(e) {
    var button = $(e.target).attr('href');
    var yolo = Number($(button).text());
    yolo++;
    $(button).text(yolo+'');
    return false;
  },
  render: function() {
    this.$el.empty();
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
