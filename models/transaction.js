const { default: mongoose } = require("mongoose");

const transactionSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    amount: Number,
    date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction