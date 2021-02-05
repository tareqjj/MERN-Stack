var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var newUser = require('./routes/newUser')
var newCompany = require('./routes/newCompany')
var newUserCompany = require('./routes/newUserCompany')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users/new', newUser );
app.use('/api/companies/new',newCompany);
app.use('/api/user/company', newUserCompany);

module.exports = app;
