    Template.player.helpers({
        randoNum: function() {
        var randoNum = Math.round(Math.random()); 
        if (randoNum == 0) {
          randoNum = false;
          return randoNum;
        } else {
          randoNum = true;
          return randoNum;
        }
      },

        randoNum2: function() {
        var randoNum2 = Math.round(Math.random()); 
        if (randoNum2 == 0) {
          randoNum2 = false;
          return randoNum2;
        } else {
          randoNum2 = true;
          return randoNum2;
        }
      }
    });
