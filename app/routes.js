
module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});
	app.get('/login', function(req, res) {
	    var fom="Login"
	res.render('login.ejs', { message: req.flash('loginMessage'),fom:fom });
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
		res.render('signup.ejs', { message: req.flash('signupMessage'),fom: fom });
	});


app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile',
		failureRedirect : '/signup',
		failureFlash : true
	}));

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

    app.get('/inbox',function(req,res){
        res.render('inbox.ejs', {
            user : req.user
        });
    });



    app.get('/sent',function(req,res){
        res.render('sent.ejs', {
            user : req.user
        });
    });
    app.get('/trash',function(req,res){
        res.render('trash.ejs', {
            user : req.user
        });
    });

};


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
	return next();
	res.redirect('/');
}