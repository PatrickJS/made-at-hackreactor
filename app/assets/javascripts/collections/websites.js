HackReactor.Collections.Websites = Backbone.Collection.extend({
  url : "api/websites",
  model: HackReactor.Models.Website,

  initialize: function(){
    HackReactor.Socket.on('website:change', this.handle_change, this);
  },
  comparator: function(a,b) {
    a = a.get('views');
    b = b.get('views');
    return b - a; // returns the greater of the two
  },
  handle_change: function(message){
    console.log('in change', message);
    var model;
    switch(message.action) {
      case 'create':
        this.add(message.website);
        break;
      case 'update':
        console.log('in update of collection');
        model = this.get(message.id);
        model.set(message.website);
        break;
      case 'destroy':
        this.remove(message.website);
    }
  }
});
