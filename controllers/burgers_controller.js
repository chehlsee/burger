var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerModel = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgerModel.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(data);
    console.log(hbsObject);
    res.render("index", hbsObject);
    // res.render("word");
  });
});

// when someone makes a post request to that address do this function
router.post("/api/burgers", function(req, res) {
  burgerModel.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgerModel.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// burgers is the table name
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgerModel.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
