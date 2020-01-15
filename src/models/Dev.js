import mongoose from 'mongoose';
import PointSchema from '../Utils/PointSchema';

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

export default mongoose.model('Dev', DevSchema);
