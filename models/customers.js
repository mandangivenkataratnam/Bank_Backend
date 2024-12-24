const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  phone: String,
  gender: String,
  accountType: String,
  branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
  password: String,
  availableBalance: { type: Number, default: 0 },
  role: { type: String, enum: ['customer', 'employee'], required: true },  // New role field
});
customerSchema.pre('save', async function (next) {
  const customer = this;

  if (customer.isModified('password')) {
    const salt = await bcrypt.genSalt(10);  // Generate a salt with 10 rounds
    customer.password = await bcrypt.hash(customer.password, salt);  // Hash the password with the salt
  }

  next();
});
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
