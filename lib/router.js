Router.configure({
  layoutTemplate: 'main'
});


Router.route('/', function () {
	this.render('landing');
});

Router.route('/game/:_id', function() {
	this.render('game', {
		data: function () {
			return Games.findOne({_id: this.params._id});
		}
	});
});

Router.route('/login/', function() {
	this.render('login');
});

Router.route('/join/', function() {
	user = Meteor.user();
    if (! user) {
       this.render('login');
    }
	this.render('join');
});

Router.route('/joined/:_id', function() {
	this.render('pregame', {
		data: function () {
			console.log(Games.findOne({newId: Number(this.params._id)}));
			if (Games.findOne({newId: Number(this.params._id)})) {
				if (Games.findOne({newId: Number(this.params._id)}).gameStarted) {
					var qID = Rounds.findOne({_id: Games.findOne({newId: Number(this.params._id)}).roundID}).questionID;
					this.redirect('/player/' + qID);					
				}
			}
			return Games.findOne({newId: Number(this.params._id)});
		}
	});
});

Router.route('/question/:_id', function() {
	this.render('question', {
		data: function () {
			return Questions.findOne({_id: this.params._id});
		}
	});
});

Router.route('/player/:_id', function() {
	this.render('player', {
		data: function () {
			return Questions.findOne({_id: this.params._id});
		}
	});
});