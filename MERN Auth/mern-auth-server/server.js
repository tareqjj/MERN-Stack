const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./server/routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
// Connect to MongoDB
require('./server/config/mongoose.config');

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./server/config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = 8000
app.listen(port, () => console.log(`Server up and running on port ${port} !`));