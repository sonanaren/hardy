const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Bike {
        _id: ID!
        model_code: String!
        model_name: String!
        price_ex_shoowroom: String!
        description: String!
    }

    type Query {
        bikes: [Bike!]
    }

    schema {
        query: Query
    }
`);
