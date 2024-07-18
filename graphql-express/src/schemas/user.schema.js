import { buildSchema } from 'graphql'

export const userSchema = buildSchema(`
type User {
  _id: String!
  name: String!
  email: String!
}

input UserInput {
  name: String!
  email: String!
}

type Query {
  getUser(_id: String!): User
  getUsers: [User]
}

type Mutation {
  createUser(input: UserInput) : User
  updateUser(_id: String!, input: UserInput): User
  deleteUser(_id: String!) : User
}
`)