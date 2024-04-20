const mongoose = require('mongoose');
const { Schema } = mongoose;

const SmsSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  phoneNumber:{
    type: String,
    required: true
  },
  orderID:{
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('sms', SmsSchema);