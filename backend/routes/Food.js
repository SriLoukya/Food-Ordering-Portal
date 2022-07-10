var express = require("express");
var router = express.Router();

// Load User model
const Food = require("../models/Food");
const BuyItem = require("../models/Buy_Items");
const Fav = require("../models/Buy_fav");
// GET request 
// Getting all the users
router.post("/", function (req, res) {
	let vendor_email = req.body.vendor_email;
	Food.find({ vendor_email }, function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			res.json(foods);
		}
	})
});
router.get("/all", function (req, res) {
	Food.find(function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			res.json(foods);
		}
	})
})
router.post("/add", function (req, res) {
	let vendor_email = req.body.vendor_email;
	let add_ons = req.body.add_ons;
	let food_name = req.body.food_name;

	const newFood = new Food({
		food_name: req.body.food_name,
		price: req.body.price,
		//rating: req.body.rating,
		food_type: req.body.food_type,
		add_ons: req.body.add_ons,
		vendor_email: req.body.vendor_email,
		quantity: req.body.quantity,
		vendor_name: req.body.vendor_name,
		shop_name: req.body.shop_name,
	});

	Food.findOne({ food_name, vendor_email, add_ons }).then(food => {
		if (food) {
			return res.status(400).json({
				error: "Food already exists"
			});
		}
		else {
			newFood.save()
				.then(food => {
					res.status(200).json(food);
				})
				.catch(err => {
					res.status(400).send(err);
				});
		}

	});
});
router.post("/delete", (req, res) => {
	id = req.body.id;
	Food.findByIdAndDelete(id, function (err, docs) {
		if (err) {
			console.log(err)
		}
		else {
			res.send("Deleted ");
		}
	});
});
router.post("/buyID", function (req, res) {
	let id = req.body.id;
	Food.findById(id, function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			res.json(foods);
		}
	})
});

router.post("/buyerorder", function (req, res) {
	new BuyItem({
		food_name: req.body.food_name,
		price: req.body.price,
		rating: req.body.rating,
		food_type: req.body.food_type,
		add_ons: req.body.add_ons,
		vendor_email: req.body.vendor_email,
		quantity: req.body.quantity,
		vendor_name: req.body.vendor_name,
		shop_name: req.body.shop_name,
		buyer_email: req.body.buyer_email,
		status: req.body.status,
		time: req.body.time,

	}).save()
		.then(buyItem => {
			res.status(200).json(buyItem);
		})
		.catch(err => {
			res.status(400).send(err);
		});
});

router.post("/vendor_orders", function (req, res) {
	let vendor_email = req.body.vendor_email;
	BuyItem.find({ vendor_email }, function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			res.json(foods);
		}
	})

});

router.post("/change_status_vendor", (req, res) => {
	let id = req.body.id;
	BuyItem.findById(id, function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			foods.status = req.body.status;
			foods.save();
			res.json(foods);
		}
	})
});

router.post("/buyer_orders", function (req, res) {
	let buyer_email = req.body.buyer_email;
	BuyItem.find({ buyer_email }, function (err, foods) {
		if (err) {
			console.log(err);
		} else {
			res.json(foods);
		}
	})
});

router.post("/buyerfav", function (req, res) {
	const newFav = new Fav({
		food_name: req.body.food_name,
		price: req.body.price,
		rating: req.body.rating,
		food_type: req.body.food_type,
		add_ons: req.body.add_ons,
		vendor_email: req.body.vendor_email,
		quantity: req.body.quantity,
		vendor_name: req.body.vendor_name,
		buyer_email: req.body.buyer_email,
		shop_name: req.body.shop_name,

	});
	Fav.findOne({ food_name: req.body.food_name, buyer_email: req.body.buyer_email, add_ons: req.body.add_ons, vendor_email: req.body.vendor_email }).then(fav => {
		if (fav) {
			return res.status(400).json({
				error: "Food already exists"
			});
		}
		else {

			newFav.save()
				.then(fav => {
					res.status(200).json(fav);
				})
				.catch(err => {
					res.status(400).send(err);
				});
		}
	});
});
	router.post("/buyfavget", function (req, res) {
		let buyer_email = req.body.buyer_email;
		//console.log(buyer_email);
		Fav.find({ buyer_email }, function (err, foods) {
			if (err) {
				console.log(err);
			} else {
				res.json(foods);
			}
		})
	});









	module.exports = router;