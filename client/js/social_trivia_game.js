if (Meteor.isClient) {

  Template.landing.events({
    'click #create_game': function () {
      event.preventDefault();
      var id = Games.insert({
        createdAt: new Date()
      });

      Router.go('/game/' + id);
    },

    'click #join_game': function () {
      event.preventDefault();
      Router.go('/login/');
    }
  });

  Template.login.events({
      'click #facebook-login': function(event) {
          Meteor.loginWithFacebook({}, function(err){
              if (err) {
                  throw new Meteor.Error("Facebook login failed");
              } else {
                Router.go('/join/');
              }
          });
      },
   
      'click #logout': function(event) {
          Meteor.logout(function(err){
              if (err) {
                  throw new Meteor.Error("Logout failed");
              }
          })
      }
  });

  Template.join.events({
      "submit #join-game": function (event) {
        event.preventDefault();
        var gameToJoin = event.target.gameid.value;
        if (Games.findOne({_id: gameToJoin})) {
          if (Players.findOne({pID: Meteor.user()._id})) {
            var id = Players.findOne({pID: Meteor.user()._id})._id;
            Players.update(id, {
                    $set: {gameID: gameToJoin}
                  });
          } else {
            Players.insert({
                    pID: Meteor.user()._id,
                    gameID: gameToJoin,
                    name: Meteor.user().profile.name,
                    createdAt: new Date() // current time
                  });            
          }
          Router.go('/joined/');          
        } else {
          console.log("error");
        }
      }
    });

  Template.game.helpers({
      players: function () {
        return Players.find({gameID: this._id});
      }
    });
}