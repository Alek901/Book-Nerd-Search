const typeDefs = `#graphql
    type User {
        id: ID!
        email: String!
        username: string!
        bookCount: Int!
        savedBooks: [Book]!
    }

    type Book