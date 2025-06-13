const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    tags: [String],
    stage: {
      type: String,
      enum: ['New', 'Contacted', 'Interested', 'Converted', 'Closed'],
      default: 'New',
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', ContactSchema);
