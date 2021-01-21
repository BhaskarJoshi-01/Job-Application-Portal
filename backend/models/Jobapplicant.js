const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema


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


module.exports = Jobapplicant = mongoose.model("Jobapplicant", jobapplicant);
