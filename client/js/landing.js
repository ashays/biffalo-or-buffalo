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