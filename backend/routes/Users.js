var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Jobdetails = require("../models/Jobdetails");
// const { default: Applicant } = require("../../frontend/src/components/Common/jobapplicant");


// GET request 
// Getting all the users
router.get("/", function (req, res) {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db

router.post("/register", (req, res) => {
    const email = req.body.email;
    User.findOne({ email }).then(user => {
        if (!user) {
            const newUser = new User({

                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                email: req.body.email,
                date: req.body.date,
                type: req.body.type,
                password: req.body.password
            });

            if (req.body.type == 'Recruiter') {
                newUser.contact = req.body.contact
            }
            else {
                newUser.education = req.body.education

            }
            if (req.body.type == 'JobApplicant') 
            {
                newUser.skill = req.body.skill
            }
            else 
            {
                newUser.bio = req.body.bio
            }
            newUser.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
        else {
            return res.status(404).json({
                error: "You already have  an account :/ ",
            });
        }
    });
});


// POST request 
// Login
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user email exists
        if (!user) {
            return res.status(404).json({
                error: "Email not found",
            });
        }

        else {
            if (user.password == password) {
                res.send("Email Found");
                return user;
            }
            else {

                return res.status(404).json({
                    error: "Password is incorrect !",
                });
            }
        }
    });
});

module.exports = router;

