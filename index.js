const express = require("express")
const graphqlHttp = require("express-graphql")
const schema = require("./schema")
const resolver = require("./resolvers")
const app = express();

app.get('/', (req, res) => {
    res.send("GraphQl is awsome")
})

const root = resolver;

app.use('/graphql', graphqlHttp({
    "schema": schema,
    "rootValue": root,
    "graphiql": true
}));

app.listen(8080, () => console.log("Application is running on port 8080"))