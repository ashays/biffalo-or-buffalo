  Template.game.helpers({
      players: function () {
        return Players.find({gameID: this.newId});
      }
    });