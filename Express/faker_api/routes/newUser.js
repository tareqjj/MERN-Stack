var express = require('express');
var router = express.Router();

const User = require("../Faker API/User");

router.get('/', function(req, res, next) {
    res.send(new User());
});

module.exports = router;
