const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Bike {
        _id: ID!
        model_code: String!
        model_name: String!
        price_ex_shoowroom: String!
        description: String
        engine: BikeEngine
        images: [Image]
        fuel_consumptions: BikeFuel
    }

    type BikeEngine {
        cc: String!
        no_of_cylinders: String!
        max_power: String!
    }

    type BikeFuel {
        tank_capacity: String!,
        reserve_fuel_capacity: String!,
        mileage: String!,
        riding_range: String!,
    }

    type Image {
        image: String!
    }

    input BikeInput {
        model_code: String!
        model_name: String!
        price_ex_shoowroom: String!
        cc: String!
        no_of_cylinders: String!
        max_power: String!
    }

    type Article {
        _id: ID!
        title: String!
        body: String!
        createdAt: String!
    }

    input ArticleInput {
        title: String!,
        body: String!
    }

    type Query {
        articles: [Article!]
        bikes: [Bike!]
    }

    type Mutation {
        createArticle(article:ArticleInput): Article
        createBike(bike:BikeInput): Bike
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);
