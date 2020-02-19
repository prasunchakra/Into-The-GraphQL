const graphql = require("graphql");

const buildSchema = graphql.buildSchema;

const schema = buildSchema(`
type Friend{
    id:ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int 
    language: String
    email: String
    contact: [Contact]
}
type Contact {
    firstName: String
    secondName: String
}
enum Gender {
    MALE
    FEMALE
    OTHER
}
type Competitor{
    id: ID
    firstName: String
    lastName: String
    team: String
}
type Query{
    getfriend(id:ID!): Friend
    getallfriend:[Friend]
    getcompetitor: [Competitor]
}
input ContactInput{
    firstName: String
    secondName: String
}
input FriendInput{
    id:ID
    firstName: String!
    lastName: String
    gender: Gender 
    age: Int 
    language: String
    email: String
    contact: [ContactInput]
}
type Mutation{
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
}
`)

module.exports = schema