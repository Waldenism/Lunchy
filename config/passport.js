var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/users');
var Group = require('../models/group');
var bCrypt = require('bcrypt-nodejs');
var Users = require('./users');

module.exports = function(passport){

    //PASSPORT SIGNUP
    passport.use('signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            groupField: 'group',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {


            const { group, admin, first, last } = req.body;

            // find a user in Mongo with provided username
            User.findOne({ 'username' :  username }, function(err, user) {
                // In case of any error, return using the done method
                if (err){
                    console.log('Error in SignUp: '+err);
                    return done(err);
                }

                // already exists
                if (user) {
                    console.log('User already exists with username: '+ username);
                    return done(null, false);

                } else {
                    // if there is no user with that email, create the user
                    var newUser = new User();

                    // set the user's local credentials
                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.name.first = first;
                    newUser.name.last = last;
                    newUser.group.name = group;
                    newUser.group.admin = admin;

                    // save the user
                    newUser.save(function(err, res) {
                        if (err){
                            console.log('Error in Saving user: '+err);
                            throw err;
                        }

                        console.log('User Registration succesful');
                    }).then(() => {

                        Group.findOne({ 'groupname': group }, function(err, grp) {
                            if (err) {
                                console.log('Error in Find Group: '+err);
                                return done(err);
                            }

                            if (grp) {
                                Users.addGroupId(newUser._id, grp._id)
                                console.log('User Added to Group: ' +group);
                                return done(null, newUser);

                            } else {
                                var newGroup = new Group();

                                newGroup.groupname = group;
                                newGroup.groupbalance = 0;
                                newGroup.paid = true;
                                newGroup.adminid = newUser._id;

                                newGroup.save(function(err, res) {
                                    if (err) {
                                        console.log('Error in Saving group: ' +err);
                                        throw err;
                                    }

                                    console.log('Group Registration Successful');
                                    console.log('---------------------------------');
                                    console.log(newGroup);
                                }).then(() => {

                                    Users.addGroupId(newUser._id, newGroup._id)
                                    return done(null, newUser);
                                })
                            }
                        })
                    });
                }
            });
        })
    );

    // Generates hash using bCrypt
    function createHash(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });


    //PASSPORT LOGIN
    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },

        function(req, username, password, done) {
            // check in mongo if a user with username exists or not
            User.findOne({ 'username' :  username },
                function(err, user) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);

                    // Username does not exist, log the error and redirect back
                    if (!user){
                        console.log('*********************************');
                        console.log('User Not Found with username '+username);
                        console.log('*********************************');

                        return done(null, false);
                    }

                    // User exists but wrong password, log the error
                    if (!isValidPassword(user, password)){
                        console.log('*********************************');
                        console.log('Invalid Password');
                        console.log('*********************************');

                        return done(null, false); // redirect back to login page
                    }

                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, user);
                }
            );

        })
    );


    function isValidPassword(user, password) {
        return bCrypt.compareSync(password, user.password);
    };
}
