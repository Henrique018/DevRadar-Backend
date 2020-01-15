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

  async update(req, res) {
    const { username } = req.params;
    const { name, bio, techs, latitude, longitude } = req.body;

    const dev = await Dev.findOne({ github_username: username });

    if (!dev) {
      return res.status(404).json({ error: 'Dev not found' });
    }
    const techsArray = parseStringToArray(techs);

    const location = {
      type: 'Point',
      coordinates: [latitude, longitude],
    };

    await dev.updateOne({
      name,
      bio,
      techs: techsArray,
      location,
    });

    await dev.save();

    return res.json(dev);
  },

  async destroy(req, res) {

    const { username } = req.params;

    await Dev.deleteOne({ github_username: username });


    return res.json('Dev deleted successfully');
  },
};
 