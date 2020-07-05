const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin request (client and server running on different ports, this connects them)
app.use(cors());

//connect to mlab database
mongoose.connect(
  "mongodb+srv://test123:test123@cluster0.njmfv.mongodb.net/gql-ninja?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to mongodb database");
});

// execute this function everytime we go to localhost:4000/graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // client / playground for testing graphql
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
