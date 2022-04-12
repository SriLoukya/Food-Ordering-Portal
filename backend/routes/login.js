var express = require("express");
var router = express.Router();


const Ven = require("../models/Vendor");
const Buy = require("../models/Buyer");

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    Ven.findOne({ email: req.body.email }).then(user => {
        if (user) {
            // check if password matches
            if (user.password === req.body.password) {
                res.send({ user: user, message: "vendor" });
            }
            else {
                res.send({ message: "Wrong password" });
            }
        }
        else {
            Buy.findOne({ email: req.body.email }).then(user => {
                if (user) {
                    if (user.password === req.body.password) {
                        res.send({ user: user, message: "buyer" });
                    }
                    else {
                        res.send({ message: "Wrong password" });
                    }
                }
                else {
                    res.send({ message: "User not registered" })
                }
            });
        }

    });
});

router.post("/buyer", (req, res) => {
    email = req.body.email;

    Buy.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({
                error: "Email doesn't exists"
            });
        }
        else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.contact_no = req.body.contact_no;
            user.age = req.body.age;
            user.batch = req.body.batch;
            user.password = req.body.password;
            user.wallet = req.body.wallet;
            user.save()
            res.json(user);
        }

    });
});
router.post("/buyer_details", (req, res) => {
    let email = req.body.email;
    Buy.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({
                error: "Email doesn't exists"
            });
        }
        else {

            res.json(user);
        }

    });
});
router.post("/vendor", (req, res) => {
    email = req.body.email;
    Ven.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({
                error: "Email doesn't exists"
            });
        }
        else {
            user.manager_name = req.body.manager_name;
            user.shop_name = req.body.shop_name;
            user.email = req.body.email;
            user.contact_no = req.body.contact_no;
            user.open_time = req.body.open_time;
            user.close_time = req.body.close_time;
            user.password = req.body.password;

            user.save()
            res.json(user);

        }
    });
});

router.post("/vendor_details",(req,res)=>{
    let email = req.body.email;
    Ven.findOne({email}).then(user=>{
        if(!user){
            return res.status(400).json({
                error:"Email doesn't exists"
            });
        }
        else{
            res.json(user);
        }
    });
});

module.exports = router;