import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
	UUId: {
        type: String,
        required: true,
        unique: true
    },
    aadhar: {
        type: String,
        required: true
    },
    birthCertificate: {
        type: String,
        required: true
    },
    XthCertificate: {
        type: String,
        required: true
    },
    XIIthCertificate: {
        type: String,
        required: true
    }
});

const Transaction = mongoose.model('Company', transactionSchema);

module.exports = Transaction;
