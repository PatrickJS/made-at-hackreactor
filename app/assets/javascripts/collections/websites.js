HackReactor.Collections.Websites = Backbone.Collection.extend({
  url : "api/websites",
  model: HackReactor.Models.Website,

  initialize: function(){
    HackReactor.Socket.on('website:change', this.handle_change, this);
  },
  handle_change : function(message){
    var model;
    switch(message.action){
      case 'create':
        this.add(message.website);
        break;
      case 'update':
        model = this.get(message.id);
        model.set(message.website);
        break;
      case 'destroy':
        this.remove(message.website);
    }
  }
});
