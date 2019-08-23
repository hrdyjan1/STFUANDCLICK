import mongoose, { Schema } from 'mongoose';

const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamClicks: {
    type: Number,
    required: false,
    default: 0,
  },
});

export default mongoose.model('Team', TeamSchema);
