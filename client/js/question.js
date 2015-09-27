  Template.game.helpers({
      randoNum: function() {
      	var randoNum = Math.round((Math.random() * 3));
      	var randoNum1 = false;
      	var randoNum2 = false;
      	var randoNum3 = false;
      	var randoNum4 = false;
      	if (randoNum == 0) {
      		randoNum1 = true;
      	} else if (randoNum == 1) {
      		randoNum2 = true;
      	} else if (randoNum == 2) {
      		randoNum3 = true;
      	} else {
      		randoNum4 = true;
      	}
      }
    });
