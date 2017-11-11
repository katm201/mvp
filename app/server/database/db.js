import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/fetcher');

const voterSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    checkRequired: true
  },
  sessionId: {
    type: String,
    checkRequired: false
  },
  address: {
    type: String,
    lowercase: true,
    checkRequired: true
  } //,
  // voterInfo: {
  //   type: Mixed
  // }
});

var db = mongoose.connection;

const Voter = mongoose.model('Voter', voterSchema);

export default Voter;
