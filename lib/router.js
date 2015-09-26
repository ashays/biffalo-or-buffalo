Router.configure({
  layoutTemplate: 'main'
});


Router.route('/', function () {
	console.log("render landing");
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

Router.route('/joined/', function() {
	user = Meteor.user();
    if (! user) {
       this.render('login');
    }
	this.render('pregame');
});
