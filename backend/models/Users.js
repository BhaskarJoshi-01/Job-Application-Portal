const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	FirstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	date: {
		type: Date,
		required: false
	},
	type: {
		type: String,
		required: true
	},
	password:
	{
		type: String,
		required: true
	}
});
const recruiter = new Schema({

	bio: {
		type: String,
		maxlength: 250,
		required: true,

	},
	contact: {
		type: Number,
		required: true,
		maxlength: 10
	}
});

const jobapplicant = new Schema({
	education: {
		type: Array,
		required: true
	},
	skill: {
		type: Array,
		required: true
	}

});

const jobdetails = new Schema({
	title: {
		type: String,
		required: true
	},
	recruiterid: {
		type: String,
		unique: true,
		required: true
	},
	recruitername: {
		type: String,
		required: true
	},
	maxapplicant: {
		type: Number,
		required: true
	},
	positions: {
		type: Number,
		required: true
	},
	postingdate: {
		type: Date, required: true
	},
	deadlinedate: {
		type: Date, required: true

	},
	requiredskills: {
		type: Array, required: true
	},
	typeofjob: {
		type:String, required:true
	},
	duration: {
		type:Number,
		required:true,
		min:0,
		max:6,
		default:0
	},
	salary: {
		type:Number,
		required:true
	},
	rating: {
		type:Number,
		required:false,
		max:5,
		min :0,
		default:0
	},
});


module.exports = User = mongoose.model("Users", UserSchema);
// module.exports = 