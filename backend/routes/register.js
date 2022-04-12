var express = require("express");
var router = express.Router();

// Load Ven model
const Ven = require("../models/Vendor");
const Buy = require("../models/Buyer");
// router.get("/", function(req, res) {
//     Buy.find(function(err, users) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(users);
// 		}
// 	})
// });
// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 

router.post("/buyer", (req, res) => {

    email = req.body.email;
    const newBuy = new Buy({
        name: req.body.name,
        email: req.body.email,
        contact_no: req.body.contact_no,
        age: req.body.age,
        batch: req.body.batch,
        password: req.body.password,
        wallet: req.body.wallet
    });
    Ven.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({
                error: "Email already exists"
            });


        }
        else {
            Buy.findOne({ email }).then(user => {
                if (user) {
                    return res.status(400).json({
                        error: "Email already exists"
                    });
                }
                else {
                    newBuy.save()
                        .then(user => {
                            res.status(200).json(user);
                        })
                        .catch(err => {
                            res.status(400).send(err);
                        });
                }

            });

        }
    });


});
router.post("/vendor", (req, res) => {
    email = req.body.email;
    const newVen = new Ven({
        manager_name: req.body.manager_name,
        shop_name: req.body.shop_name,
        email: req.body.email,
        contact_no: req.body.contact_no,
        open_time: req.body.open_time,
        close_time: req.body.close_time,
        password: req.body.password
        //re_enter_password: req.body.re_enter_password
    });
    Ven.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({
                error: "Email already exists"
            });


        }
        else {
            Buy.findOne({ email }).then(user => {
                if (user) {
                    return res.status(400).json({
                        error: "Email already exists"
                    });
                }
                else {
                    newVen.save()
                        .then(user => {
                            res.status(200).json(user);
                        })
                        .catch(err => {
                            res.status(400).send(err);
                        });
                }

            });

        }
    });
});


module.exports = router;

