var express = require('express');
var db = require('../models');

var router = express.Router();

//Route methods go here
router.get('/', function(request, response) {
    db.Burger.findAll({})
        .then(function(data) {
            var handleBarsObj = {
                burgers: data
            };
            response.render("index", handleBarsObj);
        });
});

router.post("/", function(request, response) {
    db.Burger.create({ burger_name: request.body.burger_name })
        .then(function() {
            response.redirect("/");
        });
});

router.put("/:id", function(request, response) {
    var idVal = request.params.id;
    db.Burger.update({
            devoured: true
        }, {
            where: {
                id: idVal
            }
        })
        .then(function() {
            response.redirect("/");
        });
});

module.exports = router;
