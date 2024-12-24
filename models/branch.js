const { default: mongoose } = require("mongoose");

const branchSchema = new mongoose.Schema({
    branchName: String,
    ifscCode: String,
    address: String,
    branchManager: String,
    contactDetails: String,
  });
  
  const Branch = mongoose.model('Branch', branchSchema);

  module.exports = Branch;
  