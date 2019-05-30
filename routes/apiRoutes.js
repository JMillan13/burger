// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var burgers = require("./burgers");
// var tableData = require("../data/tableData");

module.exports = function(app) {
  app.get("/api/burgers", function(req, res) {
    return res.json(burgers);
  });

  // Create newburgers - takes in JSON input
  app.post("/api/burgers", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newBurger = req.body;

    var bestDiff =  999;

    var bestMatch = {};


    burgers.forEach(function(currentBurger, i){

      var currentDiff = 0;

      currentBurger.scores.forEach(function(score, index){

          currentDiff += Math.abs(score - newBurger.scores[index]);

      });

      if (currentDiff < bestDiff){
      	bestDiff = currentDiff;
        bestMatch = currentBurger;
      }


    });

    burgers.push(newBurger);

    res.json(bestMatch);
  });
}
