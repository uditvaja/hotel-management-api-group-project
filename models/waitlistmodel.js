const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  partySize: {
    type: Number,
    required: false
  },
  joinTime: {
    type: Date,
    default: Date.now
  },
  estimatedWaitTime: {
    type: Number,
    required: true
  },
  notified: {
    type: Boolean,
    default: false
  }
});


const Waitlist = mongoose.model('Waitlist', waitlistSchema);

module.exports = Waitlist;
