var friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/friends/", function(req, res) {

  	
  	var comparisonTotalsArray = [];

  	for(var i = 0; i < friends.length; i++) {
  		var comparisonDelta = 0;
  		for(var h = 0; h < 10; h++) {
  			comparisonDelta += Math.abs(friends[i].scores[h] - req.body.scores[h]);
  		}
  		comparisonTotalsArray.push(comparisonDelta);
  	}

  	var index = 0;
  	var value = comparisonTotalsArray[0];
  	for (var i = 0; i < comparisonTotalsArray.length; i++) {
  	  if (comparisonTotalsArray[i] < value) {
  	    index = i;
        value = comparisonTotalsArray[i];
  	  }
  	}
  	match = friends[index];
    friends.push(req.body);
  	res.json(match);
  });

};