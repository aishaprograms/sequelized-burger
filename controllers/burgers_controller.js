var express = require('express');
var burger = require('../models/burgers.js');

var router = express.Router();

//Route methods go here
router.get('/', function(request, response) {
    burger.all(function(data) {
        var handleBarsObj = {
            burgers: data
        };
        response.render("index", handleBarsObj);
    });
});

router.post("/", function(request, response) {
    burger.create(request.body.burger_name,
        function() {
            response.redirect("/");
        });
});

router.put("/:id", function(request, response) {
    var idVal = request.params.id;
    burger.devour(idVal, function() {
        response.redirect("/");
    });
});

module.exports = router;
