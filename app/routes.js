module.exports = function(app, passport) {
	app.get('/', function(req, res) {
	    res.render('index.ejs');
	});
	app.get('/login', function(req, res) {
	    var fom="Login";
	    var post="login"
	res.render('login.ejs', { message: req.flash('loginMessage'),fom:fom,post: post });
	});
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile',
            failureRedirect : '/login',
            failureFlash : true
		}),
        function(req, res) {
            console.log("hello");
            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });
app.get('/signup', function(req, res) {
    var fom = "Signup";
    var post ="signup";
    res.render('signup.ejs', { message: req.flash('signupMessage'),fom: fom,post:post });
	});
app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile',
		failureRedirect : '/signup',
		failureFlash : true
	}));
	app.get('/profile', isLoggedIn, function(req, res) {
	    var activ = "active";
        var ver,ac,act;
        ver=ac=act="";
		res.render('profile.ejs', {
		    user : req.user,ac: ac,activ:activ,ver:ver,act:act	});
	});
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    app.get('/inbox',function(req,res){
        var ver = "active";
        var activ,ac,act;
        activ=ac=act="";
        res.render('inbox.ejs', {
            user : req.user,ac: ac,activ:activ,ver:ver,act:act
        });
    });
    const User = require('../scripts/seguelize');
    app.get('/sent',function(req,res){
        var ac = "active";
        var activ,ver,act;
        activ=ver=act="";
        User.findAll({
            raw: true
        }).then(users => {
        res.render('sent.ejs', {
            user : req.user,ac: ac,activ:activ,ver:ver,act:act,users
        });
        });
    });
    app.get('/trash',function(req,res){
        var act = "active";
        var activ,ver,ac;
        activ=ver=ac="";
        res.render('trash.ejs', {
            user : req.user,ac: ac,activ:activ,ver:ver,act:act
        });
    });
    app.get('/message',function(req,res){
        var ver = "active";
        var activ,ac,act;
        activ=ac=act="";
        res.render('message_form.ejs', {
            user : req.user,ac: ac,activ:activ,ver:ver,act:act
        });
    });
};
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
	return next();
	res.redirect('/');
}