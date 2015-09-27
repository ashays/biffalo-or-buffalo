  Template.game.helpers({
      players: function () {
        return Players.find({gameID: this.newId});
      },
      isTwo: function () {
      	return Players.find({gameID: this.newId}).count() > 1;
      }
    });

 Template.game.events({
 	'click #startButton': function () {
      event.preventDefault();
      var array = Questions.find().fetch();
      var randomIndex = Math.floor( Math.random() * array.length);
      var id = Rounds.insert({
      	gameID: this._id,
        createdAt: new Date(), 
        questionID: array[randomIndex]._id
      });
      Games.update(this._id, {
        $set: {
        	roundID: id,
        	gameStarted: true
        }
      });
    Router.go('/question/' + array[randomIndex]._id);
 }
});