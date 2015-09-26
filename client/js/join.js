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