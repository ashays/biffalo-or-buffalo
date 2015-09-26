  Template.landing.events({
    'click #create_game': function () {
      event.preventDefault();
      var shortId = Math.random() * 1000
      shortId = Math.round(shortId)
      var id = Games.insert({
        createdAt: new Date(),
        newId: shortId 
      });

      Router.go('/game/' + id);
    },

    'click #join_game': function () {
      event.preventDefault();
      Router.go('/login/');
    }
  });