var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 8080;
var passport = require('passport');
var flash    = require('connect-flash');
app.use(express.static('./css'));
require('./config/passport')(passport);
app.use(bodyParser.json());
const User = require('./scripts/seguelize');
app.post('/logo', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
});
app.get('/logo', (req, res) => {
    User.findAll({
        raw: true
    }).then(users => {
        //console.log(users);
        res.render('logo',{
            users

        });
    });

});
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./app/routes.js')(app, passport);
app.listen(port);
console.log('The magic happens on port ' + port);
