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
                                            // '<span class="color-text">Likes:</span> <span id="Like">0</span> '+
                                            // '<span class="color-text">Tweets:</span> <span id="Tweet">0</span> '+
                                            '<span class="color-text">Views:</span> <%= views %>'+
                                          '</small>'+
                                        '</h3>'+
                                        '<div class="info-text">'+
                                          '<a href="<%= url %>" target="_blank"><span class="color-text"><%= url %></span></a>'+
                                          '<p><%= content %></p>'+
                                          '<div class="like-tweet">'+
// '<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://hackreactor.herokuapp.com/" data-via="yolo" data-related="yolo" data-hashtags="tag" data-dnt="true">Tweet</a>'+
// "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script><br>"+
// '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fhackreactor.herokuapp.com%2F&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=dark&amp;action=like&amp;height=21&amp;appId=409068965874161" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe><br>'+
// '<iframe src="http://ghbtns.com/github-btn.html?user=gdi2290&repo=slides&type=watch&count=true"allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>'+
                                            //'<a class="button" href="#Like"><i class="icon-thumbs-up"></i></a>'+
                                            //'<a class="button" href="#Tweet"><i class="icon-twitter"></i></a>'+
                                            //'<a class="button" href="#Tweet"><i class="icon-github-2"></i></a>'+
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
    var modelID = 'update_image_'+this.model.attributes.id+'';
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.removeIt, this);
    HackReactor.Socket.on(modelID, this.reloadImage, this);
  },
  events: {
    'click a.button': 'vote'
  },
  reloadImage:  function(message) {
    this.render();
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
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
