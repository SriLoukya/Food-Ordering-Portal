const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema1 = new Schema({
    food_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        // required: true
        default: "0"
    },
    food_type: {
        type: String,
        // required: true
    },
    add_ons: {
        type: String,
        required: true
    },

    vendor_email: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    shop_name: {
        type: String,
        //required: true
    },
    vendor_name: {
        type: String,
        //required: true
    },
    buyer_email: {
        type: String,
        //required: true
    },
    status: {
        type: String,
        //required: true
    },
    time: {
        type: String,
        //required: true
    }
});

module.exports = BuyItem = mongoose.model("BuyItems", UserSchema1);
