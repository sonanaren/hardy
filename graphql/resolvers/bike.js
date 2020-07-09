const Bike = require('../../models/bike/Bike');

module.exports = {
  articles: async () => {
    try {
      const bikes = await Bike.find();
      return bikes.map((bike) => {
        return {
          ...bike._doc,
          _id: bike.id,
          createdAt: new Date(bike._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },
};
