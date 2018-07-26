// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const Sequelize = require("sequelize")


module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/admin");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (user) {
      req.login(user, (err) => {
        if (err) throw err;
        res.json('/admin');
      });

    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });



  app.get("/api/allWines", function (req, res) {
    console.log("We hit the route SERVER.js file!!");
    db.foodpairings.findAll().then((dbResponse) => {

      console.log(dbResponse)
      res.json(dbResponse);
    });
  });


  app.get("/api/allWines/zip", function (req, res) {
    db.foodpairings.findAll({
      attributes: ['zip', [Sequelize.fn('COUNT', Sequelize.col('zip')), 'zipCount']],
      group: ['zip'],
      raw: true
    }).then(response => {
      res.json(response)
    })

  })

  app.get("/api/allWines/age", function (req, res) {
    db.foodpairings.findAll({
      attributes: ['age', [Sequelize.fn('COUNT', Sequelize.col('age')), 'ageCount']],
      group: ['age'],
      raw: true
    }).then(response => {
      res.json(response)
    })
  })

  app.get("/api/food", function (req, res) {
    db.foodpairings.findAll({
      attributes: ['food', [Sequelize.fn('COUNT', Sequelize.col('food')), 'foodCount']],
      group: ['food'],
      raw: true
    }).then(response => {
      res.json(response)
    })
  })

  app.get("/api/allWines/firstmatch", function (req, res) {
    db.foodpairings.findAll({
      attributes: ['first_match', [Sequelize.fn('COUNT', Sequelize.col('first_match')), 'first_matchCount']],
      group: ['first_match'],
      raw: true
    }).then(response => {
      res.json(response)
    })
  })


  app.get("/api/pairingRecord", function (req, res) {
    console.log("pairingRecord ", db);
    db.foodpairings.findAll({
      where: {
        age: res.params.age
      }
    }).then(age => res.json(age))
  });

  app.get("/api/allWines", (req, res) => {
    console.log("We hit the route SERVER.js file!!");
    db.foodpairings.findAll().then((dbResponse) => {

      // console.log(dbResponse)
      res.json({
        zip: res.body.zip,
        age: res.body.age
      });
    });
  });


  app.post("/api/allWines", function (req, res) {
    console.log("Hit it", req.body);
    var saveFormat = {
      age: req.body.age,
      zip: req.body.zip,
      food: req.body.food,
      paired: true,
      first_match: req.body.pairingInfo.productMatches[0].title,
      second_match: req.body.pairingInfo.productMatches[1],
      description: req.body.pairingInfo.pairingText
    }
    console.log("Damn Gurl", saveFormat)
    db.foodpairings.create(saveFormat).then(function (dbResponse) {

      // console.log(dbResponse)
    });
    // res.send("all good");
  })

  app.post('/api/messages/', function (req, res) {
    // console.log("i'm a log");
    // console.log(db.Messages, "this is db");
    // console.log(req.body)
    // res.send('ok');
    // edited burger create to add in a burger_name
    db.Messages.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      })
      // pass the result of our call
      .then(function (newMessage) {
        // log the result to our terminal/bash window
        console.log(newMessage);
        // redirect
        res.send(newMessage);
        // alert("Message Sent!");
        // window.location.reload();
      })
      .catch(function (err) {
        console.log(err);
      })

    // //working on foodpairing part here://
    // pairInfo("../foodpairing.js", function(data){});
  });

  app.get('/api/messagesall', function (req, res) {
    console.log("all the things")
    db.Messages.findAll().then(function (thingdb) {
      res.json(thingdb)
    })
  })

};