const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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




module.exports = Recruiter = mongoose.model("Recruiter", recruiter);
