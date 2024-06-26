const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  Image:{
    type: String,
    required: true
  },
  title:{
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

module.exports = mongoose.model('notes', NotesSchema);