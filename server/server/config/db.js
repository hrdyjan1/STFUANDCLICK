import mongoose from 'mongoose';

const URL = 'mongodb://root:root123@ds115613.mlab.com:15613/stfuandclick';

export default () => {
  mongoose.connect(URL, { useMongoClient: true });
  mongoose.connection
    .once('open', () => console.log('DB is working'))
    .on('error', err => console.error(err));
};
