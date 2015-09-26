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
}