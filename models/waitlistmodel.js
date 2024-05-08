import mongoose from "mongoose";


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
    type: String
  },
  estimatedWaitTime: {
    type: String,
    required: true
  },
  notified: {
    type: Boolean,
    default: false
  }
});


export const Waitlist = mongoose.model('Waitlist', waitlistSchema);
