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
type Query{
    getfriend(id:ID!): Friend
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
}
`)

module.exports = schema