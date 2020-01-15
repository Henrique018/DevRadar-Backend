import parseStringToArray from "../Utils/parseStringToArray";
import Dev from "../models/Dev";

export default {
  async index(req, res) {
   const { latitude, longitude, techs } = req.query;

   const techsArray = parseStringToArray(techs);

   const dev = await Dev.find({
     techs: {
       $in: techsArray
     },
     location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [latitude, longitude],
        },
        $maxDistance: 10000
      }
     },
   }); 

    res.json(dev);
  }
}