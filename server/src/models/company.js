import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	APISecret:{
		type: String,
		required: true
	},
	APIId:{
		type: String,
		required: true,
		unique: true
	},
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
