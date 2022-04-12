const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema1 = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
        unique: true
	},
	contact_no:{
		type: String,
		required: true
	},
    age: {
        type:Number,
        required: true
    },
    batch: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    wallet:{
        type:Number,
        required: true
    }

});

module.exports = User = mongoose.model("Buyer", UserSchema1);
