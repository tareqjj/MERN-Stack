var express = require('express');
var router = express.Router();

const User = require("../Faker API/User");
const Company = require("../Faker API/Company");

router.get('/', function(req, res, next) {
    res.json([new User(), new Company()]);
});

module.exports = router;
