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
	redirectURL:{
		type: String,
		required: true
	},
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
