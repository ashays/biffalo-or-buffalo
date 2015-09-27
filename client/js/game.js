  Template.game.helpers({
      players: function () {
        return Players.find({gameID: this.newId});
      },
      isTwo: function () {
      	return Players.find({gameID: this.newId}).count() > 1;
      }
    });