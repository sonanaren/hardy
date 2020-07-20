const Article = require('../../models/blog/article');
const Bike = require('../../models/bike/Bike');

module.exports = {
  articles: async () => {
    try {
      const articlesFetched = await Article.find();
      return articlesFetched.map((article) => {
        return {
          ...article._doc,
          _id: article.id,
          createdAt: new Date(article._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },
  createArticle: async (args) => {
    try {
      const { title, body } = args.article;
      const article = new Article({
        title,
        body,
      });
      const newArticle = await article.save();
      console.log(newArticle);
      return { ...newArticle._doc, _id: newArticle.id };
    } catch (error) {
      throw error;
    }
  },
  bikes: async () => {
    try {
      const bikesData = await Bike.find();
      return bikesData.map((bike) => {
        return {
          ...bike._doc,
          _id: bike.id,
        };
      });
    } catch (error) {
      throw error;
    }
  },
  createBike: async (args) => {
    try {
      const {
        model_code,
        model_name,
        price_ex_shoowroom,
        description,
        cc,
        no_of_cylinders,
        max_power,
      } = args.bike;

      const data = {
        model_code: model_code,
        model_name: model_name,
        price_ex_shoowroom: price_ex_shoowroom,
        description: description,
        engine: {
          cc: cc,
          no_of_cylinders: no_of_cylinders,
          max_power: max_power,
        },
      };

      const bike = new Bike(data);
      const newBike = await bike.save();
      console.log(newBike);
      return { ...newBike._doc, _id: newBike.id };
    } catch (error) {
      throw error;
    }
  },
};
