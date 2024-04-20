const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  Name:{
    type: String,
    required: true
  },
  Email:{
    type: String,
    required: true,
  },
  Address:{
    type: String,
    required: true
  },
  PhnNumber:{
    type: Number,
    required: true
  },
  Pincode:{
    type: Number,
    required: true
  },
  State:{
    type: String,
    required: true
  },
  District:{
    type: String,
    required: true
  },
  Image:{
    type: String,
    required: true
  },
  Title:{
    type: String,
    required: true
  },
  Total:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('payment', PaymentSchema);