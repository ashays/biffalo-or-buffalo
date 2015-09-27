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
        var gameToJoin = Number(event.target.gameid.value);
        if (Games.findOne({newId: gameToJoin})) {
          if (Players.findOne({pID: Meteor.user()._id})) {
            var id = Players.findOne({pID: Meteor.user()._id})._id;
            Players.update(id, {
                    $set: {gameID: gameToJoin, score : 0}
                  });
          } else {
            Players.insert({
                    pID: Meteor.user()._id,
                    gameID: gameToJoin,
                    name: Meteor.user().profile.name,
                    createdAt: new Date(), // current time
                    score : 0,
                    profilePic: "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"
                  });            
          }
          Router.go('/joined/' + gameToJoin);
        } else {
          console.log("error");
        }
      }
    });

  Template.join.helpers({
      profilePic: function() {
        return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
      }
  });