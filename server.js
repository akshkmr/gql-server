var express = require("express");
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// Graphql Schema

var schema = buildSchema(`
    type Query {
        message: String 
    }
`);

// Root resolver
var root = {
  message: () => "Hello World!!"
};

// Create an express server and a graphql endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log("Express graphql server in now running port: 4000")
);
