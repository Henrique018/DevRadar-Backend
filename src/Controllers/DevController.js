import Dev from '../models/Dev';
import api from '../services/api';
import parseStringToArray from '../Utils/parseStringToArray';

export default {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await api.get(`users/${github_username}`);

      
      const { name, avatar_url, bio } = response.data;

      const techsArray = parseStringToArray(techs);

      const location = {
        type: 'Point',
        coordinates: [latitude, longitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  },
};
  