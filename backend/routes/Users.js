var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Jobdetails = require("../models/Jobdetails");


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
    console.log(req.body);
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
            console.log(user);
            if (req.body.type == 'Recruiter') {
                newUser.contact = req.body.contact
            }
            else {
                newUser.education = req.body.education

            }
            if (req.body.type == 'JobApplicant') {
                newUser.skill = req.body.skill
            }
            else {
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

router.post("/jobcreating", (req, res) => {
    const title = req.body.title;
    console.log(req.body);
    console.log("hi");
    Jobdetails.findOne({ title }).then(job => {
        if (!job) {
            const newJobdetail = new Jobdetails({

                title: req.body.title,
                recruiterid: req.body.recruiterid,
                recruitername: req.body.recruitername,
                maxapplicant: req.body.maxapplicant,
                positions: req.body.positions,
                postingdate: req.body.postingdate,
                deadlinedate: req.body.deadlinedate,
                requiredskills: req.body.requiredskills,
                typeofjob: req.body.typeofjob,
                duration: req.body.duration,
                salary: req.body.salary,
                rating: req.body.rating
            });

            newJobdetail.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    console.log(err);
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



router.post("/apply/:title", function (req, res) {
    const title = req.params.title;
    Jobdetails.findOne({ title }).then(job => {
        if (!job) {
            return res.status(404).json({
                error: "Cannot apply, please select a new job!",
            });
        }
        else {
            User.findOne({ email: req.body.applicant_id }).then(user => {
                if(user.count>=10){
                    return res.status(401).send("You have applied for  10 jobs! ");
                }
                job.application = [...job.application, req.body];

                job.save()
                    .then(job => {
                        res.status(200).json(job);

                        user.count = user.count + 1;
                    user.save().then().catch(console.log);
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).send(err);
                    });
            });
            // console.log(req.body);

        }
    })
        .catch(e => {
            res.status(400).send(e);
            console.log(e);
        });
});


router.get("/job/:userid", function (req, res) {
    Jobdetails.find(function (err, jobs) {

        if (err) {
            console.log(err);
        } else {
            // let jobs=data;
            for (const job of jobs) {
                job.applied = false;
                // console.log(job.application);
                for (const app of job.application) {

                    if (app && app.applicant_id == req.params.userid) {
                        job.applied = true;
                        break;
                    }
                }
                console.log(job);
            }
            res.json(jobs);
        }
    })
});

router.post("/profileedit", (req, res) => {
    const email = req.body.email;
    User.findOne({ email }).then(user => {
        if (user) {
            for (const key in req.body) {
                user[key] = req.body[key];
            }
            console.log(user);
            user.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
        else {
            return res.status(404).json({
                error: "You don't have  an account :/ ",
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
                // res.send("Email Found");
                return res.json(user.type);
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

