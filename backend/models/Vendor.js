const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	manager_name: {
		type: String,
		required: true
	},
    shop_name: {
		type: String,
		required: true,
        unique: true
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
    open_time: {
        type:String,
        required: true
    },
    close_time: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }

});

module.exports = User = mongoose.model("Vendor", UserSchema);
