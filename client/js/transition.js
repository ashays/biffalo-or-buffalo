 Template.transition.events({
 	'click #nextButton': function () {
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