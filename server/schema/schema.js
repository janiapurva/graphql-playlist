const graphql = require("graphql");
// Defining object types
// grabing property from graphql
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
//dummy data
let books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        // code to get data from db/other source
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
